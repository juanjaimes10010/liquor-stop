export interface ImageItem {
  id: number;
  date: string; // or use `Date` if parsed
  src: string;
}

export interface Subcategory {
  name: string;
  images: ImageItem[];
}

export interface Category {
  order: number;
  name: string;
  subcategories: Subcategory[];
}

export type Inventory = Category[];
  