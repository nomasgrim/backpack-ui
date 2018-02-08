import zIndex from "../src/zIndex";

describe("z-index styles", () => {
  test("has auto value", () => {
    expect(zIndex.auto).toBe("auto");
  });

  test("has below value", () => {
    expect(zIndex.below).toBe(-1);
  });

  test("has default value", () => {
    expect(zIndex.default).toBe(1);
  });

  test("has popup value", () => {
    expect(zIndex.popup).toBe(4000);
  });

  test("has dialog value", () => {
    expect(zIndex.dialog).toBe(5000);
  });

  test("has dropdown value", () => {
    expect(zIndex.dropdown).toBe(6000);
  });

  test("has overlay value", () => {
    expect(zIndex.overlay).toBe(7000);
  });

  test("has menu value", () => {
    expect(zIndex.menu).toBe(8000);
  });

  test("has modal value", () => {
    expect(zIndex.modal).toBe(9000);
  });

  test("has toast value", () => {
    expect(zIndex.toast).toBe(10000);
  });
});
