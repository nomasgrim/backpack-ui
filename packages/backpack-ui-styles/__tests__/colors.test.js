import colors, { toRGB, toRGBA } from "../src/colors";

describe("color utilities", () => {
  test("has toRGB method", () => {
    expect(toRGB("#fff")).toBe("rgb(255, 255, 255)");
  });

  test("has toRGBA method", () => {
    expect(toRGBA("#fff", 0.5)).toBe("rgba(255, 255, 255, 0.5)");
  });
});

describe("background colors", () => {
  test("has primary background color", () => {
    expect(colors.bgPrimary).toBe("#fff");
  });

  test("has secondary background color", () => {
    expect(colors.bgSecondary).toBe("#f4fbfe");
  });

  test("has overlay background color", () => {
    expect(colors.bgOverlay).toBe("#000");
  });

  test("has dark background color", () => {
    expect(colors.bgDark).toBe("rgba(0, 0, 0, 0.96)");
  });
});

describe("link colors", () => {
  test("has primary link color", () => {
    expect(colors.linkPrimary).toBe("#297cbb");
  });

  test("has primary link hover color", () => {
    expect(colors.linkPrimaryHover).toBe("rgba(41, 124, 187, 0.7)");
  });
});

describe("border colors", () => {
  test("has primary border color", () => {
    expect(colors.borderPrimary).toBe("#e4e4e4");
  });
});

describe("text colors", () => {
  test("has primary text color", () => {
    expect(colors.textPrimary).toBe("#2c3643");
  });

  test("has secondary text color", () => {
    expect(colors.textSecondary).toBe("rgba(44, 54, 67, 0.7)");
  });

  test("has overlay text color", () => {
    expect(colors.textOverlay).toBe("#fff");
  });
});

describe("shadow colors", () => {
  test("has primary shadow color", () => {
    expect(colors.shadowPrimary).toBe("#000");
  });
});

describe("accent colors", () => {
  test("has blue accent color", () => {
    expect(colors.accentBlue).toBe("#88bde7");
  });

  test("has gray accent color", () => {
    expect(colors.accentGray).toBe("#b6c3ca");
  });

  test("has green accent color", () => {
    expect(colors.accentGreen).toBe("#16c98d");
  });

  test("has orange accent color", () => {
    expect(colors.accentOrange).toBe("#ff882e");
  });

  test("has pink accent color", () => {
    expect(colors.accentPink).toBe("#ff6e8d");
  });

  test("has purple accent color", () => {
    expect(colors.accentPurple).toBe("#9d69c9");
  });

  test("has red accent color", () => {
    expect(colors.accentRed).toBe("#da0909");
  });

  test("has yellow accent color", () => {
    expect(colors.accentYellow).toBe("#ffc83f");
  });
});

describe("ui colors", () => {
  test("has primary ui color", () => {
    expect(colors.uiGreen).toBe("#44db5e");
  });
});

describe("social colors", () => {
  test("has Facebook social color", () => {
    expect(colors.socialFacebook).toBe("#3a5999");
  });

  test("has Facebook Messenger social color", () => {
    expect(colors.socialFacebookMessenger).toBe("#1472fb");
  });

  test("has Pinterest social color", () => {
    expect(colors.socialPinterest).toBe("#cb2027");
  });

  test("has Google blue social color", () => {
    expect(colors.socialGoogleBlue).toBe("#557ebf");
  });

  test("has Google green social color", () => {
    expect(colors.socialGoogleGreen).toBe("#36a852");
  });

  test("has Google yellow social color", () => {
    expect(colors.socialGoogleYellow).toBe("#f9bc15");
  });

  test("has Google red social color", () => {
    expect(colors.socialGoogleRed).toBe("#ea4535");
  });

  test("has Reddit social color", () => {
    expect(colors.socialReddit).toBe("#fc4220");
  });

  test("has Twitter social color", () => {
    expect(colors.socialTwitter).toBe("#1da1f2");
  });

  test("has Whatsapp social color", () => {
    expect(colors.socialWhatsapp).toBe("#28eb76");
  });
});
