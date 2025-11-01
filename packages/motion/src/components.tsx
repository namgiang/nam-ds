import React from "react";
import { presets } from "./presets";
import { variants } from "./variants";
import { transitions } from "./transitions";

// Fallback types for when framer-motion is not available
type HTMLMotionProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T] & {
    variants?: any;
    initial?: string | any;
    animate?: string | any;
    exit?: string | any;
    custom?: any;
    whileHover?: any;
    whileTap?: any;
    [key: string]: any;
  };

// Mock motion components when framer-motion is not available
const motion = {
  div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
};

const AnimatePresence = ({
  children,
  mode,
}: {
  children: React.ReactNode;
  mode?: string;
}) => <>{children}</>;

/**
 * Pre-configured motion components
 */

// Fade wrapper component
export interface FadeProps extends HTMLMotionProps<"div"> {
  preset?: keyof typeof presets;
  children: React.ReactNode;
}

export function Fade({ preset = "fadeIn", children, ...props }: FadeProps) {
  return (
    <motion.div
      variants={presets[preset]}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger container component
export interface StaggerProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: React.ReactNode;
}

export function Stagger({ delay = 0.1, children, ...props }: StaggerProps) {
  return (
    <motion.div
      variants={presets.stagger}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={presets.staggerItem} custom={index}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Scale wrapper component
export interface ScaleProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function Scale({ children, ...props }: ScaleProps) {
  return (
    <motion.div
      variants={presets.scaleIn}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Slide wrapper component
export interface SlideProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right";
  children: React.ReactNode;
}

export function Slide({ direction = "up", children, ...props }: SlideProps) {
  const slidePresets = {
    up: presets.slideInUp,
    down: presets.slideInDown,
    left: presets.slideInLeft,
    right: presets.slideInRight,
  };

  return (
    <motion.div
      variants={slidePresets[direction]}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Modal wrapper component
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={variants.modal.backdrop}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
            }}
            onClick={onClose}
          />
          <motion.div
            variants={variants.modal.content}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1001,
            }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Presence wrapper for conditional rendering
export interface PresenceProps {
  show: boolean;
  mode?: "wait" | "sync" | "popLayout";
  children: React.ReactNode;
}

export function Presence({ show, mode = "wait", children }: PresenceProps) {
  return <AnimatePresence mode={mode}>{show && children}</AnimatePresence>;
}
