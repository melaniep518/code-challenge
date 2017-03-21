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
  }

  getPeopleInOrderCreated() {
    axios.get('/people')
    .then(people => {
      console.log(people)
      this.setState({ axiosResponseData: people.data })
    });
  }

  createNewPerson(name, city) {
    let that = this;
    axios.post('/people', {
      name,
      city,
    })
    .then(this.getPeopleInOrderCreated)
  }

  render() {
    const { axiosResponseData } = this.state;

    return (
      <div>
        <h1><span onClick={this.getPeopleInOrderCreated}>GET</span> People</h1>
        <PeopleList people={axiosResponseData} />
        <CreatePersonForm handleSubmit={this.createNewPerson} />
      </div>
    )
  }
}

export default DisplayPeople;