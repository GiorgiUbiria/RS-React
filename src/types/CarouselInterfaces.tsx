import { PhotoType } from './CardTypes';

export interface IAppState extends React.ComponentState {
  currentIndex: number;
}

export interface ICarouselProps {
  photos: PhotoType[];
}
