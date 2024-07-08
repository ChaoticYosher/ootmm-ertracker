import { BoxConfig, ButtonConfig, CounterConfig, SpriteConfig, ViewConfig, XYPair } from "../src/game/components/core/dataTypes";

export enum TrackerView {
    Inventory = "trackerViewInventory",
    Map = "trackerViewMap",
    Overlay = "trackerViewOverlay",
}

export type InventorySlotConfig = Partial<SpriteConfig> & {
    frame: string;
};

export enum InventoryPreset {
    CrossKeys = "inventoryPresetCrosskeys",
    Debug = "inventoryPresetDebug",
}

export type InventoryViewConfig = ViewConfig & {
    icons: { [key: string]: InventorySlotConfig };
    layouts: Record<InventoryPreset, string[][]>;
    defaultLayout: string;
    location: {
        position: BoxConfig;
        anchor: XYPair;
    };
    spacing: {
        min: XYPair;
        max: XYPair;
    }
};

export type InventoryButtonConfig = ButtonConfig & {
    counter?: CounterConfig
}

export type MainMapViewConfig = {};

export type SummaryMapViewConfig = {}

export type LayoutDataConfig = {
    inventory: InventoryViewConfig;
    map: MainMapViewConfig;
    summaryMap: SummaryMapViewConfig;
}