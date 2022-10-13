import { render, screen } from "@testing-library/react";
describe("Group 1", () => {
  beforeEach(() => {
    console.log("before each1 called...");
  });

  beforeAll(() => {
    console.log("before All called...");
  });

  test("expect sum to be 4", () => {
    expect(2 + 2).toBe(4);
  });

  test("expect sum to be 40", () => {
    expect(20 + 20).toBe(40);
  });

  afterEach(() => {
    console.log("after each called...");
  });

  afterAll(() => {
    console.log("after All called...");
  });
});
