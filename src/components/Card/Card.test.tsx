import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("Card renders", () => {
  render(<Card title="My Card" description="Test" />);
  expect(screen.getByText("My Card")).toBeVisible();
});

test("Card button disabled style", () => {
  render(<Card title="Test" description="Test" disabled />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: grey");
});