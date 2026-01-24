import React from "react";
import { FaHandHoldingHeart, FaHandSparkles, FaLeaf } from "react-icons/fa";

const OptionBanner = () => {
  return (
    <div className="py-24 px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-[336px] flex flex-col justify-center items-center gap-4">
            <FaHandSparkles size={40} className="text-blue-500" />
            <div>
              <h5 className="text-center text-xl mb-3.5">All Skin Types</h5>
              <p className="text-center text-[#364151]">
                Its gentle yet effective formula works in harmony with all skin
                types.{" "}
              </p>
            </div>
          </div>
          <div className="w-[336px] flex flex-col justify-center items-center gap-4">
            <FaLeaf size={40} className="text-blue-500" />
            <div>
              <h5 className="text-center text-xl mb-3.5">All Skin Types</h5>
              <p className="text-center text-[#364151]">
                Its gentle yet effective formula works in harmony with all skin
                types.{" "}
              </p>
            </div>
          </div>
          <div className="w-[336px] flex flex-col justify-center items-center gap-4">
            <FaHandHoldingHeart size={40} className="text-blue-500" />
            <div>
              <h5 className="text-center text-xl mb-3.5">All Skin Types</h5>
              <p className="text-center text-[#364151]">
                Its gentle yet effective formula works in harmony with all skin
                types.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionBanner;
