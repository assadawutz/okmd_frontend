# FF2S Coding Standards

## Shell Scripting
- **NO Backticks:** Never use backticks for command substitution. Always use `$()`.
  - ❌ `VAR=`command``
  - ✅ `VAR=$(command)`

## CSS / Tailwind
- **NO Pixels:** Avoid using arbitrary pixel values in Tailwind classes. Use the design system spacing scale.
  - ❌ `p-[15px]`, `m-[10px]`, `w-[350px]`
  - ✅ `p-4`, `m-2`, `w-80` (or closest standard value)

## React / TypeScript
- **Functional Components:** Use functional components with hooks.
- **Named Exports:** Prefer named exports over default exports for components.
- **Lucide Icons:** Use `lucide-react` for all icons.
  - `import { IconName } from 'lucide-react';`
- **File Naming:**
  - Components: `PascalCase.tsx`
  - Utilities: `camelCase.ts`
  - Constants/Types: `PascalCase.ts` or `camelCase.ts` depending on content.

## Imports
- Organize imports:
  1. Built-in / React
  2. External libraries (Next.js, Lucide, etc.)
  3. Internal Components (`@/components/...`)
  4. Internal Utils/Hooks/Types (`@/lib/...`, `@/types/...`)
  5. Styles
