import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { Configuration } from 'webpack';
import { merge } from "webpack-merge";
import baseConfig from "./base.config";

let config: Configuration = merge(baseConfig, {
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  mode: "production",
  plugins: [
    new CleanWebpackPlugin()
  ]
});

export default config;