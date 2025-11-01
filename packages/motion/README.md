# @nam-ds/motion

Animation presets and motion utilities for NAM Design System, built with Framer Motion.

## Installation

```bash
pnpm add @nam-ds/motion
```

## Features

- 🎨 **Pre-built Animation Presets** - Common animations like fade, slide, scale
- 🔧 **Motion Variants** - Advanced variants for modals, dropdowns, accordions
- ⚡ **Custom Hooks** - Scroll animations, staggered effects, reduced motion
- 📦 **Ready-to-use Components** - Fade, Slide, Scale, Modal wrappers
- 🎯 **Token Integration** - Uses @nam-ds/tokens for consistent values
- ♿ **Accessibility** - Respects `prefers-reduced-motion`

## Quick Start

### Basic Animation Presets

```tsx
import { motion } from "framer-motion";
import { presets } from "@nam-ds/motion";

function MyComponent() {
  return (
    <motion.div
      variants={presets.fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      Content that fades in
    </motion.div>
  );
}
```

### Ready-to-use Components

```tsx
import { Fade, Slide, Scale, Stagger } from "@nam-ds/motion";

function App() {
  return (
    <div>
      <Fade preset="fadeInUp">
        <h1>Fades in from bottom</h1>
      </Fade>

      <Slide direction="left">
        <p>Slides in from left</p>
      </Slide>

      <Scale>
        <button>Scales in</button>
      </Scale>

      <Stagger delay={0.1}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stagger>
    </div>
  );
}
```

### Custom Hooks

```tsx
import { useScrollAnimation, useHoverAnimation } from "@nam-ds/motion";

function ScrollTriggeredComponent() {
  const { ref, controls, inView } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="initial"
      variants={presets.fadeInUp}
    >
      Animates when scrolled into view
    </motion.div>
  );
}
```

### Modal Component

```tsx
import { Modal } from "@nam-ds/motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modal-content">
          <h2>Modal Title</h2>
          <p>Modal content...</p>
        </div>
      </Modal>
    </>
  );
}
```

## Available Presets

### Basic Animations
- `fadeIn` - Simple fade in/out
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right

### Scale Animations
- `scaleIn` - Scale in from smaller
- `scaleOut` - Scale in from larger

### Slide Animations
- `slideInUp` - Slide in from bottom
- `slideInDown` - Slide in from top
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right

### Special Effects
- `bounce` - Bouncy spring animation
- `flip` - 3D flip effect
- `stagger` - Container for staggered children

## Variants

Pre-configured variants for complex UI patterns:

- **Modal**: `variants.modal.backdrop`, `variants.modal.content`
- **Dropdown**: `variants.dropdown.container`, `variants.dropdown.item`
- **Toast**: `variants.toast.topRight`, `variants.toast.bottomCenter`
- **Accordion**: `variants.accordion.container`
- **Tab**: `variants.tab.content`, `variants.tab.indicator`
- **Loading**: `variants.loading.pulse`, `variants.loading.shimmer`

## Transitions

Reusable transition configurations:

```tsx
import { transitions } from "@nam-ds/motion";

// Use spring presets
<motion.div transition={transitions.spring.gentle} />

// Use duration presets
<motion.div transition={{ duration: transitions.duration.fast }} />

// Use easing presets
<motion.div transition={{ ease: transitions.easing.easeInOut }} />
```

## Utilities

```tsx
import { 
  getMotionValue, 
  createSpring, 
  withReducedMotion,
  staggerDelay 
} from "@nam-ds/motion";

// Get CSS variable value for animations
const color = getMotionValue("--color-brand-primary-500");

// Create custom spring
const customSpring = createSpring(400, 25, 1);

// Respect reduced motion preference
const animation = withReducedMotion(
  { scale: [1, 1.1, 1] },
  { scale: 1 } // fallback for reduced motion
);
```

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import type { 
  PresetName, 
  VariantCategory, 
  TransitionPreset,
  FadeProps,
  SlideProps 
} from "@nam-ds/motion";
```

## Dependencies

- `framer-motion` - Animation library
- `@nam-ds/tokens` - Design tokens integration
- `react` - React framework (peer dependency)