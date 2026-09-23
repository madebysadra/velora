export interface ProductSpec {
  label: string;
  value: string;
}

export interface InTheBoxItem {
  name: string;
  qty: string;
}

export interface Product {
  id: string;
  sku: string;
  modelNumber: string;
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullStory: string;
  price: string;
  priceNum: number;
  image: string;
  lifestyleImage?: string;
  materials: {
    primary: string;
    acoustic: string;
  };
  compatibility: string;
  inTheBox: InTheBoxItem[];
  specs: ProductSpec[];
  keyFeatures: {
    title: string;
    desc: string;
  }[];
  colors: {
    name: string;
    hex: string;
  }[];
  warranty: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  productTag: string;
}
