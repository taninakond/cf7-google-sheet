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
      ],
      options: {
        concurrency: 100,
      }
    }),
  ],
};
