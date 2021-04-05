import { hexToRgb } from './hex-to-rgb';

export const isLight = (colorinHex: string): boolean => {
  const [red, green, blue] = hexToRgb(colorinHex);
  // Displaying an error in case something goes wrong during tranformation
  if (!red || !green || !blue) {
    throw new Error(`Unable to transform ${colorinHex} to hex.`);
  }

  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  // If it's not light, that means it's dark
  return brightness > 128;
};
