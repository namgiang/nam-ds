import { useEffect, useRef } from "react";

// Fallback types and functions for when framer-motion is not available
type AnimationControls = {
  start: (definition: any) => Promise<void>;
};

function useAnimation(): AnimationControls {
  return {
    start: async () => {},
  };
}

function useInView(ref: any, options?: any): boolean {
  return true;
}

/**
 * Custom hooks for motion utilities
 */

// Hook for scroll-triggered animations
export function useScrollAnimation() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return { ref, controls, inView };
}

// Hook for staggered animations
export function useStaggeredAnimation(itemCount: number, delay = 0.1) {
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start((i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * delay },
    }));
  };

  return { controls, startAnimation };
}

// Hook for hover animations
export function useHoverAnimation(
  hoverVariant = { scale: 1.05 },
  tapVariant = { scale: 0.95 }
) {
  return {
    whileHover: hoverVariant,
    whileTap: tapVariant,
  };
}

// Hook for reduced motion preference
export function useReducedMotion() {
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return prefersReducedMotion;
}

// Hook for sequential animations
export function useSequence() {
  const controls = useAnimation();

  const playSequence = async (
    sequence: Array<{
      animation: Record<string, any>;
      duration?: number;
    }>
  ) => {
    for (const step of sequence) {
      await controls.start(step.animation);
      if (step.duration) {
        await new Promise((resolve) =>
          setTimeout(resolve, (step.duration || 0) * 1000)
        );
      }
    }
  };

  return { controls, playSequence };
}

export type UseScrollAnimationReturn = ReturnType<typeof useScrollAnimation>;
export type UseStaggeredAnimationReturn = ReturnType<
  typeof useStaggeredAnimation
>;
export type UseHoverAnimationReturn = ReturnType<typeof useHoverAnimation>;
export type UseSequenceReturn = ReturnType<typeof useSequence>;
