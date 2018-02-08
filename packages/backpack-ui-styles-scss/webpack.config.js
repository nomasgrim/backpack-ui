const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const calc = require("postcss-calc");
const map = require("postcss-map");
const styles = require("@lonelyplanet/backpack-ui-styles").default;

const filename = "[name]";

const loaders = {
  css: {
    loader: "css-loader",
  },
  postcss: {
    loader: "postcss-loader",
    options: {
      plugins: () => [
        map({
          maps: [styles],
        }),
        calc(),
      ],
    },
  },
};

const plugins = [
  new ExtractTextPlugin(`${filename}.scss`),
];

module.exports = {
  entry: {
    index: "./src/index.scss",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `${filename}.scss`,
  },
  resolve: {
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [loaders.css, loaders.postcss],
        }),
      },
    ],
  },
  plugins,
};
