const path = require('path');

module.exports = {
  // 环境
  mode: 'none',
  
  entry: './src/index.js',
  output: {
    // 虚拟路径，不会真实生成
    publicPath: '/xuni/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      }
    ]
  },
  devServer: {
    // 端口号
    port: 8080,
    // 静态资源文件夹
    static: {
        directory: 'www'
    },
  },
};