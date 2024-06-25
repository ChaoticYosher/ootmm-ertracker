import React, { useRef } from 'react';
import { IRefPhaserGame, PhaserGame } from './game/PhaserGame';

function App() {
    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef<IRefPhaserGame | null>(null);

    // Event emitted from the PhaserGame component
    const currentScene = (scene: Phaser.Scene) => {

    }

    return (
        <div id="app">
            <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
            {/* see what we can do about making the phaser ref available to the children components with context providers */}
            {/* start with props passing though */}
            {/* add buttons for zoom to Full, zoom to OoT/MM, then map produce buttons for */}
            {/* flex lined up in a grid on the side */}
            {/* add checkmark buttons for each type of entrance along the bottom */}
        </div>
    )
}

export default App
