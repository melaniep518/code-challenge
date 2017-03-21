import React from 'react';
import ReactDOM from 'react-dom';
// import HTTPRequests from './components/HTTPRequests';
import DisplayPeople from './components/DisplayPeople';

const App = (props) => {
  return (
    <div>
      <DisplayPeople />
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);