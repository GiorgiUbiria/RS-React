/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */

import { Component } from 'react';

type Props = {
  onSearchTermChange: (newSearchTerm: string) => void;
};

type State = {
  searchTerm: string;
};

class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
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

  componentDidUpdate(prevProps: Props, prevState: State) {
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
