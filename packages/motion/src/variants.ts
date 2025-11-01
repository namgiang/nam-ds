// Fallback type for when framer-motion is not available
type Variants = {
  initial?: any;
  animate?: any;
  exit?: any;
  [key: string]: any;
};

/**
 * Advanced animation variants for complex UI patterns
 */
export const variants = {
  // Modal/Dialog variants
  modal: {
    backdrop: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    content: {
      initial: { opacity: 0, scale: 0.9, y: 20 },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 400,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: {
          duration: 0.2,
        },
      },
    },
  },

  // Dropdown/Menu variants
  dropdown: {
    container: {
      initial: { opacity: 0, scale: 0.95, y: -10 },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      },
      exit: {
        opacity: 0,
        scale: 0.95,
        y: -10,
        transition: {
          duration: 0.15,
          ease: "easeIn",
        },
      },
    },
    item: {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
    },
  },

  // Toast/Notification variants
  toast: {
    topRight: {
      initial: { opacity: 0, x: 100, scale: 0.8 },
      animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      },
      exit: {
        opacity: 0,
        x: 100,
        scale: 0.8,
        transition: {
          duration: 0.2,
        },
      },
    },
    bottomCenter: {
      initial: { opacity: 0, y: 100 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      },
      exit: {
        opacity: 0,
        y: 100,
        transition: {
          duration: 0.2,
        },
      },
    },
  },

  // Accordion variants
  accordion: {
    container: {
      initial: { height: 0, opacity: 0 },
      animate: {
        height: "auto",
        opacity: 1,
        transition: {
          height: {
            type: "spring",
            damping: 25,
            stiffness: 200,
          },
          opacity: {
            delay: 0.1,
            duration: 0.2,
          },
        },
      },
      exit: {
        height: 0,
        opacity: 0,
        transition: {
          height: {
            type: "spring",
            damping: 25,
            stiffness: 200,
          },
          opacity: {
            duration: 0.1,
          },
        },
      },
    },
  },

  // Tab variants
  tab: {
    content: {
      initial: { opacity: 0, x: 10 },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
      exit: {
        opacity: 0,
        x: -10,
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
      },
    },
    indicator: {
      initial: { scaleX: 0 },
      animate: {
        scaleX: 1,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      },
    },
  },

  // Loading/Skeleton variants
  loading: {
    pulse: {
      initial: { opacity: 0.5 },
      animate: {
        opacity: [0.5, 1, 0.5],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
    shimmer: {
      initial: { x: "-100%" },
      animate: {
        x: "100%",
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  },
} as const satisfies Record<string, Record<string, Variants>>;

export type VariantCategory = keyof typeof variants;
export type VariantName<T extends VariantCategory> = keyof (typeof variants)[T];
