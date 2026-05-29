"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  textContainerVariants,
  textVariants,
  linkVariants,
  gridVariants,
  imageVariants,
} from "@/animations/followUsAnimations";

const FollowUs = () => {
  const imageSkinCare = [
    {
      id: 1,
      image: "/img/skin-care-store-image-1.png",
    },
    {
      id: 2,
      image: "/img/skin-care-store-image-2.png",
    },
    {
      id: 3,
      image: "/img/skin-care-store-image-3.png",
    },
    {
      id: 4,
      image: "/img/skin-care-store-image-4.png",
    },
    {
      id: 5,
      image: "/img/skin-care-store-image-5.png",
    },
    {
      id: 6,
      image: "/img/skin-care-store-image-6.png",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.5,
        margin: "-50px",
      }}
      className="container mx-auto px-[40px] py-[120px] overflow-hidden"
    >
      <div className="max-w-[970px] mx-auto">
        <motion.div
          variants={containerVariants}
          className="flex flex-col justify-center items-center"
        >
          {/* Text section */}
          <motion.div
            variants={textContainerVariants}
            className="flex flex-wrap justify-center items-center gap-2"
          >
            <motion.h4 variants={textVariants} className="text-2xl font-light">
              Follow Us.
            </motion.h4>
            <motion.a
              href="#"
              variants={linkVariants}
              whileHover="hover"
              className="text-2xl underline"
            >
              @flawlesscleanser
            </motion.a>
          </motion.div>

          {/* Image grid */}
          <motion.div
            variants={gridVariants}
            className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-0"
          >
            {imageSkinCare.map((img, index) => (
              <motion.div
                key={img.id}
                variants={imageVariants}
                whileHover="hover"
                custom={index}
                className="overflow-hidden"
              >
                <Image
                  src={img.image}
                  alt={`Skincare product ${img.id}`}
                  width={400}
                  height={400}
                  className="object-center pr-10 pb-10 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FollowUs;
