import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

test("Dropdown renders", () => {
  render(<Dropdown options={["One", "Two"]} />);
  expect(screen.getByRole("combobox")).toBeVisible();
});

test("Dropdown is disabled", () => {
  render(<Dropdown options={["One", "Two"]} disabled />);
  expect(screen.getByRole("combobox")).toBeDisabled();
});