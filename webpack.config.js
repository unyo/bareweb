var autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./app.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]" },
      { test: /\.jade$/, loader: "jade-loader?self" },
      { test: /\.scss$/, loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass" },
      { test: /\.sass$/, loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?indentedSyntax" },
      { test: /\.woff$/, loader: "file-loader" },
      { test: /\.eot$/, loader: "file-loader" },
      { test: /\.ttf$/, loader: "file-loader" },
      { test: /\.html$/, loader: "html" },
      { test: /\.json$/, loader: "json-loader"},
      { test: /\.svg$/, loader: "file-loader" },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] } },
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },
  devtool: "#inline-source-map",
  resolve: {
    modulesDirectories: ["node_modules"]
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
  }
};
