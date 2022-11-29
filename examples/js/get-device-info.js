AFRAME.registerComponent('get-device-info', {
    schema: {
        enable: { default: true },
        interval: { default: 1000 }
    },

    init() {
        console.log(this.data)
        if (!this.data.enable) return
        this.timer = setInterval(async () => {
            const stats = {
                isHMDConnected: false,
                device: null
            }
            if (AFRAME.utils.device.checkHeadsetConnected()) {
                stats.isHMDConnected = true

                const [evListenersSymbol, xrDeviceSymbol] = Reflect.ownKeys(navigator.xr)
                if (xrDeviceSymbol) {
                    stats.device = navigator.xr[xrDeviceSymbol].device
                }
            }
            // console.log(stats);

            document.body.dispatchEvent(new CustomEvent('get-device-info', {
                detail: stats
            }))
        }, +this.data.interval)
    }

})