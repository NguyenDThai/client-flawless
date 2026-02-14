/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ProductCart from "@/app/components/ProductCart";
import api from "@/lib/api";
import { useEffect, useState } from "react";

const NewArrivals = () => {
  const [products, setProducts] = useState<any[]>([]);

  // const products = [
  //   {
  //     id: 1,
  //     name: "Hybrid Cleansing Balm",
  //     star: 5,
  //     category: "Cleanser",
  //     image: "/img/skin-cleanser-template-product-img-3.jpg",
  //     price: 840000,
  //   },
  //   {
  //     id: 2,
  //     name: "Soothing Sunscreen Gel",
  //     star: 5,
  //     category: "Sunscreens",
  //     image: "/img/skin-cleanser-template-product-img-11.jpg",
  //     price: 630000,
  //   },
  //   {
  //     id: 3,
  //     name: "Energizing Marine Lotion",
  //     star: 5,
  //     category: "Body lotion",
  //     image: "/img/skin-cleanser-template-product-img-1.jpg",
  //     price: 630000,
  //   },
  //   {
  //     id: 4,
  //     name: "Calm Hydrating Moisturizer",
  //     star: 5,
  //     category: "Body lotion",
  //     image: "/img/skin-cleanser-template-product-img-14.jpg",
  //     price: 890000,
  //   },
  //   {
  //     id: 5,
  //     name: "Makeup Melting Cleanser",
  //     star: 5,
  //     category: "Cleanser",
  //     image: "/img/skin-cleanser-template-product-img-10.jpg",
  //     price: 760000,
  //   },
  //   {
  //     id: 6,
  //     name: "Balancing Daily Cleanser",
  //     star: 5,
  //     category: "Sunscreens",
  //     image: "/img/skin-cleanser-template-product-img-5.jpg",
  //     price: 890000,
  //   },
  //   {
  //     id: 7,
  //     name: "Hydrating Gel Oil",
  //     star: 5,
  //     category: "Moisturizer",
  //     image: "/img/skin-cleanser-template-product-img-9.jpg",
  //     price: 524000,
  //   },
  //   {
  //     id: 8,
  //     name: "Cleanser Concentrate",
  //     star: 5,
  //     category: "Cleanser",
  //     image: "/img/skin-cleanser-template-product-img-7.jpg",
  //     price: 786000,
  //   },
  // ];

  const fetchFeature = async () => {
    const res = await api.get("/product/feature");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchFeature();
  }, []);

  return (
    <div className="py-30 container mx-auto px-5 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-5xl">Sản phẩm mới về</h2>
        <button className="w-36 h-13 mt-5 md:mt-0 bg-blue-500 text-white rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-all duration-200">
          Shop now
        </button>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCart product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
