import mq from "../src/mq";

describe("media queries", () => {
  test("has min-width queries", () => {
    expect(mq).toHaveProperty("min");
  });

  test("has max-width queries", () => {
    expect(mq).toHaveProperty("max");
  });
});

describe("min-width media queries", () => {
  test("has 1430px breakpoint", () => {
    expect(mq.min[1430]).toBe("89.375em");
  });

  test("has 1410px breakpoint", () => {
    expect(mq.min[1410]).toBe("88.125em");
  });

  test("has 1350px breakpoint", () => {
    expect(mq.min[1350]).toBe("84.375em");
  });

  test("has 1290px breakpoint", () => {
    expect(mq.min[1290]).toBe("80.625em");
  });

  test("has 1200px breakpoint", () => {
    expect(mq.min[1200]).toBe("75em");
  });

  test("has 1080px breakpoint", () => {
    expect(mq.min[1080]).toBe("67.5em");
  });

  test("has 1024px breakpoint", () => {
    expect(mq.min[1024]).toBe("64em");
  });

  test("has 960px breakpoint", () => {
    expect(mq.min[960]).toBe("60em");
  });

  test("has 840px breakpoint", () => {
    expect(mq.min[840]).toBe("52.5em");
  });

  test("has 768px breakpoint", () => {
    expect(mq.min[768]).toBe("48em");
  });

  test("has 720px breakpoint", () => {
    expect(mq.min[720]).toBe("45em");
  });

  test("has 600px breakpoint", () => {
    expect(mq.min[600]).toBe("37.5em");
  });

  test("has 560px breakpoint", () => {
    expect(mq.min[560]).toBe("35em");
  });

  test("has 480px breakpoint", () => {
    expect(mq.min[480]).toBe("30em");
  });

  test("has 360px breakpoint", () => {
    expect(mq.min[360]).toBe("22.5em");
  });

  test("has 320px breakpoint", () => {
    expect(mq.min[320]).toBe("20em");
  });
});

describe("max-width media queries", () => {
  test("has 1429px breakpoint", () => {
    expect(mq.max[1430]).toBe("89.3125em");
  });

  test("has 1409px breakpoint", () => {
    expect(mq.max[1410]).toBe("88.0625em");
  });

  test("has 1349px breakpoint", () => {
    expect(mq.max[1350]).toBe("84.3125em");
  });

  test("has 1289px breakpoint", () => {
    expect(mq.max[1290]).toBe("80.5625em");
  });

  test("has 1199px breakpoint", () => {
    expect(mq.max[1200]).toBe("74.9375em");
  });

  test("has 1079px breakpoint", () => {
    expect(mq.max[1080]).toBe("67.4375em");
  });

  test("has 1023px breakpoint", () => {
    expect(mq.max[1024]).toBe("63.9375em");
  });

  test("has 959px breakpoint", () => {
    expect(mq.max[960]).toBe("59.9375em");
  });

  test("has 839px breakpoint", () => {
    expect(mq.max[840]).toBe("52.4375em");
  });

  test("has 767px breakpoint", () => {
    expect(mq.max[768]).toBe("47.9375em");
  });

  test("has 719px breakpoint", () => {
    expect(mq.max[720]).toBe("44.9375em");
  });

  test("has 599px breakpoint", () => {
    expect(mq.max[600]).toBe("37.4375em");
  });

  test("has 559px breakpoint", () => {
    expect(mq.max[560]).toBe("34.9375em");
  });

  test("has 479px breakpoint", () => {
    expect(mq.max[480]).toBe("29.9375em");
  });

  test("has 359px breakpoint", () => {
    expect(mq.max[360]).toBe("22.4375em");
  });

  test("has 319px breakpoint", () => {
    expect(mq.max[320]).toBe("19.9375em");
  });
});
