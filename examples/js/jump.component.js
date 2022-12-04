AFRAME.registerComponent('jump', {
    schema: {
        height: { type: 'number', default: 1 },
        duration: { type: 'number', default: 0.5 },
        jumpKeyCode: { type: 'number', default: 32 } // 空格键
    },

    init: function () {
        // console.log('jump', this.data);
        this.initY = this.el.object3D.position.y
        this.offset = 0
        this.speed = (2 * this.data.height) / (this.data.duration)  // m/ms
    },

    tick: function (time, deltaTime) {

        let el = this.el

        // 获取当前位置
        // console.log(el.object3D.position)
        this.offset += deltaTime * this.speed // m/ms * ms

        if (this.offset <= this.data.height) {
            el.object3D.position.y += deltaTime * this.speed
            // console.log('up', this.offset, this.initY);
        } else {
            // 防止掉到地下
            if (el.object3D.position.y-deltaTime * this.speed <= this.initY || this.offset >= 2 * this.data.height) {
                el.object3D.position.y = this.initY
                return
            }
            el.object3D.position.y -= deltaTime * this.speed
            // console.log('down', this.offset, this.initY);
        }
    }

})