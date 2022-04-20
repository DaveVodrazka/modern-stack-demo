const path = require("path");

module.exports = {
  entry: "./src/main.js",
  target: "browserslist",
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
    path: path.resolve(__dirname, "./dist/js"),
    filename: "[name].js",
  },
};
