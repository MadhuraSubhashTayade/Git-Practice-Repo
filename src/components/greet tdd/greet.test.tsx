import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet renders", () => {
  render(<Greet />);
  const ele = screen.getByText(/hello/i);
  expect(ele).toBeInTheDocument();
});

test("Greet rendres with message", () => {
  render(<Greet name="Bruce" />);
  const ele = screen.getByText(/hello bruce/i);
  expect(ele).toBeInTheDocument();
});
