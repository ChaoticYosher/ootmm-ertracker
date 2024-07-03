import { EventBus } from '../EventBus';
import { GameScene } from '../components/core/GameScene';
import { LayoutDataConfig } from '../../../lib/TrackerTypes';
import { EntranceDataConfig } from '../../../lib/EntranceTypes';

export class MapEditor extends GameScene {
    layoutConfig: LayoutDataConfig;
    entranceConfig: EntranceDataConfig;

    constructor() {
        super('MapEditor');
    }

    preload() {
        this.layoutConfig = this.cache.json.get("layout");
        this.entranceConfig = this.cache.json.get("er");
    }

    create(data: object) {
        EventBus.emit('current-scene-ready', this);
    }

    changeScene() {
    }
}
