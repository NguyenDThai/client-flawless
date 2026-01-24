import React from "react";
import { FaYoutube } from "react-icons/fa";

const SkincareRegimen = () => {
  return (
    <div className=" h-[450px] relative bg-[url(/img/daily-skincare-excited-young-lady-cleaning-face-with-cotton-pads-smiling-doing-skin-care-routine.jpg)] bg-no-repeat bg-center bg-cover">
      <div className="absolute w-full h-full bg-[#0F172A] opacity-70 "></div>
      <div className="absolute inset-0 min-h-[447px] max-w-[1200px] mx-auto flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-5 text-center text-white text-4xl leading-12">
            Flawless Skincare Regimen
          </h2>
          <p className="text-sm text-center mb-5 text-white">
            Glowing skin starts with the right steps. Watch how Flawless fits
            into your daily routine.
          </p>

          <button className="flex items-center gap-2 cursor-pointer px-7 py-3 bg-blue-600 text-white rounded-md hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
            <p>Watch The Video</p>
            <FaYoutube />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkincareRegimen;
