import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders successfully", () => {
  render(<Greet />);
  const ele = screen.getByText(/greet/i);
  expect(ele).toBeInTheDocument();
});
