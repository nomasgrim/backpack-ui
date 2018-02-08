import timing from "../src/timing";

describe("timing styles", () => {
  test("has fast value", () => {
    expect(timing.fast).toBe("200ms");
  });

  test("has default value", () => {
    expect(timing.default).toBe("400ms");
  });

  test("has slow value", () => {
    expect(timing.slow).toBe("800ms");
  });
});
