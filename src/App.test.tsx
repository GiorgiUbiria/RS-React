import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { WrappedApp, App } from './App';

describe('App', () => {
  it('renders home link', () => {
    render(<WrappedApp />);
    expect(screen.getByRole('link', { name: /home/i }) as HTMLAnchorElement).toHaveAttribute(
      'href',
      '#/'
    );
  });

  it('renders about us link', () => {
    render(<WrappedApp />);
    expect(screen.getByRole('link', { name: /about us/i }) as HTMLAnchorElement).toHaveAttribute(
      'href',
      '#/about-us'
    );
  });

  it('render add form link', () => {
    render(<WrappedApp />);
    expect(screen.getByRole('link', { name: /forms/i }) as HTMLAnchorElement).toHaveAttribute(
      'href',
      '#/forms'
    );
  });

  it('renders not found page', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Page Not Found !');
  });
});
