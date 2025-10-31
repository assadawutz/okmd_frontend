import test from "node:test";
import assert from "node:assert/strict";
import {
  FONT_SIZE_SEQUENCE,
  contrastToStorage,
  decreaseFontSize,
  increaseFontSize,
  storageToContrast,
  storageToFontSize,
} from "../components/layout/fontSettingsLogic.mjs";

test("increaseFontSize progresses until the maximum", () => {
  assert.equal(increaseFontSize("base"), "large");
  assert.equal(increaseFontSize("large"), "large");
});

test("decreaseFontSize reduces until the minimum", () => {
  assert.equal(decreaseFontSize("base"), "small");
  assert.equal(decreaseFontSize("small"), "small");
});

test("storageToFontSize falls back to base when value is invalid", () => {
  assert.equal(storageToFontSize("invalid"), "base");
  assert.equal(storageToFontSize(null), "base");
});

test("storageToContrast reads persisted values", () => {
  assert.equal(storageToContrast("on"), true);
  assert.equal(storageToContrast("off"), false);
});

test("contrastToStorage writes stable tokens", () => {
  assert.equal(contrastToStorage(true), "on");
  assert.equal(contrastToStorage(false), "off");
});

test("FONT_SIZE_SEQUENCE exposes three ordered options", () => {
  assert.deepEqual(FONT_SIZE_SEQUENCE, ["small", "base", "large"]);
});
