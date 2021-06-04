import 'phaser';
import config from './config';
import boot from './Scenes/boot';
import preloader from './Scenes/preloader';
import title from './Scenes/title';
import game from './Scenes/game';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', boot);
    this.scene.add('Preloader', preloader);
    this.scene.add('Title', title);
    this.scene.add('Game', game);
    this.scene.start('Game');
  }
}

window.game = new Game();