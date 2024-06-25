import { GameScene } from '../components/core/GameScene';

export class Preloader extends GameScene {
    constructor() {
        super('Preloader');
    }

    init(data: object) {
        super.init(data);
        //  We loaded this image in our Boot Scene, so we can display it here
        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0x49089B);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0x49089B);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress: number) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload() {
        //  Load the assets for the game - Replace with your own assets
        this.load.atlas('er-icons', 'er-icons.png', 'er-icons.json');
        this.load.atlas('misc', 'misc.png', 'misc.json');
        this.load.json('er-data', 'er-data.json');
    }

    create() {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('Tracker', { scene: "Kakariko Village" });
    }
}
