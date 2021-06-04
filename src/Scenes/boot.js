import 'phaser';

class Boot extends Phaser.Scene {
  constructor () {
    super('Boot');
  }
  preload () {
    this.load.spritesheet('space-intro',
      '../assets/spaceship-intro-gif.png',
      { frameWidth: 400, frameHeight: 400 }
    );
  }

  create () {
    this.scene.start('Preloader');
  }
};

export default Boot;