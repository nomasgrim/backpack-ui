import styles from "../src";

describe("styles", () => {
  test("exports colors", () => {
    expect(styles).toHaveProperty("colors");
  });

  test("exports fonts", () => {
    expect(styles).toHaveProperty("fonts");
  });

  test("exports media queries", () => {
    expect(styles).toHaveProperty("mq");
  });

  test("exports timing styles", () => {
    expect(styles).toHaveProperty("timing");
  });

  test("exports typography styles", () => {
    expect(styles).toHaveProperty("typography");
  });

  test("exports z-index styles", () => {
    expect(styles).toHaveProperty("zIndex");
  });
});
