/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaRegStar, FaQuoteLeft } from "react-icons/fa";
import {
  containerVariants,
  titleVariants,
  cardVariants,
  starVariants,
  feedbackVariants,
  avatarVariants,
  nameVariants,
} from "@/animations/customerSayAnimations";

const CustomerSay = () => {
  const CustomerSay = [
    {
      id: 1,
      name: "Jennifer Lewis",
      image: "/img/Isla.png",
      feedback:
        "Tried so many products, but nothing made my skin feel as healthy as Flawless. It's now a permanent part of my daily routine!",
      star: 5,
    },
    {
      id: 2,
      name: "Alicia Heart",
      image: "/img/Rhea.png",
      feedback:
        "Flawless truly lives up to its name. My skin feels softer, looks brighter, and I've received so many compliments.",
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.9,
        margin: "-50px",
      }}
      className="bg-[#e7f6ff] overflow-hidden"
    >
      <div className="container mx-auto py-[60px] px-[24px] md:px-[40px] md:py-[104px]">
        <motion.div
          variants={containerVariants}
          className="flex flex-col justify-center items-center"
        >
          {/* Title với hiệu ứng đặc biệt */}
          <motion.div variants={titleVariants} className="mb-5 text-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-1 bg-blue-500 mx-auto mb-4"
            />
            <h2 className="text-[40px] font-light">
              What Our{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="text-blue-600 font-semibold"
              >
                Customers
              </motion.span>{" "}
              Say
            </h2>
          </motion.div>

          {/* Cards container */}
          <div className="flex flex-col md:flex-row md:items-stretch justify-between mt-5 gap-8 md:gap-6">
            {CustomerSay.map((cus, index) => (
              <motion.div
                key={cus.id}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
                className="relative flex-1 min-w-[280px] max-w-[350px] flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Quote icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-4 left-4"
                >
                  <FaQuoteLeft size={30} className="text-gray-400" />
                </motion.div>

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.div
                      key={starIndex}
                      custom={starIndex}
                      variants={starVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <FaRegStar
                        className={`${starIndex < cus.star ? "text-yellow-400" : "text-gray-300"} mr-1 text-lg`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Feedback text */}
                <motion.div
                  variants={feedbackVariants}
                  className="flex flex-col items-center justify-center flex-1"
                >
                  <p className="text-center text-gray-700 leading-relaxed mb-6 italic">
                    "{cus.feedback}"
                  </p>

                  {/* Avatar */}
                  <motion.div
                    variants={avatarVariants}
                    whileHover="hover"
                    className="mb-3 relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <Image
                        src={cus.image}
                        alt={cus.name}
                        width={400}
                        height={400}
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Name */}
                  <motion.span
                    variants={nameVariants}
                    className="text-sm uppercase font-semibold text-gray-800"
                  >
                    {cus.name}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CustomerSay;
