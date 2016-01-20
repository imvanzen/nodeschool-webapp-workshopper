import React from 'react';
import {
  Alert,
  Col,
  Grid,
  PageHeader,
  Panel,
  Row
} from 'react-bootstrap';

import AddCityForm from './AddCityForm';
import CitiesList from './CitiesList';

import cityService from '../services/CitiesService';

class WeatherInfo extends React.Component {

  constructor() {
    super();

    this.state = {
      citiesList: cityService.cities,
      alert: cityService.alert
    };

    this.onChange = this.onChange.bind(this);
    this.alertBlock = this.alertBlock.bind(this);
  }

  onChange() {
    this.setState({
      citiesList: cityService.cities,
      alert: cityService.alert
    });
  }

  componentWillMount() {
    cityService.subscribe(this.onChange);
    cityService.getCities();
  }

  componentWillUnmount() {
    cityService.unsubscribe(this.onChange);
  }

  alertBlock({message, type}) {
    if (message) {
      return (
        <Alert bsStyle={type}>
          {message}
        </Alert>
      );
    } else {
      return null;
    }
  }

  render() {
    let {alert, citiesList} = this.state;

    return (
      <Grid id="WeatherInfo">
        <Row>
          <Col xs={12} md={12}>
            <PageHeader>Hello Adventurer <br/>
              <small>Nodeschool React Workshopper</small>
            </PageHeader>
            <Panel>
              {this.alertBlock(alert)}
              <AddCityForm />
              <hr/>
              <CitiesList citiesList={citiesList}/>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default WeatherInfo;
