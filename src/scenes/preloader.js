import Phaser from 'phaser';

class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.load.image('gameTitle', '../src/assets/images/game-title.png');
    this.load.image('frame0', '../src/assets/spaceship-frames/frame0.png');
    this.load.image('frame1', '../src/assets/spaceship-frames/frame1.png');
    this.load.image('frame2', '../src/assets/spaceship-frames/frame2.png');
    this.load.image('frame3', '../src/assets/spaceship-frames/frame3.png');
    this.load.image('frame4', '../src/assets/spaceship-frames/frame4.png');
    this.load.image('frame5', '../src/assets/spaceship-frames/frame5.png');
    this.load.image('frame6', '../src/assets/spaceship-frames/frame6.png');
    this.load.image('frame7', '../src/assets/spaceship-frames/frame7.png');
    this.load.image('frame8', '../src/assets/spaceship-frames/frame8.png');
    this.load.image('frame9', '../src/assets/spaceship-frames/frame9.png');
    this.load.image('frame10', '../src/assets/spaceship-frames/frame10.png');
    this.load.image('frame11', '../src/assets/spaceship-frames/frame11.png');
    this.load.image('frame12', '../src/assets/spaceship-frames/frame12.png');
    this.load.image('frame13', '../src/assets/spaceship-frames/frame13.png');
    this.load.image('frame14', '../src/assets/spaceship-frames/frame14.png');
    this.load.image('frame15', '../src/assets/spaceship-frames/frame15.png');

    this.load.image('gameTitle', '../src/assets/images/game-title.png');
    this.load.image('sprBtnPlay', '../src/assets/images/sprBtnPlay.png');
    this.load.image('sprBtnPlayDown', '../src/assets/images/sprBtnPlayDown.png');
    this.load.image('sprBtnCommands', '../src/assets/images/sprBtnCommands.png');
    this.load.image('sprBtnCommandsDown', '../src/assets/images/sprBtnCommandsDown.png');
    this.load.image('sprBtnScores', '../src/assets/images/sprBtnScores.png');
    this.load.image('sprBtnScoresDown', '../src/assets/images/sprBtnScoresDown.png');
    this.load.audio('sndBtnOver', '../src/assets/sound/sndBtnOver.wav');
    this.load.audio('sndBtnDown', '../src/assets/sound/sndBtnDown.wav');

    this.load.image('sprBtnBack', '../src/assets/images/sprBtnBack.png');
    this.load.image('sprBtnBackDown', '../src/assets/images/sprBtnBackDown.png');

    this.load.image('galaxy', '../src/assets/images/galaxy.png');
    this.load.image('player', '../src/assets/images/player.png');
    this.load.image('enemy', '../src/assets/images/Enemy.png');
    this.load.image('laserEnemy', '../src/assets/images/sprLaserEnemy.png');
    this.load.image('laserPlayer', '../src/assets/images/sprLaserPlayer.png');
    this.load.image('blueGem', '../src/assets/images/blue-gem.png');
    this.load.image('whiteGem', '../src/assets/images/white-gem.png');
    this.load.spritesheet('sprExplosion', '../src/assets/images/sprExplosion.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.audio('sndExplode0', '../src/assets/sound/sndExplode0.wav');
    this.load.audio('sndExplode1', '../src/assets/sound/sndExplode1.wav');
    this.load.audio('Laser', '../src/assets/sound/laser.mp3');

    this.load.image('topScores', '../src/assets/images/top-scores.png');
    this.load.image('sprBtnMenu', '../src/assets/images/sprBtnMenu.png');
    this.load.image('sprBtnMenuDown', '../src/assets/images/sprBtnMenuDown.png');

    this.load.image('game-over', '../src/assets/images/gameover!.png');
    this.load.image('sprBtnRestart', '../src/assets/images/sprBtnRestart.png');
    this.load.image('sprBtnRestartDown', '../src/assets/images/sprBtnRestartDown.png');
  }

  create() {
    this.add.image(640, 100, 'gameTitle');
    this.anims.create({
      key: 'gif',
      frames: [
        { key: 'frame0' },
        { key: 'frame1' },
        { key: 'frame2' },
        { key: 'frame3' },
        { key: 'frame4' },
        { key: 'frame5' },
        { key: 'frame6' },
        { key: 'frame7' },
        { key: 'frame8' },
        { key: 'frame9' },
        { key: 'frame10' },
        { key: 'frame11' },
        { key: 'frame12' },
        { key: 'frame13' },
        { key: 'frame14' },
        { key: 'frame15', duration: 50 },
      ],
      frameRate: 16,
      repeat: -1,
    });
    const gifSprite = this.add.sprite(640, 370, 'frame0');
    gifSprite.displayWidth = 400;
    gifSprite.displayHeight = 390;
    gifSprite.play('gif');

    this.add.text(540, 600, 'Loading game...', { color: '#fff', fontSize: '25px ', fontStyle: 'bold' });

    this.load.on('complete', function () {
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
  }

  ready() {
    this.scene.start('Menu');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Menu');
    }
  }
}

export default PreloaderScene;