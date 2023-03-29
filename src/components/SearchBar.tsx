import { useEffect } from 'react';

import { SearchBarProps } from '../types/SearchBarTypes';

import Glass from '../assets/magnifying-glass.svg';
import '../styles/SearchBar.css';

function SearchBar(props: SearchBarProps) {
  useEffect(() => {
    const localStorageValue = localStorage.getItem('searchValue');
    if (localStorageValue !== null) {
      props.onSearchTermChange(localStorageValue);
    }

    return () => {
      localStorage.setItem('searchValue', props.searchTerm);
    };
  }, [props]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearchTermChange(event.target.value);
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a card"
        value={props.searchTerm}
        onChange={handleInputChange}
      />
      <img className="search-icon" src={Glass} alt="Search" />
    </div>
  );
}

export default SearchBar;
