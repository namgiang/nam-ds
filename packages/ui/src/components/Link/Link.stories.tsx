import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: "UI/Link",
  component: Link,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile link component with support for external links, multiple variants, sizes, and accessibility features. Automatically handles external link behavior and icons.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "muted"],
      description: "Link style variant",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Link size",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    underline: {
      control: { type: "select" },
      options: ["none", "hover", "always"],
      description: "Underline behavior",
      table: {
        defaultValue: { summary: "hover" },
      },
    },
    external: {
      control: { type: "boolean" },
      description: "External link (opens in new tab, shows icon)",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable link interactions",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    href: {
      control: { type: "text" },
      description: "Link URL",
    },
    children: {
      control: { type: "text" },
      description: "Link content",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
      table: {
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    href: "#",
    children: "Default Link",
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    variant: "primary",
    href: "#",
    children: "Primary Link",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    href: "#",
    children: "Secondary Link",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    href: "#",
    children: "Muted Link",
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: "sm",
    href: "#",
    children: "Small Link",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    href: "#",
    children: "Medium Link",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    href: "#",
    children: "Large Link",
  },
};

// Underline stories
export const NoUnderline: Story = {
  args: {
    underline: "none",
    href: "#",
    children: "No Underline",
  },
};

export const HoverUnderline: Story = {
  args: {
    underline: "hover",
    href: "#",
    children: "Hover to see underline",
  },
};

export const AlwaysUnderline: Story = {
  args: {
    underline: "always",
    href: "#",
    children: "Always Underlined",
  },
};

// State stories
export const ExternalLink: Story = {
  args: {
    external: true,
    href: "https://example.com",
    children: "External Link",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    href: "#",
    children: "Disabled Link",
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Link variant="default" href="#">
        Default Variant
      </Link>
      <Link variant="primary" href="#">
        Primary Variant
      </Link>
      <Link variant="secondary" href="#">
        Secondary Variant
      </Link>
      <Link variant="muted" href="#">
        Muted Variant
      </Link>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All link variants displayed together for comparison.",
      },
    },
  },
};

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "baseline" }}>
      <Link size="sm" href="#">
        Small
      </Link>
      <Link size="md" href="#">
        Medium
      </Link>
      <Link size="lg" href="#">
        Large
      </Link>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Link size comparison - small, medium, and large.",
      },
    },
  },
};

// Underline behaviors
export const UnderlineBehaviors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Link underline="none" href="#">
        No underline
      </Link>
      <Link underline="hover" href="#">
        Underline on hover
      </Link>
      <Link underline="always" href="#">
        Always underlined
      </Link>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different underline behaviors - none, hover, and always.",
      },
    },
  },
};

// External vs internal links
export const ExternalVsInternal: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Link href="/internal-page">Internal Link</Link>
      <Link external href="https://example.com">
        External Link (with icon)
      </Link>
      <Link external href="https://github.com" target="_blank">
        External GitHub Link
      </Link>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comparison between internal links and external links with automatic icon.",
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
          <Link variant="default" href="#">
            Default
          </Link>
          <Link variant="primary" href="#">
            Primary
          </Link>
          <Link variant="secondary" href="#">
            Secondary
          </Link>
          <Link variant="muted" href="#">
            Muted
          </Link>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: "0.5rem" }}>Disabled</h4>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <Link variant="default" disabled href="#">
            Default
          </Link>
          <Link variant="primary" disabled href="#">
            Primary
          </Link>
          <Link variant="secondary" disabled href="#">
            Secondary
          </Link>
          <Link variant="muted" disabled href="#">
            Muted
          </Link>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comparison of normal vs disabled link states across all variants.",
      },
    },
  },
};

// Real-world usage
export const RealWorldUsage: Story = {
  render: () => (
    <div style={{ maxWidth: "400px", lineHeight: "1.6" }}>
      <p>
        This is a paragraph with multiple link types: a{" "}
        <Link href="/regular-page">regular internal link</Link>, an{" "}
        <Link external href="https://example.com">
          external website
        </Link>
        , and a{" "}
        <Link variant="muted" size="sm" href="/terms">
          terms of service
        </Link>{" "}
        link.
      </p>
      <p>
        You can also have{" "}
        <Link variant="primary" href="/important">
          important links
        </Link>{" "}
        that stand out more, or{" "}
        <Link underline="always" href="/always-underlined">
          always underlined
        </Link>{" "}
        links for emphasis.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world usage examples showing links in context within text content.",
      },
    },
  },
};
