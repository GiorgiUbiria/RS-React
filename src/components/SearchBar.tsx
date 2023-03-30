import { useEffect } from 'react';

import { SearchBarProps } from '../types/SearchBarTypes';

import Glass from '../assets/magnifying-glass.svg';
import '../styles/SearchBar.css';

function SearchBar({ onSearchTermChange, searchTerm }: SearchBarProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(event.target.value);
  };

  useEffect(() => {
    const localStorageValue = localStorage.getItem('searchValue');
    if (localStorageValue !== null) {
      onSearchTermChange(localStorageValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchValue', searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a card"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <img className="search-icon" src={Glass} alt="Search" />
    </div>
  );
}

export default SearchBar;
