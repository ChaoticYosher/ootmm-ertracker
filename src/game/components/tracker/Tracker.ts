import { EntranceDataConfig } from '../../../../lib/EntranceTypes';
import { LayoutDataConfig } from '../../../../lib/TrackerTypes';
import { EventBus } from '../../EventBus';
import { GameScene } from '../core/GameScene';
import { InventoryView } from './InventoryView';

export class Tracker extends GameScene {
    layoutConfig: LayoutDataConfig;
    entranceConfig: EntranceDataConfig;
    inventoryView: InventoryView;

    constructor() {
        super('Tracker');
    }

    preload() {
        this.layoutConfig = this.cache.json.get("layout");
        this.entranceConfig = this.cache.json.get("er");
    }

    create(data: object) {
        this.inventoryView = this.addView(InventoryView, this.layoutConfig.inventory)
        this.inventoryView.init();
        EventBus.emit('current-scene-ready', this);
    }

    changeScene() {
    }
}