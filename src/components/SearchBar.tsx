/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

import { SearchProps, State } from '../types/SearchBarTypes';

class SearchBar extends Component<SearchProps, State> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {
    const localStorageValue = localStorage.getItem('searchValue');
    if (localStorageValue !== null) {
      this.setState({ searchTerm: localStorageValue });
      this.props.onSearchTermChange(localStorageValue);
    }
  }

  componentDidUpdate(_prevProps: SearchProps, prevState: State) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      localStorage.setItem('searchValue', this.state.searchTerm);
      this.props.onSearchTermChange(this.state.searchTerm);
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a card"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default SearchBar;
