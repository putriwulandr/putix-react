import { useState } from 'react'

interface CodeBlockProps {
  code: string
  filename?: string
}

export function CodeBlock({ code, filename = 'example.tsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      style={{
        background: '#f5f6f8',
        border: '1px solid #e2e5ec',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '10px 16px',
          borderBottom: '1px solid #e2e5ec',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffa8cf' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#bddeff' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#99f6e4' }} />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.62rem',
              color: '#9aa2b4',
              marginLeft: '8px',
              letterSpacing: '0.08em',
            }}
          >
            {filename}
          </span>
        </div>
        <button
          onClick={handleCopy}
          title={copied ? 'Copied!' : 'Copy'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px',
            color: copied ? '#5a8df5' : '#c8ceda',
            display: 'flex',
            alignItems: 'center',
            transition: 'color 0.2s',
          }}
        >
          {copied ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>

      {/* Code */}
      <pre
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.78rem',
          lineHeight: '1.8',
          color: '#424b5f',
          padding: '1.25rem 1.5rem',
          overflowX: 'auto',
          margin: 0,
        }}
      >
        {code}
      </pre>
    </div>
  )
}
