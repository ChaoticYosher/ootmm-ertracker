import { InventoryButtonConfig } from "../../../../lib/TrackerTypes";
import { GameButton } from "../core/GameButton";
import { GameScene } from "../core/GameScene";

export class InventoryButton extends GameButton {
    constructor(scene: GameScene, data: InventoryButtonConfig) {
        super(scene, data);
    }
}