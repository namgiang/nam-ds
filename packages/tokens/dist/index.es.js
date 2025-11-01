const t = {
  default: "default",
  dark: "dark",
  "dutch-phrase-companion": "dutch-phrase-companion"
}, n = {
  color: {
    brand: {
      primary: (r = 500) => a(`--color-brand-primary-${r}`),
      secondary: (r = 500) => a(`--color-brand-secondary-${r}`)
    },
    semantic: {
      success: (r = 500) => a(`--color-success-${r}`),
      warning: (r = 500) => a(`--color-warning-${r}`),
      error: (r = 500) => a(`--color-error-${r}`),
      info: (r = 500) => a(`--color-info-${r}`)
    },
    neutral: (r = 500) => a(`--color-neutral-${r}`)
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
  }
}, i = {
  color: {
    brand: {
      primary: (r = 500) => `var(--color-brand-primary-${r})`,
      secondary: (r = 500) => `var(--color-brand-secondary-${r})`
    },
    semantic: {
      success: (r = 500) => `var(--color-success-${r})`,
      warning: (r = 500) => `var(--color-warning-${r})`,
      error: (r = 500) => `var(--color-error-${r})`,
      info: (r = 500) => `var(--color-info-${r})`
    },
    neutral: (r = 500) => `var(--color-neutral-${r})`
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
    xs: () => "var(--font-size-xs)",
    sm: () => "var(--font-size-sm)",
    base: () => "var(--font-size-base)",
    lg: () => "var(--font-size-lg)",
    xl: () => "var(--font-size-xl)",
    "2xl": () => "var(--font-size-2xl)",
    "3xl": () => "var(--font-size-3xl)",
    "4xl": () => "var(--font-size-4xl)"
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
}, d = {
  // Get raw values for complex animations
  color: {
    brand: {
      primary: n.color.brand.primary,
      secondary: n.color.brand.secondary
    },
    semantic: {
      success: n.color.semantic.success,
      warning: n.color.semantic.warning,
      error: n.color.semantic.error,
      info: n.color.semantic.info
    },
    neutral: n.color.neutral
  },
  spacing: n.spacing,
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
function c(r) {
  typeof document < "u" && (Object.values(t).forEach((e) => {
    e !== "default" && document.documentElement.removeAttribute("data-theme");
  }), r !== "default" && document.documentElement.setAttribute("data-theme", r));
}
function s() {
  return typeof document < "u" && document.documentElement.getAttribute("data-theme") || "default";
}
function l() {
  const e = s() === "dark" ? "default" : "dark";
  return c(e), e;
}
function m(r, e = 500) {
  if (typeof document < "u") {
    const o = `--color-${r.replace(/\./g, "-")}-${e}`;
    return getComputedStyle(document.documentElement).getPropertyValue(o).trim();
  }
  return `${r.replace(/\./g, "-")}${e}`, "#000000";
}
function a(r) {
  return typeof document < "u" ? getComputedStyle(document.documentElement).getPropertyValue(r.startsWith("--") ? r : `--${r}`).trim() : "";
}
function u(r, e) {
  typeof document < "u" && document.documentElement.style.setProperty(
    r.startsWith("--") ? r : `--${r}`,
    e
  );
}
const p = i;
export {
  p as cssVar,
  a as getCSSVar,
  s as getTheme,
  m as getThemeColor,
  d as motion,
  n as rawTokens,
  u as setCSSVar,
  c as setTheme,
  t as themes,
  l as toggleTheme,
  i as token
};
