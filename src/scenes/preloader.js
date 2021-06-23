import Phaser from 'phaser';

class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    let env;
    if (process.env.NODE_ENV === 'production') {
      env = './assets/';
    } else if (process.env.NODE_ENV !== 'production') {
      env = '../src/assets/';
    }
    this.load.image('gameTitle', `${env}images/game-title.png`);
    this.load.image('frame0', `${env}spaceship-frames/frame0.png`);
    this.load.image('frame1', `${env}spaceship-frames/frame1.png`);
    this.load.image('frame2', `${env}spaceship-frames/frame2.png`);
    this.load.image('frame3', `${env}spaceship-frames/frame3.png`);
    this.load.image('frame4', `${env}spaceship-frames/frame4.png`);
    this.load.image('frame5', `${env}spaceship-frames/frame5.png`);
    this.load.image('frame6', `${env}spaceship-frames/frame6.png`);
    this.load.image('frame7', `${env}spaceship-frames/frame7.png`);
    this.load.image('frame8', `${env}spaceship-frames/frame8.png`);
    this.load.image('frame9', `${env}spaceship-frames/frame9.png`);
    this.load.image('frame10', `${env}spaceship-frames/frame10.png`);
    this.load.image('frame11', `${env}spaceship-frames/frame11.png`);
    this.load.image('frame12', `${env}spaceship-frames/frame12.png`);
    this.load.image('frame13', `${env}spaceship-frames/frame13.png`);
    this.load.image('frame14', `${env}spaceship-frames/frame14.png`);
    this.load.image('frame15', `${env}spaceship-frames/frame15.png`);
    this.load.image('sprBtnPlay', `${env}images/sprBtnPlay.png`);
    this.load.image('sprBtnPlayDown', `${env}images/sprBtnPlayDown.png`);
    this.load.image('sprBtnCommands', `${env}images/sprBtnCommands.png`);
    this.load.image('sprBtnCommandsDown', `${env}images/sprBtnCommandsDown.png`);
    this.load.image('sprBtnScores', `${env}images/sprBtnScores.png`);
    this.load.image('sprBtnScoresDown', `${env}images/sprBtnScoresDown.png`);
    this.load.audio('sndBtnOver', `${env}sound/sndBtnOver.wav`);
    this.load.audio('sndBtnDown', `${env}sound/sndBtnDown.wav`);
    this.load.image('sprBtnBack', `${env}images/sprBtnBack.png`);
    this.load.image('sprBtnBackDown', `${env}images/sprBtnBackDown.png`);
    this.load.image('galaxy', `${env}images/galaxy.png`);
    this.load.image('player', `${env}images/player.png`);
    this.load.image('enemy', `${env}images/Enemy.png`);
    this.load.image('laserEnemy', `${env}images/sprLaserEnemy.png`);
    this.load.image('laserPlayer', `${env}images/sprLaserPlayer.png`);
    this.load.image('blueGem', `${env}images/blue-gem.png`);
    this.load.image('whiteGem', `${env}images/white-gem.png`);
    this.load.spritesheet('sprExplosion', `${env}images/sprExplosion.png`, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.audio('sndExplode0', `${env}sound/sndExplode0.wav`);
    this.load.audio('sndExplode1', `${env}sound/sndExplode1.wav`);
    this.load.audio('Laser', `${env}sound/laser.mp3`);
    this.load.image('topScores', `${env}images/top-scores.png`);
    this.load.image('sprBtnMenu', `${env}images/sprBtnMenu.png`);
    this.load.image('sprBtnMenuDown', `${env}images/sprBtnMenuDown.png`);
    this.load.image('gameover', `${env}images/gameover.png`);
    this.load.image('sprBtnRestart', `${env}images/sprBtnRestart.png`);
    this.load.image('sprBtnRestartDown', `${env}images/sprBtnRestartDown.png`);
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