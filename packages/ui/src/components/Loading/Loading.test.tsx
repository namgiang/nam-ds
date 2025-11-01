import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading", () => {
  describe("Basic Rendering", () => {
    it("renders loading component with default props", () => {
      render(<Loading />);
      const loading = screen.getByRole("status");
      expect(loading).toBeInTheDocument();
    });

    it("applies default aria-label", () => {
      render(<Loading />);
      const loading = screen.getByRole("status");
      expect(loading).toHaveAttribute("aria-label", "Loading");
    });

    it("applies custom aria-label", () => {
      render(<Loading aria-label="Custom loading message" />);
      const loading = screen.getByRole("status");
      expect(loading).toHaveAttribute("aria-label", "Custom loading message");
    });

    it("applies custom className", () => {
      render(<Loading className="custom-class" />);
      const loading = screen.getByRole("status");
      expect(loading).toHaveClass("custom-class");
    });

    it("applies custom color style", () => {
      render(<Loading color="#ff0000" />);
      const loading = screen.getByRole("status");
      expect(loading).toHaveStyle({ color: "#ff0000" });
    });

    it("does not apply color style when not provided", () => {
      render(<Loading />);
      const loading = screen.getByRole("status");
      expect(loading).not.toHaveAttribute("style");
    });
  });

  describe("Sizes", () => {
    it("renders medium size by default", () => {
      render(<Loading />);
      const loading = screen.getByRole("status");
      expect(loading.className).toMatch(/loading--md/);
    });

    it("renders small size", () => {
      render(<Loading size="sm" />);
      const loading = screen.getByRole("status");
      expect(loading.className).toMatch(/loading--sm/);
    });

    it("renders large size", () => {
      render(<Loading size="lg" />);
      const loading = screen.getByRole("status");
      expect(loading.className).toMatch(/loading--lg/);
    });
  });

  describe("Variants", () => {
    it("renders spinner variant by default", () => {
      render(<Loading />);
      const loading = screen.getByRole("status");
      expect(loading.className).toMatch(/loading--spinner/);
      expect(loading.querySelector("svg")).toBeInTheDocument();
    });

    it("renders dots variant", () => {
      render(<Loading variant="dots" />);
      const loading = screen.getByRole("status");
      expect(loading.className).toMatch(/loading--dots/);

      // Should have 3 dots
      const dots = loading.querySelectorAll('[class*="dot"]');
      expect(dots).toHaveLength(3);
    });

    it("renders pulse variant", () => {
      render(<Loading variant="pulse" />);
      const loading = screen.getByRole("status");
      expect(loading.className).toMatch(/loading--pulse/);

      // Should have 3 pulse bars
      const bars = loading.querySelectorAll('[class*="pulseBar"]');
      expect(bars).toHaveLength(3);
    });
  });

  describe("Spinner Variant", () => {
    it("renders svg with correct attributes", () => {
      render(<Loading variant="spinner" />);
      const svg = screen.getByRole("status").querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("renders circle with correct attributes", () => {
      render(<Loading variant="spinner" />);
      const circle = screen.getByRole("status").querySelector("circle");

      expect(circle).toBeInTheDocument();
      expect(circle).toHaveAttribute("cx", "12");
      expect(circle).toHaveAttribute("cy", "12");
      expect(circle).toHaveAttribute("r", "10");
      expect(circle).toHaveAttribute("stroke", "currentColor");
      expect(circle).toHaveAttribute("stroke-width", "2");
      expect(circle).toHaveAttribute("fill", "none");
      expect(circle).toHaveAttribute("stroke-linecap", "round");
      expect(circle).toHaveAttribute("stroke-dasharray", "32");
      expect(circle).toHaveAttribute("stroke-dashoffset", "32");
    });
  });

  describe("Dots Variant", () => {
    it("renders three dot elements", () => {
      render(<Loading variant="dots" />);
      const loading = screen.getByRole("status");
      const dots = loading.querySelectorAll('[class*="dot"]');

      expect(dots).toHaveLength(3);

      // All dots should have aria-hidden
      dots.forEach((dot) => {
        expect(dot).toHaveAttribute("aria-hidden", "true");
      });
    });
  });

  describe("Pulse Variant", () => {
    it("renders three pulse bar elements", () => {
      render(<Loading variant="pulse" />);
      const loading = screen.getByRole("status");
      const bars = loading.querySelectorAll('[class*="pulseBar"]');

      expect(bars).toHaveLength(3);

      // All bars should have aria-hidden
      bars.forEach((bar) => {
        expect(bar).toHaveAttribute("aria-hidden", "true");
      });
    });
  });

  describe("Accessibility", () => {
    it("has correct status role", () => {
      render(<Loading />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("has aria-live polite for screen reader announcements", () => {
      render(<Loading />);
      const loading = screen.getByRole("status");
      expect(loading).toHaveAttribute("aria-live", "polite");
    });

    it("hides decorative elements from screen readers", () => {
      render(<Loading variant="spinner" />);
      const svg = screen.getByRole("status").querySelector("svg");
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("hides dots from screen readers", () => {
      render(<Loading variant="dots" />);
      const dots = screen
        .getByRole("status")
        .querySelectorAll('[class*="dot"]');

      dots.forEach((dot) => {
        expect(dot).toHaveAttribute("aria-hidden", "true");
      });
    });

    it("hides pulse bars from screen readers", () => {
      render(<Loading variant="pulse" />);
      const bars = screen
        .getByRole("status")
        .querySelectorAll('[class*="pulseBar"]');

      bars.forEach((bar) => {
        expect(bar).toHaveAttribute("aria-hidden", "true");
      });
    });
  });

  describe("CSS Classes", () => {
    it("always applies base loading class", () => {
      render(<Loading />);
      const loading = screen.getByRole("status");
      expect(loading.className).toMatch(/loading/);
    });

    it("combines size and variant classes correctly", () => {
      render(<Loading size="lg" variant="dots" className="custom" />);
      const loading = screen.getByRole("status");

      expect(loading.className).toMatch(/loading/);
      expect(loading.className).toMatch(/loading--lg/);
      expect(loading.className).toMatch(/loading--dots/);
      expect(loading).toHaveClass("custom");
    });
  });
});
