/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Page Not Found !</h1>
        <Link to="/"> Go to the Home Page </Link>
      </div>
    );
  }
}

export default NotFound;
