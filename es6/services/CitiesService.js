'use strict';

import Promise from 'bluebird';
import Firebase from 'firebase';

import WeatherApi from './WeatherApi';
import CitiesDao from './CitiesDao';

class CitiesService {

  getCities() {
    return CitiesDao.getCitiesList();
  }

  getCityByName(cityName) {
    return WeatherApi.getWeather(cityName);
  }

  addCity(cityName) {
    return this.getCityByName(cityName)
      .then(({cod, name: cityName, ...weatherInfo}) => {
        return CitiesDao.addCity(cityName, weatherInfo)
          .then(cityId => {
            return {cityId, cityName, weatherInfo};
          });
      });
  }

  removeCity(cityId) {
    return CitiesDao.removeCity(cityId);
  }

  updateCity(cityId) {
    return CitiesDao.getCityById(cityId)
      .then(({cityName}) => {
        return WeatherApi.getWeather(cityName)
          .then(({cod, name: cityName, ...weatherInfo}) => {
            return CitiesDao.updateCity(cityId, cityName, weatherInfo)
              .then(() => {
                return {cityId, cityName, weatherInfo};
              });
          });
      });
  }
}

export default new CitiesService();
