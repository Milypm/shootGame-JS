import Phaser from 'phaser';
import PreloaderScene from './scenes/preloader';
import MenuScene from './scenes/menu';
import CommandsScene from './scenes/commands';
import GameScene from './scenes/game';
import GameOverScene from './scenes/gameover';
import ScoresScene from './scenes/scores';

import gameTitle from './assets/images/game-title.png';
import frame0 from './assets/spaceship-frames/frame0.png';
import frame1 from './assets/spaceship-frames/frame1.png';
import frame2 from './assets/spaceship-frames/frame2.png';
import frame3 from './assets/spaceship-frames/frame3.png';
import frame4 from './assets/spaceship-frames/frame4.png';
import frame5 from './assets/spaceship-frames/frame5.png';
import frame6 from './assets/spaceship-frames/frame6.png';
import frame7 from './assets/spaceship-frames/frame7.png';
import frame8 from './assets/spaceship-frames/frame8.png';
import frame9 from './assets/spaceship-frames/frame9.png';
import frame10 from './assets/spaceship-frames/frame10.png';
import frame11 from './assets/spaceship-frames/frame11.png';
import frame12 from './assets/spaceship-frames/frame12.png';
import frame13 from './assets/spaceship-frames/frame13.png';
import frame14 from './assets/spaceship-frames/frame14.png';
import frame15 from './assets/spaceship-frames/frame15.png';
import sprBtnPlay from './assets/images/sprBtnPlay.png';
import sprBtnPlayDown from './assets/images/sprBtnPlayDown.png';
import sprBtnCommands from './assets/images/sprBtnCommands.png';
import sprBtnCommandsDown from './assets/images/sprBtnCommandsDown.png';
import sprBtnScores from './assets/images/sprBtnScores.png';
import sprBtnScoresDown from './assets/images/sprBtnScoresDown.png';
import sndBtnOver from './assets/sound/sndBtnOver.wav';
import sndBtnDown from './assets/sound/sndBtnDown.wav';
import sprBtnBack from './assets/images/sprBtnBack.png';
import sprBtnBackDown from './assets/images/sprBtnBackDown.png';
import galaxy from './assets/images/galaxy.png';
import player from './assets/images/player.png';
import enemy from './assets/images/Enemy.png';
import laserEnemy from './assets/images/sprLaserEnemy.png';
import laserPlayer from './assets/images/sprLaserPlayer.png';
import blueGem from './assets/images/blue-gem.png';
import whiteGem from './assets/images/white-gem.png';
import sprExplosion from './assets/images/sprExplosion.png';
import sndExplode0 from './assets/sound/sndExplode0.wav';
import sndExplode1 from './assets/sound/sndExplode1.wav';
import Laser from './assets/sound/laser.mp3';
import topScores from './assets/images/top-scores.png';
import sprBtnMenu from './assets/images/sprBtnMenu.png';
import sprBtnMenuDown from './assets/images/sprBtnMenuDown.png';
import gameover from './assets/images/gameover.png';
import sprBtnRestart from './assets/images/sprBtnRestart.png';
import sprBtnRestartDown from './assets/images/sprBtnRestartDown.png';

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
  preload () {
    // this.load.image('gameTitle', gameTitle);
    // this.load.image('frame0', frame0);
    // this.load.image('frame1', frame1);
    // this.load.image('frame2', frame2);
    // this.load.image('frame3', frame3);
    // this.load.image('frame4', frame4);
    // this.load.image('frame5', frame5);
    // this.load.image('frame6', frame6);
    // this.load.image('frame7', frame7);
    // this.load.image('frame8', frame8);
    // this.load.image('frame9', frame9);
    // this.load.image('frame10', frame10);
    // this.load.image('frame11', frame11);
    // this.load.image('frame12', frame12);
    // this.load.image('frame13', frame13);
    // this.load.image('frame14', frame14);
    // this.load.image('frame15', frame15);
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('sprBtnPlayDown', sprBtnPlayDown);
    this.load.image('sprBtnCommands', sprBtnCommands);
    this.load.image('sprBtnCommandsDown', sprBtnCommandsDown);
    this.load.image('sprBtnScores', sprBtnScores);
    this.load.image('sprBtnScoresDown', sprBtnScoresDown);
    this.load.audio('sndBtnOver', sndBtnOver);
    this.load.audio('sndBtnDown', sndBtnDown);
    this.load.image('sprBtnBack', sprBtnBack);
    this.load.image('sprBtnBackDown', sprBtnBackDown);
    this.load.image('galaxy', galaxy);
    this.load.image('player', player);
    this.load.image('enemy', enemy);
    this.load.image('laserEnemy', laserEnemy);
    this.load.image('laserPlayer', laserPlayer);
    this.load.image('blueGem', blueGem);
    this.load.image('whiteGem', whiteGem);
    this.load.spritesheet('sprExplosion', sprExplosion, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.audio('sndExplode0', sndExplode0);
    this.load.audio('sndExplode1', sndExplode1);
    this.load.audio('Laser', Laser);
    this.load.image('topScores', topScores);
    this.load.image('sprBtnMenu', sprBtnMenu);
    this.load.image('sprBtnMenuDown', sprBtnMenuDown);
    this.load.image('gameover', gameover);
    this.load.image('sprBtnRestart', sprBtnRestart);
    this.load.image('sprBtnRestartDown', sprBtnRestartDown);
  }
}

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

window.game = new Game();
export default config;