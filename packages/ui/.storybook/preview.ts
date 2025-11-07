import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#1f2937",
        },
        {
          name: "dutch-light",
          value: "#F0ECE6",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div data-theme="dutch-phrase-companion">
        <Story />
      </div>
    ),
  ],
};

export default preview;