import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Hero-image-banner.png"
          alt="Flawless Store Banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay theo màu bạn cung cấp */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: "linear-gradient(180deg, #080619 10%, #00000057 100%)",
        }}
      ></div>

      {/* Hoặc nếu muốn dùng Tailwind class tương đương */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#080619] via-[#080619]/60 to-[#00000057]"></div> */}

      {/* Content */}
      <div className="hidden absolute left-56 z-10 h-full md:flex flex-col items-start justify-center text-center px-4">
        {/* Welcome Text */}
        <div className="mb-6">
          <h2 className="text-white text-lg md:text-xl font-light tracking-[0.3em] mb-2 opacity-90">
            WELCOME TO FLAWLESS STORE
          </h2>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl text-left md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-tight max-w-4xl">
          The Best Skin
          <br />
          Cleanser for You
        </h1>

        {/* Shop Now Button */}
        <button className=" relative px-8 py-4 bg-white text-blue-500 font-semibold text-lg rounded-md hover:bg-blue-600 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-2xl">
          <span className="relative z-10">SHOP NOW</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
