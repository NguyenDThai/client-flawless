/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import api from "@/lib/api";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ModalFeedBackDetail = ({ setShowModal, feedbackDetail }: any) => {
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    if (feedbackDetail) {
      setIsRead(feedbackDetail.isRead);
    }
  }, [feedbackDetail]);

  const updateFeedback = async (id: number) => {
    try {
      await api.patch(`/feedback/${id}`, { isRead: isRead });
      setShowModal(false);
      toast.success("Đã thay đổi trạng thái");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={() => setShowModal(false)}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Nội dung phản hồi
            </h3>
            <button
              onClick={() => setShowModal(false)}
              className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">
            {/* User info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                {feedbackDetail?.name?.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  {feedbackDetail?.name}
                </p>
                <p className="text-sm text-gray-500">{feedbackDetail?.email}</p>
              </div>
            </div>

            {/* Comment */}
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-700 text-sm">{feedbackDetail?.comment}</p>
            </div>

            {/* Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isRead}
                onChange={(e) => setIsRead(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Duyệt phản hồi này</span>
            </label>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2 p-5 border-t bg-gray-50 rounded-b-xl">
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={() => updateFeedback(feedbackDetail?.id)}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalFeedBackDetail;
