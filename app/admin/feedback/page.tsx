/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ModalFeedBackDetail from "@/app/admin/_components/ModalFeedBackDetail";
import api from "@/lib/api";
import { FeedBackType } from "@/types/feedback.type";
import { useEffect, useState } from "react";
import { GoPencil } from "react-icons/go";

const FeedBackPage = () => {
  const [data, setData] = useState<FeedBackType[]>([]);
  const [feedbackDetail, setFeedbackDetail] = useState<any>(null);

  const [showModal, setShowModal] = useState(false);

  const fetchFeedBack = async () => {
    const res = await api.get("/feedback");
    setData(res.data);
  };

  const fetchFeedBackById = async (id: number) => {
    const res = await api.get(`/feedback/${id}`);
    setFeedbackDetail(res.data);
  };

  useEffect(() => {
    fetchFeedBack();
  }, []);

  return (
    <div className="relative overflow-hidden py-6">
      <div className="flex gap-4 overflow-x-auto pb-4 px-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300">
        {data.map((d) => (
          <div
            key={d.id}
            className="relative flex-none w-80 snap-start bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 shadow-md border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                {d.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 truncate">{d.name}</p>
                <p className="text-xs text-gray-500 truncate">{d.email}</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm line-clamp-3">{d.comment}</p>

            <div
              onClick={() => {
                fetchFeedBackById(d.id);
                setShowModal(true);
              }}
              className="absolute p-1 top-3.5 right-3.5 cursor-pointer"
            >
              <GoPencil size={18} />
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <ModalFeedBackDetail
          setShowModal={setShowModal}
          feedbackDetail={feedbackDetail}
        />
      )}
    </div>
  );
};

export default FeedBackPage;
