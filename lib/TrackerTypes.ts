export type InventorySlotConfig = {
    path: string;
    location: string;
    max?: number;
};

export enum InventoryPreset {
    CrossKeys = "inventoryPresetCrosskeys",
}

export type InventoryViewConfig = {
    layouts: { [key: string]: InventorySlotConfig[][] }
    defaultLayout: string;
    inventoryLocation: { x: number, y: number };
};

export type MainMapViewConfig = {};

export type SummaryMapViewConfig = {}

export type LayoutDataConfig = {
    inventory: InventoryViewConfig;
    map: MainMapViewConfig;
    summaryMap: SummaryMapViewConfig;
}

export type EntranceDataConfig = {}