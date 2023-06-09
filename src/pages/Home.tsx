/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import '../styles/Home.css';

type CardType = {
  title: string;
  description: string;
  image: string;
  button: string;
};

const cardData: CardType[] = [
  {
    title: 'First Card',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    image: 'https://picsum.photos/200/300',
    button: 'Button',
  },
  {
    title: 'Second Card',

    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    image: 'https://picsum.photos/200/300',
    button: 'Button',
  },
  {
    title: 'Third Card',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    image: 'https://picsum.photos/200/300',
    button: 'Button',
  },
];

interface HomeProps {}

interface HomeState {
  searchTerm: string;
}

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
      <div className="home">
        <SearchBar onSearchTermChange={this.handleSearchTermChange} />
        <div className="cards">
          {filteredCards.map((card, index) => (
            <Card
              key={index}
              cardTitle={card.title}
              cardDescription={card.description}
              cardImage={card.image}
              cardButton={card.button}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
