/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

import { SearchBarProps, State } from '../types/SearchBarTypes';

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
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a card"
          value={this.props.searchTerm}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default SearchBar;
