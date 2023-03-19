/* eslint-disable @typescript-eslint/ban-types */
import { Component } from 'react';
import '../styles/Carousel.css';

import { ICarouselProps, IAppState } from '../types/CarouselInterfaces';

class Carousel extends Component<ICarouselProps, IAppState> {
  constructor(props: ICarouselProps) {
    super(props);
    this.state = { currentIndex: 0 };
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
    const { currentIndex } = this.state;

    return (
      <div data-testid="carousel">
        <div className="slider-container">
          {this.props.photos?.map((photo) => (
            <div
              key={photo.id}
              className={this.props?.photos[currentIndex]?.id === photo.id ? 'fade' : 'slide fade'}
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
          {this.props.photos?.map((photo) => (
            <span
              key={photo.id}
              className={this.props.photos[currentIndex]?.id === photo.id ? 'dot active' : 'dot'}
              onClick={() => this.setCurrentIndex(this.props?.photos?.indexOf(photo))}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
