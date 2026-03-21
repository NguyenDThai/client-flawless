import { Variants } from "framer-motion";

// Container animation - hiệu ứng xuất hiện tổng thể
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Overlay animation - lớp phủ tối
export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.7,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Title animation
export const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

// Description animation
export const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
      delay: 0.2,
    },
  },
};

// Button animation
export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      duration: 0.5,
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

// Background image zoom animation
export const backgroundVariants: Variants = {
  hidden: { scale: 1 },
  visible: {
    scale: 1.05,
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};
