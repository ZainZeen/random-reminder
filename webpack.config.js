const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(mp3|wav|ogg|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]', // 保持文件名不变
            outputPath: 'static/', // 输出到静态目录
            publicPath: 'static/', // 公共路径
          },
        },
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
