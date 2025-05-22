type Testimonial = {
  id: number;
  productid: string;
  name: string;
  location: string;
  text: string;
  avatar: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  sizes: string[];
  media: {
    video: string;
    images: string[];
  };
  description: string;
};

type SelectedProduct = {
  id: string;
  name: string;
  price: number;
  size: string;
};

export type { Testimonial, Product, SelectedProduct };
