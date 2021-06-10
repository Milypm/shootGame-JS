import 'phaser';
import API from '../api';
import newuser from './title';
import { Player, Enemy, BlueGem, WhiteGem } from './entity';

class gameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
  preload () {
    this.load.image('galaxy', './assets/images/galaxy.png');
    this.load.image('player', './assets/images/player.png');
    this.load.image('enemy', './assets/images/Enemy.png');
    this.load.image('laserEnemy', './assets/images/sprLaserEnemy.png');
    this.load.image('laserPlayer', './assets/images/sprLaserPlayer.png');
    this.load.image('blueGem', './assets/images/blue-gem.png');
    this.load.image('whiteGem', './assets/images/white-gem.png');
    this.load.image('asteroidOne', './assets/images/asteroidretro1.jpeg');
    this.load.image('asteroidTwo', './assets/images/asteroidretro2.png');
    this.load.spritesheet('sprExplosion', './assets/images/sprExplosion.png', {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.audio('sndExplode0', './assets/sound/sndExplode0.wav');
    this.load.audio('sndExplode1', './assets/sound/sndExplode1.wav');
    this.load.audio('Laser', './assets/sound/laser.mp3');
    this.load.audio('gameOver', './assets/sound/gameOver.mp3');
  }

  create () {
    const user = newuser;
    let score = 0;

    this.add.image(200, 0, 'galaxy');

    this.anims.create({
      key: 'sprExplosion',
      frames: this.anims.generateFrameNumbers('sprExplosion'),
      frameRate: 20,
      repeat: 0
    });

    this.sfx = {
      explosions: [
        this.sound.add('sndExplode0'),
        this.sound.add('sndExplode1')
      ],
      laser: this.sound.add('Laser')
    };

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'player'
    );

    this.gems = this.add.group();
    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();
    //event (act as a timer) which will spawn the enemies
    this.time.addEvent({
      delay: 800,
      callback: function() {
        const enemy = new Enemy(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0
        );
        //enemy.setScale(Phaser.Math.Between(10, 10) * 0.1);
        this.enemies.add(enemy);
      },
      callbackScope: this,
      loop: true
    });

    this.time.addEvent({
      delay: 1500,
      callback: function() {
        const blueG = new BlueGem(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0
        );
        blueG.displayWidth = 40;
        blueG.displayHeight = 40;
        this.gems.add(blueG);
      },
      callbackScope: this,
      loop: true
    });

    this.time.addEvent({
      delay: 1700,
      callback: function() {
        const whiteG = new WhiteGem(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0
        );
        whiteG.displayWidth = 45;
        whiteG.displayHeight = 45;
        this.gems.add(whiteG);
      },
      callbackScope: this,
      loop: true
    });
    //collision check between two game objects
    this.physics.add.collider(this.playerLasers, this.enemies, function(playerLaser, enemy) {
      if (enemy) {
        if (enemy.onDestroy !== undefined) { //checks if the enemy is still active (and not destroyed)
          enemy.onDestroy(); //destroys enemy if true
        }
        enemy.explode(true);
        playerLaser.destroy();
        this.physics.pause();
        score += 15;
        API.setPlayer(user, score);
      }
    });

    this.physics.add.overlap(this.player, this.enemies, function(player, enemy) {
      if (!player.getData("isDead") &&
          !enemy.getData("isDead")) {
        //player.explode(false);
        enemy.explode(true);
        this.physics.pause();
      }
    });

    this.physics.add.overlap(this.player, this.enemyLasers, function(player, laser) {
      if (!player.getData("isDead") &&
          !laser.getData("isDead")) {
        laser.destroy();
        player.explode(true);
        this.physics.pause();
        API.setPlayer(user, score);
      }
    });

    this.physics.add.overlap(this.player, this.gems, function(player, gem) {
      let points;
      (!player.getData("isDead") && gem.width === 40) ? points = 30 : points = 50;
      score += points;
    });

    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update () {
    if (!this.player.getData("isDead")) {
      this.player.update();

      if (this.keyUp.isDown) {
        this.player.moveUp();
      }
      else if (this.keyDown.isDown) {
        this.player.moveDown();
      }

      if (this.keyLeft.isDown) {
        this.player.moveLeft();
      }
      else if (this.keyRight.isDown) {
        this.player.moveRight();
      }

      if (this.keySpace.isDown) {
        this.player.setData("isShooting", true);
      }
      else {
        this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
        this.player.setData("isShooting", false);
      }
    }

    for (let i = 0; i < this.enemies.getChildren().length; i++) {
      const enemy = this.enemies.getChildren()[i];

      enemy.update();

      if (enemy.x < -enemy.displayWidth ||
        enemy.x > this.game.config.width + enemy.displayWidth ||
        enemy.y < -enemy.displayHeight * 4 ||
        enemy.y > this.game.config.height + enemy.displayHeight) {
        if (enemy) {
          if (enemy.onDestroy !== undefined) {
            enemy.onDestroy();
          }
          enemy.destroy();
        }
      }
    }

    for (let i = 0; i < this.enemyLasers.getChildren().length; i++) {
      const laser = this.enemyLasers.getChildren()[i];
      laser.update();

      if (laser.x < -laser.displayWidth ||
        laser.x > this.game.config.width + laser.displayWidth ||
        laser.y < -laser.displayHeight * 4 ||
        laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }

    for (let i = 0; i < this.playerLasers.getChildren().length; i++) {
      const laser = this.playerLasers.getChildren()[i];
      laser.update();

      if (laser.x < -laser.displayWidth ||
        laser.x > this.game.config.width + laser.displayWidth ||
        laser.y < -laser.displayHeight * 4 ||
        laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }
  }

  // getEnemiesByType = (type) => {
  //   const arr = [];
  //   for (let i = 0; i < this.enemies.getChildren().length; i++) {
  //     const enemy = this.enemies.getChildren()[i];
  //     if (enemy.getData("type") == type) {
  //       arr.push(enemy);
  //     }
  //   }
  //   return arr;
  // }
};

export default gameScene;