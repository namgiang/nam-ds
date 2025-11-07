import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A semantic text component that provides consistent typography with flexible styling options. Use different variants for semantic meaning and proper accessibility.",
      },
    },
  },
  argTypes: {
    as: {
      control: "select",
      options: [
        "p",
        "span",
        "div",
        "label",
        "caption",
        "small",
        "strong",
        "em",
        "mark",
        "code",
        "pre",
      ],
      description: "HTML element to render",
    },
    variant: {
      control: "select",
      options: [
        "body",
        "caption",
        "label",
        "code",
        "display",
        "heading",
        "subheading",
      ],
      description: "Semantic text variant",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
      description: "Text size",
    },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold"],
      description: "Font weight",
    },
    color: {
      control: "select",
      options: [
        "default",
        "muted",
        "subtle",
        "primary",
        "secondary",
        "accent",
        "success",
        "warning",
        "error",
      ],
      description: "Text color semantic meaning",
    },
    align: {
      control: "radio",
      options: ["left", "center", "right", "justify"],
      description: "Text alignment",
    },
    transform: {
      control: "select",
      options: ["none", "uppercase", "lowercase", "capitalize"],
      description: "Text transformation",
    },
    truncate: {
      control: "boolean",
      description: "Truncate text with ellipsis",
    },
    mono: {
      control: "boolean",
      description: "Use monospace font",
    },
    italic: {
      control: "boolean",
      description: "Italic text style",
    },
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    as: "p",
    variant: "body",
    size: "md",
    weight: "normal",
    color: "default",
    align: "left",
    transform: "none",
    truncate: false,
    mono: false,
    italic: false,
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text variant="display" size="4xl">
        Display Text - Large and Bold
      </Text>
      <Text variant="heading" size="2xl">
        Heading Text - Section Headers
      </Text>
      <Text variant="subheading" size="lg">
        Subheading Text - Subsection Headers
      </Text>
      <Text variant="body">
        Body Text - Regular paragraph content for reading
      </Text>
      <Text variant="caption" size="sm">
        Caption Text - Small descriptive text
      </Text>
      <Text variant="label" size="sm">
        Label Text - Form labels and UI elements
      </Text>
      <Text variant="code">Code Text - Inline code snippets</Text>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text size="xs">Extra Small (12px)</Text>
      <Text size="sm">Small (14px)</Text>
      <Text size="md">Medium (16px) - Default</Text>
      <Text size="lg">Large (18px)</Text>
      <Text size="xl">Extra Large (20px)</Text>
      <Text size="2xl">2X Large (24px)</Text>
      <Text size="3xl">3X Large (30px)</Text>
      <Text size="4xl">4X Large (36px)</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text weight="light">Light Weight (300)</Text>
      <Text weight="normal">Normal Weight (400) - Default</Text>
      <Text weight="medium">Medium Weight (500)</Text>
      <Text weight="semibold">Semibold Weight (600)</Text>
      <Text weight="bold">Bold Weight (700)</Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text color="default">Default Color</Text>
      <Text color="muted">Muted Color - Secondary information</Text>
      <Text color="subtle">Subtle Color - Less emphasis</Text>
      <Text color="primary">Primary Color - Brand color</Text>
      <Text color="secondary">Secondary Color - Secondary brand</Text>
      <Text color="accent">Accent Color - Emphasis</Text>
      <Text color="success">Success Color - Positive feedback</Text>
      <Text color="warning">Warning Color - Caution</Text>
      <Text color="error">Error Color - Problems or errors</Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ border: "1px dashed #ccc", padding: "1rem" }}>
        <Text align="left">Left aligned text (default)</Text>
      </div>
      <div style={{ border: "1px dashed #ccc", padding: "1rem" }}>
        <Text align="center">Center aligned text</Text>
      </div>
      <div style={{ border: "1px dashed #ccc", padding: "1rem" }}>
        <Text align="right">Right aligned text</Text>
      </div>
      <div style={{ border: "1px dashed #ccc", padding: "1rem" }}>
        <Text align="justify">
          Justified text spreads content evenly across the full width of the
          container, creating clean edges on both sides by adjusting spacing
          between words.
        </Text>
      </div>
    </div>
  ),
};

