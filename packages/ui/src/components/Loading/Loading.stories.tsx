import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta = {
  title: "UI/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible loading component with multiple variants (spinner, dots, pulse) and sizes. Used to indicate loading states in buttons, pages, or data fetching scenarios.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["spinner", "dots", "pulse"],
      description: "Loading animation type",
      table: {
        defaultValue: { summary: "spinner" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Loading indicator size",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    color: {
      control: { type: "select" },
      options: ["current", "primary", "secondary", "muted"],
      description: "Loading indicator color",
      table: {
        defaultValue: { summary: "current" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
      table: {
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {},
};

// Variant stories
export const Spinner: Story = {
  args: {
    variant: "spinner",
  },
};

export const Dots: Story = {
  args: {
    variant: "dots",
  },
};

export const Pulse: Story = {
  args: {
    variant: "pulse",
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

// Color stories
export const CurrentColor: Story = {
  render: () => (
    <div style={{ color: "#3b82f6" }}>
      <Loading color="current" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Uses the current text color (blue in this example).",
      },
    },
  },
};

export const PrimaryColor: Story = {
  args: {
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  args: {
    color: "secondary",
  },
};

export const MutedColor: Story = {
  args: {
    color: "muted",
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Loading variant="spinner" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Spinner</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Loading variant="dots" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Dots</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Loading variant="pulse" />
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Pulse</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All loading variants displayed together for comparison.",
      },
    },
  },
};

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <h4 style={{ marginBottom: "1rem" }}>Small</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Loading variant="spinner" size="sm" />
          <Loading variant="dots" size="sm" />
          <Loading variant="pulse" size="sm" />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: "1rem" }}>Medium</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Loading variant="spinner" size="md" />
          <Loading variant="dots" size="md" />
          <Loading variant="pulse" size="md" />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: "1rem" }}>Large</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Loading variant="spinner" size="lg" />
          <Loading variant="dots" size="lg" />
          <Loading variant="pulse" size="lg" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Size comparison across all variants - small, medium, and large.",
      },
    },
  },
};

// Color variations
export const ColorVariations: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <h4 style={{ marginBottom: "1rem" }}>Current</h4>
        <div style={{ color: "#ef4444" }}>
          <Loading color="current" />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: "1rem" }}>Primary</h4>
        <Loading color="primary" />
      </div>
      <div>
        <h4 style={{ marginBottom: "1rem" }}>Secondary</h4>
        <Loading color="secondary" />
      </div>
      <div>
        <h4 style={{ marginBottom: "1rem" }}>Muted</h4>
        <Loading color="muted" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different color variations. Current color adapts to parent text color.",
      },
    },
  },
};

// Button integration example
export const ButtonIntegration: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <button
        style={{
          padding: "0.5rem 1rem",
          border: "1px solid #d1d5db",
          borderRadius: "0.375rem",
          backgroundColor: "#f9fafb",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
        disabled
      >
        <Loading size="sm" />
        Loading...
      </button>
      <button
        style={{
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "0.375rem",
          backgroundColor: "#3b82f6",
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
        disabled
      >
        <Loading size="sm" color="current" />
        Saving...
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of loading indicators integrated into buttons.",
      },
    },
  },
};

// Page loading example
export const PageLoading: Story = {
  render: () => (
    <div
      style={{
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2rem",
        backgroundColor: "#f9fafb",
        borderRadius: "0.5rem",
        border: "1px solid #e5e7eb",
      }}
    >
      <Loading size="lg" />
      <p style={{ color: "#6b7280", margin: 0 }}>Loading content...</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of a page-level loading state with centered content.",
      },
    },
  },
};

// Inline loading example
export const InlineLoading: Story = {
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <p>
        Your data is being processed{" "}
        <Loading size="sm" color="current" variant="dots" /> please wait...
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <span>Syncing</span>
        <Loading size="sm" variant="pulse" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of inline loading indicators within text content.",
      },
    },
  },
};

// Card loading states
export const CardLoadingStates: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
      }}
    >
      <div
        style={{
          padding: "1.5rem",
          border: "1px solid #e5e7eb",
          borderRadius: "0.5rem",
          textAlign: "center",
        }}
      >
        <Loading variant="spinner" />
        <p style={{ marginTop: "1rem", color: "#6b7280" }}>Loading data...</p>
      </div>

      <div
        style={{
          padding: "1.5rem",
          border: "1px solid #e5e7eb",
          borderRadius: "0.5rem",
          textAlign: "center",
        }}
      >
        <Loading variant="dots" color="primary" />
        <p style={{ marginTop: "1rem", color: "#6b7280" }}>
          Fetching updates...
        </p>
      </div>

      <div
        style={{
          padding: "1.5rem",
          border: "1px solid #e5e7eb",
          borderRadius: "0.5rem",
          textAlign: "center",
        }}
      >
        <Loading variant="pulse" size="lg" />
        <p style={{ marginTop: "1rem", color: "#6b7280" }}>Processing...</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of loading states in card-like containers.",
      },
    },
  },
};
