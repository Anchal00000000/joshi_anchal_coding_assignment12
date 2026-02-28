import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Button renders", () => {
  render(<Button label="Click Me" />);
  expect(screen.getByRole("button")).toBeVisible();
});

test("Button changes background when disabled", () => {
  render(<Button label="Disabled" disabled />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: grey");
});