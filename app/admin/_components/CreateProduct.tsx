/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CreateProductForm from "@/app/admin/_components/CreateProductForm";
import api from "@/lib/api";
import { CategoryProduct } from "@/types/categories.type";
import React, { useEffect, useState } from "react";

const CreateProduct = ({ setShowCreateProduct, fetchProducts }: any) => {
  const [categories, setCategories] = useState<CategoryProduct[]>([]);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/category");
      setCategories(res.data);
    } catch (error) {
      console.error("Lỗi khi tải danh mục:", error);
    }
  };

  // Lấy danh mục khi component mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen fixed top-0 right-0 left-0 bg-black/50 py-8 px-4">
      <div className="max-w-3xl mx-auto overflow-y-auto max-h-[90vh] bg-white shadow-lg p-6 md:p-8">
        <h1 className="text-center font-bold text-3xl text-gray-800 mb-8">
          Quản lý sản phẩm
        </h1>

        <CreateProductForm
          setShowCreateProduct={setShowCreateProduct}
          categories={categories}
          fetchProducts={fetchProducts}
        />
      </div>
    </div>
  );
};

export default CreateProduct;
