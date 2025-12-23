import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// eslint-config-next is still published as "legacy" config.
// Use FlatCompat so ESLint v9 can consume it from `eslint.config.mjs`.
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
    rules: {
      // Many components currently use `any` for API payloads; keep it visible
      // but don't fail builds on it.
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
