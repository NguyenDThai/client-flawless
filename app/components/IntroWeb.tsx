import Image from "next/image";
import React from "react";

const IntroWeb = () => {
  return (
    <div className="bg-[#e7f6ff]">
      <div className="pt-[120px] pb-[80px] px-10">
        <div className="flex sm:flex-col md:flex-row max-w-[1200px] mx-auto items-center justify-center">
          <div className="lg:pr-16 lg:w-1/2 w-full">
            <Image
              src="/img/intro-web-skin-cleanser-template-face-lotion-image.png"
              alt="intro-web"
              width={500}
              height={500}
              className="w-full md:w-[540px] md:h-[600px] object-cover rounded-md"
            />
          </div>
          <div className="pt-10 md:pl-10 lg:p-20 lg:w-1/2 w-full">
            <div className="w-16 border border-[#005ee9] mb-5"></div>
            <div className="mb-5">
              <h2 className="leading-14 text-[40px] font-light">
                Glow Naturally with Flawless
              </h2>
            </div>
            <div className="mb-4">
              <p className="text-[#364151]">
                Say hello to radiant, healthy skin with Flawless – your go-to
                skincare solution crafted to nourish, protect, and enhance your
                natural beauty. Made with gentle, effective ingredients,
                Flawless is designed for all skin types and concerns, helping
                you achieve clear, smooth, and glowing skin every day. Whether
                you’re battling blemishes, dryness, or dullness, Flawless brings
                balance and confidence back to your skincare routine.
              </p>
            </div>
            <button className="py-4 px-7 bg-blue-600 text-white rounded-md hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-all duration-500">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroWeb;
