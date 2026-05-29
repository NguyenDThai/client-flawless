"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCart } from "@/context/CartContext";
import { toVND } from "@/lib/formatToVnd";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ProductCart = ({ product }: any) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdded(true);
    addToCart(product.id, 1);

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.08,
      transition: {
        duration: 0.4,
        ease: "easeInOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
    success: {
      backgroundColor: "#10B981",
      transition: { duration: 0.2 },
    },
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom * 0.05,
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.slug}`}>
        <div className="w-full md:w-[300px]">
          <div className="relative overflow-hidden group">
            <motion.div variants={imageVariants} className="relative">
              <Image
                src={product.image}
                alt="product-image"
                width={500}
                height={500}
                className="w-fit h-[450px] object-contain mb-4"
              />
            </motion.div>

            {/* Overlay nhẹ khi hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.05 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black pointer-events-none"
            />

            {/* Button Thêm vào giỏ hàng với AnimatePresence */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute bottom-0 left-0 right-0 p-4 z-20"
                >
                  <motion.button
                    onClick={handleAddToCart}
                    variants={buttonVariants}
                    whileTap="tap"
                    animate={isAdded ? "success" : "visible"}
                    className={`w-full flex items-center justify-center gap-2 py-3 transition-colors shadow-lg ${
                      isAdded
                        ? "bg-green-500 text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    <motion.div
                      animate={isAdded ? { rotate: [0, 360] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <IoBag size={18} />
                    </motion.div>
                    <span className="font-medium">
                      {isAdded ? "Đã thêm!" : "Thêm vào giỏ hàng"}
                    </span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product Info */}
          <motion.div variants={infoVariants} className="flex flex-col">
            <span className="mb-1 opacity-30">{product.category}</span>
            <span className="mb-2">{product.name}</span>

            {/* Star Rating với hiệu ứng stagger */}
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={starVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <FaRegStar
                    className={`${index < product.star ? "text-yellow-400" : "text-gray-300"} mr-1 mb-1.5`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Price với hiệu ứng spring */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                },
              }}
              viewport={{ once: true }}
            >
              {toVND(product.price)}
            </motion.span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCart;
