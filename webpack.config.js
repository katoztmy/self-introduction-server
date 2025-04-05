const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  // entry: './server/index.js' - ビルドの開始点となるファイルを指定
  entry: path.join(__dirname, "server", "index.js"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  // nodeExternals() - node_modules内のパッケージをバンドルから除外
  // サーバーサイドでは必要ないため、バンドルサイズを小さくするために除外します
  externals: [nodeExternals()],

  // module - ファイルの変換ルールを指定
  module: {
    rules: [
      {
        // exclude - 変換から除外するファイル
        // node_modules内のファイルは既に変換されているため除外します
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
