/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiEdit2, FiMoreVertical, FiTrash2 } from "react-icons/fi";

const ShowTableDiscount = ({ handleDeleteDiscount, allDiscount }: any) => {
  return (
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
            const usagePercent = ((item.usedCount || 0) / item.quantity) * 100;

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
                    <span className="text-gray-400 italic">Không giới hạn</span>
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
                    <span className="text-gray-400 italic">Không giới hạn</span>
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
                    className={`px-3 py-1.5 text-xs font-semibold rounded-xl ${
                      item.isActive
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-red-100 text-red-700 border border-red-200"
                    }`}
                  >
                    {item.isActive ? (
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                        Đang áp dụng
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        Ngừng áp dụng
                      </span>
                    )}
                  </span>
                </td>

                {/* Thao tác */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg transition-all duration-200 group/btn">
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
  );
};

export default ShowTableDiscount;
