import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-56 h-56 mx-auto mb-5">
          <DotLottieReact
            src="https://lottie.host/286969bc-4602-4da5-818a-a77a2d07eb70/JqTc0gQRdc.lottie"
            loop
            autoplay
          />
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
        <p className="text-gray-600 mb-5">Trang không tồn tại</p>

        <Link href="/" className="text-blue-500 hover:text-blue-600 underline">
          Trở về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
