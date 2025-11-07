import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Text>Hello World</Text>);
      const text = screen.getByText("Hello World");
      expect(text).toBeInTheDocument();
      expect(text.tagName).toBe("P");
    });

    it("renders with custom element", () => {
      render(<Text as="span">Hello World</Text>);
      const text = screen.getByText("Hello World");
      expect(text.tagName).toBe("SPAN");
    });

    it("renders with custom element div", () => {
      render(<Text as="div">Hello World</Text>);
      const text = screen.getByText("Hello World");
      expect(text.tagName).toBe("DIV");
    });

    it("renders with custom element label", () => {
      render(<Text as="label">Hello World</Text>);
      const text = screen.getByText("Hello World");
      expect(text.tagName).toBe("LABEL");
    });
  });

  describe("Variants", () => {
    it("applies body variant class", () => {
      render(<Text variant="body">Body text</Text>);
      const text = screen.getByText("Body text");
      expect(text).toHaveClass("variant-body");
    });

    it("applies caption variant class", () => {
      render(<Text variant="caption">Caption text</Text>);
      const text = screen.getByText("Caption text");
      expect(text).toHaveClass("variant-caption");
    });

    it("applies label variant class", () => {
      render(<Text variant="label">Label text</Text>);
      const text = screen.getByText("Label text");
      expect(text).toHaveClass("variant-label");
    });

    it("applies code variant class", () => {
      render(<Text variant="code">Code text</Text>);
      const text = screen.getByText("Code text");
      expect(text).toHaveClass("variant-code");
    });

    it("applies display variant class", () => {
      render(<Text variant="display">Display text</Text>);
      const text = screen.getByText("Display text");
      expect(text).toHaveClass("variant-display");
    });

    it("applies heading variant class", () => {
      render(<Text variant="heading">Heading text</Text>);
      const text = screen.getByText("Heading text");
      expect(text).toHaveClass("variant-heading");
    });

    it("applies subheading variant class", () => {
      render(<Text variant="subheading">Subheading text</Text>);
      const text = screen.getByText("Subheading text");
      expect(text).toHaveClass("variant-subheading");
    });
  });

  describe("Sizes", () => {
    it("applies size classes correctly", () => {
      const sizes = [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
      ] as const;

      sizes.forEach((size) => {
        const { unmount } = render(<Text size={size}>Size {size}</Text>);
        const text = screen.getByText(`Size ${size}`);
        expect(text).toHaveClass(`size-${size}`);
        unmount();
      });
    });

    it("defaults to medium size", () => {
      render(<Text>Default size</Text>);
      const text = screen.getByText("Default size");
      expect(text).toHaveClass("size-md");
    });
  });

  describe("Weights", () => {
    it("applies weight classes correctly", () => {
      const weights = [
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
      ] as const;

      weights.forEach((weight) => {
        const { unmount } = render(
          <Text weight={weight}>Weight {weight}</Text>
        );
        const text = screen.getByText(`Weight ${weight}`);
        expect(text).toHaveClass(`weight-${weight}`);
        unmount();
      });
    });

    it("defaults to normal weight", () => {
      render(<Text>Default weight</Text>);
      const text = screen.getByText("Default weight");
      expect(text).toHaveClass("weight-normal");
    });
  });

  describe("Colors", () => {
    it("applies color classes correctly", () => {
      const colors = [
        "default",
        "muted",
        "subtle",
        "primary",
        "secondary",
        "accent",
        "success",
        "warning",
        "error",
      ] as const;

      colors.forEach((color) => {
        const { unmount } = render(<Text color={color}>Color {color}</Text>);
        const text = screen.getByText(`Color ${color}`);
        expect(text).toHaveClass(`color-${color}`);
        unmount();
      });
    });

    it("defaults to default color", () => {
      render(<Text>Default color</Text>);
      const text = screen.getByText("Default color");
      expect(text).toHaveClass("color-default");
    });
  });

  describe("Alignment", () => {
    it("applies alignment classes correctly", () => {
      const alignments = ["left", "center", "right", "justify"] as const;

      alignments.forEach((align) => {
        const { unmount } = render(<Text align={align}>Align {align}</Text>);
        const text = screen.getByText(`Align ${align}`);
        expect(text).toHaveClass(`align-${align}`);
        unmount();
      });
    });

    it("defaults to left alignment", () => {
      render(<Text>Default align</Text>);
      const text = screen.getByText("Default align");
      expect(text).toHaveClass("align-left");
    });
  });

  describe("Text Transform", () => {
    it("applies transform classes correctly", () => {
      const transforms = [
        "none",
        "uppercase",
        "lowercase",
        "capitalize",
      ] as const;

      transforms.forEach((transform) => {
        const { unmount } = render(
          <Text transform={transform}>Transform {transform}</Text>
        );
        const text = screen.getByText(`Transform ${transform}`);
        expect(text).toHaveClass(`transform-${transform}`);
        unmount();
      });
    });

    it("defaults to no transform", () => {
      render(<Text>Default transform</Text>);
      const text = screen.getByText("Default transform");
      expect(text).toHaveClass("transform-none");
    });
  });

  describe("Modifiers", () => {
    it("applies truncate class when truncate is true", () => {
      render(<Text truncate>Truncated text</Text>);
      const text = screen.getByText("Truncated text");
      expect(text).toHaveClass("truncate");
    });

    it("applies mono class when mono is true", () => {
      render(<Text mono>Monospace text</Text>);
      const text = screen.getByText("Monospace text");
      expect(text).toHaveClass("mono");
    });

    it("applies italic class when italic is true", () => {
      render(<Text italic>Italic text</Text>);
      const text = screen.getByText("Italic text");
      expect(text).toHaveClass("italic");
    });

    it("applies multiple modifiers", () => {
      render(
        <Text truncate mono italic>
          Multiple modifiers
        </Text>
      );
      const text = screen.getByText("Multiple modifiers");
      expect(text).toHaveClass("truncate", "mono", "italic");
    });
  });

  describe("Custom Props", () => {
    it("applies custom className", () => {
      render(<Text className="custom-class">Custom class</Text>);
      const text = screen.getByText("Custom class");
      expect(text).toHaveClass("custom-class");
      expect(text).toHaveClass("text"); // Should still have base class
    });

    it("passes through HTML attributes", () => {
      render(
        <Text data-testid="text-element" id="custom-id">
          Text with attributes
        </Text>
      );
      const text = screen.getByText("Text with attributes");
      expect(text).toHaveAttribute("data-testid", "text-element");
      expect(text).toHaveAttribute("id", "custom-id");
    });

    it("forwards ref correctly", () => {
      const ref = { current: null };
      render(<Text ref={ref as any}>Ref text</Text>);
      expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    });
  });

  describe("Accessibility", () => {
    it("maintains semantic meaning with proper elements", () => {
      render(
        <Text as="label" htmlFor="input-id">
          Label text
        </Text>
      );
      const label = screen.getByText("Label text");
      expect(label.tagName).toBe("LABEL");
      expect(label).toHaveAttribute("for", "input-id");
    });

    it("allows ARIA attributes", () => {
      render(
        <Text aria-label="Accessible text" role="status">
          Status text
        </Text>
      );
      const text = screen.getByText("Status text");
      expect(text).toHaveAttribute("aria-label", "Accessible text");
      expect(text).toHaveAttribute("role", "status");
    });
  });
});
