const i = {
  default: "default",
  dark: "dark",
  "dutch-phrase-companion": "dutch-phrase-companion"
}, r = {
  color: {
    brand: {
      primary: (e = 500) => a(`--color-brand-primary-${e}`),
      secondary: (e = 500) => a(`--color-brand-secondary-${e}`)
    },
    semantic: {
      success: (e = 500) => a(`--color-success-${e}`),
      warning: (e = 500) => a(`--color-warning-${e}`),
      error: (e = 500) => a(`--color-error-${e}`),
      info: (e = 500) => a(`--color-info-${e}`)
    },
    neutral: (e = 500) => a(`--color-neutral-${e}`)
  },
  spacing: {
    px: () => a("--spacing-px"),
    0: () => a("--spacing-0"),
    1: () => a("--spacing-1"),
    2: () => a("--spacing-2"),
    3: () => a("--spacing-3"),
    4: () => a("--spacing-4"),
    6: () => a("--spacing-6"),
    8: () => a("--spacing-8"),
    10: () => a("--spacing-10"),
    12: () => a("--spacing-12"),
    16: () => a("--spacing-16"),
    20: () => a("--spacing-20"),
    24: () => a("--spacing-24"),
    32: () => a("--spacing-32")
  },
  fontSize: {
    xs: () => a("--font-size-caption-xs"),
    sm: () => a("--font-size-caption-sm"),
    base: () => a("--font-size-body-md"),
    lg: () => a("--font-size-body-lg"),
    xl: () => a("--font-size-body-xl"),
    "2xl": () => a("--font-size-heading-lg"),
    "3xl": () => a("--font-size-heading-xl"),
    "4xl": () => a("--font-size-heading-2xl"),
    "5xl": () => a("--font-size-heading-3xl"),
    "6xl": () => a("--font-size-display-xl"),
    "7xl": () => a("--font-size-display-2xl"),
    "8xl": () => a("--font-size-display-3xl"),
    "9xl": () => a("--font-size-display-4xl")
  }
}, t = {
  color: {
    brand: {
      primary: (e = 500) => `var(--color-brand-primary-${e})`,
      secondary: (e = 500) => `var(--color-brand-secondary-${e})`
    },
    semantic: {
      success: (e = 500) => `var(--color-success-${e})`,
      warning: (e = 500) => `var(--color-warning-${e})`,
      error: (e = 500) => `var(--color-error-${e})`,
      info: (e = 500) => `var(--color-info-${e})`
    },
    neutral: (e = 500) => `var(--color-neutral-${e})`
  },
  spacing: {
    px: () => "var(--spacing-px)",
    0: () => "var(--spacing-0)",
    1: () => "var(--spacing-1)",
    2: () => "var(--spacing-2)",
    3: () => "var(--spacing-3)",
    4: () => "var(--spacing-4)",
    6: () => "var(--spacing-6)",
    8: () => "var(--spacing-8)",
    10: () => "var(--spacing-10)",
    12: () => "var(--spacing-12)",
    16: () => "var(--spacing-16)",
    20: () => "var(--spacing-20)",
    24: () => "var(--spacing-24)",
    32: () => "var(--spacing-32)"
  },
  fontSize: {
    // Fluid typography sizes that scale with viewport
    xs: () => "var(--font-size-caption-xs)",
    // 10px -> 14px
    sm: () => "var(--font-size-caption-sm)",
    // 11px -> 15px
    base: () => "var(--font-size-body-md)",
    // 14px -> 18px
    lg: () => "var(--font-size-body-lg)",
    // 16px -> 20px
    xl: () => "var(--font-size-body-xl)",
    // 18px -> 22px
    "2xl": () => "var(--font-size-heading-lg)",
    // 18px -> 22px
    "3xl": () => "var(--font-size-heading-xl)",
    // 20px -> 28px
    "4xl": () => "var(--font-size-heading-2xl)",
    // 24px -> 36px
    // Display sizes for large headings/heroes
    "5xl": () => "var(--font-size-heading-3xl)",
    // 30px -> 48px
    "6xl": () => "var(--font-size-display-xl)",
    // 20px -> 36px
    "7xl": () => "var(--font-size-display-2xl)",
    // 24px -> 48px
    "8xl": () => "var(--font-size-display-3xl)",
    // 30px -> 60px
    "9xl": () => "var(--font-size-display-4xl)"
    // 36px -> 72px
  },
  fontWeight: {
    light: () => "var(--font-weight-light)",
    normal: () => "var(--font-weight-normal)",
    medium: () => "var(--font-weight-medium)",
    semibold: () => "var(--font-weight-semibold)",
    bold: () => "var(--font-weight-bold)"
  },
  fontFamily: {
    sans: () => "var(--font-family-sans)",
    serif: () => "var(--font-family-serif)",
    mono: () => "var(--font-family-mono)"
  },
  lineHeight: {
    display: () => "var(--line-height-display)",
    heading: () => "var(--line-height-heading)",
    body: () => "var(--line-height-body)",
    caption: () => "var(--line-height-caption)",
    code: () => "var(--line-height-code)"
  },
  letterSpacing: {
    tight: () => "var(--letter-spacing-tight)",
    normal: () => "var(--letter-spacing-normal)",
    wide: () => "var(--letter-spacing-wide)"
  },
  borderRadius: {
    none: () => "var(--border-radius-none)",
    sm: () => "var(--border-radius-sm)",
    base: () => "var(--border-radius-base)",
    md: () => "var(--border-radius-md)",
    lg: () => "var(--border-radius-lg)",
    xl: () => "var(--border-radius-xl)",
    full: () => "var(--border-radius-full)"
  },
  shadow: {
    none: () => "var(--shadow-none)",
    sm: () => "var(--shadow-sm)",
    base: () => "var(--shadow-base)",
    md: () => "var(--shadow-md)",
    lg: () => "var(--shadow-lg)",
    xl: () => "var(--shadow-xl)"
  },
  zIndex: {
    hide: () => "var(--z-hide)",
    base: () => "var(--z-base)",
    dropdown: () => "var(--z-dropdown)",
    modal: () => "var(--z-modal)",
    tooltip: () => "var(--z-tooltip)"
  }
}, l = {
  // Get raw values for complex animations
  color: {
    brand: {
      primary: r.color.brand.primary,
      secondary: r.color.brand.secondary
    },
    semantic: {
      success: r.color.semantic.success,
      warning: r.color.semantic.warning,
      error: r.color.semantic.error,
      info: r.color.semantic.info
    },
    neutral: r.color.neutral
  },
  spacing: r.spacing,
  // Common animation presets
  presets: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slideUp: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -20, opacity: 0 }
    },
    scale: {
      initial: { scale: 0.9, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.9, opacity: 0 }
    },
    slideInLeft: {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 20, opacity: 0 }
    }
  }
};
function s(e) {
  typeof document < "u" && (Object.values(i).forEach((n) => {
    n !== "default" && document.documentElement.removeAttribute("data-theme");
  }), e !== "default" && document.documentElement.setAttribute("data-theme", e));
}
function c() {
  return typeof document < "u" && document.documentElement.getAttribute("data-theme") || "default";
}
function d() {
  const n = c() === "dark" ? "default" : "dark";
  return s(n), n;
}
function p(e, n = 500) {
  if (typeof document < "u") {
    const o = `--color-${e.replace(/\./g, "-")}-${n}`;
    return getComputedStyle(document.documentElement).getPropertyValue(o).trim();
  }
  return `${e.replace(/\./g, "-")}${n}`, "#000000";
}
function a(e) {
  return typeof document < "u" ? getComputedStyle(document.documentElement).getPropertyValue(e.startsWith("--") ? e : `--${e}`).trim() : "";
}
function g(e, n) {
  typeof document < "u" && document.documentElement.style.setProperty(
    e.startsWith("--") ? e : `--${e}`,
    n
  );
}
const m = t;
export {
  m as cssVar,
  a as getCSSVar,
  c as getTheme,
  p as getThemeColor,
  l as motion,
  r as rawTokens,
  g as setCSSVar,
  s as setTheme,
  i as themes,
  d as toggleTheme,
  t as token
};
