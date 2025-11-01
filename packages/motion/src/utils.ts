/**
 * Motion utilities and helpers
 */

// Fallback CSS variable getter when @nam-ds/tokens is not available
function getCSSVar(varName: string): string {
  if (typeof document !== "undefined") {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName.startsWith("--") ? varName : `--${varName}`)
      .trim();
  }
  return "";
}

// Convert CSS variables to raw values for Framer Motion
export function getMotionValue(cssVar: string): string {
  return getCSSVar(cssVar);
}

// Create spring configuration with token-based values
export function createSpring(tension = 300, friction = 20, mass = 1) {
  return {
    type: "spring" as const,
    damping: friction,
    stiffness: tension,
    mass,
  };
}

// Duration utilities
export function ms(milliseconds: number) {
  return milliseconds / 1000;
}

export function seconds(sec: number) {
  return sec;
}

// Easing utilities
export const easings = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  sharp: [0.4, 0, 0.6, 1],
  standard: [0.4, 0, 0.2, 1],
} as const;

// Create keyframe animations
export function createKeyframes(values: number[], times?: number[]) {
  return {
    keyframes: values,
    times: times || values.map((_, i) => i / (values.length - 1)),
  };
}

// Accessibility utilities
export function withReducedMotion<T extends Record<string, any>>(
  animation: T,
  reducedAnimation?: Partial<T>
): T {
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  if (prefersReducedMotion && reducedAnimation) {
    return { ...animation, ...reducedAnimation };
  }

  return animation;
}

// Create responsive animations based on screen size
export function createResponsiveAnimation(
  mobile: Record<string, any>,
  desktop?: Record<string, any>
) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  return isMobile ? mobile : desktop || mobile;
}

// Stagger delay calculator
export function staggerDelay(index: number, baseDelay = 0.1): number {
  return index * baseDelay;
}

// Create viewport-based animations
export function createViewportAnimation(threshold = 0.3, margin = "0px") {
  return {
    viewport: {
      once: true,
      amount: threshold,
      margin,
    },
  };
}

export type EasingName = keyof typeof easings;
