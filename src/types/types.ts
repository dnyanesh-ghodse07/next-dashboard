export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string; // Assuming category is a string representing the category name
  image: string;
  rating: Rating;
};
