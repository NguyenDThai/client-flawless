"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHandHoldingHeart, FaHandSparkles, FaLeaf } from "react-icons/fa";
import {
  containerVariants,
  cardVariants,
  iconVariants,
  titleVariants,
  descriptionVariants,
} from "@/animations/optionBannerAnimation";

const OptionBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-24 px-10"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-3 lg:flex-row items-center justify-between"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="w-[336px] flex flex-col justify-center items-center gap-4"
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <FaHandSparkles size={40} className="text-blue-500" />
            </motion.div>
            <div>
              <motion.h5
                variants={titleVariants}
                className="text-center text-xl mb-3.5"
              >
                All Skin Types
              </motion.h5>
              <motion.p
                variants={descriptionVariants}
                className="text-center text-[#364151]"
              >
                Its gentle yet effective formula works in harmony with all skin
                types.
              </motion.p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="w-[336px] flex flex-col justify-center items-center gap-4"
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <FaLeaf size={40} className="text-blue-500" />
            </motion.div>
            <div>
              <motion.h5
                variants={titleVariants}
                className="text-center text-xl mb-3.5"
              >
                Natural Ingredients
              </motion.h5>
              <motion.p
                variants={descriptionVariants}
                className="text-center text-[#364151]"
              >
                Made with natural ingredients safe for all skin types.
              </motion.p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="w-[336px] flex flex-col justify-center items-center gap-4"
          >
            <motion.div variants={iconVariants} whileHover="hover">
              <FaHandHoldingHeart size={40} className="text-blue-500" />
            </motion.div>
            <div>
              <motion.h5
                variants={titleVariants}
                className="text-center text-xl mb-3.5"
              >
                Cruelty Free
              </motion.h5>
              <motion.p
                variants={descriptionVariants}
                className="text-center text-[#364151]"
              >
                Never tested on animals. Proudly cruelty-free skincare.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OptionBanner;
