// This file is Typescript friendly
// Which means you can replace the function signatures and get
// the power of types in your WebApp 🔋

export const hexToRgb = (colorinHex: string): [number, number, number] | [] => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const expandShorthandHexToFullForm = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hex = colorinHex.replace(expandShorthandHexToFullForm, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [];
};

