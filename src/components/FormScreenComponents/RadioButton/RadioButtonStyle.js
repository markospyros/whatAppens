// Style for Radio buttons
// For styling we use a library called react-native-tailwindcss
import { t } from "react-native-tailwindcss";

// Style for radio button container
export const radioButtonView = [
  t.borderSolid,
  t.p5,
  t.roundedLg,
  t.bgBlue100,
  t.flexRow,
  t.mY2,
];

// Style for radio button container when pressed
export const radioButtonViewOnPress = [
  t.borderSolid,
  t.p5,
  t.roundedLg,
  t.bgBlue300,
  t.flexRow,
  t.mY2,
];

// Style for radio button text
export const radioButtonText = [t.textBase, t.mX3, t.p1];

// Style for radio button dot
export const radioButtonDot = [
  t.borderSolid,
  t.border2,
  t.borderBlue700,
  t.roundedFull,
  t.bgWhite,
  t.p2,
];

// Style for radio button inner dot
export const radioButtonInnerDot = [
  t.borderSolid,
  t.border2,
  t.borderWhite,
  t.roundedFull,
  t.p1,
];

// Style for radio button inner dot when pressed
export const radioButtonInnerDotOnPress = [
  t.borderSolid,
  t.border2,
  t.roundedFull,
  t.borderBlue700,
  t.bgBlue700,
  t.p1,
];

export const radioButtonGroupContainer = [];
