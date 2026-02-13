/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdArrowRightAlt } from "react-icons/md";

const CartModel = ({ showModelCart, setShowModelCart }: any) => {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen w-full 
        transition-all duration-500 ease-in-out
        ${
          showModelCart
            ? "visible bg-black/50"
            : "invisible bg-black/0 pointer-events-none"
        }`}
      onClick={() => setShowModelCart(false)}
    >
      <div
        className={`absolute top-0 h-screen w-[450px] flex flex-col bg-white shadow-xl
          transition-all duration-400 ease-out transform transform-gpu
          ${showModelCart ? "right-0" : "-right-[450px]"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header cart*/}
        <div className="flex items-center justify-between p-5 border-b border-gray-300">
          <div className="cursor-pointer hover:opacity-70 transition-opacity">
            <MdArrowRightAlt
              size={30}
              onClick={() => setShowModelCart(false)}
            />
          </div>
          <div>
            <span className="font-medium">Giỏ hàng của bạn</span>
          </div>
          <div className="w-6 h-6 flex items-center justify-center bg-gray-500 text-white rounded-md">
            <span>0</span>
          </div>
        </div>

        {/* Nội dung giỏ hàng */}
        <div className="p-5 flex-1 text-center">Giỏ hàng bạn trống</div>

        {/* Footer cart */}
        <div className="shadow-xl">
          <div className="flex items-center justify-between py-2.5 px-5 border-b border-gray-300">
            <span>Tổng cộng:</span>
            <span>0 vnđ</span>
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
