/*
 * Note: This file shows TypeScript errors in VS Code due to module resolution issues,
 * but works correctly in Storybook. The Storybook build system handles the type resolution.
 * These errors don't affect functionality - Storybook is running successfully at http://localhost:6007/
 */

import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "./icons";

// Create a wrapper component for individual icon stories
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      backgroundColor: "#f8fafc",
      borderRadius: "0.5rem",
      border: "1px solid #e2e8f0",
    }}
  >
    {children}
  </div>
);

const meta = {
  title: "Icons/Individual Icons",
  component: Icons.IconStar, // Use a representative icon as the base component
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Individual icons from the NAM Design System. All icons support size, color, and accessibility props. Click on any icon below to interact with its controls.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Icon size",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    color: {
      control: { type: "color" },
      description: "Icon color",
    },
    label: {
      control: { type: "text" },
      description: "Accessibility label",
    },
  },
} satisfies Meta<typeof Icons.IconStar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Args type for icon stories
type IconArgs = any;

// Navigation Icons
export const ArrowLeft: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconArrowLeft {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const ArrowRight: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconArrowRight {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const ArrowUp: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconArrowUp {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const ArrowDown: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconArrowDown {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const ChevronLeft: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconChevronLeft {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const ChevronRight: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconChevronRight {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Home: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconHome {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Menu: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconMenu {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Close: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconClose {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

// Action Icons
export const Plus: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconPlus {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Edit: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconEdit {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Delete: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconDelete {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Save: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconSave {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Search: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconSearch {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Download: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconDownload {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Upload: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconUpload {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

// Status Icons
export const Check: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconCheck {...args} />
    </IconWrapper>
  ),
  args: { size: "lg", color: "#10b981" },
};

export const CheckCircle: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconCheckCircle {...args} />
    </IconWrapper>
  ),
  args: { size: "lg", color: "#10b981" },
};

export const Warning: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconWarning {...args} />
    </IconWrapper>
  ),
  args: { size: "lg", color: "#f59e0b" },
};

export const Error: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconError {...args} />
    </IconWrapper>
  ),
  args: { size: "lg", color: "#ef4444" },
};

export const Info: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconInfo {...args} />
    </IconWrapper>
  ),
  args: { size: "lg", color: "#3b82f6" },
};

export const Alert: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconAlert {...args} />
    </IconWrapper>
  ),
  args: { size: "lg", color: "#f59e0b" },
};

// Interface Icons
export const Settings: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconSettings {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const User: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconUser {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Mail: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconMail {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const ExternalLink: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconExternalLink {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Heart: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconHeart {...args} />
    </IconWrapper>
  ),
  args: { size: "lg", color: "#ef4444" },
};

export const Star: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconStar {...args} />
    </IconWrapper>
  ),
  args: { size: "lg", color: "#f59e0b" },
};

export const Eye: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconEye {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const EyeOff: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconEyeOff {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Calendar: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconCalendar {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};

export const Clock: Story = {
  render: (args: IconArgs) => (
    <IconWrapper>
      <Icons.IconClock {...args} />
    </IconWrapper>
  ),
  args: { size: "lg" },
};
