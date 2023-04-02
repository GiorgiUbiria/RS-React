import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Carousel from './Carousel';

import { PhotoType } from '../types/CardTypes';

const photos: PhotoType[] = [
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

describe('Carousel', () => {
  it('renders carousel', () => {
    render(<Carousel photos={[]} />);
    const carousel = screen.getByTestId('carousel');
    expect(carousel).toBeInTheDocument();
  });
  it('renders carousel with images', () => {
    render(<Carousel photos={photos} />);
    const images = screen.getAllByRole('img');
    images.forEach((image) => {
      expect(image).toHaveAttribute('src');
    });
  });
  it('renders carousel with buttons', () => {
    render(<Carousel photos={photos} />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
