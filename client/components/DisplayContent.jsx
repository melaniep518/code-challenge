import React from 'react';

const DisplayContent = (props) => {
  return (
    <div>
      <h5>Person: {props.person}</h5>
      <h5>Favorite City: {props.city}</h5>
    </div>
  )
}

export default DisplayContent;