import _ from 'lodash';
import Promise from 'bluebird';
import Firebase from 'firebase';
import Fireproof from 'fireproof';

import {DATABASE} from '../config';

Fireproof.bless(Promise);

class CitiesDao {

  constructor({DB_URL, USERNAME}) {
    this.dbRef = new Fireproof(new Firebase(DB_URL))
      .child(`user/${USERNAME}/citiesList`);
  }

  getCitiesList() {
    return this.dbRef.once('value')
      .then(snap => {
        let citiesMap = snap.val();
        return _.keys(citiesMap).map(key => {
            citiesMap[key].cityId = key;
            return citiesMap[key];
          }) || [];
      });
  }

  getCityById(cityId) {
    return this.dbRef.child(cityId).once('value')
      .then(snap => snap.val());
  }

  addCity(cityName, weatherInfo) {
    let itemRef = this.dbRef.push();
    return itemRef.set({cityName, weatherInfo}).then(() => {
      return itemRef.key();
    });
  }

  removeCity(cityId) {
    return this.dbRef.child(cityId).remove();
  }

  updateCity(cityId, cityName, weatherInfo) {
    return this.dbRef.child(cityId).update({cityName, weatherInfo});
  }
}

export default new CitiesDao(DATABASE);
