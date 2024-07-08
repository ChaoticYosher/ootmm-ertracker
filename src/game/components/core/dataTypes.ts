export interface ElementConfig {
  objectType?: new (scene: Phaser.Scene, data: any, ...args: any[]) => any;
  x?: number;
  y?: number;
  scale?: XYPair;
  origin?: XYPair;
}

export interface XYPair {
  x: number;
  y: number;
}

export interface BoxConfig {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface TintConfig {
  bl?: number | string;
  br?: number | string;
  tl?: number | string;
  tr?: number | string;
}

export interface Element {
  new(scene: Phaser.Scene, data: ElementConfig, ...args: any[]): Element;
}

export interface SpriteConfig extends ElementConfig {
  texture: string;
  frame?: string;
  tint?: TintConfig;
  alpha?: number;
}

export interface TextConfig
  extends Phaser.Types.GameObjects.Text.TextConfig,
  ElementConfig {
  x?: number;
  y?: number;
  scale?: XYPair;
  origin?: XYPair;
}

export interface ViewConfig {
  key: string;
  dimension?: BoxConfig;
}

export interface ButtonConfig extends ElementConfig {
  button: SpriteConfig;
  text?: TextConfig;
}

export type CounterConfig = {
  background?: SpriteConfig;
  text: TextConfig;
  counterType?: 'increment' | 'decrement';
}

export interface GameEventData {
  name: string;
  callback: Function;
  context: any;
}
