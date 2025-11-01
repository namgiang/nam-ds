import type { Meta, StoryObj } from "@storybook/react";
import { BaseIcon } from "./base";
import * as Icons from "./icons";

const meta = {
  title: "Icons/BaseIcon",
  component: BaseIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Base icon component that provides consistent sizing, accessibility, and theming. All specific icons are built on this foundation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Icon size using font-size design tokens",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    color: {
      control: { type: "color" },
      description: "Custom color (overrides currentColor)",
    },
    label: {
      control: { type: "text" },
      description: "Accessibility label - makes icon semantic if provided",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
    children: {
      control: false,
      description: "Icon content (usually from Lucide)",
    },
  },
} satisfies Meta<typeof BaseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for icon display
const IconDisplay = ({
  IconComponent,
  name,
  size = "md",
}: {
  IconComponent: any;
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      padding: "1rem",
      minWidth: "120px",
    }}
  >
    <IconComponent size={size} />
    <span style={{ fontSize: "0.75rem", textAlign: "center" }}>{name}</span>
  </div>
);

// Default story with a simple icon
export const Default: Story = {
  args: {
    children: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
  },
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "baseline", gap: "2rem" }}>
      <IconDisplay IconComponent={Icons.IconStar} name="xs" size="xs" />
      <IconDisplay IconComponent={Icons.IconStar} name="sm" size="sm" />
      <IconDisplay IconComponent={Icons.IconStar} name="md" size="md" />
      <IconDisplay IconComponent={Icons.IconStar} name="lg" size="lg" />
      <IconDisplay IconComponent={Icons.IconStar} name="xl" size="xl" />
      <IconDisplay IconComponent={Icons.IconStar} name="2xl" size="2xl" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icons using font-size design tokens: xs (0.75rem), sm (0.875rem), md (1rem), lg (1.125rem), xl (1.25rem), 2xl (1.5rem).",
      },
    },
  },
};

// Accessibility examples
export const Accessibility: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
      }}
    >
      <div>
        <h4>Decorative Icons (no label)</h4>
        <p>
          Welcome to our app <Icons.IconStar /> where you can manage your
          projects
        </p>
      </div>

      <div>
        <h4>Semantic Icons (with labels)</h4>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Icons.IconCheckCircle label="Success" color="green" />
          <span>Task completed successfully</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Icons.IconAlert label="Warning" color="orange" />
          <span>Please review this item</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Icons.IconError label="Error" color="red" />
          <span>Something went wrong</span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Icons without labels are decorative (aria-hidden="true"). Icons with labels are semantic (aria-label + role="img").',
      },
    },
  },
};

// Color variations
export const Colors: Story = {
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
        <h4>Current Color</h4>
        <div style={{ color: "#3b82f6" }}>
          <Icons.IconHeart size="lg" />
        </div>
      </div>
      <div>
        <h4>Success</h4>
        <Icons.IconCheckCircle size="lg" color="#10b981" />
      </div>
      <div>
        <h4>Warning</h4>
        <Icons.IconWarning size="lg" color="#f59e0b" />
      </div>
      <div>
        <h4>Error</h4>
        <Icons.IconError size="lg" color="#ef4444" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icons use currentColor by default, but can be overridden with custom colors.",
      },
    },
  },
};

// Navigation icons
export const NavigationIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "1rem",
      }}
    >
      <IconDisplay IconComponent={Icons.IconArrowLeft} name="ArrowLeft" />
      <IconDisplay IconComponent={Icons.IconArrowRight} name="ArrowRight" />
      <IconDisplay IconComponent={Icons.IconArrowUp} name="ArrowUp" />
      <IconDisplay IconComponent={Icons.IconArrowDown} name="ArrowDown" />
      <IconDisplay IconComponent={Icons.IconHome} name="Home" />
      <IconDisplay IconComponent={Icons.IconChevronLeft} name="ChevronLeft" />
      <IconDisplay IconComponent={Icons.IconChevronRight} name="ChevronRight" />
      <IconDisplay IconComponent={Icons.IconChevronUp} name="ChevronUp" />
      <IconDisplay IconComponent={Icons.IconChevronDown} name="ChevronDown" />
      <IconDisplay IconComponent={Icons.IconMenu} name="Menu" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Navigation and directional icons for menus, breadcrumbs, and user flow.",
      },
    },
  },
};

