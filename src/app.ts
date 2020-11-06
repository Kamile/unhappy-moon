import Phaser from "phaser";

class UnhappyMoonScene extends Phaser.Scene {
  private catMoon: Phaser.GameObjects.Image ;
  private blueCheese: Phaser.GameObjects.Image;

  constructor() {
    super("unhappyMoonKey");
  }
  preload() {
    this.load.image("logo", require("./assets/logo.png"));
    this.load.image("blue_cheese", require("./assets/blue_cheese.png"));
  }

  create() {
     this.catMoon = this.add.image(800, 500, "logo");
     this.blueCheese = this.add.image(100, 100, "blue_cheese")
  }

  update() {
    Phaser.Actions.RotateAroundDistance([this.blueCheese], this.catMoon, 0.001, 400);
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: '100%',
  height: '100%',
  scene: [UnhappyMoonScene]
};

new Phaser.Game(config)
