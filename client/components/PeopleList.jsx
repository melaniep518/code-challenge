import React, { Component } from 'react';
import DisplayContent from './DisplayContent';

const PeopleList = (props) => {
  const { people } = props;
  let list;

  if(people) {
    list = people.map(person => {
      return <DisplayContent key={person.id} id={person.id} name={person.name}/>
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