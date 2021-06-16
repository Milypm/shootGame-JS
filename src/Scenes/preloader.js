import Phaser from 'phaser';

class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.add.image(640, 100, 'gameTitle');
    this.anims.create({
      key: 'gif',
      frames: [
        { key: 'frame0', frame: 1 },
        { key: 'frame1', frame: 2 },
        { key: 'frame2', frame: 3 },
        { key: 'frame3', frame: 4 },
        { key: 'frame4', frame: 5 },
        { key: 'frame5', frame: 6 },
        { key: 'frame6', frame: 7 },
        { key: 'frame7', frame: 8 },
        { key: 'frame8', frame: 9 },
        { key: 'frame9', frame: 10 },
        { key: 'frame10', frame: 11 },
        { key: 'frame11', frame: 12 },
        { key: 'frame12', frame: 13 },
        { key: 'frame13', frame: 14 },
        { key: 'frame14', frame: 15 },
        { key: 'frame15', frame: 16, duration: 50 },
      ],
      frameRate: 16,
      repeat: -1,
    });
    const gifSprite = this.add.sprite(640, 370, 'frame0');
    gifSprite.displayWidth = 400;
    gifSprite.displayHeight = 390;
    gifSprite.play('gif');

    this.add.text(540, 600, 'Loading game...', { color: '#fff', fontSize: '25px ', fontStyle: 'bold' });

    this.load.on('complete', () => {
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