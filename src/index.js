import 'phaser';
import './styles/style.css';
import bootScene from './Scenes/boot';
import preloaderScene from './Scenes/preloader';
import titleScene from './Scenes/title';
import gameScene from './Scenes/game';

const config = {
  type: Phaser.AUTO,
  width: 1270,
  height: 700,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  },
  dom: {
    createContainer: true
  }
};

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', bootScene);
    this.scene.add('Preloader', preloaderScene);
    this.scene.add('Title', titleScene);
    this.scene.add('Game', gameScene);
    this.scene.start('Boot');
  }
}

export default config;
window.game = new Game();