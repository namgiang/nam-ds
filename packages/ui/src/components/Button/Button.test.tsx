import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  describe("Basic Rendering", () => {
    it("renders button with children", () => {
      render(<Button>Click me</Button>);
      expect(
        screen.getByRole("button", { name: "Click me" })
      ).toBeInTheDocument();
    });

    it("forwards ref to button element", () => {
      const ref = vi.fn();
      render(<Button ref={ref}>Button</Button>);
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
    });

    it("applies custom className", () => {
      render(<Button className="custom-class">Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class");
    });

    it("forwards HTML button props", () => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} data-testid="test-button">
          Button
        </Button>
      );

      const button = screen.getByTestId("test-button");
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(button).toHaveAttribute("data-testid", "test-button");
    });
  });

  describe("Variants", () => {
    it("renders primary variant by default", () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toMatch(/button--primary/);
    });

    it("renders secondary variant", () => {
      render(<Button variant="secondary">Button</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toMatch(/button--secondary/);
    });

    it("renders outline variant", () => {
      render(<Button variant="outline">Button</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toMatch(/button--outline/);
    });

    it("renders ghost variant", () => {
      render(<Button variant="ghost">Button</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toMatch(/button--ghost/);
    });
  });

  describe("Sizes", () => {
    it("renders medium size by default", () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toMatch(/button--md/);
    });

    it("renders small size", () => {
      render(<Button size="sm">Button</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toMatch(/button--sm/);
    });

    it("renders large size", () => {
      render(<Button size="lg">Button</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toMatch(/button--lg/);
    });
  });

  describe("States", () => {
    it("handles disabled state", () => {
      render(<Button disabled>Button</Button>);
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
      expect(button.className).toMatch(/button--disabled/);
    });

    it("handles full width state", () => {
      render(<Button fullWidth>Button</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toMatch(/button--full-width/);
    });

    it("handles loading state", () => {
      render(<Button loading>Button</Button>);
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
      expect(button.className).toMatch(/button--loading/);
      expect(screen.getByRole("status")).toBeInTheDocument(); // Loading component
    });

    it("hides content when loading", () => {
      render(<Button loading>Button Text</Button>);
      const hiddenContent = screen.getByText("Button Text");
      expect(hiddenContent.className).toMatch(/hiddenContent/);
    });

    it("disables button when loading even if disabled prop is false", () => {
      render(
        <Button loading disabled={false}>
          Button
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });
  });

  describe("Event Handling", () => {
    it("calls onClick when clicked", () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Button</Button>);

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", () => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} disabled>
          Button
        </Button>
      );

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("does not call onClick when loading", () => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} loading>
          Button
        </Button>
      );

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("handles keyboard events", () => {
      const handleKeyDown = vi.fn();
      render(<Button onKeyDown={handleKeyDown}>Button</Button>);

      const button = screen.getByRole("button");
      fireEvent.keyDown(button, { key: "Enter" });

      expect(handleKeyDown).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    it("has correct button role", () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("maintains accessibility when disabled", () => {
      render(<Button disabled>Button</Button>);
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("disabled");
      expect(button).toHaveProperty("disabled", true);
    });

    it("maintains accessibility when loading", () => {
      render(<Button loading>Button</Button>);
      const button = screen.getByRole("button");
      const loadingSpinner = screen.getByRole("status");

      expect(button).toHaveAttribute("disabled");
      expect(loadingSpinner).toBeInTheDocument();
      expect(loadingSpinner).toHaveAttribute("aria-label", "Button loading");
    });

    it("preserves aria attributes", () => {
      render(
        <Button aria-label="Custom label" aria-describedby="help-text">
          Button
        </Button>
      );

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "Custom label");
      expect(button).toHaveAttribute("aria-describedby", "help-text");
    });
  });

  describe("CSS Classes", () => {
    it("always applies base button class", () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toMatch(/button/);
    });

    it("combines multiple state classes correctly", () => {
      render(
        <Button
          variant="secondary"
          size="lg"
          loading
          fullWidth
          className="custom"
        >
          Button
        </Button>
      );

      const button = screen.getByRole("button");
      expect(button.className).toMatch(/button/);
      expect(button.className).toMatch(/button--secondary/);
      expect(button.className).toMatch(/button--lg/);
      expect(button.className).toMatch(/button--loading/);
      expect(button.className).toMatch(/button--full-width/);
      expect(button.className).toMatch(/custom/);
    });
  });
});
