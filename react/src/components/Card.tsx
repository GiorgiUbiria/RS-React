/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import '../styles/Card.css';

type CardProps = {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
  cardButton: string;
};

class Card extends React.Component<CardProps> {
  render() {
    const { cardTitle, cardDescription, cardImage, cardButton } = this.props;
    return (
      <div className="card">
        <div className="card__image">
          <img src={cardImage} alt="card" />
        </div>
        <div className="card__content">
          <h2 className="card__title">{cardTitle}</h2>
          <p className="card__description">{cardDescription}</p>
        </div>
        <div className="card__footer">
          <button className="card__button" type="button">
            {cardButton}
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
