/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

interface AboutUsProps {
  page: string;
}

class AboutUs extends Component<AboutUsProps> {
  constructor(props: AboutUsProps) {
    super(props);
  }

  render() {
    return (
      <>
        <h1> {this.props.page}</h1>
        <p>On this page you will learn information about us.</p>
      </>
    );
  }
}

export default AboutUs;
