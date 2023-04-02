import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AboutUs from './AboutUs';

describe('About Us', () => {
  it('renders heading on the About Us page', () => {
    render(<AboutUs page={'About Us'} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About Us');
  });
});
