const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: path.join(__dirname, "server", "index.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
