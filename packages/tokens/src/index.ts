/**
 * NAM Design System Tokens - Hybrid Approach
 *
 * CSS variables as single source of truth + raw values for Framer Motion
 */

// Import CSS themes (single source of truth)
import "./themes/default.scss";
import "./themes/dark.scss";
import "./themes/dutch-phrase-companion.scss";

// Import fluid typography system
import "./typography/fluid.scss";

// Theme utilities
export const themes = {
  default: "default",
  dark: "dark",
  "dutch-phrase-companion": "dutch-phrase-companion",
} as const;

export type Theme = keyof typeof themes;
export type ColorShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

// Runtime token helpers - get raw values from CSS variables (zero duplication!)
export const rawTokens = {
  color: {
    brand: {
      primary: (shade: ColorShade = 500) =>
        getCSSVar(`--color-brand-primary-${shade}`),
      secondary: (shade: ColorShade = 500) =>
        getCSSVar(`--color-brand-secondary-${shade}`),
    },
    semantic: {
      success: (shade: ColorShade = 500) =>
        getCSSVar(`--color-success-${shade}`),
      warning: (shade: ColorShade = 500) =>
        getCSSVar(`--color-warning-${shade}`),
      error: (shade: ColorShade = 500) => getCSSVar(`--color-error-${shade}`),
      info: (shade: ColorShade = 500) => getCSSVar(`--color-info-${shade}`),
    },
    neutral: (shade: ColorShade = 500) => getCSSVar(`--color-neutral-${shade}`),
  },
  spacing: {
    px: () => getCSSVar("--spacing-px"),
    0: () => getCSSVar("--spacing-0"),
    1: () => getCSSVar("--spacing-1"),
    2: () => getCSSVar("--spacing-2"),
    3: () => getCSSVar("--spacing-3"),
    4: () => getCSSVar("--spacing-4"),
    6: () => getCSSVar("--spacing-6"),
    8: () => getCSSVar("--spacing-8"),
    10: () => getCSSVar("--spacing-10"),
    12: () => getCSSVar("--spacing-12"),
    16: () => getCSSVar("--spacing-16"),
    20: () => getCSSVar("--spacing-20"),
    24: () => getCSSVar("--spacing-24"),
    32: () => getCSSVar("--spacing-32"),
  },
  fontSize: {
    xs: () => getCSSVar("--font-size-caption-xs"),
    sm: () => getCSSVar("--font-size-caption-sm"),
    base: () => getCSSVar("--font-size-body-md"),
    lg: () => getCSSVar("--font-size-body-lg"),
    xl: () => getCSSVar("--font-size-body-xl"),
    "2xl": () => getCSSVar("--font-size-heading-lg"),
    "3xl": () => getCSSVar("--font-size-heading-xl"),
    "4xl": () => getCSSVar("--font-size-heading-2xl"),
    "5xl": () => getCSSVar("--font-size-heading-3xl"),
    "6xl": () => getCSSVar("--font-size-display-xl"),
    "7xl": () => getCSSVar("--font-size-display-2xl"),
    "8xl": () => getCSSVar("--font-size-display-3xl"),
    "9xl": () => getCSSVar("--font-size-display-4xl"),
  },
} as const;

