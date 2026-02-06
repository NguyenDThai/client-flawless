"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";
import { ProductType } from "@/types/products.type";
import CreateProduct from "@/app/admin/_components/CreateProduct";
import { toVND } from "@/lib/formatToVnd";
import Image from "next/image";

const ProductManagementPage = () => {
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 16;

  const fetchProduct = async () => {
    const res = await api.get("/product");
    setProducts(res.data);
  };

  const totalPages = Math.ceil(products.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const productInPage = products.slice(startIndex, endIndex);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProduct();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <button
        className="bg-blue-500 p-2 text-white rounded-md float-right"
        onClick={() => setShowCreateProduct(true)}
      >
        Thêm sản phẩm
      </button>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Danh sách sản phẩm
        </h1>
        <p className="text-gray-600 mb-8">
          Tổng cộng {products.length} sản phẩm
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productInPage.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              {/* Hình ảnh */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                    <svg
                      className="w-16 h-16 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">Không có hình ảnh</span>
                  </div>
                )}
                {/* Badge nếu hết hàng */}
                {product.stock === 0 && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow">
                    HẾT HÀNG
                  </div>
                )}
              </div>

              {/* Thông tin sản phẩm */}
              <div className="p-5">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {product.description || "Chưa có mô tả"}
                  </p>
                </div>

                {/* Giá và số lượng */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {toVND(product.price)}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-gray-500">Tồn kho:</span>
                      <span
                        className={`text-sm font-medium ${
                          product.stock > 10
                            ? "text-green-600"
                            : product.stock > 0
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      >
                        {product.stock} sản phẩm
                      </span>
                    </div>
                  </div>

                  {/* Nút hành động */}
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-6">📦</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Chưa có sản phẩm nào
            </h3>
            <p className="text-gray-500 mb-8">
              Hãy thêm sản phẩm đầu tiên của bạn!
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Thêm sản phẩm mới
            </button>
          </div>
        )}
      </div>

      {showCreateProduct && (
        <CreateProduct
          setShowCreateProduct={setShowCreateProduct}
          fetchProducts={fetchProduct}
        />
      )}

      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-2 rounded-md border text-sm disabled:opacity-40 hover:bg-gray-100"
          >
            ←
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-md text-sm border
            ${
              currentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "hover:bg-gray-100"
            }
          `}
              >
                {page}
              </button>
            );
          })}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-2 rounded-md border text-sm disabled:opacity-40 hover:bg-gray-100"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductManagementPage;
