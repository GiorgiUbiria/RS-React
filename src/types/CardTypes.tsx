export type PhotoType = {
  id: string;
  title: string;
  url: string;
};

export type CardType = {
  title: string;
  description: string;
  images: PhotoType[];
  price: number;
  button: string;
  date: string;
};

export type CardProps = {
  cardTitle: string;
  cardDescription: string;
  cardImages: PhotoType[];
  cardPrice: number;
  cardButton: string;
  cardDate: string;
};
