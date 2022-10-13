import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet group", () => {
  beforeEach(() => {
    console.log("before done");
  });
  test("Greet renders", () => {
    render(<Greet />);
    const ele = screen.getByText(/hello/i);
    expect(ele).toBeInTheDocument();
  });

  test("Greet renders with message", () => {
    render(<Greet name="Bruce" />);
    const ele = screen.getByText(/hello brUCe/i);
    expect(ele).toBeInTheDocument();
  });
});
