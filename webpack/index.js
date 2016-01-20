'use strict';

import Promise from 'bluebird';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';
import {HOST, PORT, IS_PROD} from './config';

const ENV = IS_PROD ? 'PRODUCTION' : 'DEVELOPMENT';

Promise.promisifyAll([WebpackDevServer]);

const server = new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: 'errors-only'
});

server.listenAsync(PORT, HOST)
  .then(() => console.log(`[${ENV}] Webpack is working on ${HOST}:${PORT}`))
  .catch((err) => console.error(`[${ENV}] Webpack start failed: %s, %j`, err, err));
