"use client";

import { createContext, useContext, useState } from "react";

type CartContext = {
  showCart: boolean;
  closeCart: () => void;
  openCart: () => void;
};

const CartContext = createContext<CartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  return (
    <CartContext.Provider value={{ showCart, openCart, closeCart }}>
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
