import React from "react";
import classNames from "classnames";
import { Loading } from "../Loading";
import styles from "./Button.module.scss";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  /** Button variant */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** Loading state */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Children content */
  children: React.ReactNode;
  /** Custom class name */
  className?: string;
  /** Ref */
  ref?: React.Ref<HTMLButtonElement>;
}

export const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  children,
  className,
  ref,
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    {
      [styles["button--full-width"]]: fullWidth,
      [styles["button--loading"]]: loading,
      [styles["button--disabled"]]: disabled,
    },
    className
  );

  return (
    <button
      ref={ref}
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <Loading
          size={size === "sm" ? "sm" : size === "lg" ? "lg" : "md"}
          className={styles.spinner}
          aria-label="Button loading"
        />
      )}
      <span className={loading ? styles.hiddenContent : undefined}>
        {children}
      </span>
    </button>
  );
};

Button.displayName = "Button";
