/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { CardProps } from '../types/CardTypes';
import '../styles/Card.css';

class Card extends React.Component<CardProps> {
  render() {
    const { cardTitle, cardDescription, cardImage, cardPrice, cardButton, cardDate } = this.props;
    return (
      <div className="card">
        <div className="card__image">
          <img src={cardImage} alt="card" />
        </div>
        <div className="card__content">
          <h2 className="card__title">{cardTitle}</h2>
          <p className="card__description">{cardDescription}</p>
          <div className="price__tag">
            <span className="card__price" data-testid="price">
              {cardPrice}
            </span>
            <span>$</span>
          </div>
          <div className="card__date">
            <span>Added on - </span>
            {cardDate}
          </div>
        </div>
        <div className="card__footer">
          <button className="card__button" type="button" disabled>
            {cardButton}
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
