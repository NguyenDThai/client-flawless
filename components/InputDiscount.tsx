/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useCart } from "@/context/CartContext";
import api from "@/lib/api";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { toast } from "react-toastify";

const InputDiscount = ({
  valueDiscount,
  setValueDiscount,
  handleApplyDiscount,
}: any) => {
  const [showDiscount, setShowDiscount] = useState(false);
  const { cartItem, fetchCart } = useCart();

  const handleRemoveDiscount = async () => {
    try {
      await api.delete("/cart/remove-discount");
      toast.success("Bạn đã xóa mã giảm thành công");
      setValueDiscount("");
      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        onClick={() => setShowDiscount((prev) => !prev)}
        className="flex items-center justify-between py-2.5 px-5 border-b border-gray-300 cursor-pointer "
      >
        <span>Đã có mã giảm giá?</span>
        <span>
          {showDiscount ? (
            <RiArrowDropUpLine size={30} />
          ) : (
            <RiArrowDropDownLine size={30} />
          )}
        </span>
      </div>
      {showDiscount && (
        <div className="flex items-center py-2.5 px-5 gap-2">
          <input
            type="text"
            value={cartItem?.discount ? cartItem.discount.code : valueDiscount}
            onChange={(e) => setValueDiscount(e.target.value)}
            placeholder="Nhập mã voucher"
            className="border border-gray-500 rounded-md p-3 flex-1 outline-none"
          />
          {cartItem?.discount ? (
            <button
              onClick={handleRemoveDiscount}
              className="bg-blue-600 text-white p-3 rounded-md border border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 cursor-pointer transition-all duration-300"
            >
              Hủy
            </button>
          ) : (
            <button
              onClick={handleApplyDiscount}
              className="bg-blue-600 text-white p-3 rounded-md border border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 cursor-pointer transition-all duration-300"
            >
              Xác nhận
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default InputDiscount;
