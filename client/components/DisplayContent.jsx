import React from 'react';

const DisplayContent = (props) => {
  const spanStyle = {
    fontWeight: 'normal' 
  }

  return (
    <div>
      <h4><span style={spanStyle}>Person:</span> {props.person}</h4>
      <h4><span style={spanStyle}>Favorite City:</span> {props.city}</h4>
    </div>
  )
}

export default DisplayContent;