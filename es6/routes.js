'use strict';

import citiesService from './services/CitiesService';
import {HTTP_CODES} from './utils';

let errorLogHandler = (res, methodName) => {
  return ({data, message}) => {
    console.log(`[ERROR][Routes][${methodName}] ${JSON.stringify(data || message, null, 2)}`);
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).end();
  };
};

let getListOfCities = (req, res) => {
  citiesService.getCities()
    .then(data => res.status(data.length > 0 ? HTTP_CODES.OK : HTTP_CODES.NO_CONTENT).json(data))
    .catch(errorLogHandler(res, 'getListOfCities'));
};

let getCityByName = (req, res) => {
  let {cityName} = req.params;
  citiesService.getCityByName(decodeURI(cityName))
    .then(({cod, name = cityName, ...weatherInfo}) => res.status(cod).json({name, weatherInfo}))
    .catch(errorLogHandler(res, 'getCityByName'));
};

let addCityToList = (req, res) => {
  let {cityName} = req.body;
  citiesService.addCity(cityName)
    .then(cityData => res.send(cityData))
    .catch(errorLogHandler(res, 'addCityToList'));
};

let removeCity = (req, res) => {
  let {cityId} = req.params;
  citiesService.removeCity(cityId)
    .then(() => res.send(HTTP_CODES.NO_CONTENT).end())
    .catch(errorLogHandler(res, 'removeCity'));
};

let updateCity = (req, res) => {
  let {cityId} = req.params;
  citiesService.updateCity(cityId)
    .then(cityData => res.send(cityData))
    .catch(errorLogHandler(res, 'getCityByName'));
};

export default (app) => {
  app.get('/', (req, res) => res.render('index'));

  app.get('/cities', getListOfCities);
  app.get('/cities/:cityName', getCityByName);
  app.delete('/cities/:cityId', removeCity);
  app.post('/cities', addCityToList);
  app.put('/cities/:cityId', updateCity);
};
