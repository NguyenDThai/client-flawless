import { Variants } from "framer-motion";

// Container animation - hiệu ứng xuất hiện tổng thể
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

// Image animation - hiệu ứng cho ảnh
export const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
};

// Line animation - đường kẻ trang trí
export const lineVariants: Variants = {
  hidden: {
    width: 0,
    opacity: 0,
  },
  visible: {
    width: 64, // w-16 = 64px
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Title animation - hiệu ứng cho tiêu đề
export const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.6,
    },
  },
};

// Description animation - hiệu ứng cho mô tả
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
      stiffness: 150,
      damping: 15,
      duration: 0.6,
      delay: 0.2,
    },
  },
};

// Button animation - hiệu ứng cho nút
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
      stiffness: 200,
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

// Text animation với hiệu ứng chữ xuất hiện từng chữ (tùy chọn)
export const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Parallax effect cho background (tùy chọn)
export const backgroundVariants = {
  hidden: { scale: 1 },
  visible: {
    scale: 1.05,
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "linear",
    },
  },
};
