import { AUTO, Game } from 'phaser';
import { Boot } from './scenes/Boot';
import { Preloader } from './scenes/Preloader';
import { Tracker } from './components/tracker/Tracker';
import { MapEditor } from './scenes/MapEditor';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#ea7a55',
    physics: {
        arcade: {
            debug: process.env.NODE_ENV === 'development',
        },
    },
    scene: [
        Boot,
        Preloader,
        Tracker,
        MapEditor
    ]
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
}

export default StartGame;
