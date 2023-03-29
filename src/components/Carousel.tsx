import { useState, useEffect } from 'react';
import '../styles/Carousel.css';

import { ICarouselProps } from '../types/CarouselInterfaces';

const Carousel = ({ photos }: ICarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * photos?.length);
    setCurrentIndex(randomIndex);
  }, [photos]);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos?.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos?.length) % photos?.length);
  };

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

        <button onClick={prev} className="prev">
          &lt;
        </button>

        <button onClick={next} className="next">
          &gt;
        </button>
      </div>

      <div className="dots">
        {photos?.map((photo) => (
          <span
            key={photo.id}
            className={photos[currentIndex]?.id === photo.id ? 'dot active' : 'dot'}
            onClick={() => setCurrentIndex(photos?.indexOf(photo))}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
