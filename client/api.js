'use strict';

import axios from 'axios';

let getCities = () => axios.get('/cities');
let getCityByName = cityName => axios.get(encodeURI(`/cities/${cityName.trim()}`));
let addCityName = cityName => axios.post('/cities', {cityName});
let removeCityById = cityId => axios.delete(`/cities/${cityId}`);
let updateCityById = cityId => axios.put(`/cities/${cityId}`);

export default {
  getCities,
  getCityByName,
  addCityName,
  removeCityById,
  updateCityById
};
