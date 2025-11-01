import React from "react";
import classNames from "classnames";

/** Icon sizes mapped to font-size design tokens */
export const ICON_SIZES = {
  xs: "var(--font-size-xs)", // 0.75rem = 12px
  sm: "var(--font-size-sm)", // 0.875rem = 14px
  md: "var(--font-size-base)", // 1.125rem = 18px
  lg: "var(--font-size-lg)", // 1.5rem = 24px
  xl: "var(--font-size-xl)", // 1.875rem = 30px
  "2xl": "var(--font-size-2xl)", // 2.25rem = 36px
} as const;

export type IconSize = keyof typeof ICON_SIZES;

/** Base props for all icons */
export interface BaseIconProps {
  /** Icon size - defaults to 'md' (20px) */
  size?: IconSize;
  /** Custom class name */
  className?: string;
  /**
   * Accessibility label - if provided, icon is semantic and gets aria-label
   * If not provided, icon is decorative and gets aria-hidden="true"
   */
  label?: string;
  /**
   * Custom color - uses currentColor by default for token integration
   * Only use when you need to override the theme color
   */
  color?: string;
  /** Additional HTML attributes */
  style?: React.CSSProperties;
}

/**
 * Base Icon component that wraps any icon source with consistent API and a11y defaults
 * This is the foundation that all specific icons build upon
 */
export const BaseIcon = ({
  size = "md",
  className,
  label,
  color,
  children,
  style,
  ref,
  ...props
}: BaseIconProps & {
  children: React.ReactNode;
  ref?: React.Ref<HTMLSpanElement>;
}) => {
  const sizeValue = ICON_SIZES[size];
  const isDecorative = !label;

  return (
    <span
      ref={ref}
      className={classNames("nam-icon", `nam-icon--${size}`, className)}
      style={{
        display: "inline-block",
        width: sizeValue,
        height: sizeValue,
        color: color || "currentColor",
        flexShrink: 0,
        ...style,
      }}
      aria-hidden={isDecorative}
      aria-label={label}
      role={label ? "img" : undefined}
      {...props}
    >
      {children}
    </span>
  );
};

BaseIcon.displayName = "BaseIcon";

/**
 * Higher-order component that creates icon components from Lucide icons
 * This is where the source-agnostic magic happens - swap this implementation
 * to use different icon sources without touching consuming code
 */
/** Pixel equivalents for Lucide icons (which don't support CSS variables) */
const LUCIDE_SIZES = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 24,
  xl: 30,
  "2xl": 36,
} as const;

export function createIcon(LucideIcon: any, displayName: string) {
  const IconComponent = (
    props: BaseIconProps & { ref?: React.Ref<HTMLSpanElement> }
  ) => {
    const { size = "md", ref, ...otherProps } = props;
    const lucideSize = LUCIDE_SIZES[size];

    return (
      <BaseIcon ref={ref} {...props}>
        <LucideIcon
          size={lucideSize}
          strokeWidth={1.5}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
          {...otherProps}
        />
      </BaseIcon>
    );
  };

  IconComponent.displayName = displayName;
  return IconComponent;
}
