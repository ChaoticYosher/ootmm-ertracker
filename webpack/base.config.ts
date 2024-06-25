import ESLintPlugin from "eslint-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";
import { Configuration } from 'webpack';
import { merge } from "webpack-merge";
import assetConfig from "./assets.config";

let config: Configuration = merge(assetConfig, {
  target: "web",
  entry: {
    app: ["./src/main.tsx"],
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript"
            ]
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        include: [path.resolve(__dirname, "public")]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ["asset/resource"],
        include: [path.resolve(__dirname, "public")]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({ patterns: [{ from: "public", to: "./" }] }),
    new HtmlWebpackPlugin({
      title: 'OoTxMM ER Tracker',
      template: 'src/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"]
    }),
  ]
});

export default config;