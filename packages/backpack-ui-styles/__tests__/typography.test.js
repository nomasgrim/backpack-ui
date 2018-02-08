import typography from "../src/typography";

describe("font weights", () => {
  test("has light font weight", () => {
    expect(typography.fontWeightLight).toBe(300);
  });

  test("has regular font weight", () => {
    expect(typography.fontWeightRegular).toBe(500);
  });

  test("has medium font weight", () => {
    expect(typography.fontWeightMedium).toBe(600);
  });
});

describe("font sizes", () => {
  test("has super font size", () => {
    expect(typography.fontSizeSuper).toBe(88);
  });

  test("has heading 1 font size", () => {
    expect(typography.fontSizeHeading1).toBe(64);
  });

  test("has heading 2 font size", () => {
    expect(typography.fontSizeHeading2).toBe(48);
  });

  test("has heading 3 font size", () => {
    expect(typography.fontSizeHeading3).toBe(40);
  });

  test("has heading 4 font size", () => {
    expect(typography.fontSizeHeading4).toBe(32);
  });

  test("has heading 5 font size", () => {
    expect(typography.fontSizeHeading5).toBe(24);
  });

  test("has heading 6 font size", () => {
    expect(typography.fontSizeHeading6).toBe(20);
  });

  test("has heading 7 font size", () => {
    expect(typography.fontSizeHeading7).toBe(16);
  });

  test("has heading 8 font size", () => {
    expect(typography.fontSizeHeading8).toBe(11);
  });

  test("has body article font size", () => {
    expect(typography.fontSizeBodyArticle).toBe(20);
  });

  test("has body article small font size", () => {
    expect(typography.fontSizeBodyArticleSmall).toBe(16);
  });

  test("has body small font size", () => {
    expect(typography.fontSizeBodySmall).toBe(14);
  });

  test("has accent font size", () => {
    expect(typography.fontSizeAccent).toBe(16);
  });

  test("has uppercase font size", () => {
    expect(typography.fontSizeUppercase).toBe(11);
  });
});

describe("line heights", () => {
  test("has super line height", () => {
    expect(typography.lineHeightSuper).toBe(1.0909090909090908);
  });

  test("has heading 1 line height", () => {
    expect(typography.lineHeightHeading1).toBe(1.125);
  });

  test("has heading 2 line height", () => {
    expect(typography.lineHeightHeading2).toBe(1.1666666666666667);
  });

  test("has heading 3 line height", () => {
    expect(typography.lineHeightHeading3).toBe(1.2);
  });

  test("has heading 4 line height", () => {
    expect(typography.lineHeightHeading4).toBe(1.25);
  });

  test("has heading 5 line height", () => {
    expect(typography.lineHeightHeading5).toBe(1.3333333333333333);
  });

  test("has heading 6 line height", () => {
    expect(typography.lineHeightHeading6).toBe(1.4);
  });

  test("has heading 7 line height", () => {
    expect(typography.lineHeightHeading7).toBe(1.5);
  });

  test("has heading 8 line height", () => {
    expect(typography.lineHeightHeading8).toBe(1.4545454545454546);
  });

  test("has body article line height", () => {
    expect(typography.lineHeightBodyArticle).toBe(1.8);
  });

  test("has body article small line height", () => {
    expect(typography.lineHeightBodyArticleSmall).toBe(2);
  });

  test("has body small line height", () => {
    expect(typography.lineHeightBodySmall).toBe(1.4285714285714286);
  });

  test("has accent line height", () => {
    expect(typography.lineHeightAccent).toBe(1.5);
  });

  test("has uppercase line height", () => {
    expect(typography.lineHeightUppercase).toBe(1);
  });

  test("has reset line height", () => {
    expect(typography.lineHeightReset).toBe(1);
  });
});
