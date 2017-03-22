import React, { Component } from 'react';
import axios from 'axios';

class IndividualPersonData extends Component {
  constructor() {
    super();
    this.state = {
      favoriteCity: null,
      showCity: false,
    }
    this.getPersonInfo = this.getPersonInfo.bind(this);
  }

  getPersonInfo() {
    axios.get(`/people/${this.props.id}`)
    .then(person => {
      this.setState({
        favoriteCity: person.data.City.name,
        showCity: !this.state.showCity,
      })
    })
  }

  render() {
    const listStyle = {
      listStyleType: 'none',
    }
    return (
      <li style={listStyle} onClick={this.getPersonInfo}>{this.props.name}{this.state.showCity && ', ' + this.state.favoriteCity}</li>
    )
  }
}

export default IndividualPersonData;