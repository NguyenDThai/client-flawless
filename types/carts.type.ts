import { ProductType } from "@/types/products.type";

export interface CartItem {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  product: ProductType;
}
