'use strict';

import Promise from 'bluebird';

import WeatherApi from './WeatherApi';

class CitiesService {

  getCities() {
    return [{1, "Katowice", weatherInfo: {main: {pressure: 1000, temp: 23}, wind: {speed: 2}}}];
  }

  getCityByName(cityName) {
    return WeatherApi.getWeather(cityName);
  }

  addCity(cityName) {
    return Promise.resolve({cityId, "Katowice", weatherInfo: {main: {pressure: 1000, temp: 23}, wind: {speed: 2}}})
  }

  removeCity(cityId) {
    return Promise.resolve(true);
  }

  updateCity(cityId) {
    return Promise.resolve({cityId, "Katowice", weatherInfo: {main: {pressure: 1000, temp: 23}, wind: {speed: 2}}})
  }
}

export default new CitiesService();
