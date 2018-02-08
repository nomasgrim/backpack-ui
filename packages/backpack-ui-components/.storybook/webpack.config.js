const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const atImport = require("postcss-import");
const map = require("postcss-map");
const tokens = require("@lonelyplanet/backpack-ui-styles").default;

const namespace = "lp"
const filename = "[name]";

const loaders = {
  css: {
    loader: "css-loader",
    options: {
      minimize: false,
      modules: true,
      localIdentName: `${namespace}-[name]__[local]--[hash:base64:5]`,
    },
  },
  postcss: {
    loader: "postcss-loader",
    options: {
      plugins: () => [
        atImport(),
        map({
          maps: [ tokens ],
        }),
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
    components: "../src/components/index.js",
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
};
