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
        <h3 className="card-header">{card.name}</h3>
        <div className="card-body">
          <p>{card.surname}</p>
          <p>{card.zipCode}</p>
          <p>{card.birthDate}</p>
          <p>{card.deliveryDate}</p>
          <p>{card.city}</p>
          <p>{card.gender}</p>
        </div>
      </div>
    );
  }
}

export default Forms;
