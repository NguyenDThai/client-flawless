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
import { motion, AnimatePresence } from "framer-motion";
import {
  overlayVariants,
  cartVariants,
  closeButtonVariants,
  arrowVariants,
  staggerContainer,
  itemVariants,
  headerVariants,
  footerVariants,
} from "@/animations/cartAnimation";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

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
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Safe access to cart items
  const cartItems = cartItem?.items || [];
  const totalQuantity = cartItem?.totalQuantity || 0;
  const totalAmount = cartItem?.totalAmount || 0;
  const discountAmount = cartItem?.discountAmount || 0;
  const finalAmount = cartItem?.finalAmount || 0;
  const hasDiscount = !!cartItem?.discount;
  const isEmpty = cartItems.length === 0;

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

  const handleCloseCart = async () => {
    setIsClosing(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    closeCart();
    setIsClosing(false);
  };

  const onClickCheckout = async () => {
    if (isEmpty) {
      toast.error("Vui lòng thêm sản phẩm vào giỏ hàng");
      return;
    }

    setIsCheckingOut(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push("/checkout");
    handleCloseCart();
    setIsCheckingOut(false);
  };

  return (
    <AnimatePresence mode="wait">
      {showCart && !isClosing && (
        <>
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleCloseCart}
          />

          <motion.div
            variants={cartVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 z-50 h-screen w-full max-w-[450px] flex flex-col bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200"
            >
              <motion.button
                variants={closeButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={handleCloseCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group"
              >
                <motion.div
                  variants={arrowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <MdArrowRightAlt size={28} className="text-gray-600" />
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                >
                  Đóng giỏ hàng
                </motion.span>
              </motion.button>

              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-semibold text-lg"
                >
                  Giỏ hàng
                </motion.span>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: 0.1,
                }}
                className="relative"
              >
                {totalQuantity > 0 && (
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                  />
                )}
                <div className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded-full">
                  <motion.span
                    key={totalQuantity}
                    animate={{ scale: totalQuantity > 0 ? [1.2, 1] : 1 }}
                    className="text-sm font-medium"
                  >
                    {totalQuantity}
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex-1 overflow-y-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#cbd5e1 #f1f5f9",
              }}
            >
              <div className="p-5">
                {isEmpty ? (
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center py-20"
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                      }}
                    >
                      <FaShoppingCart size={50} />
                    </motion.div>
                    <span className="text-gray-400 text-lg">
                      Giỏ hàng trống
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCloseCart}
                      className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full text-sm"
                    >
                      Tiếp tục mua sắm
                    </motion.button>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item: any) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        layout
                        exit="exit"
                        className="group"
                      >
                        <Link href={`/product/${item.product.slug}`}>
                          <div className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                            <motion.div
                              whileHover={{ scale: 1.05, rotate: 2 }}
                              className="flex-shrink-0"
                            >
                              <Image
                                src={item.product.image}
                                width={80}
                                height={80}
                                alt={item.product.name}
                                className="w-20 h-20 object-cover rounded-lg shadow-md"
                              />
                            </motion.div>

                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-gray-800 line-clamp-2 text-sm">
                                {item.product.name}
                              </h3>

                              <div className="flex items-center justify-between mt-2">
                                <motion.span
                                  className="text-base font-bold text-gray-900"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  }).format(item.product.price)}
                                </motion.span>

                                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                                  <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      decrease(item.product.id);
                                    }}
                                    className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white transition-colors"
                                  >
                                    -
                                  </motion.button>
                                  <motion.span
                                    key={item.quantity}
                                    animate={{ scale: [1.2, 1] }}
                                    className="w-6 text-center text-sm font-medium"
                                  >
                                    {item.quantity}
                                  </motion.span>
                                  <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      increase(item.product.id);
                                    }}
                                    className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white transition-colors"
                                  >
                                    +
                                  </motion.button>
                                </div>
                              </div>

                              <motion.button
                                whileHover={{ x: -2, color: "#ef4444" }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-2 text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1"
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeCart(item.product.id);
                                }}
                              >
                                <FaTrashAlt size={20} />
                                Xóa
                              </motion.button>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Footer */}
            {!isEmpty && (
              <motion.div
                variants={footerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="border-t border-gray-200 bg-white"
              >
                <div className="p-5 space-y-4">
                  <InputDiscount
                    setValueDiscount={setValueDiscount}
                    valueDiscount={valueDiscount}
                    handleApplyDiscount={handleApplyDiscount}
                  />

                  <div className="space-y-2">
                    <motion.div
                      className="flex justify-between text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      <span className="text-gray-500">Tạm tính</span>
                      <motion.span
                        key={totalAmount}
                        animate={{ scale: [1.1, 1] }}
                        className="font-medium"
                      >
                        {totalAmount.toLocaleString()}₫
                      </motion.span>
                    </motion.div>

                    <AnimatePresence>
                      {hasDiscount && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex justify-between text-sm text-green-600 overflow-hidden"
                        >
                          <span>Giảm giá</span>
                          <span>-{discountAmount.toLocaleString()}₫</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div
                      className="flex justify-between pt-2 border-t border-gray-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="font-semibold text-base">Tổng cộng</span>
                      <motion.span
                        key={finalAmount}
                        animate={{ scale: [1.2, 1] }}
                        className="font-bold text-xl text-red-500"
                      >
                        {finalAmount.toLocaleString()}₫
                      </motion.span>
                    </motion.div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClickCheckout}
                    disabled={isCheckingOut}
                    className="relative w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold overflow-hidden group"
                  >
                    <motion.span
                      animate={isCheckingOut ? { opacity: 0 } : { opacity: 1 }}
                    >
                      Thanh toán ngay
                    </motion.span>
                    {isCheckingOut && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </motion.div>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModel;
