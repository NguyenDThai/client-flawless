"use client";

import CartModel from "@/app/components/CartModel";
import { useCart } from "@/context/CartContext";

const CartWrapper = () => {
  const { showCart } = useCart();

  return <>{showCart && <CartModel />}</>;
};

export default CartWrapper;
