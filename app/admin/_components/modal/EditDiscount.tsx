/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/lib/api";
import React from "react";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const EditDiscount = ({
  setShowEditModal,
  editFormData,
  setEditFormData,
  discountId,
  statusDiscount,
}: any) => {
  const isScheduled = statusDiscount === "scheduled";
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value, name, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setEditFormData((prev: any) => {
      let newValue: any;

      if (type === "checkbox") {
        newValue = checked;
      } else if (type === "number") {
        // nếu input rỗng thì set null
        newValue = value === "" ? null : parseFloat(value);
      } else {
        newValue = value;
      }

      return {
        ...prev,
        [name]: newValue,
      };
    });
  };

  const handleSubmitEdit = async (id: number, e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload: any = { ...editFormData };

      // Xử lý startDate
      if (editFormData.startDate) {
        payload.startDate = new Date(editFormData.startDate).toISOString();
      } else {
        delete payload.startDate;
      }

      // Xử lý endDate
      if (editFormData.endDate) {
        payload.endDate = new Date(editFormData.endDate).toISOString();
      } else {
        delete payload.endDate;
      }

      // Xóa undefined
      Object.keys(payload).forEach((key) => {
        if (payload[key] === undefined) {
          delete payload[key];
        }
      });
      const res = await api.patch(`/discount/${id}`, payload);
      if (res.status === 200) {
        toast.success("Chỉnh sửa thành công");
        setShowEditModal(false);
      } else {
        throw new Error("Đã có lỗi khi sửa mã giảm giá");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl">
          {/* Modal header */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white border-b rounded-t-xl">
            <h2 className="text-2xl font-bold text-gray-800">
              ✏️ Chỉnh sửa mã giảm giá
            </h2>
            <button
              onClick={() => setShowEditModal(false)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Modal body */}
          <div className="p-6">
            <form
              className="space-y-5"
              onSubmit={(e) => handleSubmitEdit(discountId, e)}
            >
              {/* Mã giảm giá */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mã giảm giá <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="code"
                  value={editFormData.code}
                  onChange={handleInputChange}
                  disabled={!isScheduled}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Nhập mã giảm giá"
                />
              </div>

              {/* Loại giảm giá */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loại giảm giá <span className="text-red-500">*</span>
                </label>
                <select
                  name="type"
                  value={editFormData.type}
                  onChange={handleInputChange}
                  disabled={!isScheduled}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="">Chọn loại giảm giá</option>
                  <option value="PERCENT">Theo phần trăm (%)</option>
                  <option value="FIXED">Theo số tiền cố định</option>
                </select>
              </div>

              {/* Giá trị giảm */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Giá trị giảm <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="value"
                    value={editFormData.value}
                    onChange={handleInputChange}
                    disabled={!isScheduled}
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition pr-12"
                    placeholder={
                      editFormData.type === "PERCENT"
                        ? "Nhập % giảm"
                        : "Nhập số tiền giảm"
                    }
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    {editFormData.type === "PERCENT" ? "%" : "VNĐ"}
                  </span>
                </div>
              </div>

              {/* Số lượng */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Số lượng mã <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={editFormData.quantity}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Nhập số lượng mã"
                />
              </div>

              {/* Đơn hàng tối thiểu */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Đơn hàng tối thiểu
                </label>
                <input
                  type="number"
                  name="minAmount"
                  value={editFormData.minAmount ?? ""}
                  onChange={handleInputChange}
                  disabled={!isScheduled}
                  min="0"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Nhập giá trị đơn hàng tối thiểu (để trống nếu không giới hạn)"
                />
              </div>

              {/* Giảm tối đa (cho loại PERCENT) */}
              {editFormData.type === "PERCENT" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Giảm tối đa
                  </label>
                  <input
                    type="number"
                    name="maxDiscount"
                    value={editFormData.maxDiscount ?? ""}
                    onChange={handleInputChange}
                    disabled={!isScheduled}
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Nhập số tiền giảm tối đa"
                  />
                </div>
              )}

              {/* Thời gian */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày bắt đầu <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={editFormData.startDate}
                    onChange={handleInputChange}
                    disabled={!isScheduled}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày kết thúc <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={editFormData.endDate}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              {/* Trạng thái */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isActive"
                  id="isActive"
                  checked={editFormData.isActive}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="isActive"
                  className="text-sm font-medium text-gray-700"
                >
                  Đang áp dụng
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md"
                >
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDiscount;
