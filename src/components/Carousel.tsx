/* eslint-disable @typescript-eslint/ban-types */
import { Component } from 'react';
import '../styles/Carousel.css';

import { ICarouselProps, IAppState } from '../types/CarouselInterfaces';

class Carousel extends Component<ICarouselProps, IAppState> {
  constructor(props: ICarouselProps) {
    super(props);
    this.state = { currentIndex: 0 };
  }

  componentDidMount() {
    const randomIndex = Math.floor(Math.random() * this.props?.photos?.length);
    this.setState({ currentIndex: randomIndex });
  }

  next = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props?.photos?.length,
    }));
  };

  prev = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + this.props?.photos?.length) % this.props?.photos?.length,
    }));
  };

  setCurrentIndex = (index: number) => {
    this.setState({
      currentIndex: index,
    });
  };

  render() {
    const { photos } = this.props;
    const { currentIndex } = this.state;

    return (
      <div data-testid="carousel">
        <div className="slider-container">
          {photos?.map((photo) => (
            <div
              key={photo.id}
              className={photos[currentIndex]?.id === photo.id ? 'fade' : 'slide fade'}
            >
              <img src={photo.url} alt={photo.title} className="photo" />
              <div className="caption">{photo.title}</div>
            </div>
          ))}

          <button onClick={this.prev} className="prev">
            &lt;
          </button>

          <button onClick={this.next} className="next">
            &gt;
          </button>
        </div>

        <div className="dots">
          {photos?.map((photo) => (
            <span
              key={photo.id}
              className={photos[currentIndex]?.id === photo.id ? 'dot active' : 'dot'}
              onClick={() => this.setCurrentIndex(photos?.indexOf(photo))}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