// Action icons
export const ActionIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "1rem",
      }}
    >
      <IconDisplay IconComponent={Icons.IconPlus} name="Plus" />
      <IconDisplay IconComponent={Icons.IconMinus} name="Minus" />
      <IconDisplay IconComponent={Icons.IconEdit} name="Edit" />
      <IconDisplay IconComponent={Icons.IconDelete} name="Delete" />
      <IconDisplay IconComponent={Icons.IconSave} name="Save" />
      <IconDisplay IconComponent={Icons.IconCopy} name="Copy" />
      <IconDisplay IconComponent={Icons.IconDownload} name="Download" />
      <IconDisplay IconComponent={Icons.IconUpload} name="Upload" />
      <IconDisplay IconComponent={Icons.IconSearch} name="Search" />
      <IconDisplay IconComponent={Icons.IconFilter} name="Filter" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Action icons for buttons, toolbars, and interactive elements.",
      },
    },
  },
};

// Status icons
export const StatusIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "1rem",
      }}
    >
      <IconDisplay IconComponent={Icons.IconCheck} name="Check" />
      <IconDisplay IconComponent={Icons.IconCheckCircle} name="CheckCircle" />
      <IconDisplay IconComponent={Icons.IconAlert} name="Alert" />
      <IconDisplay IconComponent={Icons.IconWarning} name="Warning" />
      <IconDisplay IconComponent={Icons.IconInfo} name="Info" />
      <IconDisplay IconComponent={Icons.IconError} name="Error" />
      <IconDisplay IconComponent={Icons.IconEye} name="Eye" />
      <IconDisplay IconComponent={Icons.IconEyeOff} name="EyeOff" />
      <IconDisplay IconComponent={Icons.IconHeart} name="Heart" />
      <IconDisplay IconComponent={Icons.IconStar} name="Star" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Status and feedback icons for alerts, notifications, and state indication.",
      },
    },
  },
};

// Interface icons
export const InterfaceIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "1rem",
      }}
    >
      <IconDisplay IconComponent={Icons.IconSettings} name="Settings" />
      <IconDisplay IconComponent={Icons.IconUser} name="User" />
      <IconDisplay IconComponent={Icons.IconMail} name="Mail" />
      <IconDisplay IconComponent={Icons.IconPhone} name="Phone" />
      <IconDisplay IconComponent={Icons.IconCalendar} name="Calendar" />
      <IconDisplay IconComponent={Icons.IconClock} name="Clock" />
      <IconDisplay IconComponent={Icons.IconExternalLink} name="ExternalLink" />
      <IconDisplay IconComponent={Icons.IconClose} name="Close" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Interface and utility icons for common UI patterns.",
      },
    },
  },
};

// All icons showcase
export const AllIcons: Story = {
  render: () => {
    const iconEntries = Object.entries(Icons);

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "1rem",
        }}
      >
        {iconEntries.map(([name, IconComponent]) => (
          <IconDisplay
            key={name}
            IconComponent={IconComponent}
            name={name.replace("Icon", "")}
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Complete showcase of all available icons in the design system.",
      },
    },
  },
};

// Real-world usage examples
export const UsageExamples: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "500px",
      }}
    >
      {/* Button with icon */}
      <div>
        <h4>Button with Icon</h4>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            backgroundColor: "#3b82f6",
            color: "white",
          }}
        >
          <Icons.IconPlus size="sm" />
          Add Item
        </button>
      </div>

      {/* Input with icon */}
      <div>
        <h4>Input with Icon</h4>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              paddingLeft: "2.5rem",
              padding: "0.5rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem",
              width: "100%",
            }}
          />
          <Icons.IconSearch
            size="sm"
            style={{
              position: "absolute",
              left: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#6b7280",
            }}
          />
        </div>
      </div>

      {/* Status messages */}
      <div>
        <h4>Status Messages</h4>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#10b981",
            }}
          >
            <Icons.IconCheckCircle size="sm" />
            <span>Successfully saved!</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#f59e0b",
            }}
          >
            <Icons.IconWarning size="sm" />
            <span>Please review this field</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#ef4444",
            }}
          >
            <Icons.IconError size="sm" />
            <span>Something went wrong</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h4>Navigation</h4>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "#374151",
            }}
          >
            <Icons.IconHome size="sm" />
            Home
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "#374151",
            }}
          >
            <Icons.IconSettings size="sm" />
            Settings
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "#374151",
            }}
          >
            <Icons.IconUser size="sm" />
            Profile
          </a>
        </nav>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Real-world examples of how to use icons in common UI patterns.",
      },
    },
  },
};
