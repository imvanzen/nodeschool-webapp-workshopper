'use strict';

import express from 'express';
import Promise from 'bluebird';
import swig from 'swig';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import setupRoutes from './routes';

import {HOST, PORT, IS_PROD} from './config';

const ENV = IS_PROD ? 'PRODUCTION' : 'DEVELOPMENT';

const app = Promise.promisifyAll(express());

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', `${__dirname}/../views`);
app.use(morgan('dev'));
app.use(bodyParser.json());

setupRoutes(app);

app.listenAsync(PORT, HOST)
    .then(() => console.log(`[${ENV}] NodeSchool Silesia Workshopper listening on ${HOST}:${PORT}`))
    .catch((err) => console.error(`[${ENV}] Server start failed: %s, %j`, err, err));