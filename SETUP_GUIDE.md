# 🌸 putix — Setup Guide

Panduan lengkap setup monorepo, development, sampai deploy ke npm.

---

## 📁 Struktur Akhir

```
putix/
├── apps/
│   └── playground/          # Next.js app buat preview komponen
├── packages/
│   └── putix/               # Library utama
│       ├── src/
│       │   ├── components/
│       │   │   └── Button/
│       │   │       ├── Button.tsx
│       │   │       ├── Button.types.ts
│       │   │       └── index.ts
│       │   ├── styles/
│       │   │   └── tokens.css
│       │   └── index.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── tsup.config.ts
├── package.json             # root workspace
└── pnpm-workspace.yaml
```

---

## 🚀 Step 1 — Setup Root Workspace

Di folder root project kamu (putix/), jalankan:

```bash
pnpm init
```

Lalu edit `package.json` di root jadi seperti ini:

```json
{
  "name": "putix-monorepo",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter playground dev",
    "build": "pnpm --filter putix build",
    "build:watch": "pnpm --filter putix build --watch"
  }
}
```

Buat file `pnpm-workspace.yaml` di root:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

---

## 🚀 Step 2 — Setup Library (packages/putix)

```bash
mkdir -p packages/putix/src/components/Button
mkdir -p packages/putix/src/styles
cd packages/putix
pnpm init
```

Install dependencies library:

```bash
# di dalam packages/putix
pnpm add -D typescript tsup react react-dom @types/react @types/react-dom
```

Buat `packages/putix/package.json`:

```json
{
  "name": "putix",
  "version": "0.0.1",
  "description": "Pretty, soft, and simple UI component library",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/styles/tokens.css"
  },
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "tsup",
    "build:watch": "tsup --watch",
    "dev": "tsup --watch"
  },
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tsup": "^8.0.0",
    "typescript": "^5.0.0"
  }
}
```

Buat `packages/putix/tsup.config.ts`:

```ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
})
```

Buat `packages/putix/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 🚀 Step 3 — Buat Komponen Pertama

**`packages/putix/src/styles/tokens.css`**

```css
:root {
  /* Colors */
  --putix-color-blush: #fce7f3;
  --putix-color-petal: #fbcfe8;
  --putix-color-rose: #f9a8d4;
  --putix-color-rose-dark: #ec4899;
  --putix-color-lavender: #e9d5ff;
  --putix-color-sky: #bae6fd;
  --putix-color-mint: #bbf7d0;
  --putix-color-cream: #fef9c3;

  /* Neutral */
  --putix-color-white: #ffffff;
  --putix-color-gray-100: #f3f4f6;
  --putix-color-gray-400: #9ca3af;
  --putix-color-gray-700: #374151;

  /* Typography */
  --putix-font-sans: 'Inter', system-ui, sans-serif;
  --putix-font-size-sm: 0.875rem;
  --putix-font-size-md: 1rem;
  --putix-font-size-lg: 1.125rem;

  /* Spacing */
  --putix-radius-sm: 0.375rem;
  --putix-radius-md: 0.625rem;
  --putix-radius-lg: 1rem;
  --putix-radius-full: 9999px;

  /* Shadow */
  --putix-shadow-sm: 0 1px 4px rgba(249, 168, 212, 0.15);
  --putix-shadow-md: 0 4px 16px rgba(249, 168, 212, 0.2);
}
```

**`packages/putix/src/components/Button/Button.types.ts`**

```ts
export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'soft'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  children: React.ReactNode
}
```

**`packages/putix/src/components/Button/Button.tsx`**

```tsx
import React from 'react'
import type { ButtonProps } from './Button.types'

