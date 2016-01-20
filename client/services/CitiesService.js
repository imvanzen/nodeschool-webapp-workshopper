import api from './../api';
import {EventEmitter} from 'events';
import _ from 'lodash';

const EVENT_CHANGE = 'change';

class CityService extends EventEmitter {
  constructor() {
    super();

    this._cities = [];
    this._alert = {
      message: null,
      type: null
    };
    this._searchResult = null;

    this.errorHandler = this.errorHandler.bind(this);
  }

  get cities() {
    return this._cities;
  }

  get alert() {
    return this._alert;
  }

  get searchResult() {
    return this._searchResult;
  }

  getCities() {
    api.getCities()
      .then(({data}) => {
        this._cities = data || [];
        this.emitChange();
      })
      .catch(this.errorHandler);
  }

  getCityByName(cityName) {
    return api.getCityByName(cityName)
      .then(({data}) => {
        this._searchResult = data;
        this.emitChange();
      })
      .catch(this.errorHandler);
  }

  addCity(city) {
    return api.addCityName(city)
      .then(({data}) => {
        this._cities.push(data);
        this.successHandler('Dodano nowe miasto');
        this.emitChange();
      })
      .catch(this.errorHandler);
  }

  removeCity(cityId) {
    api.removeCityById(cityId)
      .then(() => {
        let index = _.findIndex(this._cities, city => city.cityId === cityId);
        this._cities.splice(index, 1);
        this.successHandler('Usunieto miasto');
        this.emitChange();
      })
      .catch(this.errorHandler);
  }

  updateCity(cityId) {
    api.updateCityById(cityId)
      .then(({data}) => {
        let index = _.findIndex(this._cities, city => city.cityId === cityId);
        this._cities[index] = data;
        this.successHandler('Dane o pogodzie zostały zaktualizowane');
        this.emitChange();
      })
      .catch(this.errorHandler);
  }

  errorHandler({statusText}) {
    this.setAlert('danger', statusText);
  }

  successHandler(message) {
    this.setAlert('success', message);
  }

  setAlert(type, message) {
    this._alert = {
      message: message,
      type: type
    };

    setTimeout(() => {
      this._alert = {message: null, type: null};
      this.emitChange();
    }, 2500);

    this.emitChange();
  }

  emitChange() {
    this.emit(EVENT_CHANGE);
  }

  subscribe(callback) {
    this.addListener(EVENT_CHANGE, callback);
  }

  unsubscribe(callback) {
    this.removeListener(EVENT_CHANGE, callback);
  }
}

export default new CityService();
