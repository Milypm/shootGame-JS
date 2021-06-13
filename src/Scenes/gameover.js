import 'phaser';
import scoreAndAPI from '../api';

class gameOverScene extends Phaser.Scene {
  constructor () {
    super('GameOver');
  }
  preload () {
    this.load.image('gameOver', './assets/images/gameover!.png');
    this.load.image('sprBtnMenu', './assets/images/sprBtnMenu.png');
    this.load.image('sprBtnMenuDown', './assets/images/sprBtnMenuDown.png');
    this.load.image('sprBtnMenu', './assets/images/sprBtnMenu.png');
    this.load.image('sprBtnMenuDown', './assets/images/sprBtnMenuDown.png');
    this.load.image('sprBtnRestart', './assets/images/sprBtnRestart.png');
    this.load.image('sprBtnRestartDown', './assets/images/sprBtnRestartDown.png');
    this.load.image('sprBtnScores', './assets/images/sprBtnScores.png');
    this.load.image('sprBtnScoresDown', './assets/images/sprBtnScoresDown.png');
    this.load.audio("sndBtnOver", "./assets/sound/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "./assets/sound/sndBtnDown.wav");
  }
  create () {
    const score = scoreAndAPI.scoreForOver();

    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };

    this.add.image(640, 200, 'gameOver');
    this.add.text(425, 280, `Your Score: ${score} pts`, { color: '#fff', fontSize: '40px' });

    this.btnMenu = this.add.sprite(440, 440, "sprBtnMenu");
    this.btnMenu.setInteractive();
    this.btnMenu.on("pointerover", function() {
      this.btnMenu.setTexture("sprBtnMenuDown");
      this.sfx.btnOver.play();
    }, this);
    this.btnMenu.on("pointerout", function() {
      this.setTexture("sprBtnMenu");
    });
    this.btnMenu.on("pointerdown", function() {
      this.btnMenu.setTexture("sprBtnMenuDown");
      this.sfx.btnDown.play();
    }, this);
    this.btnMenu.on("pointerup", function() {
      this.btnMenu.setTexture("sprBtnMenu");
      this.scene.start("Menu");
    }, this);

    this.btnRestart = this.add.sprite(630, 440, "sprBtnRestart");
    this.btnRestart.setInteractive();
    this.btnRestart.on("pointerover", function() {
      this.btnRestart.setTexture("sprBtnRestartDown");
      this.sfx.btnOver.play();
    }, this);
    this.btnRestart.on("pointerout", function() {
      this.setTexture("sprBtnRestart");
    });
    this.btnRestart.on("pointerdown", function() {
      this.btnRestart.setTexture("sprBtnRestartDown");
      this.sfx.btnDown.play();
    }, this);
    this.btnRestart.on("pointerup", function() {
      this.btnRestart.setTexture("sprBtnRestart");
      this.scene.start("Game");
    }, this);

    this.btnScores = this.add.sprite(820, 440, "sprBtnScores");
    this.btnScores.setInteractive();
    this.btnScores.on("pointerover", function() {
      this.btnScores.setTexture("sprBtnScoresDown");
      this.sfx.btnOver.play();
    }, this);
    this.btnScores.on("pointerout", function() {
      this.setTexture("sprBtnScores");
    });
    this.btnScores.on("pointerdown", function() {
      this.btnScores.setTexture("sprBtnScoresDown");
      this.sfx.btnDown.play();
    }, this);
    this.btnScores.on("pointerup", function() {
      this.btnScores.setTexture("sprBtnScores");
      this.scene.start("Scores");
    }, this);
  }
};

export default gameOverScene;