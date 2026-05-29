/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ProductCart from "@/app/components/ProductCart";
import api from "@/lib/api";
import { useEffect, useState } from "react";

const NewArrivals = () => {
  const [products, setProducts] = useState<any[]>([]);

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
