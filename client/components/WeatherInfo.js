import React from 'react';
import {
  Alert,
  Col,
  Grid,
  PageHeader,
  Panel,
  Row
} from 'react-bootstrap';


class WeatherInfo extends React.Component {
  render() {
    return (
      <Grid id="WeatherInfo">
        <Row>
          <Col xs={12} md={12}>
            <PageHeader>Hello Adventurer <br/>
              <small>Nodeschool React Workshopper</small>
            </PageHeader>
            <Panel>
              <p>No content here</p>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default WeatherInfo;
