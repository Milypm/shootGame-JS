import 'phaser';

class preloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }
  preload () {
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
      frameRate: 8,
      repeat: -1
    });
    const gifSprite = this.add.sprite(640, 370, 'frame0');
    gifSprite.displayWidth = 400;
    gifSprite.displayHeight = 390;
    gifSprite.play('gif');

      // display progress bar
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(480, 360, 320, 50);
   
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);
   
    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);
   
    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);
   
    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
   
    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });
   
    //remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
   
    // load assets needed in our game
    this.load.image('gameTitle', './assets/images/game-title.png');
    this.load.image('playBtn', './assets/images/sprBtnPlay.png');
    this.load.image('playBtnDown', './assets/images/sprBtnPlayDown.png');
    this.load.image('playBtnHover', './assets/images/sprBtnPlayHover.png');
    this.load.image('restartBtn', './assets/images/sprBtnRestart.png');
    this.load.image('restartBtnDown', './assets/images/sprBtnRestartDown.png');
    this.load.image('restartBtnHover', './assets/images/sprBtnRestartHover.png');
    this.load.image('laserEnemy', './assets/images/sprLaserEnemy.png');
    this.load.image('laserPlayer', './assets/images/sprLaserPlayer.png');
    this.load.image('blueGem', './assets/images/blue-gem.png');
    this.load.image('whiteGem', './assets/images/white-gem.png');
    this.load.image('enemy', './assets/images/enemy.png');
    this.load.image('player', './assets/images/player.png');
    this.load.image('asteroidOne', './assets/images/asteroidretro1.jpeg');
    this.load.image('asteroidTwo', './assets/images/asteroidretro2.png');
  }
  init () {
    this.readyCount = 0;
  }
  ready () {
    this.scene.start('Title');
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
  create () {

  }
};

export default preloaderScene;