"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import {
  containerVariants,
  overlayVariants,
  titleVariants,
  descriptionVariants,
  buttonVariants,
  backgroundVariants,
} from "@/animations/skincareBannerAnimations";

const SkincareBanner = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="h-[450px] relative overflow-hidden"
    >
      {/* Background image với hiệu ứng zoom nhẹ */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-[url(/img/daily-skincare-excited-young-lady-cleaning-face-with-cotton-pads-smiling-doing-skin-care-routine.jpg)] bg-no-repeat bg-center bg-cover"
      />

      {/* Overlay tối */}
      <motion.div
        variants={overlayVariants}
        className="absolute w-full h-full bg-[#0F172A]"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        className="absolute inset-0 min-h-[447px] max-w-[1200px] mx-auto flex items-center justify-center"
      >
        <div className="flex flex-col justify-center items-center px-4">
          <motion.h2
            variants={titleVariants}
            className="mb-5 text-center text-white text-3xl md:text-4xl leading-tight md:leading-12 font-light"
          >
            Flawless Skincare Regimen
          </motion.h2>

          <motion.p
            variants={descriptionVariants}
            className="text-sm text-center mb-5 text-white max-w-2xl"
          >
            Glowing skin starts with the right steps. Watch how Flawless fits
            into your daily routine.
          </motion.p>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center gap-2 cursor-pointer px-7 py-3 bg-blue-600 text-white rounded-md hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            <motion.p
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Watch The Video
            </motion.p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaYoutube />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkincareBanner;
