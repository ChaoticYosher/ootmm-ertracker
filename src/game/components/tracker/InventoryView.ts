import { InventorySlotConfig, InventoryViewConfig } from "../../../../lib/TrackerTypes";
import { GameContainer } from "../core/GameContainer";
import { GameScene } from "../core/GameScene";
import { GameSprite } from "../core/GameSprite";
import { GameView } from "../core/GameView";
import { SpriteConfig, XYPair } from "../core/dataTypes";

export class InventoryView extends GameView {
    config: InventoryViewConfig;
    container: GameContainer;
    bounds: Phaser.Geom.Rectangle;
    constructor(scene: GameScene, data: InventoryViewConfig) {
        super(scene, data);
        this.config = data;
        this.container = new GameContainer(scene, data.location.position.x, data.location.position.y);
        this.bounds = new Phaser.Geom.Rectangle(
            -scene.width * data.location.position.w * 0.5,
            -scene.height * data.location.position.h * 0.5,
            scene.width * data.location.position.w,
            scene.height * data.location.position.h
        )
        this.createDebugInventorySpace(scene);
        // this defines (0, 0) in the container as being the top middle of the bounding box
        this.container.x -= this.bounds.width * (data.location.anchor.x - 0.5);
        this.container.y -= this.bounds.height * (data.location.anchor.y - 0.5);
        let layout: string[][] = this.config.layouts[this.config.defaultLayout]
        let maxRowLength = layout.map(row => row.length).reduce((max, length) => Math.max(max, length), 0)
        let cellSize: XYPair = { x: this.bounds.width / maxRowLength, y: this.bounds.height / layout.length };
        cellSize.x = Math.max(Math.min(cellSize.x, this.config.spacing.max.x), this.config.spacing.min.x);
        cellSize.y = Math.max(Math.min(cellSize.y, this.config.spacing.max.y), this.config.spacing.min.y);
        let colLength = (layout.length - 1) * cellSize.y;
        for (let row = 0; row < layout.length; row++) {
            for (let col = 0; col < layout[row].length; col++) {
                let rowLength = (layout[row].length - 1) * cellSize.x;
                let iconName: string = layout[row][col].split(":")[0];
                let config: SpriteConfig = { texture: "er-icons", ...this.config.icons[iconName] }
                let sprite: GameSprite = new GameSprite(scene, { texture: "er-icons", ...config })
                this.container.add(sprite);
                sprite.x = -rowLength * 0.5 + cellSize.x * col;
                sprite.y = -colLength * 0.5 + cellSize.y * row;
            }
        }
    }

    init() {
    }

    protected createDebugInventorySpace(scene: GameScene): void {
        if (this.isDebug()) {
            let debugGraphics: Phaser.GameObjects.Graphics = new Phaser.GameObjects.Graphics(scene, {
                fillStyle: { color: 0x00ff00, alpha: 0.69 },
                lineStyle: { width: 3, color: 0x00ff00, alpha: 1 }
            });
            this.container.add(debugGraphics);
            debugGraphics.fillRectShape(this.bounds);
            debugGraphics.strokeRectShape(this.bounds);
            debugGraphics.strokeLineShape(new Phaser.Geom.Line(this.bounds.centerX, this.bounds.top, this.bounds.centerX, this.bounds.bottom))
            debugGraphics.strokeLineShape(new Phaser.Geom.Line(this.bounds.left, this.bounds.centerY, this.bounds.right, this.bounds.centerY));
            let debugCrosshair: Phaser.GameObjects.Graphics = new Phaser.GameObjects.Graphics(scene, {
                fillStyle: { color: 0x0000ff, alpha: 0.69 },
                lineStyle: { width: 12, color: 0x0000ff, alpha: 1 }
            });
            debugCrosshair.strokeLineShape(new Phaser.Geom.Line(scene.width * 0.5, 0, scene.width * 0.5, scene.height))
            debugCrosshair.strokeLineShape(new Phaser.Geom.Line(0, scene.height * 0.5, scene.width, scene.height * 0.5));
            this.add(debugCrosshair);
        }
    }
}