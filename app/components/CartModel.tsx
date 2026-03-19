"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import InputDiscount from "@/app/components/InputDiscount";
import { useCart } from "@/context/CartContext";
import api from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { toast } from "react-toastify";

const CartModel = () => {
  const {
    showCart,
    closeCart,
    cartItem,
    removeCart,
    increase,
    decrease,
    fetchCart,
  } = useCart();

  const router = useRouter();

  const [valueDiscount, setValueDiscount] = useState("");

  const handleApplyDiscount = async () => {
    try {
      await api.post("/cart/apply-discount", {
        code: valueDiscount,
      });
      toast.success("Áp dụng mã giảm giá thành công");
      fetchCart();
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Có lỗi xảy ra khi áp dụng mã";
      toast.error(message);
    }
  };

  const onClickCheckout = () => {
    if (cartItem?.items.length === 0) {
      toast.error("Vui lòng thêm sản phẩm vào giỏ hàng");
      return;
    }

    router.push("/checkout");
    closeCart();
  };

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen w-full 
        transition-all duration-500 ease-in-out
        ${
          showCart
            ? "visible bg-black/50"
            : "invisible bg-black/0 pointer-events-none"
        }`}
      onClick={closeCart}
    >
      <div
        className={`absolute top-0 h-screen w-[450px] flex flex-col bg-white shadow-xl
          transition-all duration-400 ease-out transform transform-gpu
          ${showCart ? "right-0" : "-right-[450px]"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header cart*/}
        <div className="flex items-center justify-between p-5 border-b border-gray-300">
          <div className="cursor-pointer hover:opacity-70 transition-opacity">
            <MdArrowRightAlt size={30} onClick={closeCart} />
          </div>
          <div>
            <span className="font-medium">Giỏ hàng của bạn</span>
          </div>
          <div className="w-6 h-6 flex items-center justify-center bg-gray-500 text-white rounded-md">
            <span>{cartItem?.totalQuantity}</span>
          </div>
        </div>

        {/* Nội dung giỏ hàng */}
        <div className="p-5 flex-1">
          {!cartItem?.items || cartItem?.items?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span>Giỏ hàng của bạn đang trống</span>
            </div>
          ) : (
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
              {cartItem?.items?.map((item: any) => (
                <Link href={`/product/${item.product.slug}`} key={item.id}>
                  <div className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex flex-row gap-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={item.product.image}
                          width={500}
                          height={500}
                          alt={item.product.name}
                          className="w-20 h-24 object-cover rounded-lg shadow-sm"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                          {item.product.name}
                        </h3>

                        <div className="flex items-center justify-between mt-2">
                          <span className="text-base font-semibold text-red-500">
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.product.price)}
                          </span>

                          <div className="flex items-center border border-gray-200 rounded-md">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                decrease(item.product.id);
                              }}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 text-sm border-x border-gray-200">
                              {item.quantity}
                            </span>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                increase(item.product.id);
                              }}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <button
                          className="mt-2 text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1"
                          onClick={(e) => {
                            e.preventDefault();
                            removeCart(item.product.id);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer cart */}
        <div className="shadow-xl">
          <InputDiscount
            setValueDiscount={setValueDiscount}
            valueDiscount={valueDiscount}
            handleApplyDiscount={handleApplyDiscount}
          />
          <div className="flex items-center justify-between  py-2.5 px-5">
            <span>Tạm tính:</span>
            <span>{cartItem?.totalAmount?.toLocaleString()}</span>
          </div>

          {cartItem?.discount && (
            <div className="flex items-center justify-between py-2.5 px-5 text-green-600">
              <span>Giảm giá:</span>
              <span>-{cartItem?.discountAmount.toLocaleString()}</span>
            </div>
          )}

          <div className="flex items-center justify-between py-2.5 px-5 border-t border-gray-300 font-semibold">
            <span>Tổng cộng:</span>
            <span>{cartItem?.finalAmount.toLocaleString()}</span>
          </div>
          <div className="px-5 py-3.5">
            <button
              onClick={onClickCheckout}
              className="w-full p-3 bg-blue-500 text-white rounded-md cursor-pointer border border-transparent hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
            >
              {(cartItem?.items?.length ?? 0) < 1
                ? "Giỏ hàng bạn đang trống. Mua ngay"
                : "Thanh toán ngay"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
