import React from "react";
import { FaQuestionCircle, FaTruck } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";

const Methods = () => {
  return (
    <div className="bg-[#e7f6ff]">
      <div className="max-w-[1200px] mx-auto p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center justify-center">
            <div className="w-[54px] h-[54px] bg-blue-600 rounded-full flex items-center justify-center">
              <FaTruck size={20} className="text-white" />
            </div>
            <h6 className="text-sm my- uppercase3">Free Delivery</h6>
            <p className="text-[13px]">Fast & free delivery</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-[54px] h-[54px] bg-blue-600 rounded-full flex items-center justify-center">
              <MdOutlinePayment size={20} className="text-white" />
            </div>
            <h6 className="text-sm my-3 uppercase">Easy Payment</h6>
            <p className="text-[13px]">Multiple payment options</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-[54px] h-[54px] bg-blue-600 rounded-full flex items-center justify-center">
              <IoLocation size={20} className="text-white" />
            </div>
            <h6 className="text-sm my-3 uppercase">Track Order</h6>
            <p className="text-[13px]">Real-time order tracking</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-[54px] h-[54px] bg-blue-600 rounded-full flex items-center justify-center">
              <FaQuestionCircle size={20} className="text-white" />
            </div>
            <h6 className="text-sm my-3 uppercase">Have Questions?</h6>
            <p className="text-[13px]">We’re here to help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methods;
