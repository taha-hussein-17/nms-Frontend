import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders correctly with default props", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("renders with a label", () => {
    render(<Input label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("shows error message when error prop is provided", () => {
    render(<Input error="Invalid input" />);
    expect(screen.getByText("Invalid input")).toBeInTheDocument();
  });

  it("applies error styles when error prop is provided", () => {
    render(<Input error="Invalid input" placeholder="test-input" />);
    const input = screen.getByPlaceholderText("test-input");
    expect(input).toHaveClass("border-rose-500");
  });

  it("renders with an icon", () => {
    render(<Input icon={<span data-testid="test-icon">Icon</span>} />);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("passes extra props to the input element", () => {
    render(<Input data-testid="custom-input" disabled />);
    const input = screen.getByTestId("custom-input");
    expect(input).toBeDisabled();
  });
});
