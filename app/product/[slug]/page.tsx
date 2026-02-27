"use client";

import Header from "@/app/components/Header";
import ReviewForm from "@/app/components/ReviewForm";
import { useCart } from "@/context/CartContext";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */

import api from "@/lib/api";
import { toVND } from "@/lib/formatToVnd";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState<"description" | "review">("description");
  const { addToCart } = useCart();

  // Fake total review
  const [reviews, setReviews] = useState(0);

  const fetchProduct = async () => {
    const res = await api.get(`/product/detail/${slug}`);
    setProduct(res.data);
  };

  const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) {
    return <div>Đang tải sản phẩm. Vui lòng chờ</div>;
  }

  return (
    <>
      <Header variant="light" />
      <div className="bg-[#e7f6ff] pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 bg-white">
          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8">
            {/* Left Column - Image với hiệu ứng */}
            <div className="relative">
              <div className="aspect-square rounded-2xl w-[500px] h-[750px]  overflow-hidden ">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Column - Product Info với spacing tốt hơn */}
            <div className="space-y-8">
              {/* Category với thiết kế tinh tế */}
              <div>
                <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {product.category.name}
                </span>
              </div>

              {/* Product Name với typography đẹp */}
              <h1 className="text-4xl font-light text-gray-900 leading-tight">
                {product.name}
              </h1>

              {/* Price & Shipping với thiết kế nổi bật */}
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-gray-900">
                  {toVND(product.price)}
                </span>
                <span className="text-sm text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">
                  Miễn phí vận chuyển
                </span>
              </div>

              {/* Description với line-height đẹp */}
              <div className="prose prose-sm text-gray-600">
                <p className="leading-relaxed">{product.description}</p>
              </div>

              {/* Add to Cart Button with change quantity */}
              <div className="flex items-center ">
                <div className="mr-4">
                  <input
                    type="number"
                    value={quantity}
                    onChange={onChangeQuantity}
                    className="w-14 min-h-9 p-1.5 border border-dotted"
                  />
                </div>
                <button
                  onClick={() => addToCart(product.id, quantity)}
                  className="w-1/2 bg-blue-600 text-white py-4 px-6 rounded-xl cursor-pointer border border-transparent hover:bg-white hover:text-blue-600 hover:border  hover:border-blue-600 transition-all duration-300 uppercase text-sm tracking-wider font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>

              {/* Category Info với divider */}
              <div className="flex items-center gap-2 text-sm border-t border-gray-100 pt-6">
                <span className="text-gray-400">Danh mục:</span>
                <span className="text-gray-800 font-medium bg-gray-100 px-3 py-1 rounded-full">
                  {product.category.name}
                </span>
              </div>

              {/* Guaranteed Safe Checkout với thiết kế hiện đại */}
              <div className="relative rounded-xl p-6 border border-gray-300">
                <p className="absolute -top-3.5 right-1/2 translate-x-1/2 text-md font-medium bg-white text-gray-600 mb-4 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Thanh toán an toàn
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <span>
                    <FaCcVisa size={40} />
                  </span>
                  <span>
                    <FaCcMastercard size={40} />
                  </span>
                  <span>
                    <FaCcDiscover size={40} />
                  </span>
                  <span>
                    <FaCcPaypal size={40} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Description and review */}
          <div className="border border-gray-200"></div>
          <ul className="flex items-center mb-4">
            <li
              className={`mr-4 p-2 cursor-pointer border-b-2 transition-all duration-300 ${
                active === "description"
                  ? "border-black font-semibold"
                  : "border-transparent"
              }`}
              onClick={() => setActive("description")}
            >
              Mô tả sản phẩm
            </li>
            <li
              className={`mr-4 p-2 cursor-pointer border-b-2 transition-all duration-300 ${
                active === "review"
                  ? "border-black font-semibold"
                  : "border-transparent"
              }`}
              onClick={() => setActive("review")}
            >
              Đánh giá sản phẩm ({reviews})
            </li>
          </ul>

          {active === "description" ? (
            <div className="leading-8 text-gray-700">{product.description}</div>
          ) : (
            <>
              <ReviewForm reviews={reviews} product={product} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
