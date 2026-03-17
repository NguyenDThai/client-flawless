"use client";

import React, { useState } from "react";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";

const ShowDiscountInOrder = () => {
  const [showInputDiscount, setShowInputDiscount] = useState(false);

  return (
    <div className="">
      <div className="flex items-center gap-3">
        <RiCheckboxIndeterminateLine size={20} />
        <p className="text-[#515151]">
          Have a coupon?{" "}
          <span
            onClick={() => setShowInputDiscount((prev) => !prev)}
            className="text-black hover:text-blue-500 transition-all duration-500 cursor-pointer"
          >
            Click here to enter your code
          </span>
        </p>
      </div>

      <div
        className={`transform transition-all duration-300 ${
          showInputDiscount
            ? "max-h-20 opacity-100 translate-y-0 mt-2"
            : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
        }`}
      >
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="p-2 border rounded-md  focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Enter discount code"
          />
          <button className="px-2.5 py-1 bg-blue-600 text-white uppercase rounded-md border border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600 cursor-pointer transition-all duration-300 whitespace-nowrap">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDiscountInOrder;
