export type FontSize = "small" | "base" | "large";

export const FONT_SIZE_SEQUENCE: readonly FontSize[];
export const FONT_SIZE_CLASSES: Record<FontSize, string>;
export function increaseFontSize(current: FontSize): FontSize;
export function decreaseFontSize(current: FontSize): FontSize;
export function storageToFontSize(value: string | null | undefined): FontSize;
export function storageToContrast(value: string | null | undefined): boolean;
export function contrastToStorage(enabled: boolean): "on" | "off";
