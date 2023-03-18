import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('renders heading on the Home page', () => {
    render(<Home page={'Home'} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Home');
  });
});
