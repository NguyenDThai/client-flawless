// Animation variants
export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const cartVariants = {
  hidden: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
      mass: 0.8,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 150,
      mass: 0.8,
      delay: 0.05,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
      mass: 0.8,
    },
  },
} as const;

export const closeButtonVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: -90,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  tap: {
    scale: 0.9,
    rotate: 0,
    transition: { duration: 0.1 },
  },
} as const;

export const arrowVariants = {
  initial: { x: 0 },
  hover: {
    x: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { x: -2 },
} as const;

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
} as const;

export const headerVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: { duration: 0.2 },
  },
} as const;

export const footerVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: 0.2,
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.2 },
  },
} as const;
