# @nam-ds/icons

Source-agnostic icon system with accessibility defaults for NAM Design System.

## Philosophy

This package is a **thin, boring shim** that gives you:

- **Consistent API** across icon sources
- **Sane accessibility defaults** (decorative vs semantic icons)
- **Freedom to swap sources later** without hunt-and-replace across apps
- **One place to decide** sizes, stroke width, color behavior, and a11y

## Features

- 🎯 **Curated set** - no emoji salad UIs
- ♿ **Accessible by default** - decorative icons are `aria-hidden`, semantic ones get `aria-label`
- 🎨 **Themed by tokens** - uses `currentColor` so CSS variables control color
- 🌳 **Tree-shakeable** - no wildcard imports
- 🔄 **Source-agnostic** - today Lucide, tomorrow custom SVGs (without touching apps)

## Usage

```tsx
import { IconSearch, IconHeart, IconPlus } from '@nam-ds/icons';

// Decorative icon (automatically aria-hidden="true")
<IconSearch size="md" />

// Semantic icon (gets aria-label and role="img")  
<IconSearch size="lg" label="Search products" />

// Custom color (overrides currentColor)
<IconHeart color="red" size="xl" />
```

## Available Sizes

- `xs` - 12px
- `sm` - 16px  
- `md` - 20px (default)
- `lg` - 24px
- `xl` - 32px
- `2xl` - 40px

## Available Icons

### Navigation
`IconArrowLeft`, `IconArrowRight`, `IconArrowUp`, `IconArrowDown`, `IconChevronLeft`, `IconChevronRight`, `IconChevronUp`, `IconChevronDown`, `IconMenu`, `IconClose`

### Actions
`IconPlus`, `IconMinus`, `IconEdit`, `IconDelete`, `IconSave`, `IconCopy`, `IconDownload`, `IconUpload`

### Status
`IconCheck`, `IconCheckCircle`, `IconAlert`, `IconWarning`, `IconInfo`, `IconError`

### Content & Search
`IconSearch`, `IconFilter`, `IconEye`, `IconEyeOff`, `IconHeart`, `IconStar`

### Interface
`IconSettings`, `IconUser`, `IconHome`, `IconExternalLink`, `IconMail`, `IconPhone`, `IconCalendar`, `IconClock`

## Custom Icons

Create your own icons using the `createIcon` helper:

```tsx
import { createIcon } from '@nam-ds/icons';
import { MyCustomLucideIcon } from 'lucide-react';

export const IconCustom = createIcon(MyCustomLucideIcon, 'IconCustom');
```

## Theming

Icons inherit color from their parent via `currentColor`. Control color through your CSS:

```css
.my-button {
  color: var(--color-primary);
}

.my-button .nam-icon {
  /* Icon automatically inherits --color-primary */
}
```