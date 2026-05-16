import type { Config } from 'tailwindcss'
import { colors } from '../../packages/putix/src/colors'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // include putix package source so Tailwind scans component classes too
    '../../packages/putix/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Base ──────────────────────────────
        blue: colors.blue,
        pink: colors.pink,
        neutral: colors.neutral,

        // ── Semantic ──────────────────────────
        success: colors.success,
        warning: colors.warning,
        danger: colors.danger,
        info: colors.info,

        // ── Extended ──────────────────────────
        violet: colors.violet,
        teal: colors.teal,
        amber: colors.amber,
        orange: colors.orange,
        rose: colors.rose,
        sky: colors.sky,
        lime: colors.lime,
        indigo: colors.indigo,
      },
    },
  },
  plugins: [],
}

export default config
