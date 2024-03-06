export type ProductInterface = {
  _id: string;
  name: string;
  price: number;
  images: string[];
  size: string[];
  colors: string[];
  description: string;
  discount?: number;
  qty?: number;
};
