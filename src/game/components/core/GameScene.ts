import { GameView } from "./GameView";
import { GameEventData, ViewConfig } from "./dataTypes";

export class GameScene extends Phaser.Scene {
    protected dim: { x: number, y: number };
    protected views: { [key: string]: GameView };

    init(data: object) {
        this.dim = { x: this.game.config.width as number, y: this.game.config.height as number }
    }

    addView<V extends GameView, C extends ViewConfig>(
        viewType: new (scene: Phaser.Scene, data: C) => V,
        config: C,
        ...events: GameEventData[]
    ): V {
        const newView: V = new viewType(this.scene.scene, config);
        this.views[config.key] = newView;
        this.add.existing(newView);
        events.forEach((event) => {
            newView.addListener(event.name, event.callback, event.context);
        });
        return newView;
    }

}