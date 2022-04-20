const path = require("path");

const isDevelopment = process.env.NODE_ENV === "development";

const legacyEntry = ["./src/polyfills/index.polyfills.js", "./src/index.js"];
const modernEntry = "./src/index.js";

const commonConfig = {
  // Consider using source maps by uncommenting the next line
  // devtool: 'source-map',
  optimization: {
    // Optimize both of your bundles
  },
  // Use watch if --mode=development
  watch: isDevelopment,
  watchOptions: {
    ignored: /node_modules/,
  },
};

const legacyConfig = {
  ...commonConfig,
  entry: legacyEntry,
  target: "browserslist:legacy",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: [/\bcore-js\b/, /\bwebpack\/buildin\b/],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist/legacy/js"),
    filename: "[name].js",
  },
};

const modernConfig = {
  ...commonConfig,
  entry: modernEntry,
  target: "browserslist:modern",
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "[name].js",
  },
};

module.exports = [legacyConfig, modernConfig];
