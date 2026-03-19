import { Cart } from "@/context/CartContext";

export type DiscountType = {
  id: number;
  code: string;
  type: "PERCENT" | "FIXED";
  value: number;
  quantity: number;
  minAmount: number;
  maxDiscount: number;
  usedCount: number;
  isActive: boolean;
  startDate: string;
  endDate: string;
};

export type ApplyDiscountResponse = {
  cart: Cart;
  subtotal: number;
  discountAmount: number;
  total: number;
};
