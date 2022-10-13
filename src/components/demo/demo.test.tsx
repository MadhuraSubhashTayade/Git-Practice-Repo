describe("Group 1", () => {
  beforeAll(() => {
    console.log("before AbeforeAll called...");
  });

  beforeEach(() => {
    console.log("before each called...");
  });

  test("expect sum to be 4", () => {
    expect(2 + 2).toBe(4);
  });
});
