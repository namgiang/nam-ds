# @nam-ds/tokens - Hybrid Approach

Design tokens with CSS variables as single source of truth + raw values for Framer Motion animations.

## 🎯 Key Benefits

- **🚫 Zero Duplication**: CSS variables are the single source of truth
- **🎬 Framer Motion Ready**: Raw values available for complex animations  
- **🔒 Type Safety**: Full TypeScript support with autocomplete
- **🌓 Runtime Theming**: Dynamic theme switching with CSS custom properties
- **⚡ Performance**: CSS vars for styling, raw values only for animations

## Installation

```bash
npm install @nam-ds/tokens
# or
pnpm add @nam-ds/tokens
```

## Usage Examples

### 1. Basic Styling (90% of use cases)

```tsx
import { token } from '@nam-ds/tokens';

const Button = () => (
  <button
    style={{
      backgroundColor: token.color.brand.primary(), // var(--color-brand-primary-500)
      color: token.color.neutral(50),               // var(--color-neutral-50)
      padding: token.spacing[4](),                  // var(--spacing-4)
      borderRadius: token.borderRadius.md(),        // var(--border-radius-md)
      fontSize: token.fontSize.base(),              // var(--font-size-base)
    }}
  >
    Click me
  </button>
);
```

### 2. Framer Motion - Simple Animations

```tsx
import { motion } from 'framer-motion';
import { token } from '@nam-ds/tokens';

const AnimatedButton = () => (
  <motion.button
    style={{
      backgroundColor: token.color.brand.primary(),
      padding: token.spacing[4](),
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Hover me
  </motion.button>
);
```

### 3. Framer Motion - Complex Color Animations

```tsx
import { motion } from 'framer-motion';
import { rawTokens } from '@nam-ds/tokens';

const ComplexAnimation = () => (
  <motion.div
    animate={{
      backgroundColor: [
        rawTokens.colors.brand.primary[500],      // Raw hex for calculations
        rawTokens.colors.brand.primary[700],      
        rawTokens.colors.semantic.success[500],   
      ]
    }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    Color morphing animation
  </motion.div>
);
```

### 4. Animation Presets

```tsx
import { motion } from 'framer-motion';
import { motion as motionPresets } from '@nam-ds/tokens';

const Modal = ({ isOpen }) => (
  <motion.div
    variants={motionPresets.presets.fadeIn}
    initial="initial"
    animate={isOpen ? "animate" : "initial"}
    exit="exit"
  >
    Modal content
  </motion.div>
);
```

### 5. Dynamic Theming

```tsx
import { setTheme, getThemeColor } from '@nam-ds/tokens';

// Switch themes
setTheme('dark');
setTheme('dutch-phrase-companion');

// Get theme-aware colors for animations
const currentColor = getThemeColor('brand-primary', 500);
```

## Available APIs

### `token` - CSS Variable Helpers
```tsx
token.color.brand.primary(500)     // var(--color-brand-primary-500)
token.color.semantic.success()     // var(--color-success-500) [default]
token.spacing[4]()                 // var(--spacing-4)
token.fontSize.lg()                // var(--font-size-lg)
token.borderRadius.md()            // var(--border-radius-md)
```

### `rawTokens` - Values for Animations
```tsx
rawTokens.colors.brand.primary[500]    // "#0ea5e9"
rawTokens.colors.semantic.success[500] // "#22c55e"  
rawTokens.spacing[4]                   // "1rem"
```

### `motion` - Framer Motion Helpers
```tsx
motion.color.brand.primary[500]        // "#0ea5e9"
motion.presets.fadeIn                  // Animation variant
motion.presets.slideUp                 // Animation variant
```

### Theme Management
```tsx
setTheme('dark')                       // Apply theme
getTheme()                            // Get current theme
getThemeColor('brand-primary', 500)    // Get theme-aware color
```

## Themes

- **default**: Clean, modern light theme
- **dark**: Dark mode with inverted colors  
- **dutch-phrase-companion**: Brand-specific theme

## Architecture

### ✅ Single Source of Truth
All values defined in CSS files - no duplication!

### ✅ Minimal Raw Tokens  
Only essential values duplicated for Framer Motion calculations

### ✅ Type Safety
Full TypeScript support with intelligent autocomplete

### ✅ Performance Optimized
- CSS variables for 90% of styling (smaller bundle)
- Raw values only when needed for complex animations

## Migration from Duplicate Approach

```tsx
// Before (with duplication)
import { colors, cssVar } from '@old-approach';
const style = {
  backgroundColor: colors.brand.primary[500],    // JS value
  color: cssVar.color.brand.primary(500),       // CSS var
};

// After (hybrid - no duplication)
import { token, rawTokens } from '@nam-ds/tokens';
const style = {
  backgroundColor: token.color.brand.primary(),  // CSS var (recommended)
  // OR for animations:
  backgroundColor: rawTokens.colors.brand.primary[500], // Raw value
};
```

## Bundle Size

- **ES Modules**: 6.35kB (1.76kB gzipped) 
- **CommonJS**: 4.65kB (1.60kB gzipped)
- **CSS Bundle**: 8.11kB with all themes

Perfect for performance-conscious applications! 🚀
