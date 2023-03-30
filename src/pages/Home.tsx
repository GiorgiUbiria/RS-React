import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

import { cardData } from '../data/CardData';
import { CardType } from '../types/CardTypes';
import { HomeProps } from '../types/HomeInterfaces';

import '../styles/Home.css';

const Home = (props: HomeProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  function handleSearchTermChange(newSearchTerm: string) {
    setSearchTerm(newSearchTerm);
  }

  const filteredCards = cardData.filter((card: CardType) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main">
      <h1> {props.page} </h1>
      <SearchBar onSearchTermChange={handleSearchTermChange} searchTerm={searchTerm} />
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
};

export default Home;
