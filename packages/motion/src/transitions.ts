// Fallback type for when framer-motion is not available
type Transition = {
  type?: string;
  duration?: number;
  ease?: string | number[];
  damping?: number;
  stiffness?: number;
  mass?: number;
  [key: string]: any;
};

/**
 * Reusable transition configurations
 */
export const transitions = {
  // Easing functions
  easing: {
    easeInOut: [0.4, 0, 0.2, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    sharp: [0.4, 0, 0.6, 1],
    standard: [0.4, 0, 0.2, 1],
  },

  // Duration presets
  duration: {
    fastest: 0.1,
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slowest: 0.8,
  },

  // Spring configurations
  spring: {
    gentle: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
    },
    wobbly: {
      type: "spring" as const,
      damping: 10,
      stiffness: 400,
    },
    stiff: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
    },
    slow: {
      type: "spring" as const,
      damping: 30,
      stiffness: 80,
    },
  },

  // Common transition presets
  presets: {
    fade: {
      duration: 0.2,
      ease: "easeInOut",
    },

    slideUp: {
      type: "spring" as const,
      damping: 25,
      stiffness: 200,
    },

    scaleIn: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
    },

    bouncy: {
      type: "spring" as const,
      damping: 15,
      stiffness: 400,
    },

    smooth: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },

    snappy: {
      duration: 0.15,
      ease: [0.4, 0, 1, 1],
    },
  },

  // Stagger configurations
  stagger: {
    fast: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
    normal: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
    slow: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
} as const;

export type TransitionPreset = keyof typeof transitions.presets;
export type SpringPreset = keyof typeof transitions.spring;
export type StaggerPreset = keyof typeof transitions.stagger;
