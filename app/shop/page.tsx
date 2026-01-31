"use client";
import Header from "@/app/components/Header";
import ProductCart from "@/app/components/ProductCart";
import api from "@/lib/api";
import { ProductType } from "@/types/products.type";
import { useEffect, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const categories = [
    {
      id: 1,
      name: "Body lotion",
      result: 3,
    },
    {
      id: 2,
      name: "Bundles",
      result: 1,
    },
    {
      id: 3,
      name: "Cleanser",
      result: 6,
    },
    {
      id: 4,
      name: "Moisturizer",
      result: 3,
    },
    {
      id: 5,
      name: "Sunscreens",
      result: 2,
    },
  ];

  const fetchProduct = async () => {
    const res = await api.get("/product");
    setProducts(res.data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProduct();
  });

  return (
    <>
      <Header variant="light" />
      <div className="pt-[64px] bg-[#f8f8ff]">
        <div className="container mx-auto max-w-[1300px] flex">
          <div className="w-[25%] flex flex-col pr-8">
            {/* Filter by price */}
            <div className="bg-white p-8 mb-8">
              <h2 className="text-2xl font-normal mb-3.5">Filter by price</h2>
              <div className="relative mb-12">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-black"></div>
                <div className="absolute left-0 mt-1.5 w-full border-2 border-black"></div>
                <div className="absolute right-0 w-4 h-4 rounded-full bg-black"></div>
              </div>
              <div className="flex items-center gap-3">
                <button className="py-1 px-4 bg-blue-600 text-white rounded-md border border-transparent hover:bg-white hover:border-blue-600 hover:text-blue-500 transition-all duration-500">
                  Filter
                </button>
                <div className="flex items-center">
                  <span>
                    Price:
                    <span className="text-center">100,000-1,000,000đ</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 mb-8">
              <h2 className="text-2xl font-normal mb-3.5">
                Filter by categories
              </h2>
              <ul>
                {categories.map((ca) => (
                  <li
                    key={ca.id}
                    className="mb-2 pl-4 cursor-pointer hover:text-blue-500 transition-all duration-500"
                  >
                    <span className="pr-2">{ca.name}</span>
                    <span>({ca.result})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[75%]">
            <div className="bg-white py-[85px] px-[100px]">
              <div className="flex items-center justify-between mb-10">
                <p>Showing 1-12 of 14 result</p>
                <select name="" className="p-2">
                  <option value="">Default sorting</option>
                  <option value="">Sort by popularity</option>
                  <option value="">Sort by average rating</option>
                  <option value="">Sort by latest</option>
                  <option value="">Sort by price: low to high</option>
                  <option value="">Sort by price: high to low</option>
                </select>
              </div>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
                {products.map((product) => (
                  <div key={product.id}>
                    <ProductCart product={product} />
                  </div>
                ))}
              </div>
              {/* Panigation */}
              <div className="mt-5 flex items-center gap-2">
                <span
                  className="py-2 px-4 bg-transparent text-gray-700 border border-gray-300 rounded-md 
                    cursor-pointer transition-all duration-200 
                    hover:bg-gray-50 hover:border-gray-400
                    active:bg-gray-100 select-none"
                >
                  1
                </span>
                <span
                  className="py-2 px-4 bg-black text-white border border-black rounded-md 
                    cursor-pointer transition-all duration-200 
                    hover:bg-gray-800
                    active:bg-gray-900 select-none"
                >
                  2
                </span>
                <span
                  className="py-2 px-4 bg-black text-white border border-black rounded-md 
                    cursor-pointer transition-all duration-200 
                    hover:bg-gray-800 group
                    active:bg-gray-900 flex items-center gap-1"
                >
                  <span>Next</span>
                  <MdArrowRightAlt
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
