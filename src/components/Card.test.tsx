import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card, { CardProps } from './Card';

describe('Card', () => {
  it('renders title on the Card', () => {
    const props: CardProps = {
      cardTitle: 'Card',
      cardDescription: 'On this page you will learn information about us.',
      cardImage: 'https://via.placeholder.com/150',
      cardButton: 'Click me',
    };
    render(<Card {...props} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Card');
  });
});

describe('Card', () => {
  it('card image src is a link', () => {
    const props: CardProps = {
      cardTitle: 'Card',
      cardDescription: 'On this page you will learn information about us.',
      cardImage: 'https://via.placeholder.com/150',
      cardButton: 'Click me',
    };
    render(<Card {...props} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });
});

describe('Card', () => {
  it('card button is disabled', () => {
    const props: CardProps = {
      cardTitle: 'Card',
      cardDescription: 'On this page you will learn information about us.',
      cardImage: 'https://via.placeholder.com/150',
      cardButton: 'Click me',
    };
    render(<Card {...props} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
