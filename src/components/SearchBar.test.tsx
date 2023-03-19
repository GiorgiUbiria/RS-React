import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';
import { SearchProps } from '../types/SearchBarTypes';

describe('SearchBar', () => {
  it('renders search bar', () => {
    const props: SearchProps = {
      onSearchTermChange: (newSearchTerm: string) => {
        console.log(newSearchTerm);
      },
    };
    render(<SearchBar {...props} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Search for a card');
  });
  it('renders search bar with value', () => {
    const props: SearchProps = {
      onSearchTermChange: (newSearchTerm: string) => {
        console.log(newSearchTerm);
      },
    };
    render(<SearchBar {...props} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
  it('renders search bar with type text', () => {
    const props: SearchProps = {
      onSearchTermChange: (newSearchTerm: string) => {
        console.log(newSearchTerm);
      },
    };
    render(<SearchBar {...props} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });
});
