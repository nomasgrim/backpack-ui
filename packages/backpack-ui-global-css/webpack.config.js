const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const map = require("postcss-map");
const calc = require("postcss-calc");
const styles = require("../backpack-ui-styles").default;

const filename = "[name]";
const isProduction = process.env.NODE_ENV === "production";

const loaders = {
  css: {
    loader: "css-loader",
    options: {
      minimize: isProduction,
    },
  },
  postcss: {
    loader: "postcss-loader",
    options: {
      plugins: () => [
        map({
          maps: [styles],
        }),
        calc(),
        autoprefixer(),
      ],
    },
  },
};

const plugins = [
  new ExtractTextPlugin(`${filename}.css`),
];

module.exports = {
  entry: {
    common: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `${filename}.css`,
  },
  resolve: {
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [loaders.css, loaders.postcss],
        }),
      },
    ],
  },
  plugins,
};
