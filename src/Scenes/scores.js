import 'phaser';
import scoreAndAPI from '../api';

class scoresScene extends Phaser.Scene {
  constructor () {
    super('Scores');
  }
  preload () {
    this.load.image('topScores', './assets/images/top-scores.png');
    this.load.image('sprBtnMenu', './assets/images/sprBtnMenu.png');
    this.load.image('sprBtnMenuDown', './assets/images/sprBtnMenuDown.png');
  }
  create () {
    const player = 'Peter';
    const points = 200;

    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };

    const list = `
      <ol style="display: flex; flex-direction: column; align-items: flex-start; color: white; font-size: 25px; font-family: Courier;">
        <li>${player}, ${points}pts</li>
        <li>${player}, ${points}pts</li>
        <li>${player}, ${points}pts</li>
        <li>${player}, ${points}pts</li>
        <li>${player}, ${points}pts</li>
      </ol>
    `;

    this.add.image(640, 200, 'topScores');
    this.add.dom(640, 360).createFromHTML(list);

    this.btnMenu = this.add.sprite(640, 500, "sprBtnMenu");
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
  }
};

export default scoresScene;