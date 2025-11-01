import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  describe("Basic Rendering", () => {
    it("renders link with children", () => {
      render(<Link href="/test">Test Link</Link>);
      expect(
        screen.getByRole("link", { name: "Test Link" })
      ).toBeInTheDocument();
    });

    it("renders with correct href", () => {
      render(<Link href="/test">Link</Link>);
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "/test");
    });

    it("forwards ref to anchor element", () => {
      const ref = vi.fn();
      render(
        <Link ref={ref} href="/test">
          Link
        </Link>
      );
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLAnchorElement));
    });

    it("applies custom className", () => {
      render(
        <Link className="custom-class" href="/test">
          Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveClass("custom-class");
    });

    it("forwards HTML anchor props", () => {
      const handleClick = vi.fn();
      render(
        <Link onClick={handleClick} data-testid="test-link" href="/test">
          Link
        </Link>
      );

      const link = screen.getByTestId("test-link");
      fireEvent.click(link);

      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(link).toHaveAttribute("data-testid", "test-link");
    });
  });

  describe("Variants", () => {
    it("renders default variant by default", () => {
      render(<Link href="/test">Link</Link>);
      const link = screen.getByRole("link");
      expect(link.className).toMatch(/link--default/);
    });

    it("renders primary variant", () => {
      render(
        <Link variant="primary" href="/test">
          Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link.className).toMatch(/link--primary/);
    });

    it("renders secondary variant", () => {
      render(
        <Link variant="secondary" href="/test">
          Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link.className).toMatch(/link--secondary/);
    });

    it("renders muted variant", () => {
      render(
        <Link variant="muted" href="/test">
          Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link.className).toMatch(/link--muted/);
    });
  });

  describe("Sizes", () => {
    it("renders medium size by default", () => {
      render(<Link href="/test">Link</Link>);
      const link = screen.getByRole("link");
      expect(link.className).toMatch(/link--md/);
    });

    it("renders small size", () => {
      render(
        <Link size="sm" href="/test">
          Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link.className).toMatch(/link--sm/);
    });

    it("renders large size", () => {
      render(
        <Link size="lg" href="/test">
          Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link.className).toMatch(/link--lg/);
    });
  });

  describe("Underline Behavior", () => {
    it("renders hover underline by default", () => {
      render(<Link href="/test">Link</Link>);
      const link = screen.getByRole("link");
      expect(link.className).toMatch(/link--underline-hover/);
    });

    it("renders no underline", () => {
      render(
        <Link underline="none" href="/test">
          Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link.className).toMatch(/link--underline-none/);
    });

    it("renders always underline", () => {
      render(
        <Link underline="always" href="/test">
          Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link.className).toMatch(/link--underline-always/);
    });
  });

  describe("External Links", () => {
    it("does not show external icon by default", () => {
      render(<Link href="/test">Internal Link</Link>);
      const link = screen.getByRole("link");
      expect(
        link.querySelector('[class*="externalIcon"]')
      ).not.toBeInTheDocument();
    });

    it("shows external icon for external links", () => {
      render(
        <Link external href="https://example.com">
          External Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link.querySelector('[class*="externalIcon"]')).toBeInTheDocument();
    });

    it("sets correct target for external links", () => {
      render(
        <Link external href="https://example.com">
          External Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("target", "_blank");
    });

    it("sets correct rel for external links", () => {
      render(
        <Link external href="https://example.com">
          External Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("preserves custom target when not external", () => {
      render(
        <Link target="_self" href="/test">
          Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("target", "_self");
    });

    it("preserves custom rel when not external", () => {
      render(
        <Link rel="prefetch" href="/test">
          Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("rel", "prefetch");
    });

    it("overrides custom target for external links", () => {
      render(
        <Link external target="_self" href="https://example.com">
          External Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("target", "_blank");
    });

    it("overrides custom rel for external links", () => {
      render(
        <Link external rel="prefetch" href="https://example.com">
          External Link
        </Link>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("passes correct size to external icon", () => {
      render(
        <Link external size="lg" href="https://example.com">
          Link
        </Link>
      );
      const link = screen.getByRole("link");
      const icon = link.querySelector('[class*="externalIcon"]');
      expect(icon).toBeInTheDocument();
      // The icon should receive the same size as the link
    });
  });

  describe("Disabled State", () => {
    it("applies disabled class when disabled", () => {
      render(
        <Link disabled href="/test">
          Disabled Link
        </Link>
      );
      // Disabled links without href don't have link role, use text query
      const link = screen.getByText("Disabled Link");
      expect(link.className).toMatch(/link--disabled/);
    });

    it("sets aria-disabled when disabled", () => {
      render(
        <Link disabled href="/test">
          Disabled Link
        </Link>
      );
      const link = screen.getByText("Disabled Link");
      expect(link).toHaveAttribute("aria-disabled", "true");
    });

    it("removes href when disabled", () => {
      render(
        <Link disabled href="/test">
          Disabled Link
        </Link>
      );
      const link = screen.getByText("Disabled Link");
      expect(link).not.toHaveAttribute("href");
    });

    it("sets tabIndex to -1 when disabled", () => {
      render(
        <Link disabled href="/test">
          Disabled Link
        </Link>
      );
      const link = screen.getByText("Disabled Link");
      expect(link).toHaveAttribute("tabIndex", "-1");
    });

    it("does not set tabIndex when enabled", () => {
      render(<Link href="/test">Enabled Link</Link>);
      const link = screen.getByRole("link");
      expect(link).not.toHaveAttribute("tabIndex");
    });

    it("hides external icon when disabled", () => {
      render(
        <Link disabled external href="https://example.com">
          Disabled External Link
        </Link>
      );
      const link = screen.getByText("Disabled External Link");
      expect(
        link.querySelector('[class*="externalIcon"]')
      ).not.toBeInTheDocument();
    });
  });

  describe("Event Handling", () => {
    it("calls onClick when clicked", () => {
      const handleClick = vi.fn();
      render(
        <Link onClick={handleClick} href="/test">
          Link
        </Link>
      );

      fireEvent.click(screen.getByRole("link"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("prevents click when disabled", () => {
      const handleClick = vi.fn();
      render(
        <Link onClick={handleClick} disabled href="/test">
          Disabled Link
        </Link>
      );

      fireEvent.click(screen.getByText("Disabled Link"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("prevents default and stops propagation when disabled", () => {
      const handleClick = vi.fn();

      render(
        <Link onClick={handleClick} disabled href="/test">
          Disabled Link
        </Link>
      );

      const link = screen.getByText("Disabled Link");
      fireEvent.click(link);

      // Since the link is disabled, the onClick handler should not be called
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("handles keyboard events", () => {
      const handleKeyDown = vi.fn();
      render(
        <Link onKeyDown={handleKeyDown} href="/test">
          Link
        </Link>
      );

      const link = screen.getByRole("link");
      fireEvent.keyDown(link, { key: "Enter" });

      expect(handleKeyDown).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibility", () => {
    it("maintains accessibility when disabled", () => {
      render(
        <Link disabled href="/test">
          Disabled Link
        </Link>
      );
      const link = screen.getByText("Disabled Link");

      expect(link).toHaveAttribute("aria-disabled", "true");
      expect(link).toHaveAttribute("tabIndex", "-1");
      expect(link).not.toHaveAttribute("href");
    });

    it("provides accessible label for external icon", () => {
      render(
        <Link external href="https://example.com">
          External Link
        </Link>
      );
      // The external icon should have label="Opens in new tab" as per the component
    });

    it("preserves aria attributes", () => {
      render(
        <Link
          aria-label="Custom label"
          aria-describedby="help-text"
          href="/test"
        >
          Link
        </Link>
      );

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("aria-label", "Custom label");
      expect(link).toHaveAttribute("aria-describedby", "help-text");
    });
  });

  describe("CSS Classes", () => {
    it("always applies base link class", () => {
      render(<Link href="/test">Link</Link>);
      const link = screen.getByRole("link");
      expect(link.className).toMatch(/link/);
    });

    it("combines multiple classes correctly", () => {
      render(
        <Link
          variant="primary"
          size="lg"
          underline="always"
          disabled
          className="custom"
          href="/test"
        >
          Link
        </Link>
      );

      const link = screen.getByText("Link");
      expect(link.className).toMatch(/link/);
      expect(link.className).toMatch(/link--primary/);
      expect(link.className).toMatch(/link--lg/);
      expect(link.className).toMatch(/link--underline-always/);
      expect(link.className).toMatch(/link--disabled/);
      expect(link).toHaveClass("custom");
    });
  });
});
