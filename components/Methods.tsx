/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaTruck } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import {
  containerVariants,
  itemVariants,
  iconContainerVariants,
  titleVariants,
  descriptionVariants,
} from "@/animations/methodsAnimations";

const Methods = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
        margin: "-50px",
      }}
      className="bg-[#e7f6ff]"
    >
      <div className="max-w-[1200px] mx-auto p-10">
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          {/* Free Delivery */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              variants={iconContainerVariants}
              whileHover="hover"
              className="w-[54px] h-[54px] bg-blue-600 rounded-full flex items-center justify-center"
            >
              <FaTruck size={20} className="text-white" />
            </motion.div>
            <motion.h6
              variants={titleVariants}
              className="text-sm my-3 uppercase"
            >
              Free Delivery
            </motion.h6>
            <motion.p variants={descriptionVariants} className="text-[13px]">
              Fast & free delivery
            </motion.p>
          </motion.div>

          {/* Easy Payment */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              variants={iconContainerVariants}
              whileHover="hover"
              className="w-[54px] h-[54px] bg-blue-600 rounded-full flex items-center justify-center"
            >
              <MdOutlinePayment size={20} className="text-white" />
            </motion.div>
            <motion.h6
              variants={titleVariants}
              className="text-sm my-3 uppercase"
            >
              Easy Payment
            </motion.h6>
            <motion.p variants={descriptionVariants} className="text-[13px]">
              Multiple payment options
            </motion.p>
          </motion.div>

          {/* Track Order */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              variants={iconContainerVariants}
              whileHover="hover"
              className="w-[54px] h-[54px] bg-blue-600 rounded-full flex items-center justify-center"
            >
              <IoLocation size={20} className="text-white" />
            </motion.div>
            <motion.h6
              variants={titleVariants}
              className="text-sm my-3 uppercase"
            >
              Track Order
            </motion.h6>
            <motion.p variants={descriptionVariants} className="text-[13px]">
              Real-time order tracking
            </motion.p>
          </motion.div>

          {/* Have Questions? */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              variants={iconContainerVariants}
              whileHover="hover"
              className="w-[54px] h-[54px] bg-blue-600 rounded-full flex items-center justify-center"
            >
              <FaQuestionCircle size={20} className="text-white" />
            </motion.div>
            <motion.h6
              variants={titleVariants}
              className="text-sm my-3 uppercase"
            >
              Have Questions?
            </motion.h6>
            <motion.p variants={descriptionVariants} className="text-[13px]">
              We're here to help
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Methods;
