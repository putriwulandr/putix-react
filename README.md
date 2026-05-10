<div align="center">

# 🌸 putix - react

**Pretty, soft, and simple.**  
A lightweight React UI component library built with Tailwind CSS,  
featuring soft pastel aesthetics for modern web projects.

[![npm version](https://img.shields.io/npm/v/putix?color=f9a8d4&style=flat-square)](https://www.npmjs.com/package/putix)
[![license](https://img.shields.io/npm/l/putix?color=f9a8d4&style=flat-square)](./LICENSE)
[![built with tailwind](https://img.shields.io/badge/built%20with-Tailwind%20CSS-f9a8d4?style=flat-square)](https://tailwindcss.com)
[![typescript](https://img.shields.io/badge/TypeScript-ready-f9a8d4?style=flat-square)](https://www.typescriptlang.org)

</div>

---

## ✨ Features

- 🌷 **Soft pastel color palette** — easy on the eyes, beautiful by default
- ⚡ **Built on Tailwind CSS** — fully customizable and utility-first
- 🧩 **TypeScript ready** — full type support out of the box
- 📦 **Lightweight** — no unnecessary dependencies
- ♿ **Accessible** — components follow WAI-ARIA guidelines
- 🎨 **Themeable** — easily extend or override default styles

---

## 📦 Installation

```bash
# using pnpm (recommended)
pnpm add putix

# using npm
npm install putix

# using yarn
yarn add putix
```

> **Prerequisites:** Make sure your project already has React and Tailwind CSS installed.

---

## 🚀 Quick Start

**1. Add putix to your Tailwind config**

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/putix/**/*.{js,ts,jsx,tsx}", // 👈 add this
  ],
}
```

**2. Import and use components**

```tsx
import { Button, Card, Badge } from 'putix'

export default function App() {
  return (
    <Card>
      <h1>Hello from putix 🌸</h1>
      <Badge variant="pink">New</Badge>
      <Button variant="primary">Click me</Button>
    </Card>
  )
}
```

---

## 🧩 Components

| Component | Description | Status |
|-----------|-------------|--------|
| `Button` | Clickable button with variants | ✅ Ready |
| `Card` | Container with soft shadow | ✅ Ready |
| `Badge` | Small label/tag element | ✅ Ready |
| `Input` | Text input field | ✅ Ready |
| `Avatar` | User profile image | ✅ Ready |
| `Modal` | Dialog / popup component | 🚧 Coming soon |
| `Tooltip` | Hover info text | 🚧 Coming soon |
| `Dropdown` | Select menu | 🚧 Coming soon |

---

## 🎨 Color Palette

putix uses a soft, curated pastel palette:

| Name | Hex | Preview |
|------|-----|---------|
| Blush | `#fce7f3` | 🩷 |
| Petal | `#fbcfe8` | 💗 |
| Rose | `#f9a8d4` | 🌸 |
| Lavender | `#e9d5ff` | 💜 |
| Sky | `#bae6fd` | 🩵 |
| Mint | `#bbf7d0` | 💚 |
| Cream | `#fef9c3` | 🌼 |

---

## 📖 Usage Examples

### Button

```tsx
import { Button } from 'putix'

// Variants
<Button variant="primary">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="soft">Soft</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With loading state
<Button loading>Loading...</Button>
```

### Card

```tsx
import { Card } from 'putix'

<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>
    <p>Card content goes here.</p>
  </Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

### Input

```tsx
import { Input } from 'putix'

<Input
  label="Email"
  placeholder="hello@example.com"
  type="email"
/>

// With error state
<Input
  label="Username"
  error="Username is already taken"
/>
```

---

## 🗂️ Project Structure

```
putix/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   └── index.ts
│   │   ├── Card/
│   │   ├── Badge/
│   │   └── index.ts       # Export all components
│   ├── styles/
│   │   └── globals.css
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Local Development

```bash
# Clone the repo
git clone https://github.com/yourusername/putix.git
cd putix

# Install dependencies
pnpm install

# Start development
pnpm dev

# Build the library
pnpm build

# Run tests
pnpm test
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork this repository
2. Create your branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request 🌸

---

## 📄 License

MIT License © 2026 [Putri](https://github.com/yourusername)

---

<div align="center">
  Made with 🌸 by Putri &nbsp;·&nbsp; <a href="https://github.com/yourusername/putix">GitHub</a>
</div>
