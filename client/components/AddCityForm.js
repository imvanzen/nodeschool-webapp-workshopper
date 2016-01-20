import React from 'react';
import {
  Input,
  Button,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

import cityService from '../services/CitiesService';

class AddCityForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      searchedCityName: null,
      searchResult: cityService.searchResult
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({
      searchResult: cityService.searchResult,
      isLoading: false
    });
  }

  componentWillMount() {
    cityService.subscribe(this.onChange);
  }

  componentWillUnmount() {
    cityService.unsubscribe(this.onChange);
  }

  handleChange(event) {
    let {value: searchedCityName} = event.target;

    this.setState({
      searchedCityName,
      isLoading: true
    });

    cityService.getCityByName(searchedCityName);
  }

  handleClick(selectedCityName) {
    this.setState({isLoading: true});
    cityService.addCity(selectedCityName);
  }

  render() {
    const {isLoading, searchedCityName, searchResult} = this.state;
    const cityName = searchResult ? searchResult.name : null;

    const addCityButtonInstance = (
      <Button bsStyle="primary"
              disabled={isLoading || !searchResult}
              onClick={!isLoading ? this.handleClick.bind(this, cityName) : null}>
        {isLoading ? 'Adding...' : 'Add City'}
      </Button>
    );

    const addCityInput = (
      <Input buttonAfter={addCityButtonInstance}
             bsSize="large"
             ref="cityInput"
             placeholder="Enter searching city name"
             type="text"
             onChange={this.handleChange.bind(this)}
             value={searchedCityName}/>
    );

    const searchResultNode = (
      <div>
        {
          isLoading ?
            <div>Spinner Loading</div> :
            <div>Results for '<i>{searchedCityName}</i>': <b>{cityName || 'No results!'}</b></div>
        }
      </div>
    );

    return (
      <div id="AddCityForm">
        {addCityInput}
        {
          searchedCityName !== null ?
            searchResultNode :
            null
        }
      </div>
    );
  }
}

export default AddCityForm;
