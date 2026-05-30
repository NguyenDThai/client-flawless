import { CategoryProduct } from "@/types/categories.type";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;
  categoryId: number;
  category?: CategoryProduct;
  slug?: string;
  star?: number;
};
