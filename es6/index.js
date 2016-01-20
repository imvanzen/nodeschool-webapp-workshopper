import express from 'express';
import Promise from 'bluebird';
import swig from 'swig';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import {HOST, PORT, IS_PROD} from './config';
import setupRoutes from './routes';

const ENV = IS_PROD ? 'PRODUCTION' : 'DEVELOPMENT';

const app = Promise.promisifyAll(express());

if (!IS_PROD) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
}

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', `${__dirname}/../views`);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/public', express.static(`${__dirname}/../public`));

setupRoutes(app);

app.listenAsync(PORT, HOST)
  .then(() => console.log(`[${ENV}] NodeSchool Silesia Workshopper listening on ${HOST}:${PORT}`))
  .catch((err) => console.error(`[${ENV}] Server start failed: %s, %j`, err, err));
