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
        background: '#fafafa',
        border: '1px solid #ebebeb',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '10px 16px',
          borderBottom: '1px solid #ebebeb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffcdd2' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffe0b2' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#c8e6c9' }} />
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '0.62rem',
              color: '#aaa',
              marginLeft: '8px',
              letterSpacing: '0.08em',
            }}
          >
            {filename}
          </span>
        </div>
        <button
          onClick={handleCopy}
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: 'none',
            border: '1px solid #e5e5e5',
            borderRadius: '6px',
            padding: '3px 10px',
            cursor: 'pointer',
            color: copied ? '#4caf50' : '#aaa',
            transition: 'color 0.2s',
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '0.8rem',
          lineHeight: '1.8',
          color: '#444',
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
