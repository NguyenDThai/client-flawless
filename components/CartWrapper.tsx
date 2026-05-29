"use client";

import CartModel from "@/components/modal/CartModel";
import { useCart } from "@/context/CartContext";

const CartWrapper = () => {
  const { showCart } = useCart();

  return <>{showCart && <CartModel />}</>;
};

export default CartWrapper;
