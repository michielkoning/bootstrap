const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const SVGSpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const PATHS = {
  assets: path.resolve(__dirname, 'assets'),
  src: path.resolve(__dirname, 'src'),
};

const settings = {
  host: 'localhost',
  port: 3001,
  proxy: 'localhost:9090',
};

module.exports = {
  entry: {
    main: `${PATHS.theme}/scripts/functions.js`,
    assets: `${PATHS.theme}/scripts/assets.js`,
  },
  resolve: {
    alias: {
      defaults: `${PATHS.defaults}/`,
      styles: `${PATHS.theme}/styles/`,
      icons: `${PATHS.theme}/icons/`,
      images: `${PATHS.theme}/images/`,
    },
  },
  output: {
    filename: '[name].js',
    path: `${PATHS.assets}/scripts`,
  },
  stats: {
    children: false,
  },
  module: {
    rules: [
      // Run JS through Babel Loader before bundling it to `scripts.js`
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          quiet: true,
          emitWarning: true,
          fix: true,
        },
      },
      {
        test: /\.css$/,
        enforce: 'pre',
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'style-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader',
        include: /fonts/,
        options: {
          name: '[name].[ext]',
          outputPath: './../fonts',
        },
      },
      {
        test: /\.svg$/,
        exclude: /favicons/, // dit moet eigenlijk gewoon een regex worden
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]',
              extract: true,
              spriteFilename: './../icons/icons.svg',
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false },
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.assets]),
    new BrowserSyncPlugin(
      {
        host: settings.host,
        port: settings.port,
        proxy: settings.proxy,
        open: false,
        files: [`${PATHS.assets}/**/*`, './**/*.php'],
      },
      {
        reload: false,
      },
    ),
    new StyleLintPlugin({
      lintDirtyModulesOnly: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new SVGSpriteLoaderPlugin({
      plainSprite: true,
    }),
  ],
};
