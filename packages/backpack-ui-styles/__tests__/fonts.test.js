import fonts from "../src/fonts";

describe("fonts", () => {
  test("has Benton Sans font stack", () => {
    expect(fonts.benton).toBe("\"Benton Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif");
  });

  test("has Miller Daily font stack", () => {
    expect(fonts.miller).toBe("\"Miller Daily\", Georgia, Times, \"Times New Roman\", serif");
  });
});
