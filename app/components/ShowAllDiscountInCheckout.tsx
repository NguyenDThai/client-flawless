/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import api from "@/lib/api";
import { DiscountType } from "@/types/discount.type";

import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const ShowAllDiscountInCheckout = ({
  showAllDiscount,
  setShowAllDiscount,
}: any) => {
  const [allVoucher, setAllVoucher] = useState<DiscountType[]>([]);

  const fetchAllVoucher = async () => {
    const res = await api.get("/discount");
    setAllVoucher(res.data);
  };

  useEffect(() => {
    fetchAllVoucher();
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen w-full 
        transition-all duration-500 ease-in-out ${showAllDiscount ? "visible bg-black/50" : "invisible bg-black/0 pointer-events-none"}`}
    >
      <div
        className={`absolute top-0 h-screen w-[360px] flex flex-col bg-white shadow-xl
          transition-all duration-400 ease-out transform transform-gpu ${showAllDiscount ? "right-0" : "-right-[450px]"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between py-5 px-6">
          <h3 className="text-[#111827] text-xl font-bold">Các Mã Có Sẵn</h3>
          <div
            onClick={() => setShowAllDiscount(false)}
            className="flex items-center justify-center bg-transparent text-gray-300 p-2 hover:bg-gray-200 hover:text-black cursor-pointer transition-all duration-300"
          >
            <IoClose size={23} />
          </div>
        </div>
        <div className="border border-[#e5e5e5]"></div>
        {/* Render all discount for user choose */}
        <div className="p-6">
          <div className="flex flex-col space-y-4">
            {/* Voucher Item */}
            {allVoucher.map((item) => (
              <div
                key={item.id}
                className="p-4 border-2 border-orange-400 border-dashed rounded-lg bg-orange-50/30 hover:border-orange-500 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  {/* Left: Voucher Tag */}
                  <div className="relative">
                    <div className="py-1.5 px-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md shadow-sm">
                      <span className="font-bold text-white text-xs tracking-wider">
                        {item.code}
                      </span>
                    </div>
                    {/* Decorative circle */}
                    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-orange-400 rounded-full"></div>
                  </div>

                  {/* Right: Voucher Details */}
                  <div className="flex flex-col items-end space-y-1">
                    <div className="text-xs text-gray-600 text-right">
                      <span className="block">
                        Đơn hàng tối thiểu: {item.minAmount.toLocaleString()}
                      </span>
                      <span className="block text-gray-500">
                        Trị giá:{" "}
                        {item.type === "PERCENT"
                          ? `${item.value}%`
                          : item.value.toLocaleString()}
                      </span>
                    </div>
                    <button className="mt-2 px-4 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-full shadow-sm hover:shadow transition-all duration-200">
                      Áp dụng ngay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllDiscountInCheckout;
