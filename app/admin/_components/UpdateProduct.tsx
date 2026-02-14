/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import api from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const UpdateProduct = ({
  setShowModelProduct,
  selectedId,
  showModelProduct,
  fetchProduct,
}: any) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    stock: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [categories, setCategories] = useState<any[]>([]);

  // Goi api lấy thông tin sản phẩm lên form update
  const fetchProductId = async () => {
    const res = await api.get(`/product/${selectedId}`);

    const data = res.data;

    setFormData({
      name: data.name || "",
      description: data.description || "",
      price: data.price || "",
      stock: data.stock || "",
      categoryId: data.categoryId || "",
      image: data.image || "",
    });

    setImagePreview(data.image);
  };

  const fetchAllCate = async () => {
    const res = await api.get("/category");
    setCategories(res.data);
  };

  // Hàm xử lý thay đổi ảnh
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("stock", formData.stock);
    formDataToSend.append("categoryId", formData.categoryId);

    if (imageFile) {
      formDataToSend.append("image", imageFile);
    }

    const res = await api.put(`/product/${selectedId}`, formDataToSend, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });

    if (res.status === 200) {
      toast.success("Chỉnh sửa sản phẩm thành công");
      setShowModelProduct(false);
      fetchProduct();
    }
  };

  // Ngan scroll khi model chinh sua bat len
  useEffect(() => {
    if (showModelProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModelProduct]);

  useEffect(() => {
    fetchAllCate();

    if (selectedId) {
      fetchProductId();
    }
  }, [selectedId]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header Modal */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Sửa sản phẩm</h2>
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            onClick={() => setShowModelProduct(false)}
          >
            <IoClose size={20} />
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          {/* Tên sản phẩm */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Tên sản phẩm <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              placeholder="Nhập tên sản phẩm"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 text-gray-700"
            />
          </div>

          {/* Mô tả sản phẩm */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Mô tả sản phẩm <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Nhập mô tả chi tiết về sản phẩm"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   placeholder:text-gray-400 text-gray-700 resize-none"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          {/* Grid 2 cột */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Giá sản phẩm */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Giá sản phẩm (VNĐ) <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                  ₫
                </span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  placeholder="0"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       placeholder:text-gray-400 text-gray-700"
                />
              </div>
            </div>

            {/* Loại sản phẩm */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Loại sản phẩm <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     text-gray-700 bg-white"
                value={formData.categoryId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    categoryId: e.target.value,
                  })
                }
              >
                <option value="" disabled className="text-gray-400">
                  -- Chọn loại sản phẩm --
                </option>
                {categories.map((cate) => (
                  <option key={cate.id} value={cate.id}>
                    {cate.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Số lượng */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Số lượng <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                min="0"
                placeholder="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     placeholder:text-gray-400 text-gray-700"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
              />
            </div>
          </div>

          {/* Hình ảnh sản phẩm */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-gray-700">
              Hình ảnh sản phẩm <span className="text-red-500 ml-1">*</span>
            </label>

            {/* Upload area */}
            <div
              className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed 
                     rounded-xl hover:border-blue-500 transition-colors bg-gray-50/50"
            >
              <div className="space-y-2 text-center">
                <div className="flex justify-center">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex text-sm text-gray-600 justify-center">
                  <label
                    className="relative cursor-pointer bg-white rounded-lg font-semibold text-blue-600 
                           hover:text-blue-700 px-2 py-1"
                  >
                    <span>Tải ảnh lên</span>
                    <input
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="pl-1 text-gray-500">hoặc kéo thả tại đây</p>
                </div>
                <p className="text-xs text-gray-400">
                  PNG, JPG, GIF tối đa 5MB
                </p>
              </div>
            </div>

            {/* Preview images */}
            {imagePreview && (
              <div className="mt-4 flex justify-center">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={500}
                  height={500}
                  className="w-40 h-40 object-cover rounded-xl border"
                />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setShowModelProduct(false)}
              className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold 
                   hover:bg-gray-50 hover:border-gray-400 transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                   rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 
                   transition-all duration-200 shadow-lg hover:shadow-xl
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cập nhật sản phẩm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
