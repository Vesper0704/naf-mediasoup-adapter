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
        // this._position = new THREE.Vector3()
        // `rotation` is a three.js Euler using radians. `quaternion` also available.
        this.worldDirection = new THREE.Vector3()
        this.worldQuaternion = new THREE.Quaternion()
        this.worldPosition = new THREE.Vector3()
        // this._matarial = null


        let _this = this
        // console.log(this.data.interval);
        if (this.data.enable) {
            this._object3D = this.el.object3D
            this.camera = this.el.sceneEl.camera
            this._timer = setInterval(() => {
                // this._position = this._object3D.position
                // this._rotation = this._object3D.rotation

                // https://threejs.org/docs/#api/en/core/Object3D.getWorldQuaternion
                this._object3D.getWorldQuaternion(this.worldQuaternion)
                this._object3D.getWorldDirection(this.worldDirection)
                this._object3D.getWorldPosition(this.worldPosition)

                const { worldDirection, worldPosition, worldQuaternion } = this
                document.body.dispatchEvent(new CustomEvent('stats-update', {
                    detail: {
                        ...this._object3D,
                        camera: this.camera,

                        // Returns a vector representing the direction of object's positive z-axis in world space.
                        worldDirection,

                        worldQuaternion,

                        worldPosition,

                        material: this.el.material || this.el.getAttribute('material')
                    }
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