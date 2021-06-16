/* eslint no-tabs: ["error", { allowIndentationTabs: true }] */

import Phaser from 'phaser';
import scoreAndAPI from '../api';

class MenuScene extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  preload() {
    this.load.image('gameTitle', '../src/assets/images/game-title.png');
    this.load.image('sprBtnPlay', '../src/assets/images/sprBtnPlay.png');
    this.load.image('sprBtnPlayDown', '../src/assets/images/sprBtnPlayDown.png');
    this.load.image('sprBtnCommands', '../src/assets/images/sprBtnCommands.png');
    this.load.image('sprBtnCommandsDown', '../src/assets/images/sprBtnCommandsDown.png');
    this.load.image('sprBtnScores', '../src/assets/images/sprBtnScores.png');
    this.load.image('sprBtnScoresDown', '../src/assets/images/sprBtnScoresDown.png');
    this.load.audio('sndBtnOver', '../src/assets/sound/sndBtnOver.wav');
    this.load.audio('sndBtnDown', '../src/assets/sound/sndBtnDown.wav');
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.add.image(640, 100, 'gameTitle');
    const text = this.add.text(555, 180, 'New Pilot', { color: '#fff', fontSize: '25px' });

    const form = `
      <form style="display: flex; border-radius: 15px; border: 2px solid #fff;">
        <input type="text" name="nameField" placeholder="Enter your name" style="font-size: 20px; font-family: Courier; width: 250px; border: none; background: transparent; color: #fff; padding-top: 5px; padding-left: 10px;">
		    <input type="button" name="saveBtn" value="Go!" style="font-size: 18px; font-family: Courier; border-radius: 15px; background: #3f93df; border: none; padding: 10px 5px 5px 10px; margin-right: 0;">
      </form>
    `;
    const element = this.add.dom(600, 250).createFromHTML(form);
    element.addListener('click');
    element.on('click', (event) => {
      if (event.target.name === 'saveBtn') {
        const inputUsername = this.getChildByName('nameField');
        if (inputUsername.value !== '') {
          this.removeListener('click');
          this.setVisible(false);
          const inputName = inputUsername.value;
          text.setText(`Let's go, ${inputName}!`);
          scoreAndAPI.userName(inputName);
        } else {
          this.setVisible(true);
        }
      }
    });

    this.btnPlay = this.add.sprite(620, 330, 'sprBtnPlay');
    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnOver.play();
    }, this);
    this.btnPlay.on('pointerout', () => {
      this.setTexture('sprBtnPlay');
    });
    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);
    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('Game');
    }, this);

    this.btnCommands = this.add.sprite(620, 400, 'sprBtnCommands');
    this.btnCommands.setInteractive();
    this.btnCommands.on('pointerover', () => {
      this.btnCommands.setTexture('sprBtnCommandsDown');
      this.sfx.btnOver.play();
    }, this);
    this.btnCommands.on('pointerout', () => {
      this.setTexture('sprBtnCommands');
    });
    this.btnCommands.on('pointerdown', () => {
      this.btnCommands.setTexture('sprBtnCommandsDown');
      this.sfx.btnDown.play();
    }, this);
    this.btnCommands.on('pointerup', () => {
      this.btnCommands.setTexture('sprBtnCommands');
      this.scene.start('Commands');
    }, this);

    this.btnScores = this.add.sprite(620, 470, 'sprBtnScores');
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

export default MenuScene;