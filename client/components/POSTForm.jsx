import React, { Component } from 'react';
import axios from 'axios';

class POSTForm extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Sean',
      city: 'New York',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state[e.target.name])
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, city } = this.state;
    axios.post('/people', {
      name,
      city,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
        <input name="city" type="text" onChange={this.handleChange} value={this.state.city}/>
        <input name="submit" type="submit" value="Create person" />
      </form>
    )
  }
}

export default POSTForm;