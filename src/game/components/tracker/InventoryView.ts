import { InventorySlotConfig, InventoryViewConfig } from "../../../../lib/TrackerTypes";
import { GameContainer } from "../core/GameContainer";
import { GameScene } from "../core/GameScene";
import { GameSprite } from "../core/GameSprite";
import { GameView } from "../core/GameView";

export class InventoryView extends GameView {
    config: InventoryViewConfig;
    container: GameContainer;
    constructor(scene: GameScene, data: InventoryViewConfig) {
        super(scene, data);
        this.config = data;
        this.container = new GameContainer(scene, data.inventoryLocation.position.x, data.inventoryLocation.position.y);
        let bounds: Phaser.Geom.Rectangle = new Phaser.Geom.Rectangle(
            -scene.width * data.inventoryLocation.position.w * 0.5,
            0,
            scene.width * data.inventoryLocation.position.w,
            scene.height * data.inventoryLocation.position.h
        )
        // this defines (0, 0) in the container as being the top middle of the bounding box
        this.container.x -= bounds.width * (data.inventoryLocation.anchor.x - 0.5);
        this.container.y -= bounds.height * (data.inventoryLocation.anchor.y);
        if (this.isDebug()) {
            let debugGraphics: Phaser.GameObjects.Graphics = new Phaser.GameObjects.Graphics(scene, {
                fillStyle: { color: 0x00ff00, alpha: 0.69 },
                lineStyle: { width: 3, color: 0x00ff00, alpha: 1 }
            });
            this.container.add(debugGraphics);
            debugGraphics.fillRectShape(bounds);
            debugGraphics.strokeRectShape(bounds);
            debugGraphics.strokeLineShape(new Phaser.Geom.Line(bounds.centerX, bounds.top, bounds.centerX, bounds.bottom))
            debugGraphics.strokeLineShape(new Phaser.Geom.Line(bounds.left, bounds.centerY, bounds.right, bounds.centerY));
            let debugCrosshair: Phaser.GameObjects.Graphics = new Phaser.GameObjects.Graphics(scene, {
                fillStyle: { color: 0x0000ff, alpha: 0.69 },
                lineStyle: { width: 12, color: 0x0000ff, alpha: 1 }
            });
            debugCrosshair.strokeLineShape(new Phaser.Geom.Line(scene.width * 0.5, 0, scene.width * 0.5, scene.height))
            debugCrosshair.strokeLineShape(new Phaser.Geom.Line(0, scene.height * 0.5, scene.width, scene.height * 0.5));
            this.add(debugCrosshair);
        }
        Object.values(this.config.icons).forEach((icon: InventorySlotConfig) => {
            let sprite: GameSprite = new GameSprite(scene, { texture: "er-icons", ...icon })
            this.container.add(sprite);
            sprite.x = Phaser.Math.Between(bounds.left, bounds.right);
            sprite.y = Phaser.Math.Between(bounds.top, bounds.bottom);
            console.log(this.container.x + sprite.x, this.container.y + sprite.y)
        });
    }
}