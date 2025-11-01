import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with multiple variants, sizes, and states. Supports loading states, disabled states, and full-width layout.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost"],
      description: "Button style variant",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Button size",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    loading: {
      control: { type: "boolean" },
      description: "Show loading spinner and disable interactions",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable button interactions",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Make button take full width of container",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: { type: "text" },
      description: "Button content",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
      table: {
        defaultValue: { summary: "undefined" },
      },
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

// State stories
export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
  parameters: {
    layout: "padded",
  },
};

// Loading states for different variants
export const LoadingVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="primary" loading>
        Loading Primary
      </Button>
      <Button variant="secondary" loading>
        Loading Secondary
      </Button>
      <Button variant="outline" loading>
        Loading Outline
      </Button>
      <Button variant="ghost" loading>
        Loading Ghost
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Loading state examples for all button variants.",
      },
    },
  },
};

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Button size comparison - small, medium, and large.",
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem",
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All button variants side by side.",
      },
    },
  },
};

// Interactive examples
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button>
        <span style={{ marginRight: "0.5rem" }}>📁</span>
        Open File
      </Button>
      <Button variant="secondary">
        Save
        <span style={{ marginLeft: "0.5rem" }}>💾</span>
      </Button>
      <Button variant="outline">
        <span style={{ marginRight: "0.5rem" }}>🔍</span>
        Search
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Buttons with icons - you can add any content including icons from @nam-ds/icons.",
      },
    },
  },
};

// Disabled states
export const DisabledStates: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
      }}
    >
      <div>
        <h4 style={{ marginBottom: "0.5rem" }}>Normal</h4>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: "0.5rem" }}>Disabled</h4>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <Button variant="primary" disabled>
            Primary
          </Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="outline" disabled>
            Outline
          </Button>
          <Button variant="ghost" disabled>
            Ghost
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of normal vs disabled button states.",
      },
    },
  },
};
