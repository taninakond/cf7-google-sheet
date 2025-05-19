import defaultConfig from '@wordpress/scripts/config/webpack.config.js';
import CopyPlugin from 'copy-webpack-plugin';

import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const entries = Object.fromEntries(
  glob.sync('./source/**/*.js', { cwd: __dirname }).map((file) => [
    path.basename(file, '.js'),
    path.resolve(__dirname, file),
  ])
);

const isProduction = process.env.NODE_ENV === 'production';

export default {
  ...defaultConfig,
  entry: entries,
  mode: isProduction ? 'production' : 'development',
  externals: {
        sweetalert2: 'window.Swal'
    },
  output: {
    path: path.resolve(__dirname, 'assets/js/'),
    filename: '[name].js',
  },
  plugins: [
    ...(defaultConfig.plugins || []),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "source/assets/images"), to: path.resolve(__dirname, "assets/images") },
        { from: path.resolve(__dirname, "assets"), to: path.resolve(__dirname, "build/assets") },
        { from: path.resolve(__dirname, "core"), to: path.resolve(__dirname, "build/core") },
        { from: path.resolve(__dirname, "includes"), to: path.resolve(__dirname, "build/includes") },
        { from: path.resolve(__dirname, "models"), to: path.resolve(__dirname, "build/models") },
        { from: path.resolve(__dirname, "utils"), to: path.resolve(__dirname, "build/utils") },
        { from: path.resolve(__dirname, "vendors"), to: path.resolve(__dirname, "build/vendors") },
        { from: path.resolve(__dirname, "cf7-google-sheet.php"), to: path.resolve(__dirname, "build/cf7-google-sheet.php") },
        { from: path.resolve(__dirname, "readme.txt"), to: path.resolve(__dirname, "build/readme.txt") },
      ],
      options: {
        concurrency: 100,
      }
    }),
  ],
};
