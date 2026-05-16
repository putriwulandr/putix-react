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
    background: 'var(--putix-pink-500)',
    color: 'white',
    border: '1.5px solid transparent',
    boxShadow: '0 1px 4px rgba(224, 69, 122, 0.2)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--putix-pink-700)',
    border: '1.5px solid var(--putix-pink-500)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--putix-pink-700)',
    border: '1.5px solid transparent',
  },
  soft: {
    background: 'var(--putix-pink-50)',
    color: 'var(--putix-pink-700)',
    border: '1.5px solid transparent',
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
