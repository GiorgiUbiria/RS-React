/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

import { cardData } from '../data/CardData';
import { CardType } from '../types/CardTypes';
import { HomeProps, HomeState } from '../types/HomeInterfaces';

import '../styles/Home.css';

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  handleSearchTermChange = (newSearchTerm: string) => {
    this.setState({ searchTerm: newSearchTerm });
  };

  render() {
    const { searchTerm } = this.state;

    const filteredCards = cardData.filter((card: CardType) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="main">
        <h1> {this.props.page} </h1>
        <SearchBar onSearchTermChange={this.handleSearchTermChange} searchTerm={searchTerm} />
        <div className="cards">
          {filteredCards.map((card) => (
            <Card
              key={card.title}
              cardTitle={card.title}
              cardDescription={card.description}
              cardImages={card.images}
              cardPrice={card.price}
              cardButton={card.button}
              cardDate={card.date}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
