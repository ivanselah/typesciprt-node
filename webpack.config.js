const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/client/js/main.js',
  mode: 'development',
  watch: true, // 변경시 마다 수동으로 해주는 것이 아니라 watch 하고있음
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
  ],
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'assets'),
    clean: true, // output folder를 build 전 clean 하게
  },
  module: {
    rules: [
      {
        test: /\.js$/, // js 파일들을 가져다가
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};
