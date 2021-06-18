import Phaser from 'phaser';
import {scoreForOver} from '../api';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  preload() {
    this.load.image('gameOver', '../src/assets/images/gameover!.png');
    this.load.image('sprBtnMenu', '../src/assets/images/sprBtnMenu.png');
    this.load.image('sprBtnMenuDown', '../src/assets/images/sprBtnMenuDown.png');
    this.load.image('sprBtnRestart', '../src/assets/images/sprBtnRestart.png');
    this.load.image('sprBtnRestartDown', '../src/assets/images/sprBtnRestartDown.png');
  }

  create() {
    const score = scoreForOver();

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.add.image(640, 200, 'gameOver');
    this.add.text(425, 280, `Your Score: ${score} pts`, { color: '#fff', fontSize: '40px' });

    this.btnMenu = this.add.sprite(440, 440, 'sprBtnMenu');
    this.btnMenu.setInteractive();
    this.btnMenu.on('pointerover', () => {
      this.btnMenu.setTexture('sprBtnMenuDown');
      this.sfx.btnOver.play();
    }, this);
    this.btnMenu.on('pointerout', () => {
      this.setTexture('sprBtnMenu');
    });
    this.btnMenu.on('pointerdown', () => {
      this.btnMenu.setTexture('sprBtnMenuDown');
      this.sfx.btnDown.play();
    }, this);
    this.btnMenu.on('pointerup', () => {
      this.btnMenu.setTexture('sprBtnMenu');
      this.scene.start('Menu');
    }, this);

    this.btnRestart = this.add.sprite(630, 440, 'sprBtnRestart');
    this.btnRestart.setInteractive();
    this.btnRestart.on('pointerover', () => {
      this.btnRestart.setTexture('sprBtnRestartDown');
      this.sfx.btnOver.play();
    }, this);
    this.btnRestart.on('pointerout', () => {
      this.setTexture('sprBtnRestart');
    });
    this.btnRestart.on('pointerdown', () => {
      this.btnRestart.setTexture('sprBtnRestartDown');
      this.sfx.btnDown.play();
    }, this);
    this.btnRestart.on('pointerup', () => {
      this.btnRestart.setTexture('sprBtnRestart');
      this.scene.start('Game');
    }, this);

    this.btnScores = this.add.sprite(820, 440, 'sprBtnScores');
    this.btnScores.setInteractive();
    this.btnScores.on('pointerover', () => {
      this.btnScores.setTexture('sprBtnScoresDown');
      this.sfx.btnOver.play();
    }, this);
    this.btnScores.on('pointerout', () => {
      this.setTexture('sprBtnScores');
    });
    this.btnScores.on('pointerdown', () => {
      this.btnScores.setTexture('sprBtnScoresDown');
      this.sfx.btnDown.play();
    }, this);
    this.btnScores.on('pointerup', () => {
      this.btnScores.setTexture('sprBtnScores');
      this.scene.start('Scores');
    }, this);
  }
}

export default GameOverScene;