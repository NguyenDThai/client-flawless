/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import api from "@/lib/api";
import React, { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

const CreateDisCountForm = ({ setShowModal, fetchDisCount }: any) => {
  const [data, setData] = useState({
    code: "",
    type: "PERCENT",
    value: 0,
    quantity: 0,
    minAmount: undefined,
    maxDiscount: undefined,
    startDate: "",
    endDate: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    const numberFields = ["value", "quantity", "minAmount", "maxDiscount"];
    setData((prev) => ({
      ...prev,
      [name]: numberFields.includes(name) ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = Object.fromEntries(
        Object.entries({
          ...data,
          startDate: new Date(data.startDate).toISOString(),
          endDate: new Date(data.endDate).toISOString(),
        }).filter(([_, v]) => v !== undefined),
      );

      const res = await api.post("/discount/add", payload);
      if (res.status === 201) {
        toast.success("Thêm mã thành công");
        setData({
          code: "",
          type: "PERCENT",
          value: 0,
          quantity: 0,
          minAmount: undefined,
          maxDiscount: undefined,
          startDate: "",
          endDate: "",
        });
        setShowModal(false);
        fetchDisCount();
      } else {
        throw new Error("Lỗi khi thêm mã giảm giá");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Modal container */}
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl">
        {/* Modal header - Sticky */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white border-b rounded-t-xl">
          <h2 className="text-3xl font-bold text-gray-800">
            🏷️ Thêm mã giảm giá
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Grid layout cho form */}
            <div className="space-y-5">
              {/* Mã giảm giá */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <label className="text-sm font-medium text-gray-700 md:text-right md:pt-3">
                  Mã giảm giá <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-3">
                  <input
                    name="code"
                    value={data.code}
                    onChange={handleChangeInput}
                    type="text"
                    placeholder="VD: SALE20, GIAMGIA50"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 hover:bg-white"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Mã giảm giá không được chứa khoảng trắng hoặc ký tự đặc biệt
                  </p>
                </div>
              </div>

              {/* Loại giảm giá */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <label className="text-sm font-medium text-gray-700 md:text-right md:pt-3">
                  Loại giảm giá <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-3">
                  <select
                    name="type"
                    value={data.type}
                    onChange={handleChangeInput}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 hover:bg-white"
                  >
                    <option value="">--- Chọn loại giảm giá ---</option>
                    <option value="PERCENT">Theo phần trăm (%)</option>
                    <option value="FIXED">Theo số tiền cố định (VNĐ)</option>
                  </select>
                </div>
              </div>

              {/* Giá trị giảm */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <label className="text-sm font-medium text-gray-700 md:text-right md:pt-3">
                  Giá trị giảm <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-3">
                  <div className="relative">
                    <input
                      name="value"
                      value={data.value}
                      onChange={handleChangeInput}
                      type="number"
                      min="0"
                      step={data.type === "PERCENT" ? "1" : "1000"}
                      placeholder={
                        data.type === "PERCENT"
                          ? "Nhập phần trăm giảm (VD: 20)"
                          : "Nhập số tiền giảm (VD: 50000)"
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 hover:bg-white pr-12"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                      {data.type === "PERCENT" ? "%" : "₫"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Đơn hàng tối thiểu */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <label className="text-sm font-medium text-gray-700 md:text-right md:pt-3">
                  Đơn hàng tối thiểu
                </label>
                <div className="md:col-span-3">
                  <div className="relative">
                    <input
                      name="minAmount"
                      value={data.minAmount ?? ""}
                      onChange={handleChangeInput}
                      type="number"
                      min="0"
                      step="1000"
                      placeholder="Nhập giá trị đơn hàng tối thiểu"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 hover:bg-white pr-12"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                      ₫
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Để trống nếu không giới hạn đơn hàng tối thiểu
                  </p>
                </div>
              </div>

              {/* Giảm tối đa (chỉ hiện với loại PERCENT) */}
              {data.type === "PERCENT" && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-fadeIn">
                  <label className="text-sm font-medium text-gray-700 md:text-right md:pt-3">
                    Giảm tối đa
                  </label>
                  <div className="md:col-span-3">
                    <div className="relative">
                      <input
                        name="maxDiscount"
                        value={data.maxDiscount ?? ""}
                        onChange={handleChangeInput}
                        type="number"
                        min="0"
                        step="1000"
                        placeholder="Nhập số tiền giảm tối đa"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 hover:bg-white pr-12"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                        ₫
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Để trống nếu không giới hạn số tiền giảm tối đa
                    </p>
                  </div>
                </div>
              )}

              {/* Số lượng mã */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <label className="text-sm font-medium text-gray-700 md:text-right md:pt-3">
                  Số lượng mã <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-3">
                  <input
                    name="quantity"
                    value={data.quantity}
                    onChange={handleChangeInput}
                    type="number"
                    min="1"
                    placeholder="Nhập số lượng mã có thể sử dụng"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 hover:bg-white"
                  />
                </div>
              </div>

              {/* Ngày bắt đầu và kết thúc */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <label className="text-sm font-medium text-gray-700 md:text-right md:pt-3">
                  Thời gian <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Ngày bắt đầu
                    </label>
                    <input
                      name="startDate"
                      value={data.startDate}
                      onChange={handleChangeInput}
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 hover:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">
                      Ngày kết thúc
                    </label>
                    <input
                      name="endDate"
                      value={data.endDate}
                      onChange={handleChangeInput}
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 hover:bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col md:flex-row gap-3 pt-6 border-t">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="order-2 md:order-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition-all duration-200"
              >
                Huỷ bỏ
              </button>
              <button
                type="submit"
                className="order-1 md:order-2 flex-1 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2">
                  <IoMdAdd size={20} />
                  <span>Tạo mã giảm giá</span>
                </div>
              </button>
            </div>
          </form>

          {/* Lưu ý */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-600 flex items-start gap-2">
              <span className="font-semibold whitespace-nowrap">📝 Lưu ý:</span>
              <span>
                Các trường có dấu <span className="text-red-500">*</span> là bắt
                buộc. Mã giảm giá sẽ được áp dụng cho tất cả sản phẩm trong thời
                gian hiệu lực.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDisCountForm;