export const Transform: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text transform="none">Normal Text Case (default)</Text>
      <Text transform="uppercase">uppercase text becomes ALL CAPS</Text>
      <Text transform="lowercase">LOWERCASE TEXT becomes all lowercase</Text>
      <Text transform="capitalize">capitalize text Becomes Title Case</Text>
    </div>
  ),
};

export const Modifiers: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div
        style={{ width: "200px", border: "1px dashed #ccc", padding: "0.5rem" }}
      >
        <Text truncate>
          This is a very long text that will be truncated with ellipsis when it
          overflows the container
        </Text>
      </div>
      <Text mono>Monospace font for code: const hello = "world";</Text>
      <Text italic>Italic text for emphasis or citations</Text>
      <Text mono italic truncate style={{ width: "300px" }}>
        Combined: monospace + italic + truncated text that might be very long
      </Text>
    </div>
  ),
};

export const SemanticElements: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text as="h1" variant="display" size="3xl">
        Heading 1 - Main Page Title
      </Text>
      <Text as="h2" variant="heading" size="2xl">
        Heading 2 - Section Title
      </Text>
      <Text as="h3" variant="subheading" size="xl">
        Heading 3 - Subsection
      </Text>
      <Text as="p" variant="body">
        Paragraph - Main content text for reading
      </Text>
      <Text as="span" variant="caption" size="sm">
        Span - Inline caption text
      </Text>
      <Text as="label" variant="label" weight="medium">
        Label - Form input label
      </Text>
      <Text as="code" variant="code">
        Code - Inline code snippet
      </Text>
      <Text as="small" variant="caption" size="xs">
        Small - Fine print or legal text
      </Text>
      <Text as="strong" variant="body" weight="bold">
        Strong - Important text
      </Text>
      <Text as="em" variant="body" italic>
        Emphasis - Stressed text
      </Text>
      <Text
        as="mark"
        variant="body"
        style={{ backgroundColor: "yellow", padding: "0 0.25rem" }}
      >
        Mark - Highlighted text
      </Text>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "600px",
      }}
    >
      {/* Article Header */}
      <header>
        <Text as="h1" variant="display" size="3xl" weight="bold" color="accent">
          Building Better Design Systems
        </Text>
        <Text variant="caption" color="muted" size="sm">
          Published on November 2, 2025 • 5 min read
        </Text>
      </header>

      {/* Article Content */}
      <article>
        <Text as="h2" variant="heading" size="xl" weight="semibold">
          Introduction
        </Text>
        <Text variant="body" style={{ marginTop: "0.5rem" }}>
          Design systems are crucial for maintaining consistency across digital
          products. They provide a shared language between designers and
          developers.
        </Text>

        <Text
          as="h3"
          variant="subheading"
          size="lg"
          weight="medium"
          style={{ marginTop: "1.5rem" }}
        >
          Key Components
        </Text>
        <Text variant="body" style={{ marginTop: "0.5rem" }}>
          A well-structured design system includes typography, colors, spacing,
          and components. Here's a code example:
        </Text>
        <Text
          as="code"
          variant="code"
          style={{ marginTop: "0.5rem", display: "block" }}
        >
          const theme = &#123; primary: "#3b82f6", secondary: "#f59e0b" &#125;;
        </Text>
      </article>

      {/* Status Messages */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Text color="success" weight="medium">
          ✅ Successfully saved your changes
        </Text>
        <Text color="warning" weight="medium">
          ⚠️ Please review your input
        </Text>
        <Text color="error" weight="medium">
          ❌ Failed to connect to server
        </Text>
      </div>

      {/* Form Example */}
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <Text as="label" variant="label" weight="medium" htmlFor="email">
            Email Address
          </Text>
          <Text
            variant="caption"
            color="muted"
            size="sm"
            style={{ marginTop: "0.25rem" }}
          >
            We'll never share your email with anyone else.
          </Text>
        </div>
        <div>
          <Text as="label" variant="label" weight="medium" htmlFor="message">
            Message
          </Text>
          <Text
            variant="caption"
            color="muted"
            size="sm"
            style={{ marginTop: "0.25rem" }}
          >
            <Text mono>Required</Text> • Maximum 500 characters
          </Text>
        </div>
      </form>
    </div>
  ),
};
