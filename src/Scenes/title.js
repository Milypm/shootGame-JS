import 'phaser';
import config from '../index';
// import '../styles/style.css';

class titleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }
  preload () {
    this.load.image('gameTitle', './assets/images/game-title.png');
    this.load.image('sprBtnPlay', './assets/images/sprBtnPlay.png');
    this.load.image('sprBtnPlayDown', './assets/images/sprBtnPlayDown.png');
    this.load.image('sprBtnPlayHover', './assets/images/sprBtnPlayHover.png');
    this.load.image('sprBtnRestart', './assets/images/sprBtnRestart.png');
    this.load.image('sprBtnRestartDown', './assets/images/sprBtnRestartDown.png');
    this.load.image('sprBtnRestartHover', './assets/images/sprBtnRestartHover.png');
    this.load.image('sprBtnOptions', './assets/images/sprBtnOptions.png');
    this.load.image('sprBtnOptionsDown', './assets/images/sprBtnOptionsDown.png');
    this.load.image('sprBtnOptionsHover', './assets/images/sprBtnOptionsHover.png');
    this.load.image('sprBtnScores', './assets/images/sprBtnScores.png');
    this.load.image('sprBtnScoresDown', './assets/images/sprBtnScoresDown.png');
    this.load.image('sprBtnScoresHover', './assets/images/sprBtnScoresHover.png');
    this.load.audio("sndBtnOver", "./assets/sound/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "./assets/sound/sndBtnDown.wav");
  }
  create () {
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };
    this.add.image(640, 100, 'gameTitle');
    // Game
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnPlay"
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on("pointerover", function() {
      this.btnPlay.setTexture("sprBtnPlayHover"); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);
    this.btnPlay.on("pointerout", function() {
      this.setTexture("sprBtnPlay");
    });
    this.btnPlay.on("pointerdown", function() {
      this.btnPlay.setTexture("sprBtnPlayDown");
      this.sfx.btnDown.play();
    }, this);
    this.btnPlay.on("pointerup", function() {
      this.btnPlay.setTexture("sprBtnPlay");
      this.scene.start("Game");;
    }, this);
    // this.playButton = this.add.image(100, 200, 'playBtn').setInteractive();;
    // this.centerButton(this.playButton, 1);

    // this.playButton.on('pointerdown', function (pointer) {
    //   this.scene.start('Game');
    // }.bind(this));

    // Options
    // this.optionsButton = this.add.sprite(300, 200, 'redButton1').setInteractive();
    // this.centerButton(this.optionsButton);

    // this.optionsText = this.add.text(0, 0, 'Options', { fontSize: '32px', fill: '#fff' });
    // this.centerButtonText(this.optionsText, this.optionsButton);

    // this.optionsButton.on('pointerdown', function (pointer) {
    //   this.scene.start('Options');
    // }.bind(this));

    // Credits
    // this.creditsButton = this.add.sprite(300, 200, 'redButton1').setInteractive();
    // this.centerButton(this.creditsButton, -1);

    // this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    // this.centerButtonText(this.creditsText, this.creditsButton);

    // this.creditsButton.on('pointerdown', function (pointer) {
    //   this.scene.start('Credits');
    // }.bind(this));

    // this.input.on('pointerover', function (event, gameObjects) {
    //   gameObjects[0].setTexture('redButton2');
    // });

    // this.input.on('pointerout', function (event, gameObjects) {
    //   gameObjects[0].setTexture('redButton1');
    // });

    // this.input.on('pointerover', function (event, gameObjects) {
    //   gameObjects[0].setTexture('redButton2');
    // });

    // this.input.on('pointerout', function (event, gameObjects) {
    //   gameObjects[0].setTexture('redButton1');
    // });
  }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width/2, config.height/2 - offset * 100, config.width, config.height)
    );
  }
   
  // centerButtonText (gameText, gameButton) {
  //   Phaser.Display.Align.In.Center(
  //     gameText,
  //     gameButton
  //   );
  // }
};

export default titleScene;