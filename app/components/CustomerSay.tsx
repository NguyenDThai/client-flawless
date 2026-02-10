import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";

const CustomerSay = () => {
  const CustomerSay = [
    {
      id: 1,
      name: "Jennifer Lewis",
      image: "/img/Isla.png",
      feedback:
        "Tried so many products, but nothing made my skin feel as healthy as Flawless. It’s now a permanent part of my daily routine!",
      star: 5,
    },
    {
      id: 2,
      name: "Alicia Heart",
      image: "/img/Rhea.png",
      feedback:
        "Flawless truly lives up to its name. My skin feels softer, looks brighter, and I’ve received so many compliments.",
      star: 5,
    },
    {
      id: 3,
      name: "Juan Carlos",
      image: "/img/Steven.png",
      feedback:
        "Within a week, I could see and feel the difference—less dryness, fewer breakouts, and a real glow.",
      star: 5,
    },
  ];

  return (
    <div className="bg-[#e7f6ff]">
      <div className="container mx-auto py-[60px] px-[24px] md:px-[40px] md:py-[104px]">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-5">
            <h2 className="text-[40px]">What Our Customers Say</h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mt-5">
            {CustomerSay.map((cus) => (
              <div
                key={cus.id}
                className="min-w-[300px] flex flex-col justify-center items-center pr-8 pb-12 md:pb-0"
              >
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <FaRegStar
                      key={index}
                      className={`${index < cus.star ? "text-yellow-400" : "text-gray-300"} mr-1 mb-1.5`}
                    />
                  ))}
                </div>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-center text-xl mb-5">{cus.feedback}</p>
                  <div className="mb-5">
                    <Image
                      src={cus.image}
                      alt="customers"
                      width={400}
                      height={400}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <span className="text-[12px] uppercase font-semibold">
                    {cus.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
