import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="fixed bottom-10 right-10 w-[60px] h-[60px] rounded-full bg-blue-600 text-white flex justify-center items-center cursor-pointer">
      <FaShoppingCart size={20} />
      <div className="absolute min-w-[22px] h-[22px] -top-1 left-0 flex items-center justify-center bg-red-400 rounded-full">
        <span>0</span>
      </div>
    </div>
  );
};

export default Cart;
