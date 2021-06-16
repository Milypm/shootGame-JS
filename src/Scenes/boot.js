import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('gameTitle', 'src/assets/images/game-title.png');
    this.load.path = 'src/assets/spaceship-frames/';
    this.load.image('frame0', 'frame0.png');
    this.load.image('frame1', 'frame1.png');
    this.load.image('frame2', 'frame2.png');
    this.load.image('frame3', 'frame3.png');
    this.load.image('frame4', 'frame4.png');
    this.load.image('frame5', 'frame5.png');
    this.load.image('frame6', 'frame6.png');
    this.load.image('frame7', 'frame7.png');
    this.load.image('frame8', 'frame8.png');
    this.load.image('frame9', 'frame9.png');
    this.load.image('frame10', 'frame10.png');
    this.load.image('frame11', 'frame11.png');
    this.load.image('frame12', 'frame12.png');
    this.load.image('frame13', 'frame13.png');
    this.load.image('frame14', 'frame14.png');
    this.load.image('frame15', 'frame15.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}

export default BootScene;