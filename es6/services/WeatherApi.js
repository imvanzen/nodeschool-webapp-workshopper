'use strict';

import requestPromise from 'request-promise';
import {WEATHER_API} from '../config';

class WeatherApi {

  constructor({API_ID, API_URL, LANG, UNITS}) {
    this.apiId = API_ID;
    this.apiUri = API_URL;
    this.lang = LANG;
    this.units = UNITS;
  }

  getWeather(city) {
    let options = {
      uri: this.apiUri,
      qs: {
        appId: this.apiId,
        lang: this.lang,
        q: city.trim(),
        units: this.units
      },
      json: true
    };

    return requestPromise(options)
      .catch(req => {
        console.log(`[ERROR][WeatherApi][getWeather][${city}] ${JSON.stringify(req, false, '  ')}`);
        return req;
      });
  }
}

export default new WeatherApi(WEATHER_API);
