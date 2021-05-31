const MAX_VALUE = 255;
const HIGHLIGHT_PERCENTAGES = [80, 60, 40, 20];
const SHADOW_PERCENTAGES = [20, 40, 60, 80];

/**
 * Converts a color from hex to rgb.
 * @param {string} hex color
 * @returns {number[]} rgb color
 */
const toRgb = (hex) => {
  hex = hex.replace('#', '');
  if (hex.length === 6) {
    const parts = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)];
    return parts.map((part) => parseInt(part, 16));
  } else if (hex.length === 3) {
    return [...hex].map((part) => parseInt(part + part, 16));
  } else {
    throw new Error('Not a valid color.');
  }
};

/**
 * Converts a color from rgb to hex.
 * @param {number[]} rgb color
 * @returns {string} hex color
 */
const toHex = (rgb) => {
  return `#${rgb.map((part) => part.toString(16).padStart(2, '0')).join('')}`;
};

/**
 * Creates a function to brighten the given color by arbitrary percentages.
 * @param {number[]} rgb color
 * @returns {function(number): number[]}
 */
const highlights = (rgb) => (percent) => {
  return rgb.map((part) => {
    const diff = MAX_VALUE - part;
    return part + Math.round((diff * percent) / 100);
  });
};

/**
 * Creates a function to darken the given color by arbitrary percentages.
 * @param {number[]} rgb color
 * @returns {function(number): number[]}
 */
const shadows = (rgb) => (percent) => {
  return rgb.map((part) => {
    return part - Math.round((part * percent) / 100);
  });
};

/**
 * Calculates the (HSL) saturation of a given hex color
 * @param {string} hexColor, e.g. '#ee3377' or '#e37'
 * @returns {number} HSL saturation (range: 0-1)
 */
const getSaturation = (hexColor) => {
  const rgb = toRgb(hexColor);

  if (rgb.every((part) => part === 0) || rgb.every((part) => part === MAX_VALUE)) {
    return 0;
  }

  const max = Math.max(...rgb);
  const min = Math.min(...rgb);

  return (max - min) / (MAX_VALUE - Math.abs(max + min - MAX_VALUE));
};

/**
 * Generates a nine shade palette from a given hex color.
 * @param {string} hexColor, e.g. '#ee3377' or '#e37'
 * @returns {string[]} all nine hex colors (sorted: bright -> dark)
 */
const makePalette = (hexColor) => {
  const rgb = toRgb(hexColor);

  const rgbHighlights = HIGHLIGHT_PERCENTAGES.map(highlights(rgb));
  const rgbShadows = SHADOW_PERCENTAGES.map(shadows(rgb));

  const rgbPalette = [...rgbHighlights, rgb, ...rgbShadows];
  return rgbPalette.map(toHex);
};

/**
 * Suggests a similar color with higher saturation for a given set of colors.
 * @param {string} color hex color
 * @returns {string} hex color
 */
const suggestBaseColor = (color) => {
  return (
    {
      '#bf5594': '#dc389a',
      '#c7c56b': '#e0dd52',
      '#96c297': '#72e675',
      '#64bec2': '#47d8df',
      '#6199d0': '#5199e0',
    }[color] || color
  );
};

/**
 * Suggests a color that might go well with the given input.
 * @param {string} color hex color
 * @returns {string} hex color
 */
const suggestComplementaryColor = (color) => {
  return (
    {
      '#bf5594': '#e0dd52', // "#c7c56b"
      '#ee3377': '#72e675', // "#96c297"
      '#e37': '#72e675',
      '#f05869': '#47d8df', // "#64bec2"
      '#f37e5b': '#33bbee',
      '#f6a34d': '#5199e0', // "#6199d0"
      '#f9c940': '#894adf', // "#9077b2"
      '#c7c56b': '#dc389a', // "#bf5594"
      '#96c297': '#ee3377',
      '#64bec2': '#f05869',
      '#33bbee': '#f37e5b',
      '#3be': '#f37e5b',
      '#6199d0': '#f6a34d',
      '#9077b2': '#f9c940',
    }[color] || '#ee3377'
  );
};

module.exports = {
  suggestBaseColor,
  suggestComplementaryColor,
  getSaturation,
  makePalette,
};
