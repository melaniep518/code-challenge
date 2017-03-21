import React, { Component } from 'react';
import axios from 'axios';
import PeopleList from './PeopleList';
import CreatePersonForm from './CreatePersonForm';

class DisplayPeople extends Component {
  constructor() {
    super();
    this.state = {
      axiosResponseData: null,
    }
    this.getPeopleInOrderCreated = this.getPeopleInOrderCreated.bind(this);
    this.createNewPerson = this.createNewPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
    this.handleWhichClick = this.handleWhichClick.bind(this);
  }

  getPeopleInOrderCreated() {
    axios.get('/people')
    .then(people => {
      this.setState({ axiosResponseData: people.data })
    });
  }

  createNewPerson(name, city) {
    axios.post('/people', {
      name,
      city,
    })
    .then(this.getPeopleInOrderCreated)
  }

  deletePerson(personId) {
    axios.delete(`/people/${personId}`)
    .then(this.getPeopleInOrderCreated)
  }

  updateCity(id) {
    axios.put('/people', {
      id,
      city: 'Brooklyn'
    })
    .then(this.getPeopleInOrderCreated)
  }

  handleWhichClick(personId, name) {
    if(name === 'delete') {
      this.deletePerson(personId)
    }
    else if(name === 'update') {
      this.updateCity(personId)
    }
  }

  render() {
    const { axiosResponseData } = this.state;
    const getStyle = {
      color: 'blue',
      textDecoration: 'underline'
    }

    return (
      <div>
        <h1><span onClick={this.getPeopleInOrderCreated} style={getStyle}>GET</span> People</h1>
        <PeopleList handleClick={this.handleWhichClick} people={axiosResponseData} />
        <CreatePersonForm handleSubmit={this.createNewPerson} />
      </div>
    )
  }
}

export default DisplayPeople;