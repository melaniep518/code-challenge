import React from 'react';
import ReactDOM from 'react-dom';
import HTTPRequests from './components/HTTPRequests';

const App = (props) => {
  return (
    <div>
      <HTTPRequests />
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);