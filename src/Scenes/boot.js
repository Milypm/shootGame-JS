import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('gameTitle', 'src/assets/images/game-title.png');
    this.load.image('frame0', 'src/assets/spaceship-frames/frame0.png');
    this.load.image('frame1', 'src/assets/spaceship-frames/frame1.png');
    this.load.image('frame2', 'src/assets/spaceship-frames/frame2.png');
    this.load.image('frame3', 'src/assets/spaceship-frames/frame3.png');
    this.load.image('frame4', 'src/assets/spaceship-frames/frame4.png');
    this.load.image('frame5', 'src/assets/spaceship-frames/frame5.png');
    this.load.image('frame6', 'src/assets/spaceship-frames/frame6.png');
    this.load.image('frame7', 'src/assets/spaceship-frames/frame7.png');
    this.load.image('frame8', 'src/assets/spaceship-frames/frame8.png');
    this.load.image('frame9', 'src/assets/spaceship-frames/frame9.png');
    this.load.image('frame10', 'src/assets/spaceship-frames/frame10.png');
    this.load.image('frame11', 'src/assets/spaceship-frames/frame11.png');
    this.load.image('frame12', 'src/assets/spaceship-frames/frame12.png');
    this.load.image('frame13', 'src/assets/spaceship-frames/frame13.png');
    this.load.image('frame14', 'src/assets/spaceship-frames/frame14.png');
    this.load.image('frame15', 'src/assets/spaceship-frames/frame15.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}

export default BootScene;