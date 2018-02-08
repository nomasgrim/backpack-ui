import * as color from "color";

export const toRGB = c => color(c).rgb().string();
export const toRGBA = (c, a) => color(c).alpha(a).rgb().string();

// Background colors
const bgPrimary = "#fff";
const bgSecondary = "#f4fbfe";
const bgOverlay = "#000";
const bgDark = toRGBA("#000", 0.96);

// Link colors
const linkPrimary = "#297cbb";
const linkPrimaryHover = toRGBA(linkPrimary, 0.7);

// Border colors
const borderPrimary = "#e4e4e4";

// Text colors
const textPrimary = "#2c3643";
const textSecondary = toRGBA(textPrimary, 0.7);
const textOverlay = "#fff";

// Shadow colors
const shadowPrimary = "#000";

// Accent colors
const accentBlue = "#88bde7";
const accentGray = "#b6c3ca";
const accentGreen = "#16c98d";
const accentOrange = "#ff882e";
const accentPink = "#ff6e8d";
const accentPurple = "#9d69c9";
const accentRed = "#da0909";
const accentYellow = "#ffc83f";

// UI colors
const uiGreen = "#44db5e";

// Social colors
const socialFacebook = "#3a5999";
const socialFacebookMessenger = "#1472fb";
const socialPinterest = "#cb2027";
const socialGoogleBlue = "#557ebf";
const socialGoogleGreen = "#36a852";
const socialGoogleYellow = "#f9bc15";
const socialGoogleRed = "#ea4535";
const socialReddit = "#fc4220";
const socialTwitter = "#1da1f2";
const socialWhatsapp = "#28eb76";

const colors = {
  bgPrimary,
  bgSecondary,
  bgOverlay,
  bgDark,

  linkPrimary,
  linkPrimaryHover,

  borderPrimary,

  textPrimary,
  textSecondary,
  textOverlay,

  shadowPrimary,

  accentBlue,
  accentGray,
  accentGreen,
  accentOrange,
  accentPink,
  accentPurple,
  accentRed,
  accentYellow,

  uiGreen,

  socialFacebook,
  socialFacebookMessenger,
  socialGoogleBlue,
  socialGoogleGreen,
  socialGoogleYellow,
  socialGoogleRed,
  socialPinterest,
  socialReddit,
  socialTwitter,
  socialWhatsapp,
};

export default colors;
