import React, { Component } from 'react';
import DisplayContent from './DisplayContent';

const PeopleList = (props) => {
  const { people } = props;
  
  const handleClick = (personData, e) => {
    props.handleClick(personData.id, e.target.name)
  }

  const divStyle = {
    display: 'flex'
  }
  
  let list;

  if(people) {
    list = people.map(person => {
      return (
        <div key={person.id} style={divStyle}>
          <button name="delete" onClick={handleClick.bind(null, person)}>Delete</button>
          <button name="update" onClick={handleClick.bind(null, person)}>Update City</button>
          <DisplayContent id={person.id} name={person.name}/>
        </div>
      )
    })
  }

  return (
   <div>
    <ul>
      {list}
    </ul>
   </div>
  )
}

export default PeopleList;