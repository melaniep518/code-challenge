import React, { Component } from 'react';
import axios from 'axios';

class DisplayContent extends Component {
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
    return (
      <div>
        <li onClick={this.getPersonInfo}>{this.props.name}{this.state.showCity && ', ' + this.state.favoriteCity}</li>
      </div>
    )
  }
}

export default DisplayContent;