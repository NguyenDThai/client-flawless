/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import CreateDisCountForm from "@/app/admin/_components/CreateDisCountForm";
import ShowTableDiscount from "@/app/admin/_components/ShowTableDiscount";
import api from "@/lib/api";
import { DiscountType } from "@/types/discount.type";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { toast } from "react-toastify";

const DisCountPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [allDiscount, setAllDiscount] = useState<DiscountType[] | []>([]);
  console.log("🚀 ~ DisCountPage ~ allDiscount:", allDiscount);

  const fetchDisCount = async () => {
    const res = await api.get("/discount");
    setAllDiscount(res.data);
  };

  const handleDeleteDiscount = async (id: number) => {
    if (!confirm("Bạn có chắc xóa mã giảm giá này không ?")) return;
    const res = await api.delete(`/discount/${id}`);

    if (res.status === 200) {
      toast.success("Xóa mã thành công");
      fetchDisCount();
    } else {
      console.error("Lỗi khi xóa mã");
    }
  };

  useEffect(() => {
    fetchDisCount();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header với title và button */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            🏷️ Quản lý mã giảm giá
          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <div className="flex items-center gap-2">
              <IoMdAdd size={20} />
              <span>Thêm mã giảm giá</span>
            </div>
          </button>
        </div>

        {/* Stats Cards - Thống kê nhanh */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Tổng số mã */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Tổng số mã</p>
                <p className="text-2xl font-bold text-gray-800">
                  {allDiscount.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏷️</span>
              </div>
            </div>
          </div>

          {/* Đang hoạt động */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Đang hoạt động</p>
                <p className="text-2xl font-bold text-green-600">
                  {allDiscount.filter((item) => item.isActive).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>

          {/* Đã sử dụng */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Đã sử dụng</p>
                <p className="text-2xl font-bold text-orange-600">
                  {allDiscount.reduce(
                    (acc, item) => acc + (item.usedCount || 0),
                    0,
                  )}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>

          {/* Sắp hết hạn */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Sắp hết hạn</p>
                <p className="text-2xl font-bold text-red-600">
                  {
                    allDiscount.filter((item) => {
                      const endDate: any = new Date(item.endDate);
                      const today: any = new Date();
                      const diffDays = Math.ceil(
                        (endDate - today) / (1000 * 60 * 60 * 24),
                      );
                      return diffDays <= 7 && diffDays > 0;
                    }).length
                  }
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Table Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header với title và search */}
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📋</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Danh sách mã giảm giá
                  </h3>
                  <p className="text-sm text-gray-500">
                    Quản lý tất cả mã giảm giá của cửa hàng
                  </p>
                </div>
              </div>

              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  placeholder="Tìm kiếm theo mã, ID..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white shadow-sm"
                />
                <IoSearch
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* Table container - scroll ngang trên mobile */}
          <ShowTableDiscount
            handleDeleteDiscount={handleDeleteDiscount}
            allDiscount={allDiscount}
          />

          {/* Empty state */}
          {allDiscount.length === 0 && (
            <div className="text-center py-16">
              <div className="text-8xl mb-4 animate-bounce">🏷️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Chưa có mã giảm giá nào
              </h3>
              <p className="text-gray-500 mb-6">
                Bắt đầu tạo mã giảm giá đầu tiên để thu hút khách hàng
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <IoMdAdd size={20} />
                  <span>Tạo mã giảm giá đầu tiên</span>
                </div>
              </button>
            </div>
          )}

          {/* Pagination */}
          {allDiscount.length > 0 && (
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                Hiển thị <span className="font-bold text-gray-900">1</span> -{" "}
                <span className="font-bold text-gray-900">
                  {allDiscount.length}
                </span>{" "}
                trong{" "}
                <span className="font-bold text-gray-900">
                  {allDiscount.length}
                </span>{" "}
                kết quả
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                  <div className="flex items-center gap-1">
                    <FiChevronLeft size={16} />
                    <span>Trước</span>
                  </div>
                </button>

                <button className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all">
                  1
                </button>
                <button className="w-10 h-10 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-all">
                  2
                </button>
                <button className="w-10 h-10 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-all">
                  3
                </button>

                <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
                  <div className="flex items-center gap-1">
                    <span>Sau</span>
                    <FiChevronRight size={16} />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <CreateDisCountForm
          setShowModal={setShowModal}
          fetchDisCount={fetchDisCount}
        />
      )}
    </div>
  );
};

export default DisCountPage;