const baseStyles: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--putix-font-sans)',
  fontWeight: 500,
  cursor: 'pointer',
  border: 'none',
  transition: 'all 0.2s ease',
  borderRadius: 'var(--putix-radius-full)',
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    background: 'var(--putix-color-rose)',
    color: 'white',
    boxShadow: 'var(--putix-shadow-sm)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--putix-color-rose-dark)',
    border: '1.5px solid var(--putix-color-rose)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--putix-color-rose-dark)',
  },
  soft: {
    background: 'var(--putix-color-blush)',
    color: 'var(--putix-color-rose-dark)',
  },
}

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: '6px 14px', fontSize: 'var(--putix-font-size-sm)' },
  md: { padding: '10px 20px', fontSize: 'var(--putix-font-size-md)' },
  lg: { padding: '14px 28px', fontSize: 'var(--putix-font-size-lg)' },
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  style,
  disabled,
  ...props
}) => {
  return (
    <button
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sizeStyles[size],
        opacity: disabled || loading ? 0.6 : 1,
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        ...style,
      }}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? '...' : children}
    </button>
  )
}
```

**`packages/putix/src/components/Button/index.ts`**

```ts
export { Button } from './Button'
export type { ButtonProps } from './Button.types'
```

**`packages/putix/src/index.ts`**

```ts
// Components
export { Button } from './components/Button'

// Types
export type { ButtonProps } from './components/Button'
```

---

## 🚀 Step 4 — Setup Playground (apps/playground)

Balik ke root folder:

```bash
cd ../../   # balik ke root putix/
mkdir apps
cd apps
pnpm create next-app playground --typescript --tailwind --eslint --app --src-dir
cd playground
```

Tambahkan putix sebagai dependency lokal di `apps/playground/package.json`:

```json
{
  "dependencies": {
    "putix": "workspace:*"
  }
}
```

Lalu di root folder, install semua:

```bash
cd ../../   # balik ke root
pnpm install
```

---

## 🚀 Step 5 — Import styles & Coba Komponen

Di `apps/playground/src/app/layout.tsx`, tambahkan import CSS putix:

```tsx
import 'putix/styles'   // import CSS variables putix
import './globals.css'
```

Lalu coba di `apps/playground/src/app/page.tsx`:

```tsx
import { Button } from 'putix'

export default function Home() {
  return (
    <main style={{ padding: '2rem', display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="soft">Soft</Button>
    </main>
  )
}
```

---

## 🚀 Step 6 — Jalankan Dev

Buka **dua terminal**:

**Terminal 1** — build library dalam watch mode:
```bash
pnpm --filter putix dev
```

**Terminal 2** — jalankan playground:
```bash
pnpm --filter playground dev
```

Atau dari root cukup:
```bash
pnpm dev
```

Buka `http://localhost:3000` dan komponen putix langsung keliatan! 🌸

---

## 📦 Deploy ke npm

### Persiapan

**1. Buat akun di npmjs.com** kalau belum punya.

**2. Login di terminal:**
```bash
npm login
```

**3. Pastikan nama package belum dipakai:**
```bash
npm search putix
```

Kalau sudah ada yang pakai nama `putix`, bisa pakai scoped package:
```json
{
  "name": "@username/putix"
}
```

### Build & Publish

**4. Build library dulu:**
```bash
pnpm --filter putix build
```

**5. Cek isi yang akan di-publish:**
```bash
cd packages/putix
npm pack --dry-run
```

Pastikan yang masuk ke npm hanya folder `dist/` dan file penting.

**6. Publish!**
```bash
npm publish
```

Kalau pakai scoped name (`@username/putix`):
```bash
npm publish --access public
```

### Update Version

Setiap mau publish versi baru, update dulu versinya:

```bash
cd packages/putix

# patch: 0.0.1 → 0.0.2 (bugfix)
npm version patch

# minor: 0.0.1 → 0.1.0 (fitur baru)
npm version minor

# major: 0.0.1 → 1.0.0 (breaking change)
npm version major
```

Lalu build dan publish lagi.

---

## 🔁 Workflow Sehari-hari

```bash
# 1. Develop komponen baru di packages/putix/src/components/
# 2. Export di packages/putix/src/index.ts
# 3. Preview di apps/playground/src/app/page.tsx
# 4. Kalau sudah oke, build & publish

pnpm --filter putix build
cd packages/putix && npm version patch && npm publish
```

---

## ✅ Checklist Sebelum Publish

- [ ] Semua komponen sudah di-export di `src/index.ts`
- [ ] TypeScript types sudah lengkap
- [ ] Sudah test di playground
- [ ] Version sudah di-update
- [ ] `dist/` sudah ter-generate (jalankan `pnpm build`)
- [ ] README.md sudah up to date

---

*Made with 🌸 by Putri*
