import Phaser from 'phaser';

class CommandsScene extends Phaser.Scene {
  constructor() {
    super('Commands');
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    const div = `
      <div style="display: flex; flex-direction: column; align-items: flex-start; color: white; font-size: 20px; font-family: Courier;">
        <div style="display: flex">  
          <p>> Use the arrow keys for moving the spaceship: UP, DOWN, LEFT, RIGHT</p>
          <img src="../src/assets/images/move-keys.png" style="width: 90px; height: 60px; margin-left: 20px">
        </div>
        <p>> Avoid collisions with enemies and their lasers</p>
        <p>> Use the SPACEBAR for shooting enemies and win points!</p>
        <p>> Move the spaceship to collect blue and white gems and win points!</p>
      </div>
    `;
    this.add.dom(640, 200).createFromHTML(div);

    this.btnBack = this.add.sprite(300, 400, 'sprBtnBack');
    this.btnBack.setInteractive();
    this.btnBack.on('pointerover', function () {
      this.btnBack.setTexture('sprBtnBackDown');
      this.sfx.btnOver.play();
    }, this);
    this.btnBack.on('pointerout', function () {
      this.setTexture('sprBtnBack');
    });
    this.btnBack.on('pointerdown', function () {
      this.btnBack.setTexture('sprBtnBackDown');
      this.sfx.btnDown.play();
    }, this);
    this.btnBack.on('pointerup', function () {
      this.btnBack.setTexture('sprBtnBack');
      this.scene.start('Menu');
    }, this);
  }
}

export default CommandsScene;