/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import api from "@/lib/api";
import { CartItem } from "@/types/carts.type";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

type Cart = {
  id: number;
  productId: number;
  quantity: number;
  items: CartItem[];
  totalAmount: number;
};

type CartContext = {
  showCart: boolean;
  closeCart: () => void;
  openCart: () => void;
  cartItem: Cart | null;
  addToCart: (productId: number, quantity: number) => Promise<void>;
};

const CartContext = createContext<CartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState<Cart | null>(null);
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart");
      setCartItem(res.data);
    } catch (error) {
      console.log("Không có cart hoặc chưa login");
    }
  };

  const addToCart = async (productId: number, quantity: number) => {
    try {
      const res = await api.post("/cart/add", {
        productId,
        quantity,
      });

      setShowCart(true);
      toast.success("Bạn đã thêm sản phẩm vào giỏ hàng");
      fetchCart();
    } catch (error) {
      toast.error("Thêm vào giỏ hàng thất bại");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{ showCart, openCart, closeCart, addToCart, cartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must use inside CartProvide");
  }
  return context;
};
