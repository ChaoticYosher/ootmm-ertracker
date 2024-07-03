import { BoxConfig, SpriteConfig, ViewConfig, XYPair } from "../src/game/components/core/dataTypes";

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
}

export type InventoryViewConfig = ViewConfig & {
    icons: { [key: string]: InventorySlotConfig };
    layouts: Record<InventoryPreset, string[][]>;
    defaultLayout: string;
    inventoryLocation: {
        position: BoxConfig;
        anchor: XYPair;
    };
};

export type MainMapViewConfig = {};

export type SummaryMapViewConfig = {}

export type LayoutDataConfig = {
    inventory: InventoryViewConfig;
    map: MainMapViewConfig;
    summaryMap: SummaryMapViewConfig;
}