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