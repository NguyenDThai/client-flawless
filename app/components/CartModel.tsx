/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";

const CartModel = () => {
  const { showCart, closeCart, cartItem } = useCart();

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
            <span>0</span>
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
                <div
                  key={item.id}
                  className="border-b border-gray-100 pb-4 last:border-0"
                >
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
                          <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors">
                            -
                          </button>
                          <span className="px-3 py-1 text-sm border-x border-gray-200">
                            1
                          </span>
                          <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors">
                            +
                          </button>
                        </div>
                      </div>

                      <button className="mt-2 text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1">
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
              ))}
            </div>
          )}
        </div>

        {/* Footer cart */}
        <div className="shadow-xl">
          <div className="flex items-center justify-between py-2.5 px-5 border-b border-gray-300">
            <span>Tổng cộng:</span>
            <span>{cartItem?.totalAmount?.toLocaleString()}</span>
          </div>
          <div className="px-5 py-3.5">
            <button className="w-full p-3 bg-blue-500 text-white rounded-md cursor-pointer border border-transparent hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
              Giỏ hàng bạn đang trống. Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
