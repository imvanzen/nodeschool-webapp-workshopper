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

class WeatherInfo extends React.Component {

  constructor() {
    super();

    this.state = {
      citiesList: []
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({
      citiesList: []
    });
  }

  render() {
    let {citiesList} = this.state;

    return (
      <Grid id="WeatherInfo">
        <Row>
          <Col xs={12} md={12}>
            <PageHeader>Hello Adventurer <br/>
              <small>Nodeschool React Workshopper</small>
            </PageHeader>
            <Panel>
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
