const path = require("path");

module.exports = {
  // input
  entry: "./src",
  //output
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  //transformations
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015", "stage-0"],
          plugins: [
            [
              "transform-react-jsx",
              { pragma: "h" }
            ]
          ]
        }
      }
    ]
  },

  //sourcemaps
  devtool: "source-map",

  //server
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    historyApiFallback: true
  }
};
