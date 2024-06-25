import path from "path";
import { HotModuleReplacementPlugin, Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from "webpack-merge";
import baseConfig from "./base.config";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

let config: Configuration = merge(baseConfig, {
  devServer: {
    host: "0.0.0.0", // Required for docker
    static: path.resolve(__dirname, "../dist"),
    compress: true,
    open: true,
    port: 8080,
  },
  devtool: "inline-source-map",
  mode: "development",
  plugins: [
    new HotModuleReplacementPlugin(),
  ]
});

export default config;