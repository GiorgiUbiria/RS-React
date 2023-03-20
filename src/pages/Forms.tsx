/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

import { FormsProps } from '../types/FormsInterface';

class Forms extends Component<FormsProps> {
  constructor(props: FormsProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> {this.props.page} </h1>
        <p>This is a forms page. Here you will add some cards, by filling in the forms. </p>
      </div>
    );
  }
}

export default Forms;
