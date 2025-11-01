// Fallback type for when framer-motion is not available
type Variants = {
  initial?: any;
  animate?: any;
  exit?: any;
  [key: string]: any;
};

/**
 * Common animation presets
 */
export const presets = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },

  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },

  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },

  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },

  scaleOut: {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  },

  // Slide animations
  slideInUp: {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
  },

  slideInDown: {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  },

  slideInLeft: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },

  slideInRight: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  },

  // Special effects
  bounce: {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 400,
      },
    },
    exit: { scale: 0 },
  },

  flip: {
    initial: { rotateY: -90, opacity: 0 },
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
    exit: { rotateY: 90, opacity: 0 },
  },

  // Container animations for staggered children
  stagger: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  },

  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
} as const satisfies Record<string, Variants>;

export type PresetName = keyof typeof presets;
