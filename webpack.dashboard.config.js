import defaultConfig from '@wordpress/scripts/config/webpack.config.js';

import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const entries = Object.fromEntries(
  glob.sync('./source/*/*.js', { cwd: __dirname }).map((file) => [
    path.basename(file, '.js'),
    path.resolve(__dirname, file),
  ])
);

export default {
  ...defaultConfig,
  entry: entries,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'assets/js/'),
    filename: '[name].js',
  },
};
