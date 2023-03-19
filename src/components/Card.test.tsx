import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';
import { CardProps } from '../types/CardTypes';

describe('Card', () => {
  it('card image src is a link', () => {
    const props: CardProps = {
      cardTitle: 'Card',
      cardDescription: 'On this page you will learn information about us.',
      cardImage: 'https://via.placeholder.com/150',
      cardPrice: 100,
      cardButton: 'Click me',
      cardDate: '2021-09-01',
    };
    render(<Card {...props} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });
  it('card button is disabled', () => {
    const props: CardProps = {
      cardTitle: 'Card',
      cardDescription: 'On this page you will learn information about us.',
      cardImage: 'https://via.placeholder.com/150',
      cardPrice: 100,
      cardButton: 'Click me',
      cardDate: '2021-09-01',
    };
    render(<Card {...props} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
  it('renders title on the Card', () => {
    const props: CardProps = {
      cardTitle: 'Card',
      cardDescription: 'On this page you will learn information about us.',
      cardImage: 'https://via.placeholder.com/150',
      cardPrice: 100,
      cardButton: 'Click me',
      cardDate: '2021-09-01',
    };
    render(<Card {...props} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Card');
  });
  it('rendered price on the card must be greater than 0', () => {
    const props: CardProps = {
      cardTitle: 'Card',
      cardDescription: 'On this page you will learn information about us.',
      cardImage: 'https://via.placeholder.com/150',
      cardPrice: 100,
      cardButton: 'Click me',
      cardDate: '2021-09-01',
    };
    render(<Card {...props} />);
    const price = screen.getByTestId('price');
    expect(Number(price.textContent)).toBeGreaterThan(0);
  });
});
