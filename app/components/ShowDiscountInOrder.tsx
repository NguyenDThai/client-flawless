/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCart } from "@/context/CartContext";
import api from "@/lib/api";
import React, { useState } from "react";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
import { toast } from "react-toastify";

const ShowDiscountInOrder = () => {
  const [showInputDiscount, setShowInputDiscount] = useState(false);
  const [valueDiscount, setValueDiscount] = useState("");
  const { cartItem, fetchCart } = useCart();

  const handleSubmitDiscount = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/cart/apply-discount", { code: valueDiscount });
      toast.success("Bạn đã áp dụng mã giảm thành công");
      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveDiscount = async (e: any) => {
    e.preventDefault();
    try {
      await api.delete("/cart/remove-discount");
      setValueDiscount("");
      toast.success("Bạn đã xóa mã giảm giá");
      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <div className="flex items-center gap-3">
        <RiCheckboxIndeterminateLine size={20} />
        <p className="text-[#515151]">
          Bạn đã có mã giảm giá?{" "}
          <span
            onClick={() => setShowInputDiscount((prev) => !prev)}
            className={`text-black  cursor-pointer hover:text-blue-500 transition-all duration-500`}
          >
            Nhấn vào đây để nhập mã giảm
          </span>
        </p>
      </div>

      <div
        className={`transform transition-all duration-300 ${
          showInputDiscount
            ? "max-h-20 opacity-100 translate-y-0 mt-2"
            : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
        }`}
      >
        <form onSubmit={handleSubmitDiscount}>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={
                cartItem?.discount ? cartItem.discount.code : valueDiscount
              }
              onChange={(e) => setValueDiscount(e.target.value)}
              className="p-2 border rounded-md  focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter discount code"
            />
            {cartItem?.discount ? (
              <button
                type="button"
                onClick={handleRemoveDiscount}
                className="px-2.5 py-1 bg-blue-600 text-white uppercase rounded-md border border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 cursor-pointer transition-all duration-300 whitespace-nowrap"
              >
                Huỷ mã
              </button>
            ) : (
              <button
                type="submit"
                className="px-2.5 py-1 bg-blue-600 text-white uppercase rounded-md border border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 cursor-pointer transition-all duration-300 whitespace-nowrap"
              >
                Xác nhận
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShowDiscountInOrder;
