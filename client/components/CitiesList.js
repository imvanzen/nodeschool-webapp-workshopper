import React from 'react';
import {
  Button,
  ButtonGroup,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

import cityService from '../services/CitiesService';

class CitiesList extends React.Component {

  constructor(props) {
    super(props);
  }

  updateCityHandler(cityId) {
    return cityService.updateCity(cityId);
  }

  removeCityHandler(cityId) {
    return cityService.removeCity(cityId);
  }

  cityWeatherMetric(cityId, {main: {pressure, temp}, wind: {speed}}) {
    return (
      <div className="clearfix">
        <ul className="pull-left">
          <li><b>Temp:</b> {temp}&deg;C</li>
          <li><b>Wind speed:</b> {speed}m/s</li>
          <li><b>Pressure:</b> {pressure}hPa</li>
        </ul>
        <ButtonGroup className="pull-right">
          <Button bsSize="xsmall" bsStyle="info" onClick={this.updateCityHandler.bind(this, cityId)}>Update</Button>
          <Button bsSize="xsmall" bsStyle="danger" onClick={this.removeCityHandler.bind(this, cityId)}>Delete</Button>
        </ButtonGroup>
      </div>
    );
  };

  render() {
    const {citiesList} = this.props;

    const listOfCities = citiesList.map(({cityId, cityName, weatherInfo}, index) => (
      <ListGroupItem header={cityName} key={index}>
        {this.cityWeatherMetric(cityId, weatherInfo)}
      </ListGroupItem>
    ));

    const noCitiesInList = (
      <ListGroupItem>
        <i>No cities in store yet.<br/>Add new city using form above.</i>
      </ListGroupItem>
    );

    return (
      <ListGroup id="CitiesList">
        {listOfCities.length > 0 ? listOfCities : noCitiesInList}
      </ListGroup>
    );
  }
}

export default CitiesList;
