AFRAME.registerComponent('intersection-generate', {
    schema: {
        event: { default: 'mouseup' },
        voxelTemplate: { default: '#voxel-template' },
        size: { type: 'number', default: 0.6 },
        cooldown: { type: 'number', default: 3 }, //s
        parse: AFRAME.utils.styleParser.parse
    },

    init: function () {
        const { voxelTemplate, cooldown, size, event } = this.data;
        const el = this.el;
        // console.log(this.data);
        this.isCd = false

        console.log('intersection-generate attached');

        let that = this
        // https://aframe.io/docs/master/components/cursor.html
        // evt.detail.intersection.point是cursor坐标
        el.addEventListener(event, evt => {
            // console.log(evt);
            // 释放鼠标的时候 触发
            if (evt.type === this.data.event) {
                // cd中 不创建
                if (that.isCd) {
                    // console.log('正在cd');
                    return
                }
                that.isCd = true
                // Create element.
                var voxel = document.createElement('a-entity');
                console.log(this.data);
                voxel.setAttribute('networked', 'template', this.data.voxelTemplate);

                voxel.addEventListener('click',()=>{
                    // console.log('click');
                    let box = voxel.querySelector('a-box')
                    box.setAttribute('material', 'color', this.getRandomColor())
                })

                let position = evt.detail.intersection.point
                // 不要放在地底下 也不往高处放
                position.y = this.data.size / 2
                console.log(position);

                voxel.setAttribute('position', position);
                // let posCheck = AFRAME.utils.entity.getComponentProperty(el, 'position')
                // console.log(posCheck);
                // Set components and properties.
                // Object.keys(data).forEach(name => {
                //     if (name === 'event') { return; }
                //     AFRAME.utils.entity.setComponentProperty(spawnEl, name, data[name]);
                // });

                // Append to scene.
                // console.log(el.sceneEl);
                el.sceneEl.appendChild(voxel);

                setTimeout(() => {
                    // 重置CD
                    that.isCd = false
                }, cooldown * 1000)
            }
        });
    },

    getRandomColor: function () {
        let pool = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += pool[Math.floor(Math.random() * pool.length)]
        }
        // console.log(color);
        return color
    }
});