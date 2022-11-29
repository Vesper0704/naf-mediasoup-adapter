AFRAME.registerComponent('get-stats', {
    schema: {
        enable: { default: true },
        interval: { default: 1000 },
    },
    /**
     * local/world ? 
     * https://discourse.threejs.org/t/what-exactly-does-object3d-getworldposition-returns/13243
     * 
     * camera的position/lookAt/up
     * https://blog.csdn.net/qq_39503511/article/details/111192952
     */
    init() {
        let _this = this

        // this._position = new THREE.Vector3()
        // `rotation` is a three.js Euler using radians. `quaternion` also available.
        this.worldDirection = new THREE.Vector3()

        // Returns a quaternion representing the rotation of the object in world space.
        this.worldQuaternion = new THREE.Quaternion()

        this.worldPosition = new THREE.Vector3()
        // this._matarial = null


        // https://threejs.org/docs/#api/en/cameras/Camera
        this.cameraWorldDirection = new THREE.Vector3()

        this.camera = this.el.getAttribute('camera') || this.el.sceneEl.camera
        this._object3D = this.el.object3D
        this.webxrManager = this.el.sceneEl.renderer.xr

        if (this.data.enable) {
            this._timer = setInterval(() => {
                // this._position = this._object3D.position
                // this._rotation = this._object3D.rotation

                // https://threejs.org/docs/#api/en/core/Object3D.getWorldQuaternion
                this._object3D.getWorldQuaternion(this.worldQuaternion)
                this._object3D.getWorldDirection(this.worldDirection)
                this._object3D.getWorldPosition(this.worldPosition)


                this.el.sceneEl.camera ? this.el.sceneEl.camera.getWorldDirection(this.cameraWorldDirection) : null;

                const isVrMode = this.el.sceneEl.is('vr-mode')

                const { worldDirection, worldPosition, worldQuaternion, cameraWorldDirection } = this
                let statistics = {
                    isVrMode,
                    ...this._object3D,
                    camera: this.camera,

                    // Returns a vector representing the direction of object's positive z-axis in world space.
                    // Returns a Vector3 representing the world space direction in which the camera is looking.
                    // camera朝向z轴的负半轴
                    worldDirection,

                    worldQuaternion,

                    worldPosition,

                    material: this.el.material || this.el.getAttribute('material'),

                    cameraWorldDirection
                }

                // console.log(statistics)

                // vr-mode
                // getCamera:this.webxrManager.getCamera(),
                // getCameraPose:this.webxrManager.getCameraPose(),
                // getController: this.webxrManager.getController(),
                // getHand: this.webxrManager.getHand()

                if (this.webxrManager.enabled) {
                    const cameraPose = this.webxrManager.getCameraPose()
                    // console.log(cameraPose); // instanceof XRViewerPose
                    const { transform, views } = cameraPose
                    // orientation, position 都是四元数
                    const { orientation, position } = transform
                    const [leftEyeView, rightEyeView] = views
                    // console.log({ transform, views });
                    statistics.VRorientation = orientation
                    statistics.VRposition = position
                }


                document.body.dispatchEvent(new CustomEvent('update-stats', {
                    detail: statistics
                }))
            }, +this.data.interval)
        }

        document.body.addEventListener('disable-stats', () => {
            console.log('stop inside');
            clearInterval(this._timer)
            _this.timer = null
        })
    }
})