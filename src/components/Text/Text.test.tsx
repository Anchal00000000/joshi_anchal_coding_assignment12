import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

test("Text renders", () => {
  render(<Text content="Hello World" />);
  expect(screen.getByText("Hello World")).toBeVisible();
});

test("Text changes color when disabled", () => {
  render(<Text content="Disabled Text" disabled />);
  const text = screen.getByText("Disabled Text");
  expect(text).toHaveStyle("color: grey");
});