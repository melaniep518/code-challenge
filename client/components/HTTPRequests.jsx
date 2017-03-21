/* This component will make all HTTP requests, except for POST request, as well as render in the
 * browser any data we recieve from GET requests
 */

import React, { Component } from 'react';
import axios from 'axios';
import DisplayContent from './DisplayContent';
import PersonForm from './PersonForm';

class HTTPRequests extends Component {
  constructor() {
    super();
    this.state = {
      axiosResponseData: null,
    }
    this.getPeople = this.getPeople.bind(this);
    this.updateFavoriteCities = this.updateFavoriteCities.bind(this);
    this.getPerson = this.getPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
    this.getNewestPerson = this.getNewestPerson.bind(this);
  }
  
  getPeople() {
    axios.get('/people')
    .then(people => {
      this.setState({ axiosResponseData: people.data })
    });
  }

  updateFavoriteCities() {
    axios.put('/people');
  }
  
  getPerson() {
    axios.get('/people/1')
    .then(person => {
      this.setState({ axiosResponseData: person.data })
    });
  }

  deletePerson() {
    axios.delete('/people/1');
  }

  getNewestPerson() {
    axios.get('/people/newest')
    .then(person => {
      this.setState({ axiosResponseData: person.data })
    })
  }

  render() {
    const { axiosResponseData } = this.state;

    const headerStyle = {
      fontWeight: 'normal' 
    }

    let content;

    /* if axios request returns an array of people, map over it to display name and favorite city 
     * for each index
     */
    if(axiosResponseData) {
      if(axiosResponseData.constructor === Array) {
        content = axiosResponseData.map((val, idx) => {
          return <DisplayContent key={idx} person={val.name} city={val.City.name} />
        })
      }
      else if(typeof axiosResponseData === 'object') {
        content = <DisplayContent person={axiosResponseData.name} city={axiosResponseData.City.name} />
      }
    }

    return (
      <div>
        
        <h4 style={headerStyle}>1. Click "GET People" to make a GET request to /people and get all people</h4>
        <button onClick={this.getPeople}>GET People</button>
        
        <h4 style={headerStyle}>2. Click "Create Person" to make a POST request to /people, and create a new person</h4>
        <PersonForm/>
        
        <h4 style={headerStyle}>3. Click "GET Newest Person" to make a GET request to retrieve the object created in the previous request</h4>
        <button onClick={this.getNewestPerson}>GET Newest Person</button>
        
        <h4 style={headerStyle}>4. Click "UPDATE Favorite Cities" to make a PUT request to /people and modify the attribute city to be “Brooklyn”</h4>
        <button onClick={this.updateFavoriteCities}>UPDATE Favorite Cities</button>
        
        <h4 style={headerStyle}>5. Click "GET Person" to make a GET request to /people/1 and get the person with an id attribute of 1</h4>
        <button onClick={this.getPerson}>GET Person</button>
        
        <h4 style={headerStyle}>6. Click "DELETE Person" to make a DELETE request to /people/1 and delete the person with an id attribute of 1</h4>
        <button onClick={this.deletePerson}>DELETE Person</button>
        
        <h4 style={headerStyle}>7. Click "GET People" to make a GET request to /people and get all people</h4>
        <button onClick={this.getPeople}>GET People</button>
        
        {content}
      
      </div>
    )
  }
}

export default HTTPRequests;