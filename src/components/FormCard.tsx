/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

import { FormsProps } from '../types/FormsInterface';

class Forms extends Component<FormsProps> {
  constructor(props: FormsProps) {
    super(props);
  }

  render() {
    const { card } = this.props;
    return (
      <div key={card.name} className="form-card">
        <img src={URL.createObjectURL(card.file)} alt="image" className="card-image" />
        <div className="card-body" data-testid="form-card">
          <p> Name: {card.name} </p>
          <p> Surname: {card.surname} </p>
          <p> Zip Code: {card.zipCode}</p>
          <p>Date of Birth: {card.birthDate}</p>
          <p>Date of Delivery: {card.deliveryDate}</p>
          <p>State of Residence: {card.city}</p>
          <p>{card.gender}</p>
        </div>
      </div>
    );
  }
}

export default Forms;
