// animations/bannerAnimations.ts
import { Variants } from "framer-motion";

// Container animation
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Background image animation - zoom nhẹ
export const backgroundVariants: Variants = {
  hidden: { scale: 1 },
  visible: {
    scale: 1.05,
    transition: {
      duration: 8,
      ease: "easeOut",
    },
  },
};

// Overlay animation
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

// Welcome text animation
export const welcomeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    letterSpacing: "0.5em",
  },
  visible: {
    opacity: 0.9,
    y: 0,
    letterSpacing: "0.3em",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

// Title animation - từng chữ
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
      stiffness: 80,
      damping: 12,
      duration: 0.8,
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
    backgroundColor: "#3b82f6",
    color: "#ffffff",
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

// Line animation (tùy chọn)
export const lineVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: 60,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};
