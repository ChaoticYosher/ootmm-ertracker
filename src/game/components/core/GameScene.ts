import { GameView } from "./GameView";
import { GameEventData, ViewConfig } from "./dataTypes";

export class GameScene extends Phaser.Scene {
    views: { [key: string]: GameView };
    addView<V extends GameView, C extends ViewConfig>(
        viewType: new (scene: Phaser.Scene, data: C) => V,
        config: C,
        ...events: GameEventData[]
    ): V {
        let newView: V = new viewType(this.scene.scene, config);
        this.views[config.key] = newView;
        this.add.existing(newView);
        events.forEach((event) => {
            newView.addListener(event.name, event.callback, event.context);
        });
        return newView;
    }

}