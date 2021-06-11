import 'phaser';
import bootScene from './Scenes/boot';
import preloaderScene from './Scenes/preloader';
import menuScene from './Scenes/menu';
import commandsScene from './Scenes/commands';
import gameScene from './Scenes/game';
import gameOverScene from './Scenes/gameover';

const config = {
  type: Phaser.AUTO,
  width: 1270,
  height: 700,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 }
    }
  },
  pixelArt: true,
  roundPixels: true,
  parent: 'phaser-container',
  dom: {
    createContainer: true
  }
};

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', bootScene);
    this.scene.add('Preloader', preloaderScene);
    this.scene.add('Menu', menuScene);
    this.scene.add('Commands', commandsScene);
    this.scene.add('Game', gameScene);
    this.scene.add('GameOver', gameOverScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
export default config;