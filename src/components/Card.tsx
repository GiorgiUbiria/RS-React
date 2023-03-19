/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { CardProps } from '../types/CardTypes';
import Carousel from './Carousel';
import '../styles/Card.css';

class Card extends React.Component<CardProps> {
  render() {
    const { cardTitle, cardDescription, cardPrice, cardImages, cardButton, cardDate } = this.props;
    return (
      <div className="card">
        <div className="card__image">
          <Carousel photos={cardImages} />
        </div>
        <div className="card__content">
          <h2 className="card__title">{cardTitle}</h2>
          <p className="card__description">{cardDescription}</p>
          <div className="price__tag">
            <span className="card__price" data-testid="price">
              <em>{cardPrice}</em>
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
