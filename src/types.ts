export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
  features: string[];
  colors: string[];
}

export interface TestimonialType {
  id: string;
  name: string;
  content: string;
  rating: number;
  image: string;
}