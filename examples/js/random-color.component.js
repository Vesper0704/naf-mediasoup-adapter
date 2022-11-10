
// 自定义随机颜色组件
//去掉默认的contextmenu事件，否则会和右键事件同时出现。
AFRAME.registerComponent('random-color', {
    schema: {
        //没有要写的可以不写
    },
    init: function () {
        let el = this.el;
        console.log(el);
        let color = getRandomColor()

        // console.log(color);
        el.setAttribute('material', 'color', color)
        el.emit('setColor', color, false)
        // console.log(el.getAttribute('material', 'color').color);
        // 是否有全局色彩
        // window.globalColor ? window.globalColor = color : ''
        // el.addEventListener('click', () => {
        //     // console.log('el');
        //     el.setAttribute('material', 'color', getRandomColor())
        // })
    }
})

function getRandomColor() {
    let pool = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += pool[Math.floor(Math.random() * 16)]
    }
    // console.log(color);
    return color
}