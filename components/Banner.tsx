"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  backgroundVariants,
  overlayVariants,
  welcomeVariants,
  titleVariants,
  buttonVariants,
  lineVariants,
} from "@/animations/bannerAnimations";

const Banner = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative w-full h-[500px] lg:h-screen overflow-hidden"
    >
      {/* Background Image với hiệu ứng zoom nhẹ */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/Hero-image-banner.png"
          alt="Flawless Store Banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 opacity-70"
        style={{
          background: "linear-gradient(180deg, #080619 10%, #00000057 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        className="hidden absolute left-56 z-10 h-full md:flex flex-col items-start justify-center text-center px-4"
      >
        {/* Welcome Text */}
        <motion.div variants={welcomeVariants} className="mb-6">
          <h2 className="text-white text-lg md:text-xl font-light tracking-[0.3em] mb-2 opacity-90">
            WELCOME TO FLAWLESS STORE
          </h2>
        </motion.div>

        {/* Decorative line */}
        <motion.div variants={lineVariants} className="h-0.5 bg-white mb-6" />

        {/* Main Heading */}
        <motion.h1
          variants={titleVariants}
          className="text-4xl text-left md:text-6xl lg:text-7xl font-semibold text-white mb-8 leading-tight max-w-4xl"
        >
          The Best Skin
          <br />
          Cleanser for You
        </motion.h1>

        {/* Shop Now Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="relative px-8 py-4 bg-white text-blue-500 font-semibold text-lg rounded-md hover:bg-blue-600 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden group"
        >
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-10 inline-block"
          >
            SHOP NOW
          </motion.span>

          {/* Ripple effect on hover */}
          <motion.span
            initial={{ scale: 0, opacity: 0.5 }}
            whileHover={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white/20 rounded-md"
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
