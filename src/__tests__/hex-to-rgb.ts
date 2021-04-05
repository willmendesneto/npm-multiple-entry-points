import { hexToRgb } from '../entrypoints/hex-to-rgb';

describe('NPM Multiple Entry Points: Hex To RGB entry-point', () => {
  it('should return RGB as a list of values', () => {
    expect(hexToRgb('#FF0000')).toEqual([255, 0, 0]);
  });
});
