"use client";
import Header from "@/app/components/Header";
import Methods from "@/app/components/Methods";
import ProductCart from "@/app/components/ProductCart";
import api from "@/lib/api";
import { CategoryProduct } from "@/types/categories.type";
import { ProductType } from "@/types/products.type";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryProduct[]>([]);
  const [currentPage, setCurrenPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<number | null>(
    null,
  );
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000000);
  const [appliedPrice, setAppliedPrice] = useState<{
    min: number;
    max: number;
  } | null>(null);

  const ITEMS_PER_PAGE = 9;

  const filteredProducts = products.filter((product) => {
    if (selectedCategories && product.categoryId !== selectedCategories) {
      return false;
    }
    if (appliedPrice) {
      if (
        product.price < appliedPrice.min ||
        product.price > appliedPrice.max
      ) {
        return false;
      }
    }

    return true;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentProduct = filteredProducts.slice(startIndex, endIndex);

  // api lay tat ca san pham
  const fetchProduct = async () => {
    const res = await api.get("/product");
    setProducts(res.data);
  };

  // api lay tat ca loai san pham
  const fetchCategories = async () => {
    const res = await api.get("/category");
    setCategories(res.data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProduct();
    fetchCategories();
  }, []);

  return (
    <>
      <Header variant="light" />
      <div className="pt-[64px] bg-[#e7f6ff] ">
        <div>
          <div className="container mx-auto max-w-[1300px] flex flex-col md:flex-row">
            <div className="w-full md:w-[25%] mb-[64px] flex flex-col pr-8">
              {/* Filter by price */}

              <div className="bg-white p-8 mb-8">
                <h2 className="text-2xl font-normal mb-3.5">Lọc theo giá</h2>
                {/* Min price */}
                <div className="mb-4">
                  <label className="block mb-1">Giá tối thiểu</label>
                  <input
                    type="range"
                    min={0}
                    max={5000000}
                    step={50000}
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Max price */}
                <div className="mb-6">
                  <label className="block mb-1">Giá tối đa</label>
                  <input
                    type="range"
                    min={0}
                    max={5000000}
                    step={50000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setAppliedPrice({ min: minPrice, max: maxPrice });
                      setCurrenPage(1);
                    }}
                    className="py-1 px-4 bg-blue-600 text-white rounded-md border border-transparent hover:bg-white hover:border-blue-600 hover:text-blue-500 transition-all duration-500"
                  >
                    Lọc
                  </button>
                  <span>
                    Price:{" "}
                    <span className="font-medium">
                      {minPrice.toLocaleString()}đ - {maxPrice.toLocaleString()}
                      đ
                    </span>
                  </span>
                </div>
              </div>

              <div className="bg-white p-8 mb-8">
                <h2 className="text-2xl font-normal mb-3.5">
                  Tìm kiếm theo loại
                </h2>
                <ul>
                  <li
                    onClick={() => {
                      setSelectedCategories(null);
                      setCurrenPage(1);
                    }}
                    className={`mb-2 pl-4 cursor-pointer transition-all duration-300
                        ${selectedCategories === null ? "text-blue-600 font-medium" : "hover:text-blue-500"}`}
                  >
                    Tất cả sản phẩm
                  </li>

                  {categories.map((ca) => (
                    <li
                      key={ca.id}
                      onClick={() => {
                        setSelectedCategories(ca.id);
                        setCurrenPage(1);
                      }}
                      className={`mb-2 pl-4 cursor-pointer transition-all duration-300 ${
                        selectedCategories === ca.id
                          ? "text-blue-600 font-medium"
                          : "hover:text-blue-500"
                      }`}
                    >
                      <span className="pr-2">{ca.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-[75%] mb-[64px]">
              <div className="bg-white py-[85px] px-[100px]">
                <div className="flex items-center justify-between mb-10">
                  <p>
                    Showing {startIndex + 1}-{" "}
                    {Math.min(endIndex, filteredProducts.length)} of{" "}
                    {filteredProducts.length} result
                  </p>
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
                  {currentProduct.map((product) => (
                    <div key={product.id}>
                      <ProductCart product={product} />
                    </div>
                  ))}
                </div>
                {/* Panigation */}
                <div className="mt-5 flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1;
                    const isActive = page === currentPage;

                    return (
                      <span
                        key={page}
                        onClick={() => setCurrenPage(page)}
                        className={`py-2 px-4 rounded-md border cursor-pointer transition-all duration-200 select-none ${
                          isActive
                            ? "bg-black text-white border-black"
                            : "bg-transparent text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#e0e0ff]"></div>
          <Methods />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
