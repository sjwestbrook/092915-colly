module.exports = {
  entry: './index.js',   // require the js files in index.js
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'  // must install babel
        query: {
          compact: false // counteracts error: the code generator has deoptimized the styling of [some file] as it exceeds the max of "100KB"
        }
      }
      // less not working yet
      // {
      //   test: /\.less$/,
      //   exclude: /node_modules/,
      //   loader: ExtractTextPlugin.extract('css!less')
      // }
    ]
  }
  // plugins: [
  //   new ExtractTextPlugin('public/bundle.css', {
  //       allChunks: true
  //   })
  // ]
};
