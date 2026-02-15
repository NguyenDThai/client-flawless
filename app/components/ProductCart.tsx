"use client";
import { useCart } from "@/context/CartContext";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toVND } from "@/lib/formatToVnd";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

const ProductCart = ({ product }: any) => {
  const { addToCart } = useCart();

  return (
    <div className="w-[300px]">
      <div className="relative overflow-hidden group">
        <Image
          src={product.image}
          alt="product-image"
          width={500}
          height={500}
          className="w-fit h-[450px] object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addToCart(product.id, 1)}
            className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 hover:bg-gray-100 transition-colors shadow-lg"
          >
            <IoBag size={18} />
            <span className="font-medium">Thêm vào giỏ hàng</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mb-1 opacity-30">{product.category}</span>
        <a href="#" className="mb-2">
          {product.name}
        </a>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <FaRegStar
              key={index}
              className={`${index < product.star ? "text-yellow-400" : "text-gray-300"} mr-1 mb-1.5`}
            />
          ))}
        </div>
        <span>{toVND(product.price)}</span>
      </div>
    </div>
  );
};

export default ProductCart;
