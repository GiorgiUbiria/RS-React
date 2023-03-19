import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';
import { CardProps } from '../types/CardTypes';

const cardImages = [
  {
    id: 'p1',
    title: 'Photo One',
    url: 'https://picsum.photos/100/100',
  },
  {
    id: 'p2',
    title: 'Photo Two',
    url: 'https://picsum.photos/200/200',
  },
];

const props: CardProps = {
  cardTitle: 'Card',
  cardDescription: 'On this page you will learn information about us.',
  cardImages: cardImages,
  cardPrice: 100,
  cardButton: 'Click me',
  cardDate: '2021-09-01',
};

describe('Card', () => {
  it('card image src is a link', () => {
    render(<Card {...props} />);
    const images = screen.getAllByRole('img');
    images.forEach((image) => {
      expect(image).toHaveAttribute('src');
    });
  });
  it('card button is disabled', () => {
    render(<Card {...props} />);
    const button = screen.getByRole('button', {
      name: /click me/i,
    });
    expect(button).toBeDisabled();
  });
  it('renders title on the Card', () => {
    render(<Card {...props} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Card');
  });
  it('rendered price on the card must be greater than 0', () => {
    render(<Card {...props} />);
    const price = screen.getByTestId('price');
    expect(Number(price.textContent)).toBeGreaterThan(0);
  });
});
