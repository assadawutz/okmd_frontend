export const FONT_SIZE_SEQUENCE = ["small", "base", "large"];

export const FONT_SIZE_CLASSES = {
  small: "font-scale-sm",
  base: "font-scale-base",
  large: "font-scale-lg",
};

export function increaseFontSize(current) {
  const index = FONT_SIZE_SEQUENCE.indexOf(current);
  if (index === -1) {
    return "base";
  }
  return FONT_SIZE_SEQUENCE[Math.min(index + 1, FONT_SIZE_SEQUENCE.length - 1)];
}

export function decreaseFontSize(current) {
  const index = FONT_SIZE_SEQUENCE.indexOf(current);
  if (index === -1) {
    return "base";
  }
  return FONT_SIZE_SEQUENCE[Math.max(index - 1, 0)];
}

export function storageToFontSize(value) {
  return FONT_SIZE_SEQUENCE.includes(value) ? value : "base";
}

export function storageToContrast(value) {
  return value === "on";
}

export function contrastToStorage(enabled) {
  return enabled ? "on" : "off";
}
