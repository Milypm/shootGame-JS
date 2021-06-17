import Phaser from 'phaser';
import PreloaderScene from './scenes/preloader';
import MenuScene from './scenes/menu';
import CommandsScene from './scenes/commands';
import GameScene from './scenes/game';
import GameOverScene from './scenes/gameover';
import ScoresScene from './scenes/scores';

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
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Menu', MenuScene);
    this.scene.add('Commands', CommandsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('Scores', ScoresScene);
    this.scene.start('Preloader');
  }
}

window.game = new Game();
export default config;