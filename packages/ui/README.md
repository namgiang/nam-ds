# @nam-ds/ui

React UI components for NAM Design System, built with `@nam-ds/tokens` and `@nam-ds/motion`.

## Installation

```bash
pnpm add @nam-ds/ui
```

## Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
pnpm add react react-dom @nam-ds/tokens @nam-ds/motion framer-motion
```

## Components

### Loading

A flexible loading indicator component with multiple variants and sizes.

```tsx
import { Loading } from "@nam-ds/ui";

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Loading />

      {/* Variants */}
      <Loading variant="spinner" />
      <Loading variant="dots" />
      <Loading variant="pulse" />

      {/* Sizes */}
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />

      {/* Custom color */}
      <Loading color="#ff6b6b" />
      
      {/* Combination */}
      <Loading variant="dots" size="lg" color="var(--color-brand-primary-500)" />
    </div>
  );
}
```

#### Loading Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"spinner" \| "dots" \| "pulse"` | `"spinner"` | Loading animation style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Loading indicator size |
| `color` | `string` | - | Custom color (inherits currentColor by default) |
| `className` | `string` | - | Additional CSS class |

### Button

A versatile button component with multiple variants, sizes, and states.

```tsx
import { Button } from "@nam-ds/ui";

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Button>Click me</Button>

      {/* Variants */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>

      {/* Sizes */}
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>

      {/* States */}
      <Button loading>Loading...</Button>
      <Button disabled>Disabled</Button>
      <Button fullWidth>Full Width</Button>

      {/* With click handler */}
      <Button onClick={() => alert('Clicked!')}>
        Interactive
      </Button>
    </div>
  );
}
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost"` | `"primary"` | Button style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Button size |
| `loading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `children` | `ReactNode` | - | Button content |
| `className` | `string` | - | Additional CSS class |

### Link

A smart link component with support for external links, different variants, and accessibility features.

```tsx
import { Link } from "@nam-ds/ui";

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Link href="/about">About Us</Link>

      {/* Variants */}
      <Link variant="default" href="/home">Default</Link>
      <Link variant="primary" href="/features">Primary</Link>
      <Link variant="secondary" href="/pricing">Secondary</Link>
      <Link variant="muted" href="/terms">Muted</Link>

      {/* Sizes */}
      <Link size="sm" href="/small">Small Link</Link>
      <Link size="md" href="/medium">Medium Link</Link>
      <Link size="lg" href="/large">Large Link</Link>

      {/* Underline options */}
      <Link underline="none" href="/no-underline">No Underline</Link>
      <Link underline="hover" href="/hover-underline">Hover Underline</Link>
      <Link underline="always" href="/always-underline">Always Underline</Link>

      {/* External links - automatically adds icon and opens in new tab */}
      <Link external href="https://example.com">
        External Link
      </Link>

      {/* Disabled */}
      <Link disabled href="/disabled">
        Disabled Link
      </Link>
    </div>
  );
}
```

#### Link Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "primary" \| "secondary" \| "muted"` | `"default"` | Link style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Link size |
| `underline` | `"none" \| "hover" \| "always"` | `"hover"` | Underline behavior |
| `external` | `boolean` | `false` | Open in new tab with security attributes |
| `disabled` | `boolean` | `false` | Disable link |
| `children` | `ReactNode` | - | Link content |
| `className` | `string` | - | Additional CSS class |

## Features

### 🎨 **Token Integration**
- Uses design tokens from `@nam-ds/tokens` for consistent styling
- Supports multi-brand theming
- CSS custom properties for easy customization

### ⚡ **Motion Integration**
- Built-in hover and focus animations from `@nam-ds/motion`
- Smooth transitions and micro-interactions
- Respects user's `prefers-reduced-motion` setting

### ♿ **Accessibility**
- Proper ARIA attributes and roles
- Keyboard navigation support
- Focus management and indicators
- Screen reader friendly

### 📱 **Responsive**
- Works on all device sizes
- Touch-friendly interactive areas
- Scalable components

## Advanced Usage

### Custom Styling

You can extend components with additional CSS classes:

```tsx
import { Button } from "@nam-ds/ui";
import styles from "./MyComponent.module.scss";

function MyComponent() {
  return (
    <Button className={styles.customButton} variant="primary">
      Custom Styled Button
    </Button>
  );
}
```

### Animation Customization

Components inherit motion properties from `@nam-ds/motion`:

```tsx
import { Button } from "@nam-ds/ui";
import { motion } from "framer-motion";

function AnimatedButton() {
  return (
    <Button
      as={motion.button}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Custom Animation
    </Button>
  );
}
```

### Theme Integration

Components automatically adapt to the current theme:

```tsx
import { setTheme } from "@nam-ds/tokens";
import { Button } from "@nam-ds/ui";

function ThemeExample() {
  return (
    <div>
      <button onClick={() => setTheme("dark")}>
        Switch to Dark Theme
      </button>
      
      <Button variant="primary">
        This button adapts to the theme
      </Button>
    </div>
  );
}
```

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import type { ButtonProps, LinkProps } from "@nam-ds/ui";

interface MyComponentProps {
  buttonProps: ButtonProps;
  linkProps: LinkProps;
}
```

## Dependencies

- `@nam-ds/tokens` - Design tokens and theming
- `@nam-ds/motion` - Animation presets and utilities
- `framer-motion` - Animation library
- `react` & `react-dom` - React framework