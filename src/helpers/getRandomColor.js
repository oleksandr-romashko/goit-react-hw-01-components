/**
 * Generates random hex color value.
 * E.g.: #f754a4
 * @returns {String} Color in hex format.
 */
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/**
 * Returns any one color from an array of provided colors.
 * @param {String[]} colors Array of color string values.
 * @returns {String} String representation of color value.
 */
export function getRandomApprovedColor(colors) {
  const colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
}
