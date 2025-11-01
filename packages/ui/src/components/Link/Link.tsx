import React from "react";
import classNames from "classnames";
import { IconExternalLink } from "@nam-ds/icons";
import styles from "./Link.module.scss";

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  /** Link variant */
  variant?: "default" | "primary" | "secondary" | "muted";
  /** Link size */
  size?: "sm" | "md" | "lg";
  /** Show underline */
  underline?: "none" | "hover" | "always";
  /** External link (opens in new tab) */
  external?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Children content (required and non-empty) - Links must have visible content for accessibility */
  children: Exclude<React.ReactNode, null | undefined | false | "">;
  /** Custom class name */
  className?: string;
  /** Link URL (required) */
  href: string;
  /** Ref */
  ref?: React.Ref<HTMLAnchorElement>;
}

export const Link = ({
  variant = "default",
  size = "md",
  underline = "hover",
  external = false,
  disabled = false,
  children,
  className,
  href,
  target,
  rel,
  ref,
  onClick,
  ...props
}: LinkProps) => {
  const linkClasses = classNames(
    styles.link,
    styles[`link--${variant}`],
    styles[`link--${size}`],
    styles[`link--underline-${underline}`],
    {
      [styles["link--disabled"]]: disabled,
    },
    className
  );

  // Handle external link attributes
  const linkTarget = external ? "_blank" : target;
  const linkRel = external ? "noopener noreferrer" : rel;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    onClick?.(e);
  };

  return (
    <a
      ref={ref}
      className={linkClasses}
      href={disabled ? undefined : href}
      target={linkTarget}
      rel={linkRel}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      {...props}
      onClick={handleClick}
    >
      {children}
      {external && !disabled && (
        <IconExternalLink
          size={size}
          className={styles.externalIcon}
          label="Opens in new tab"
        />
      )}
    </a>
  );
};

Link.displayName = "Link";
