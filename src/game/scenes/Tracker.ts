import { EventBus } from '../EventBus';
import { GameScene } from '../components/core/GameScene';

export class Tracker extends GameScene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameText: Phaser.GameObjects.Text;

    constructor() {
        super('Tracker');
    }

    create(data: object) {
        this.camera = this.cameras.main;
        EventBus.emit('current-scene-ready', this);
    }

    changeScene() {
    }
}
