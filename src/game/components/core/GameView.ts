import { GameContainer } from "./GameContainer";
import { GameScene } from "./GameScene";
import { ViewConfig } from "./dataTypes";

export class GameView extends GameContainer {
  protected _scene: GameScene;
  constructor(scene: GameScene, data: ViewConfig) {
    let dim: { x: number; y: number } = data.dimension
      ? { ...data.dimension }
      : { x: 0, y: 0 };
    super(scene, dim.x, dim.y);
    this._scene = scene;
  }
  public init(data: ViewConfig): void { }

  public update(time: number, delta: number) { }
}
