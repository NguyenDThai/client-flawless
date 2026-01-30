"use client";

import api from "@/lib/api";
import Image from "next/image";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateProductForm = ({
  setShowCreateProduct,
  categories,
  fetchProducts,
}: any) => {
  const [previews, setPreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File | null>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFiles(selectedFile);

    setPreviews([URL.createObjectURL(selectedFile)]);
  };

  const handleDeletePreview = () => {
    setPreviews([]);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!files) {
      alert("Vui lòng chọn ảnh");
      return;
    }

    formData.append("image", files);

    try {
      const res = await api.post("/product/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("🚀 ~ handleOnSubmit ~ res:", res);

      if (res.status === 201) {
        toast.success("Đã thêm sản phẩm thành công");
        setShowCreateProduct(false);
        fetchProducts();
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleOnSubmit}>
      {/* Tên sản phẩm */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Tên sản phẩm <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nhập tên sản phẩm"
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          required
        />
      </div>

      {/* Mô tả sản phẩm */}
      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Mô tả sản phẩm <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Nhập mô tả chi tiết về sản phẩm"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Giá sản phẩm */}

        <div className="space-y-2">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Giá sản phẩm (VNĐ) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              ₫
            </span>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="1000"
              className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="0"
              required
            />
          </div>
        </div>

        {/* Loại sản phẩm */}
        <div className="space-y-2">
          <label
            htmlFor="categoryId"
            className="block text-sm font-medium text-gray-700"
          >
            Loại sản phẩm <span className="text-red-500">*</span>
          </label>

          <select
            id="categoryId"
            name="categoryId"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >
            <option value="">-- Chọn loại sản phẩm --</option>

            {categories.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Số lượng sản phẩm */}
        <div className="space-y-2">
          <label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-700"
          >
            Số lượng <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            min="0"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="0"
            required
          />
        </div>
      </div>

      {/* Hình ảnh sản phẩm */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Hình ảnh sản phẩm <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition duration-200">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600 justify-center">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Tải ảnh lên</span>
                  <input
                    id="file-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    required
                    onChange={handleChangeFile}
                  />
                </label>
                <p className="pl-1">hoặc kéo thả tại đây</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF tối đa 5MB</p>
            </div>
          </div>
        </div>

        {/* Image preview */}
        {previews.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {previews.map((src, index) => (
              <div
                key={index}
                className="relative w-full h-56 border rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`preview-${index}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />

                <div
                  className="absolute w-6 h-6 top-3 right-3 bg-red-500 flex items-center justify-center rounded-full text-white cursor-pointer"
                  onClick={handleDeletePreview}
                >
                  <span>X</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Nút submit */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row gap-4 justify-end">
          <button
            onClick={() => setShowCreateProduct(false)}
            type="button"
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Hủy bỏ
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
          >
            Thêm sản phẩm
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateProductForm;