// CSS variable helpers for standard styling
export const token = {
  color: {
    brand: {
      primary: (shade: ColorShade = 500) =>
        `var(--color-brand-primary-${shade})`,
      secondary: (shade: ColorShade = 500) =>
        `var(--color-brand-secondary-${shade})`,
    },
    semantic: {
      success: (shade: ColorShade = 500) => `var(--color-success-${shade})`,
      warning: (shade: ColorShade = 500) => `var(--color-warning-${shade})`,
      error: (shade: ColorShade = 500) => `var(--color-error-${shade})`,
      info: (shade: ColorShade = 500) => `var(--color-info-${shade})`,
    },
    neutral: (shade: ColorShade = 500) => `var(--color-neutral-${shade})`,
  },
  spacing: {
    px: () => `var(--spacing-px)`,
    0: () => `var(--spacing-0)`,
    1: () => `var(--spacing-1)`,
    2: () => `var(--spacing-2)`,
    3: () => `var(--spacing-3)`,
    4: () => `var(--spacing-4)`,
    6: () => `var(--spacing-6)`,
    8: () => `var(--spacing-8)`,
    10: () => `var(--spacing-10)`,
    12: () => `var(--spacing-12)`,
    16: () => `var(--spacing-16)`,
    20: () => `var(--spacing-20)`,
    24: () => `var(--spacing-24)`,
    32: () => `var(--spacing-32)`,
  },
  fontSize: {
    // Fluid typography sizes that scale with viewport
    xs: () => `var(--font-size-caption-xs)`, // 10px -> 14px
    sm: () => `var(--font-size-caption-sm)`, // 11px -> 15px
    base: () => `var(--font-size-body-md)`, // 14px -> 18px
    lg: () => `var(--font-size-body-lg)`, // 16px -> 20px
    xl: () => `var(--font-size-body-xl)`, // 18px -> 22px
    "2xl": () => `var(--font-size-heading-lg)`, // 18px -> 22px
    "3xl": () => `var(--font-size-heading-xl)`, // 20px -> 28px
    "4xl": () => `var(--font-size-heading-2xl)`, // 24px -> 36px
    // Display sizes for large headings/heroes
    "5xl": () => `var(--font-size-heading-3xl)`, // 30px -> 48px
    "6xl": () => `var(--font-size-display-xl)`, // 20px -> 36px
    "7xl": () => `var(--font-size-display-2xl)`, // 24px -> 48px
    "8xl": () => `var(--font-size-display-3xl)`, // 30px -> 60px
    "9xl": () => `var(--font-size-display-4xl)`, // 36px -> 72px
  },
  fontWeight: {
    light: () => `var(--font-weight-light)`,
    normal: () => `var(--font-weight-normal)`,
    medium: () => `var(--font-weight-medium)`,
    semibold: () => `var(--font-weight-semibold)`,
    bold: () => `var(--font-weight-bold)`,
  },
  fontFamily: {
    sans: () => `var(--font-family-sans)`,
    serif: () => `var(--font-family-serif)`,
    mono: () => `var(--font-family-mono)`,
  },
  lineHeight: {
    display: () => `var(--line-height-display)`,
    heading: () => `var(--line-height-heading)`,
    body: () => `var(--line-height-body)`,
    caption: () => `var(--line-height-caption)`,
    code: () => `var(--line-height-code)`,
  },
  letterSpacing: {
    tight: () => `var(--letter-spacing-tight)`,
    normal: () => `var(--letter-spacing-normal)`,
    wide: () => `var(--letter-spacing-wide)`,
  },
  borderRadius: {
    none: () => `var(--border-radius-none)`,
    sm: () => `var(--border-radius-sm)`,
    base: () => `var(--border-radius-base)`,
    md: () => `var(--border-radius-md)`,
    lg: () => `var(--border-radius-lg)`,
    xl: () => `var(--border-radius-xl)`,
    full: () => `var(--border-radius-full)`,
  },
  shadow: {
    none: () => `var(--shadow-none)`,
    sm: () => `var(--shadow-sm)`,
    base: () => `var(--shadow-base)`,
    md: () => `var(--shadow-md)`,
    lg: () => `var(--shadow-lg)`,
    xl: () => `var(--shadow-xl)`,
  },
  zIndex: {
    hide: () => `var(--z-hide)`,
    base: () => `var(--z-base)`,
    dropdown: () => `var(--z-dropdown)`,
    modal: () => `var(--z-modal)`,
    tooltip: () => `var(--z-tooltip)`,
  },
} as const;

// Framer Motion optimized helpers
export const motion = {
  // Get raw values for complex animations
  color: {
    brand: {
      primary: rawTokens.color.brand.primary,
      secondary: rawTokens.color.brand.secondary,
    },
    semantic: {
      success: rawTokens.color.semantic.success,
      warning: rawTokens.color.semantic.warning,
      error: rawTokens.color.semantic.error,
      info: rawTokens.color.semantic.info,
    },
    neutral: rawTokens.color.neutral,
  },

  spacing: rawTokens.spacing,

  // Common animation presets
  presets: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slideUp: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -20, opacity: 0 },
    },
    scale: {
      initial: { scale: 0.9, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.9, opacity: 0 },
    },
    slideInLeft: {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 20, opacity: 0 },
    },
  },
} as const;

// Theme management
export function setTheme(theme: Theme) {
  if (typeof document !== "undefined") {
    // Remove existing theme attributes
    Object.values(themes).forEach((t) => {
      if (t !== "default") {
        document.documentElement.removeAttribute("data-theme");
      }
    });

    // Apply new theme (default theme doesn't need data-theme attribute)
    if (theme !== "default") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }
}

export function getTheme(): Theme {
  if (typeof document !== "undefined") {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    return (currentTheme as Theme) || "default";
  }
  return "default";
}

export function toggleTheme() {
  const current = getTheme();
  const newTheme = current === "dark" ? "default" : "dark";
  setTheme(newTheme);
  return newTheme;
}

// Utility to get current theme's color values for Framer Motion
export function getThemeColor(
  colorPath: string,
  shade: ColorShade = 500
): string {
  if (typeof document !== "undefined") {
    const cssVarName = `--color-${colorPath.replace(/\./g, "-")}-${shade}`;
    return getComputedStyle(document.documentElement)
      .getPropertyValue(cssVarName)
      .trim();
  }

  // Fallback: try to parse the path and get CSS var
  const cssVarName = `--color-${colorPath.replace(/\./g, "-")}-${shade}`;

  // If we can't get from document, return a sensible default
  return "#000000";
}

// Utility functions for runtime CSS variable access
export function getCSSVar(varName: string): string {
  if (typeof document !== "undefined") {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName.startsWith("--") ? varName : `--${varName}`)
      .trim();
  }
  return "";
}

export function setCSSVar(varName: string, value: string): void {
  if (typeof document !== "undefined") {
    document.documentElement.style.setProperty(
      varName.startsWith("--") ? varName : `--${varName}`,
      value
    );
  }
}

// Backwards compatibility
export const cssVar = token;
