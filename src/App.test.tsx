import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("My first test", () => {
  render(<App />);
  const anchor = screen.getByText(/learn react/i);
  expect(anchor).toBeInTheDocument();
});
