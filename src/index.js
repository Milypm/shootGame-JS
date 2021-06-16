import Phaser from 'phaser';
import BootScene from './Scenes/boot';
import PreloaderScene from './Scenes/preloader';
import MenuScene from './Scenes/menu';
import CommandsScene from './Scenes/commands';
import GameScene from './Scenes/game';
import GameOverScene from './Scenes/gameover';
import ScoresScene from './Scenes/scores';

const config = {
  type: Phaser.AUTO,
  width: 1270,
  height: 700,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
    },
  },
  pixelArt: true,
  roundPixels: true,
  parent: 'phaser-container',
  dom: {
    createContainer: true,
  },
  audio: {
    disableWebAudio: true,
    noAudio: false,
  },
};

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Menu', MenuScene);
    this.scene.add('Commands', CommandsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('Scores', ScoresScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
export default config;