"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color = require("color");
exports.toRGB = function (c) { return color(c).rgb().string(); };
exports.toRGBA = function (c, a) { return color(c).alpha(a).rgb().string(); };
// Background colors
var bgPrimary = "#fff";
var bgSecondary = "#f4fbfe";
var bgOverlay = "#000";
var bgDark = exports.toRGBA("#000", 0.96);
// Link colors
var linkPrimary = "#297cbb";
var linkPrimaryHover = exports.toRGBA(linkPrimary, 0.7);
// Border colors
var borderPrimary = "#e4e4e4";
// Text colors
var textPrimary = "#2c3643";
var textSecondary = exports.toRGBA(textPrimary, 0.7);
var textOverlay = "#fff";
// Shadow colors
var shadowPrimary = "#000";
// Accent colors
var accentBlue = "#88bde7";
var accentGray = "#b6c3ca";
var accentGreen = "#16c98d";
var accentOrange = "#ff882e";
var accentPink = "#ff6e8d";
var accentPurple = "#9d69c9";
var accentRed = "#da0909";
var accentYellow = "#ffc83f";
// UI colors
var uiGreen = "#44db5e";
// Social colors
var socialFacebook = "#3a5999";
var socialFacebookMessenger = "#1472fb";
var socialPinterest = "#cb2027";
var socialGoogleBlue = "#557ebf";
var socialGoogleGreen = "#36a852";
var socialGoogleYellow = "#f9bc15";
var socialGoogleRed = "#ea4535";
var socialReddit = "#fc4220";
var socialTwitter = "#1da1f2";
var socialWhatsapp = "#28eb76";
var colors = {
    bgPrimary: bgPrimary,
    bgSecondary: bgSecondary,
    bgOverlay: bgOverlay,
    bgDark: bgDark,
    linkPrimary: linkPrimary,
    linkPrimaryHover: linkPrimaryHover,
    borderPrimary: borderPrimary,
    textPrimary: textPrimary,
    textSecondary: textSecondary,
    textOverlay: textOverlay,
    shadowPrimary: shadowPrimary,
    accentBlue: accentBlue,
    accentGray: accentGray,
    accentGreen: accentGreen,
    accentOrange: accentOrange,
    accentPink: accentPink,
    accentPurple: accentPurple,
    accentRed: accentRed,
    accentYellow: accentYellow,
    uiGreen: uiGreen,
    socialFacebook: socialFacebook,
    socialFacebookMessenger: socialFacebookMessenger,
    socialGoogleBlue: socialGoogleBlue,
    socialGoogleGreen: socialGoogleGreen,
    socialGoogleYellow: socialGoogleYellow,
    socialGoogleRed: socialGoogleRed,
    socialPinterest: socialPinterest,
    socialReddit: socialReddit,
    socialTwitter: socialTwitter,
    socialWhatsapp: socialWhatsapp,
};
exports.default = colors;
