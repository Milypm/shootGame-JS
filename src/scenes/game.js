/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

import Phaser from 'phaser';
import { nameForScore, setPlayerScore, getScore } from '../api';
import {
  Player, Enemy, BlueGem, WhiteGem,
} from './entity';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    const user = nameForScore();
    let score = 0;
    let pointsC;
    let whiteGCounter = 0;
    let blueGCounter = 0;
    let whiteScore;
    let blueScore;

    this.add.image(200, 0, 'galaxy');

    this.add.text(1100, 15, `Pilot: ${user}`, { color: '#fff', fontSize: '15px ', fontStyle: 'bold' });
    pointsC = this.add.text(1100, 40, `Points: ${score}`, { color: '#fff', fontSize: '15px ', fontStyle: 'bold' });
    const whiteGScore = this.add.image(1170, 75, 'whiteGem');
    const blueGScore = this.add.image(1170, 100, 'blueGem');
    blueGScore.displayWidth = 30;
    blueGScore.displayHeight = 30;
    whiteGScore.displayWidth = 30;
    whiteGScore.displayHeight = 30;
    whiteScore = this.add.text(1190, 65, `${whiteGCounter}`, { color: '#fff', fontSize: '14px ', fontStyle: 'bold' });
    blueScore = this.add.text(1190, 92, `${blueGCounter}`, { color: '#fff', fontSize: '14px ', fontStyle: 'bold' });

    this.anims.create({
      key: 'sprExplosion',
      frames: this.anims.generateFrameNumbers('sprExplosion'),
      frameRate: 20,
      repeat: 0,
    });

    this.sfx = {
      explosions: [
        this.sound.add('sndExplode0'),
        this.sound.add('sndExplode1'),
      ],
      laser: this.sound.add('Laser'),
    };

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'player',
    );

    this.gems = this.add.group();
    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();
    this.time.addEvent({
      delay: 800,
      callback() {
        const enemy = new Enemy(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0,
        );
        this.enemies.add(enemy);
      },
      callbackScope: this,
      loop: true,
    });

    this.time.addEvent({
      delay: 1500,
      callback() {
        const blueG = new BlueGem(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0,
        );
        blueG.displayWidth = 40;
        blueG.displayHeight = 40;
        this.gems.add(blueG);
      },
      callbackScope: this,
      loop: true,
    });

    this.time.addEvent({
      delay: 1700,
      callback() {
        const whiteG = new WhiteGem(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0,
        );
        whiteG.displayWidth = 45;
        whiteG.displayHeight = 45;
        this.gems.add(whiteG);
      },
      callbackScope: this,
      loop: true,
    });

    this.physics.add.collider(this.playerLasers, this.enemies, (playerLaser, enemy) => {
      if (enemy) {
        if (enemy.enemyOnDestroy() !== undefined) {
          enemy.enemyOnDestroy();
        }
        enemy.explode(true);
        playerLaser.destroy();
        score += 15;
        pointsC.destroy();
        pointsC = this.add.text(1100, 40, `Points: ${score}`, { color: '#fff', fontSize: '15px ', fontStyle: 'bold' });
      }
    });

    this.physics.add.overlap(this.player, this.gems, (player, gem) => {
      let points;
      if (gem instanceof BlueGem) {
        gem.destroy();
        points = 30;
        blueGCounter += 1;
        blueScore.destroy();
        blueScore = this.add.text(1190, 92, `${blueGCounter}`, { color: '#fff', fontSize: '14px ', fontStyle: 'bold' });
      } else {
        gem.destroy();
        points = 50;
        whiteGCounter += 1;
        whiteScore.destroy();
        whiteScore = this.add.text(1190, 65, `${whiteGCounter}`, { color: '#fff', fontSize: '14px ', fontStyle: 'bold' });
      }
      score += points;
      pointsC.destroy();
      pointsC = this.add.text(1100, 40, `Points: ${score}`, { color: '#fff', fontSize: '15px ', fontStyle: 'bold' });
    });

    let hit = false;

    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      if (!player.getData('isDead') && !enemy.getData('isDead') && hit === false) {
        enemy.explode(true);
        player.explode(false);
        player.playerOnDestroy();
        score = (score === 0) ? '0' : score;
        setPlayerScore(user, score);
        getScore(score);
      }
    });

    this.physics.add.overlap(this.player, this.enemyLasers, (player, laser) => {
      if (!player.getData('isDead') && !laser.getData('isDead')) {
        hit = true;
        laser.destroy();
        player.explode(false);
        player.playerOnDestroy();
        score = (score === 0) ? '0' : score;
        setPlayerScore(user, score);
        getScore(score);
      }
    });

    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    if (!this.player.getData('isDead')) {
      this.player.update();

      if (this.keyUp.isDown) {
        this.player.moveUp();
      } else if (this.keyDown.isDown) {
        this.player.moveDown();
      }

      if (this.keyLeft.isDown) {
        this.player.moveLeft();
      } else if (this.keyRight.isDown) {
        this.player.moveRight();
      }

      if (this.keySpace.isDown) {
        this.player.setData('isShooting', true);
      } else {
        this.player.setData('timerShootTick', this.player.getData('timerShootDelay') - 1);
        this.player.setData('isShooting', false);
      }
    } else {
      this.player.playerOnDestroy();
    }

    for (let i = 0; i < this.enemies.getChildren().length; i++) {
      const enemy = this.enemies.getChildren()[i];

      enemy.update();

      if (enemy.x < -enemy.displayWidth
        || enemy.x > this.game.config.width + enemy.displayWidth
        || enemy.y < -enemy.displayHeight * 4
        || enemy.y > this.game.config.height + enemy.displayHeight) {
        if (enemy) {
          if (enemy.enemyOnDestroy !== undefined) {
            enemy.enemyOnDestroy();
          }
          enemy.destroy();
        }
      }
    }

    for (let i = 0; i < this.enemyLasers.getChildren().length; i++) {
      const laser = this.enemyLasers.getChildren()[i];
      laser.update();

      if (laser.x < -laser.displayWidth
        || laser.x > this.game.config.width + laser.displayWidth
        || laser.y < -laser.displayHeight * 4
        || laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }

    for (let i = 0; i < this.playerLasers.getChildren().length; i++) {
      const laser = this.playerLasers.getChildren()[i];
      laser.update();

      if (laser.x < -laser.displayWidth
        || laser.x > this.game.config.width + laser.displayWidth
        || laser.y < -laser.displayHeight * 4
        || laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }
  }
}

export default GameScene;