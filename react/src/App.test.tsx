import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders home link', () => {
    render(<App />);
    expect(
      screen.getByRole('link', { name: /home/i }) as HTMLAnchorElement
    ).toHaveAttribute('href', '/');
  });
});

describe('App', () => {
  it('renders about us link', () => {
    render(<App />);
    expect(
      screen.getByRole('link', { name: /about us/i }) as HTMLAnchorElement
    ).toHaveAttribute('href', '/about-us');
  });
});
