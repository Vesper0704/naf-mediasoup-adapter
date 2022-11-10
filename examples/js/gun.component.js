/* global AFRAME, THREE */
AFRAME.registerComponent('gun', {
  schema: {
    bulletTemplate: { default: '#bullet-template' },
    triggerKeyCode: { default: 81 }, // q键
    isAutomatic: { default: false }
  },

  init: function () {
    var that = this;
    const { triggerKeyCode, isAutomatic } = this.data
    // 连发模式
    if (isAutomatic) {
      document.body.onkeydown = function (e) {
        if (e.keyCode == triggerKeyCode) {
          that.shoot();
        }
      }
    } else {
      document.body.onkeyup = function (e) {
        if (e.keyCode == triggerKeyCode) {
          that.shoot();
        }
      }
    }

  },

  update: function(oldData){
    const { triggerKeyCode, isAutomatic } = this.data
    let that = this
    if (isAutomatic) {
      console.log('升级武器')
      document.body.onkeydown = function (e) {
        if (e.keyCode == triggerKeyCode) {
          that.shoot();
        }
      }
    } else {
      document.body.onkeyup = function (e) {
        if (e.keyCode == triggerKeyCode) {
          that.shoot();
        }
      }
    }
  },

  shoot: function () {
    this.createBullet();
  },

  createBullet: function () {
    var el = document.createElement('a-entity');
    el.setAttribute('networked', 'template:' + this.data.bulletTemplate);
    el.setAttribute('remove-in-seconds', 3);
    el.setAttribute('forward', 'speed: 0.6');

    var tip = document.querySelector('#player');
    el.setAttribute('position', this.getInitialBulletPosition(tip));
    el.setAttribute('rotation', this.getInitialBulletRotation(tip));

    // console.log('bullet', this.el.sceneEl);

    // a-scene
    this.el.sceneEl.appendChild(el);
  },

  getInitialBulletPosition: function (spawnerEl) {
    var worldPos = new THREE.Vector3();
    worldPos.setFromMatrixPosition(spawnerEl.object3D.matrixWorld);
    // console.log('worldPos', worldPos);
    // 子弹射出方向
    // worldPos.y += 2
    worldPos.z -= 0.5

    return worldPos;
  },

  getInitialBulletRotation: function (spawnerEl) {
    var worldDirection = new THREE.Vector3();

    // 获取玩家的转向
    spawnerEl.object3D.getWorldDirection(worldDirection);
    worldDirection.multiplyScalar(-1);
    this.vec3RadToDeg(worldDirection);

    return worldDirection;
  },

  // 弧度转角度
  vec3RadToDeg: function (rad) {
    rad.set(rad.y * 90, -90 + (-THREE.Math.radToDeg(Math.atan2(rad.z, rad.x))), 0);
  }
});
