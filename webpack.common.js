const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const SVGSpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const PATHS = {
  src: path.resolve(__dirname, 'assets'),
  dist: path.join(process.cwd(), 'theme/assets'),
};

const settings = {
  host: 'localhost',
  port: 3001,
  proxy: 'localhost:9090',
};

module.exports = {
  entry: {
    main: `${PATHS.src}/scripts/functions.js`,
  },
  resolve: {
    alias: {
      styles: `${PATHS.src}/styles/`,
      icons: `${PATHS.src}/icons/`,
      '@': `${PATHS.src}/vue/`,
    },
  },
  output: {
    filename: '[name].js',
    path: `${PATHS.dist}`,
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          emitWarning: true,
          fix: true,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader',
        include: /fonts/,
        options: {
          name: '[name].[ext]',
          outputPath: './fonts/',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]',
              extract: true,
              spriteFilename: `./icons/icons.svg`,
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
    new CleanWebpackPlugin(),
    new BrowserSyncPlugin(
      {
        host: settings.host,
        port: settings.port,
        proxy: settings.proxy,
        open: false,
        files: [`${PATHS.dist}/**/*`],
      },
      {
        reload: false,
      },
    ),
    new StylelintWebpackPlugin({
      lintDirtyModulesOnly: true,
    }),
    new SVGSpriteLoaderPlugin({
      plainSprite: true,
    }),
    new VueLoaderPlugin(),
  ],
};
