import Phaser from 'phaser';

class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.load.image('gameTitle', '../assets/images/game-title.png');
    this.load.image('frame0', '../assets/spaceship-frames/frame0.png');
    this.load.image('frame1', '../assets/spaceship-frames/frame1.png');
    this.load.image('frame2', '../assets/spaceship-frames/frame2.png');
    this.load.image('frame3', '../assets/spaceship-frames/frame3.png');
    this.load.image('frame4', '../assets/spaceship-frames/frame4.png');
    this.load.image('frame5', '../assets/spaceship-frames/frame5.png');
    this.load.image('frame6', '../assets/spaceship-frames/frame6.png');
    this.load.image('frame7', '../assets/spaceship-frames/frame7.png');
    this.load.image('frame8', '../assets/spaceship-frames/frame8.png');
    this.load.image('frame9', '../assets/spaceship-frames/frame9.png');
    this.load.image('frame10', '../assets/spaceship-frames/frame10.png');
    this.load.image('frame11', '../assets/spaceship-frames/frame11.png');
    this.load.image('frame12', '../assets/spaceship-frames/frame12.png');
    this.load.image('frame13', '../assets/spaceship-frames/frame13.png');
    this.load.image('frame14', '../assets/spaceship-frames/frame14.png');
    this.load.image('frame15', '../assets/spaceship-frames/frame15.png');

    this.load.image('gameTitle', '../assets/images/game-title.png');
    this.load.image('sprBtnPlay', '../assets/images/sprBtnPlay.png');
    this.load.image('sprBtnPlayDown', '../assets/images/sprBtnPlayDown.png');
    this.load.image('sprBtnCommands', '../assets/images/sprBtnCommands.png');
    this.load.image('sprBtnCommandsDown', '../assets/images/sprBtnCommandsDown.png');
    this.load.image('sprBtnScores', '../assets/images/sprBtnScores.png');
    this.load.image('sprBtnScoresDown', '../assets/images/sprBtnScoresDown.png');
    this.load.audio('sndBtnOver', '../assets/sound/sndBtnOver.wav');
    this.load.audio('sndBtnDown', '../assets/sound/sndBtnDown.wav');

    this.load.image('sprBtnBack', '../assets/images/sprBtnBack.png');
    this.load.image('sprBtnBackDown', '../assets/images/sprBtnBackDown.png');

    this.load.image('galaxy', '../assets/images/galaxy.png');
    this.load.image('player', '../assets/images/player.png');
    this.load.image('enemy', '../assets/images/Enemy.png');
    this.load.image('laserEnemy', '../assets/images/sprLaserEnemy.png');
    this.load.image('laserPlayer', '../assets/images/sprLaserPlayer.png');
    this.load.image('blueGem', '../assets/images/blue-gem.png');
    this.load.image('whiteGem', '../assets/images/white-gem.png');
    this.load.spritesheet('sprExplosion', '../assets/images/sprExplosion.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.audio('sndExplode0', '../assets/sound/sndExplode0.wav');
    this.load.audio('sndExplode1', '../assets/sound/sndExplode1.wav');
    this.load.audio('Laser', '../assets/sound/laser.mp3');

    this.load.image('topScores', '../assets/images/top-scores.png');
    this.load.image('sprBtnMenu', '../assets/images/sprBtnMenu.png');
    this.load.image('sprBtnMenuDown', '../assets/images/sprBtnMenuDown.png');

    this.load.image('game-over', '../assets/images/gameover!.png');
    this.load.image('sprBtnRestart', '../assets/images/sprBtnRestart.png');
    this.load.image('sprBtnRestartDown', '../assets/images/sprBtnRestartDown.png');
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