/**
 * Putix Design System — Color Tokens
 * Base: Blue & Pink
 * Includes: Base, Semantic, Extended palette
 *
 * Usage:
 *   import { colors } from '@putix/colors'
 *   colors.blue[500] // '#2B82EF'
 */

export const colors = {
  // ─────────────────────────────────────────
  // BASE COLORS
  // ─────────────────────────────────────────

  blue: {
    50: '#EBF4FF',
    100: '#BDDEFF',
    200: '#90C8FF',
    300: '#5AA8F7',
    500: '#2B82EF',
    700: '#1260C4',
    900: '#0A3F88',
  },

  pink: {
    50: '#FFF0F6',
    100: '#FFD0E6',
    200: '#FFA8CF',
    300: '#F5709C',
    500: '#E0457A',
    700: '#B02F5E',
    900: '#7A1940',
  },

  neutral: {
    50: '#F5F6F8',
    100: '#E2E5EC',
    200: '#C8CEDA',
    300: '#9AA2B4',
    500: '#6B758A',
    700: '#424B5F',
    900: '#1E2436',
  },

  // ─────────────────────────────────────────
  // SEMANTIC COLORS
  // ─────────────────────────────────────────

  success: {
    50: '#EDFAF3',
    100: '#C1EDD6',
    200: '#80D4A9',
    300: '#30B474',
    500: '#1A7C40',
    700: '#0F5A2E',
    900: '#063B1D',
  },

  warning: {
    50: '#FFF8E6',
    100: '#FFE8AA',
    200: '#FFCF60',
    300: '#F0A400',
    500: '#B56A00',
    700: '#7D4800',
    900: '#4D2B00',
  },

  danger: {
    50: '#FFF1F0',
    100: '#FFCAC6',
    200: '#FF9590',
    300: '#F5524A',
    500: '#C0392B',
    700: '#8B2219',
    900: '#59130E',
  },

  /** info is an alias of blue */
  info: {
    50: '#EBF4FF',
    100: '#BDDEFF',
    200: '#90C8FF',
    300: '#5AA8F7',
    500: '#2B82EF',
    700: '#1260C4',
    900: '#0A3F88',
  },

  // ─────────────────────────────────────────
  // EXTENDED PALETTE
  // ─────────────────────────────────────────

  violet: {
    50: '#F5F3FF',
    100: '#DDD6FE',
    200: '#C4B5FD',
    300: '#A78BFA',
    500: '#7C3AED',
    700: '#5B21B6',
    900: '#3B0764',
  },

  teal: {
    50: '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#2DD4BF',
    500: '#0D9488',
    700: '#0F766E',
    900: '#134E4A',
  },

  amber: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    500: '#D97706',
    700: '#92400E',
    900: '#451A03',
  },

  orange: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FB923C',
    500: '#EA580C',
    700: '#9A3412',
    900: '#431407',
  },

  rose: {
    50: '#FFF1F2',
    100: '#FFE4E6',
    200: '#FECDD3',
    300: '#FB7185',
    500: '#E11D48',
    700: '#BE185D',
    900: '#881337',
  },

  sky: {
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    300: '#38BDF8',
    500: '#0EA5E9',
    700: '#0369A1',
    900: '#0C4A6E',
  },

  lime: {
    50: '#F7FEE7',
    100: '#ECFCCB',
    200: '#D9F99D',
    300: '#86EFAC',
    500: '#4ADE80',
    700: '#15803D',
    900: '#14532D',
  },

  indigo: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#818CF8',
    500: '#6366F1',
    700: '#4338CA',
    900: '#1E1B4B',
  },
} as const

export type ColorScale = typeof colors
export type ColorName = keyof ColorScale
export type ColorShade = 50 | 100 | 200 | 300 | 500 | 700 | 900

/** Helper: get a hex value by color name + shade */
export function getColor(name: ColorName, shade: ColorShade): string {
  return colors[name][shade]
}
