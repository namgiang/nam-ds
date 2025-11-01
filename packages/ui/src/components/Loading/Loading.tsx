import React from "react";
import classNames from "classnames";
import styles from "./Loading.module.scss";

export interface LoadingProps {
  /** Loading size */
  size?: "sm" | "md" | "lg";
  /** Loading variant */
  variant?: "spinner" | "dots" | "pulse";
  /** Custom class name */
  className?: string;
  /** Custom color */
  color?: string;
  /** Accessible label for screen readers */
  "aria-label"?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  size = "md",
  variant = "spinner",
  className,
  color,
  "aria-label": ariaLabel = "Loading",
}) => {
  const loadingClasses = classNames(
    styles.loading,
    styles[`loading--${size}`],
    styles[`loading--${variant}`],
    className
  );

  const style = color ? { color } : undefined;

  if (variant === "spinner") {
    return (
      <span
        className={loadingClasses}
        style={style}
        role="status"
        aria-live="polite"
        aria-label={ariaLabel}
      >
        <svg
          viewBox="0 0 24 24"
          className={styles.spinnerIcon}
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="32"
            strokeDashoffset="32"
          />
        </svg>
      </span>
    );
  }

  if (variant === "dots") {
    return (
      <span
        className={loadingClasses}
        style={style}
        role="status"
        aria-live="polite"
        aria-label={ariaLabel}
      >
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.dot} aria-hidden="true" />
      </span>
    );
  }

  if (variant === "pulse") {
    return (
      <span
        className={loadingClasses}
        style={style}
        role="status"
        aria-live="polite"
        aria-label={ariaLabel}
      >
        <span className={styles.pulseBar} aria-hidden="true" />
        <span className={styles.pulseBar} aria-hidden="true" />
        <span className={styles.pulseBar} aria-hidden="true" />
      </span>
    );
  }

  return null;
};
