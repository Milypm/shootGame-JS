import 'phaser';
import API from '../api';
import config from '../index';

class menuScene extends Phaser.Scene {
  constructor () {
    super('Menu');
  }
  preload () {
    this.load.image('gameTitle', './assets/images/game-title.png');
    this.load.image('sprBtnPlay', './assets/images/sprBtnPlay.png');
    this.load.image('sprBtnPlayDown', './assets/images/sprBtnPlayDown.png');
    this.load.image('sprBtnPlayHover', './assets/images/sprBtnPlayDown.png');
    this.load.image('sprBtnRestart', './assets/images/sprBtnRestart.png');
    this.load.image('sprBtnRestartDown', './assets/images/sprBtnRestartDown.png');
    this.load.image('sprBtnRestartHover', './assets/images/sprBtnRestartHover.png');
    this.load.image('sprBtnCommands', './assets/images/sprBtnCommands.png');
    this.load.image('sprBtnCommandsDown', './assets/images/sprBtnCommandsDown.png');
    this.load.image('sprBtnCommandsHover', './assets/images/sprBtnCommandsDown.png');
    this.load.image('sprBtnScores', './assets/images/sprBtnScores.png');
    this.load.image('sprBtnScoresDown', './assets/images/sprBtnScoresDown.png');
    this.load.image('sprBtnScoresHover', './assets/images/sprBtnScoresDown.png');
    this.load.audio("sndBtnOver", "./assets/sound/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "./assets/sound/sndBtnDown.wav");
  }
  create () {
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };
    this.add.image(640, 100, 'gameTitle');

    //Add new player name
    const text = this.add.text(555, 180, 'New Pilot', { color: '#fff', fontSize: '25px '});
    const form = `
      <form style="display: flex; border-radius: 15px; border: 2px solid #fff">
        <input type="text" name="nameField" placeholder="Enter your name" style="font-size: 20px; width: 250px; border: none; background: transparent; color: #fff; padding-left: 10px">
		    <input type="button" name="saveBtn" value="Save!" style="font-size: 18px; border-radius: 15px; background: #3f93df; border: none; padding: 5px 10px; margin-right: 0">
      </form>
    `;
    const element = this.add.dom(630, 250).createFromHTML(form);
    //element.setPerspective(800);
    element.addListener('click');
    element.on('click', function (event) {
        if (event.target.name === 'saveBtn')
        {
            var inputUsername = this.getChildByName('nameField');
            //  Have they entered anything?
            if (inputUsername.value !== '')
            {
                //  Turn off the click events
                this.removeListener('click');
                //  Hide the login element
                this.setVisible(false);
                //  Populate the text with whatever they typed in as the username!
                text.setText('Welcome ' + inputUsername.value);
                API.userName(inputUsername.value);
            }
            else
            {
                //  Flash the prompt
                this.setVisible(true);
            }
        }
    });

    // Game
    this.btnPlay = this.add.sprite(620, 350, "sprBtnPlay");
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
      this.scene.start("Game");
    }, this);

      // Commands
    this.btnCommands = this.add.sprite(620, 450, "sprBtnCommands");
    this.btnCommands.setInteractive();
    this.btnCommands.on("pointerover", function() {
      this.btnCommands.setTexture("sprBtnCommandsHover"); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);
    this.btnCommands.on("pointerout", function() {
      this.setTexture("sprBtnCommands");
    });
    this.btnCommands.on("pointerdown", function() {
      this.btnCommands.setTexture("sprBtnCommandsDown");
      this.sfx.btnDown.play();
    }, this);
    this.btnCommands.on("pointerup", function() {
      this.btnCommands.setTexture("sprBtnCommands");
      this.scene.start("Commands");
    }, this);

      // Scores
    this.btnScores = this.add.sprite(620, 550, "sprBtnScores");
    this.btnScores.setInteractive();
    this.btnScores.on("pointerover", function() {
      this.btnScores.setTexture("sprBtnScoresHover"); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
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

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width/2, config.height/2 - offset * 100, config.width, config.height)
    );
  }
};

export default menuScene;