import path from "path";
import { Configuration } from "webpack";
const WebpackFreeTexPacker: any = require("webpack-free-tex-packer");

let sources = [
    ["assets/er-icons/oot", "assets/er-icons/mm"],
    ["assets/er-maps/oot", "assets/er-maps/mm"],
    ["assets"],
];
sources.map(sourceList => sourceList.map(source => path.resolve(__dirname, source)))

let packOptions = [
    {
        textureName: "er-icons",
        width: 512,
        height: 512,
        fixedSize: false,
        padding: 2,
        allowRotation: false,
        detectIdentical: true,
        allowTrim: true,
        exporter: "Phaser3",
        removeFileExtension: true,
        prependFolderName: false
    },
    {
        textureName: "er-maps",
        width: 2048,
        height: 2048,
        fixedSize: false,
        padding: 2,
        allowRotation: false,
        detectIdentical: true,
        allowTrim: true,
        exporter: "Phaser3",
        removeFileExtension: true,
        prependFolderName: false
    },
    {
        textureName: "misc",
        width: 2048,
        height: 2048,
        fixedSize: false,
        padding: 2,
        allowRotation: true,
        detectIdentical: true,
        allowTrim: true,
        exporter: "Phaser3",
        removeFileExtension: true,
        prependFolderName: false
    },
];

const assetConfig: Configuration = {
    plugins: sources.map((source, index) => new WebpackFreeTexPacker(source, "", packOptions[index]))
}

export default assetConfig;