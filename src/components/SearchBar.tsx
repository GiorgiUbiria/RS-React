/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

import { SearchBarProps, State } from '../types/SearchBarTypes';

import Glass from '../assets/magnifying-glass.svg';
import '../styles/SearchBar.css';

class SearchBar extends Component<SearchBarProps, State> {
  constructor(props: SearchBarProps) {
    super(props);
  }

  componentDidMount() {
    const localStorageValue = localStorage.getItem('searchValue');
    if (localStorageValue !== null) {
      this.props.onSearchTermChange(localStorageValue);
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.props.searchTerm);
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchTermChange(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search for a card"
          value={this.props.searchTerm}
          onChange={this.handleInputChange}
        />
        <img className="search-icon" src={Glass} alt="Search" />
      </div>
    );
  }
}

export default SearchBar;
