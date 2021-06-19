/* eslint max-classes-per-file: ["error", 7] */

import Phaser from 'phaser';

class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData('type', type);
    this.setData('isDead', false);
  }

  explode(canDestroy) {
    if (!this.getData('isDead')) {
      this.setTexture('sprExplosion');
      this.play('sprExplosion');
      this.scene.sfx.explosions[Phaser.Math.Between(
        0, this.scene.sfx.explosions.length - 1,
      )].play();
      if (this.shootTimer !== undefined) {
        if (this.shootTimer) {
          this.shootTimer.remove(false);
        }
      }
      this.setAngle(0);
      this.body.setVelocity(0, 0);
      this.on('animationcomplete', () => {
        if (canDestroy) {
          this.destroy();
        } else {
          this.setVisible(false);
        }
      }, this);
      this.setData('isDead', true);
    }
  }
}

class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'laserPlayer');
    this.body.velocity.y = -800;
  }
}

class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, 'player', key, 'Player');
    this.setData('speed', 250);
    this.setData('isShooting', false);
    this.setData('timerShootDelay', 10);
    this.setData('timerShootTick', this.getData('timerShootDelay') - 1);
  }

  moveUp() { this.body.velocity.y = -this.getData('speed'); }

  moveDown() { this.body.velocity.y = this.getData('speed'); }

  moveLeft() { this.body.velocity.x = -this.getData('speed'); }

  moveRight() { this.body.velocity.x = this.getData('speed'); }

  update() {
    this.body.setVelocity(0, 0);
    this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);

    if (this.getData('isShooting')) {
      if (this.getData('timerShootTick') < this.getData('timerShootDelay')) {
        this.setData('timerShootTick', this.getData('timerShootTick') + 1);
      } else {
        const laser = new PlayerLaser(this.scene, this.x, this.y);
        this.scene.playerLasers.add(laser);
        this.scene.sfx.laser.play();
        this.setData('timerShootTick', 0);
      }
    }
  }

  onDestroy = () => {
    this.scene.time.addEvent({
      delay: 1000,
      callback() {
        this.scene.scene.start('GameOver');
      },
      callbackScope: this,
      loop: false,
    });
  }
}

class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'laserEnemy');
    this.body.velocity.y = 500;
  }
}

class Enemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy');
    this.body.velocity.y = Phaser.Math.Between(20, 60);
    this.shootTimer = this.scene.time.addEvent({
      delay: 600,
      callback() {
        const laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y,
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true,
    });
  }

  onDestroy = () => {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}

class BlueGem extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'blueGem');
    this.body.velocity.y = 50;
  }
}

class WhiteGem extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'whiteGem');
    this.body.velocity.y = 50;
  }
}

export {
  Player, Enemy, BlueGem, WhiteGem,
};