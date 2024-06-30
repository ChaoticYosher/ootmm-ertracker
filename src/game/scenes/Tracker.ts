import { EventBus } from '../EventBus';
import { GameScene } from '../components/core/GameScene';
import { LayoutDataConfig } from '../../../lib/TrackerTypes';

export class Tracker extends GameScene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameText: Phaser.GameObjects.Text;
    layoutConfig: LayoutDataConfig;

    constructor() {
        super('Tracker');
    }

    preload() {
        this.layoutConfig = this.cache.json.get("layout");
    }

    create(data: object) {
        this.camera = this.cameras.main;
        console.log(this.layoutConfig);
        EventBus.emit('current-scene-ready', this);
    }

    changeScene() {
    }
}
