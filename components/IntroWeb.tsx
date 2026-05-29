/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  lineVariants,
  titleVariants,
  descriptionVariants,
  buttonVariants,
} from "@/animations/introAnimation";

const IntroSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      className="bg-[#e7f6ff] overflow-hidden"
    >
      <div className="pt-[120px] pb-[80px] px-4 sm:px-6 md:px-10">
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:flex-row max-w-[1200px] mx-auto items-center justify-center gap-8 md:gap-0"
        >
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="lg:pr-16 lg:w-1/2 w-full flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <Image
                src="/img/intro-web-skin-cleanser-template-face-lotion-image.png"
                alt="Flawless skincare product - Glow naturally with flawless skin"
                width={540}
                height={600}
                className="w-full max-w-[540px] h-auto md:h-[600px] object-cover rounded-md shadow-xl"
                priority
              />

              {/* Decorative overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-md pointer-events-none"
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="pt-6 md:pt-0 md:pl-10 lg:pl-20 lg:w-1/2 w-full">
            {/* Decorative Line */}
            <motion.div
              variants={lineVariants}
              className="w-16 border-2 border-[#005ee9] mb-5"
            />

            {/* Title */}
            <motion.div variants={titleVariants} className="mb-5">
              <h2 className="leading-tight md:leading-14 text-3xl md:text-[40px] font-light">
                Glow Naturally with{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="text-blue-600 font-semibold inline-block"
                >
                  Flawless
                </motion.span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={descriptionVariants} className="mb-6">
              <p className="text-[#364151] leading-relaxed">
                Say hello to radiant, healthy skin with Flawless – your go-to
                skincare solution crafted to nourish, protect, and enhance your
                natural beauty. Made with gentle, effective ingredients,
                Flawless is designed for all skin types and concerns, helping
                you achieve clear, smooth, and glowing skin every day. Whether
                you're battling blemishes, dryness, or dullness, Flawless brings
                balance and confidence back to your skincare routine.
              </p>
            </motion.div>

            {/* Button */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative py-4 px-7 bg-blue-600 text-white rounded-md hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-all duration-500 overflow-hidden group"
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 inline-block"
              >
                Read more
              </motion.span>

              {/* Ripple effect on hover */}
              <motion.span
                initial={{ scale: 0, opacity: 0.5 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white/20 rounded-md"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroSection;
