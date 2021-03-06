/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

import Phaser from 'phaser';
import { getScores } from '../api';

class ScoresScene extends Phaser.Scene {
  constructor() {
    super('Scores');
  }

  create() {
    const arr = [];

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.add.image(640, 200, 'topScores');

    getScores().then((data) => {
      for (let i = 0; i < 5; i++) {
        if (data[i] !== undefined) {
          arr.push(data[i].user);
          arr.push(data[i].score);
        } else {
          arr.push('...');
        }
      }

      const list = `
      <ol style="display: flex; flex-direction: column; align-items: flex-start; color: white; font-size: 25px; font-family: Courier;">
        <li>${arr[0]} --- ${arr[1]} pts</li>
        <li>${arr[2]} --- ${arr[3]} pts</li>
        <li>${arr[4]} --- ${arr[5]} pts</li>
        <li>${arr[6]} --- ${arr[7]} pts</li>
        <li>${arr[8]} --- ${arr[9]} pts</li>
      </ol>
    `;
      this.add.dom(610, 360).createFromHTML(list);
    });

    this.btnMenu = this.add.sprite(620, 500, 'sprBtnMenu');
    this.btnMenu.setInteractive();
    this.btnMenu.on('pointerover', function () {
      this.btnMenu.setTexture('sprBtnMenuDown');
      this.sfx.btnOver.play();
    }, this);
    this.btnMenu.on('pointerout', function () {
      this.setTexture('sprBtnMenu');
    });
    this.btnMenu.on('pointerdown', function () {
      this.btnMenu.setTexture('sprBtnMenuDown');
      this.sfx.btnDown.play();
    }, this);
    this.btnMenu.on('pointerup', function () {
      this.btnMenu.setTexture('sprBtnMenu');
      this.scene.start('Menu');
    }, this);
  }
}

export default ScoresScene;