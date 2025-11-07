import React from "react";
import classNames from "classnames";
import styles from "./Text.module.scss";

export interface TextProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "size"> {
  /** Semantic HTML element to render */
  as?:
    | "p"
    | "span"
    | "div"
    | "label"
    | "caption"
    | "small"
    | "strong"
    | "em"
    | "mark"
    | "code"
    | "pre"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  /** Text variant for semantic meaning */
  variant?:
    | "body"
    | "caption"
    | "label"
    | "code"
    | "display"
    | "heading"
    | "subheading";
  /** Text size - Fluid responsive sizes */
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  /** Text weight */
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  /** Text color semantic meaning */
  color?:
    | "default"
    | "muted"
    | "subtle"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "error";
  /** Text alignment */
  align?: "left" | "center" | "right" | "justify";
  /** Text transform */
  transform?: "none" | "uppercase" | "lowercase" | "capitalize";
  /** Truncate text with ellipsis */
  truncate?: boolean;
  /** Use monospace font family */
  mono?: boolean;
  /** Italic text */
  italic?: boolean;
  /** Children content */
  children: React.ReactNode;
  /** Custom class name */
  className?: string;
}

/**
 * Text component for semantic typography with consistent styling
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as = "p",
      variant = "body",
      size = "md",
      weight = "normal",
      color = "default",
      align = "left",
      transform = "none",
      truncate = false,
      mono = false,
      italic = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const Component = as;

    const textClasses = classNames(
      styles.text,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      styles[`weight-${weight}`],
      styles[`color-${color}`],
      styles[`align-${align}`],
      styles[`transform-${transform}`],
      {
        [styles.truncate]: truncate,
        [styles.mono]: mono,
        [styles.italic]: italic,
      },
      className
    );

    return (
      <Component ref={ref as any} className={textClasses} {...props}>
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";
