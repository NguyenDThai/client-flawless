"use client";

import EditDiscount from "@/app/admin/_components/EditDiscount";
import { useState } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FiEdit2, FiMoreVertical, FiTrash2 } from "react-icons/fi";

const ShowTableDiscount = ({ handleDeleteDiscount, allDiscount }: any) => {
  const [showEditModal, setShowEditModal] = useState(false);
  // Dung de load san pham len form edit
  const [editItem, setEditItem] = useState<any>(null);

  const [editFormData, setEditFormData] = useState({
    code: "",
    type: "PERCENT",
    value: 0,
    minAmount: undefined,
    maxDiscount: undefined,
    quantity: 0,
    startDate: "",
    endDate: "",
    isActive: true,
  });

  const handleClick = (item: any) => {
    setEditItem(item);
    setEditFormData({
      code: item.code,
      type: item.type,
      value: item.value,
      minAmount: item.minAmount || undefined,
      maxDiscount: item.maxDiscount || undefined,
      quantity: item.quantity,
      startDate: item.startDate.split("T")[0],
      endDate: item.endDate.split("T")[0],
      isActive: item.isActive,
    });

    setShowEditModal(true);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table header */}
          <thead className="bg-gray-50">
            <tr>
              {[
                "Mã giảm giá",
                "Giá trị",
                "Số lượng",
                "Đã dùng",
                "Loại giảm",
                "Đơn tối thiểu",
                "Giảm tối đa",
                "Thời gian",
                "Trạng thái",
                "Thao tác",
              ].map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {allDiscount.map((item: any, index: any) => {
              const remaining = item.quantity - (item.usedCount || 0);
              const usagePercent =
                ((item.usedCount || 0) / item.quantity) * 100;

              return (
                <tr
                  key={item.id}
                  className={`group hover:bg-blue-50/30 transition-all duration-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                  }`}
                >
                  {/* Mã giảm giá */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <span className="text-white text-xl">🏷️</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-gray-900">
                          {item.code}
                        </div>
                        <div className="text-xs text-gray-500 font-mono">
                          {item.id}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Giá trị */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">
                      {item.type === "PERCENT" ? (
                        <span className="text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                          {item.value}%
                        </span>
                      ) : (
                        <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.value)}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Số lượng */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">
                      {item.quantity}
                    </div>
                    <div className="text-xs text-gray-500">
                      Còn:{" "}
                      <span className="font-medium text-green-600">
                        {remaining}
                      </span>
                    </div>
                  </td>

                  {/* Đã dùng */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {item.usedCount || 0}
                    </div>
                    <div className="w-20 h-1.5 bg-gray-200 rounded-full mt-1">
                      <div
                        className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        style={{ width: `${usagePercent}%` }}
                      ></div>
                    </div>
                  </td>

                  {/* Loại giảm */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1.5 text-xs font-semibold rounded-xl ${
                        item.type === "PERCENT"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-blue-100 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {item.type === "PERCENT" ? "Phần trăm" : "Cố định"}
                    </span>
                  </td>

                  {/* Đơn tối thiểu */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.minAmount ? (
                      <span className="font-medium">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.minAmount)}
                      </span>
                    ) : (
                      <span className="text-gray-400 italic">
                        Không giới hạn
                      </span>
                    )}
                  </td>

                  {/* Giảm tối đa */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.maxDiscount ? (
                      <span className="font-medium">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.maxDiscount)}
                      </span>
                    ) : (
                      <span className="text-gray-400 italic">
                        Không giới hạn
                      </span>
                    )}
                  </td>

                  {/* Thời gian */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(item.startDate).toLocaleDateString("vi-VN")}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <span>→</span>
                      {new Date(item.endDate).toLocaleDateString("vi-VN")}
                    </div>
                  </td>

                  {/* Trạng thái */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium shadow-sm ${
                        item.status === "active"
                          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
                          : item.status === "scheduled"
                            ? "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20"
                            : "bg-rose-50 text-rose-700 ring-1 ring-rose-600/20"
                      }`}
                    >
                      {item.status === "active" ? (
                        <span className="flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                          </span>
                          Đang áp dụng
                        </span>
                      ) : item.status === "scheduled" ? (
                        <span className="flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
                          </span>
                          Đã lên lịch
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
                          </span>
                          Hết hạn
                        </span>
                      )}
                    </span>
                  </td>

                  {/* Thao tác */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleClick(item)}
                        className="p-2 text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg transition-all duration-200 group/btn"
                      >
                        <FiEdit2
                          size={18}
                          className="group-hover/btn:scale-110 transition-transform"
                        />
                      </button>
                      <button
                        onClick={() => handleDeleteDiscount(item.id)}
                        className="p-2 text-red-600 hover:text-white hover:bg-red-600 rounded-lg transition-all duration-200 group/btn"
                      >
                        <FiTrash2
                          size={18}
                          className="group-hover/btn:scale-110 transition-transform"
                        />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-white hover:bg-gray-600 rounded-lg transition-all duration-200 group/btn">
                        <FiMoreVertical
                          size={18}
                          className="group-hover/btn:scale-110 transition-transform"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {showEditModal && (
        <EditDiscount
          setShowEditModal={setShowEditModal}
          setEditFormData={setEditFormData}
          editFormData={editFormData}
          discountId={editItem.id}
        />
      )}
    </>
  );
};

export default ShowTableDiscount;
