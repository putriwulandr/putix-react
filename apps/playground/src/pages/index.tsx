'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from 'putix-react'

function FloatingMenu() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    const handleScroll = () => {
      if (isMounted.current) setVisible(window.scrollY > 88)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      isMounted.current = false
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!visible) return null

  const menuItems = [
    { label: 'Home', href: '/', internal: true },
    { label: 'Components', href: '/components', internal: true },
    { label: 'GitHub', href: 'https://github.com/putriwulandr/putix-react', internal: false },
    { label: 'npm', href: 'https://www.npmjs.com/package/putix-react', internal: false },
  ]

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {menuItems.map((item, i) => (
        <div
          key={item.label}
          style={{
            transform: open ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.8)',
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'auto' : 'none',
            transition: `all 0.2s ease ${open ? i * 0.05 : (menuItems.length - i) * 0.03}s`,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: '#1e2436',
              color: '#fff',
              padding: '4px 10px',
              borderRadius: '9999px',
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </span>
          {item.internal ? (
            <Link
              href={item.href}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#fff',
                border: '1px solid #e2e5ec',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: '0.6rem', color: '#1e2436' }}>↗</span>
            </Link>
          ) : (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#fff',
                border: '1px solid #e2e5ec',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: '0.6rem', color: '#1e2436' }}>↗</span>
            </a>
          )}
        </div>
      ))}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          overflow: 'hidden',
          boxShadow: open
            ? '0 0 0 3px #bddeff, 0 4px 20px rgba(0,0,0,0.12)'
            : '0 0 0 2px #e2e5ec, 0 4px 12px rgba(0,0,0,0.08)',
          transition: 'box-shadow 0.2s ease',
          background: '#fff',
        }}
      >
        <img
          src="/putix-icons.png"
          alt="putix"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        />
      </button>
    </div>
  )
}

const principles = [
  {
    icon: '🌸',
    title: 'Soft by default',
    desc: "Every color, every shadow, every radius is chosen to feel gentle. We believe beautiful UI doesn't have to be aggressive.",
  },
  {
    icon: '🎯',
    title: 'Opinionated but flexible',
    desc: 'Putix has a clear aesthetic direction. But every token is a CSS variable — override anything, anytime.',
  },
  {
    icon: '✦',
    title: 'Less is more',
    desc: 'No bloat. No unnecessary abstractions. Just clean, composable components that get out of your way.',
  },
  {
    icon: '💅',
    title: 'Crafted with care',
    desc: 'Every component is built with attention to detail — spacing, typography, states, and accessibility all considered.',
  },
]

const comparisons = [
  {
    feature: 'Aesthetic direction',
    putix: 'Soft pastel',
    shadcn: 'Neutral / system',
    mui: 'Material Design',
    chakra: 'Minimal',
  },
  {
    feature: 'Styling approach',
    putix: 'CSS variables',
    shadcn: 'Tailwind',
    mui: 'Emotion / SX',
    chakra: 'Style props',
  },
  {
    feature: 'Bundle size',
    putix: 'Tiny',
    shadcn: 'Per component',
    mui: 'Large',
    chakra: 'Medium',
  },
  { feature: 'TypeScript', putix: '✓', shadcn: '✓', mui: '✓', chakra: '✓' },
  { feature: 'Custom tokens', putix: '✓', shadcn: 'Partial', mui: 'Theme only', chakra: '✓' },
  {
    feature: 'Opinionated look',
    putix: '✓ Intentional',
    shadcn: '✗ Neutral',
    mui: '✓ Material',
    chakra: '✗ Neutral',
  },
]

const roadmap = [
  { status: 'stable', label: 'Stable', items: ['Button', 'Badge (coming)', 'tokens.css'] },
  { status: 'beta', label: 'In Progress', items: ['Card', 'Input', 'Modal'] },
  {
    status: 'soon',
    label: 'Coming Soon',
    items: ['Dropdown', 'Tooltip', 'Avatar', 'Toast', 'Tabs'],
  },
]

const statusStyle: Record<string, { bg: string; color: string; border: string }> = {
  stable: { bg: '#edfaf3', color: '#0f5a2e', border: '#c1edd6' },
  beta: { bg: '#ebf4ff', color: '#1260c4', border: '#bddeff' },
  soon: { bg: '#f5f6f8', color: '#6b758a', border: '#e2e5ec' },
}

const steps = [
  {
    step: '01',
    title: 'Install',
    desc: 'Add putix-react to your project.',
    code: 'pnpm add putix-react',
  },
  {
    step: '02',
    title: 'Import styles',
    desc: 'Import CSS tokens in your global stylesheet.',
    code: "import 'putix-react/styles'",
  },
  {
    step: '03',
    title: 'Use components',
    desc: 'Import and use in your React app.',
    code: "import { Button } from 'putix-react'",
  },
]

function StepCard({ s }: { s: { step: string; title: string; desc: string; code: string } }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(s.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="pstep"
      style={{
        background: '#fff',
        border: '1px solid #e2e5ec',
        borderRadius: '16px',
        padding: '1.75rem',
      }}
    >
      <div
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: '2rem',
          fontWeight: 700,
          color: '#bddeff',
          marginBottom: '0.75rem',
        }}
      >
        {s.step}
      </div>
      <h3
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: '1rem',
          fontWeight: 600,
          color: '#1e2436',
          marginBottom: '0.5rem',
        }}
      >
        {s.title}
      </h3>
      <p style={{ fontSize: '0.7rem', lineHeight: 1.7, color: '#6b758a', marginBottom: '1rem' }}>
        {s.desc}
      </p>
      <div
        className="pterm"
        style={{
          background: '#f5f6f8',
          border: '1px solid #e2e5ec',
          borderRadius: '8px',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            overflow: 'hidden',
            minWidth: 0,
          }}
        >
          <span
            style={{
              color: '#5a8df5',
              fontSize: '0.68rem',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            $
          </span>
          <span
            style={{
              fontSize: '0.68rem',
              color: '#424b5f',
              fontFamily: "'DM Mono', monospace",
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {s.code}
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
            flexShrink: 0,
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
    </div>
  )
}

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Mono:wght@300;400&display=swap');
        * { box-sizing: border-box; }
        .pnl:hover { color: #5a8df5 !important; }
        .pbp:hover { opacity: 0.85; }
        .pbo:hover { border-color: #90c8ff !important; color: #5a8df5 !important; }
        .pfc { transition: transform 0.2s, box-shadow 0.2s; }
        .pfc:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(224,69,122,0.08); }
        .pstep { transition: border-color 0.2s; }
        .pstep:hover { border-color: #90c8ff !important; }
        tr:hover td { background: #fff8fb !important; }
        tr { transition: background 0.15s; }
      `}</style>

      <main style={{ minHeight: '100vh', background: '#fff', fontFamily: "'DM Mono', monospace" }}>
        {/* Grid bg */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Nav */}
        <nav
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 2.5rem',
            borderBottom: '1px solid #f5f6f8',
          }}
        >
          <img
            src="/putix-ui-logos.png"
            alt="putix"
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
          />
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { label: 'Components', href: '/components', internal: true },
              {
                label: 'GitHub',
                href: 'https://github.com/putriwulandr/putix-react',
                internal: false,
              },
              { label: 'npm', href: 'https://www.npmjs.com/package/putix-react', internal: false },
            ].map((item) =>
              item.internal ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="pnl"
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    color: '#9aa2b4',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pnl"
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    color: '#9aa2b4',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </nav>

        {/* ── HERO ── */}
        <section
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '5rem 2rem 4rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ebf4ff',
              border: '1px solid #bddeff',
              borderRadius: '9999px',
              padding: '5px 16px',
              marginBottom: '2rem',
            }}
          >
            <div style={{ width: 6, height: 6, background: '#5a8df5', borderRadius: '50%' }} />
            <span
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                color: '#3d6fd4',
                textTransform: 'uppercase',
              }}
            >
              v0.0.1 now available
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#1e2436',
              maxWidth: '700px',
              marginBottom: '1.25rem',
            }}
          >
            Build beautiful <em style={{ color: '#5a8df5' }}>React</em> interfaces, faster.
          </h1>
          <p
            style={{
              fontSize: '0.8rem',
              lineHeight: 1.9,
              color: '#6b758a',
              maxWidth: '420px',
              marginBottom: '2.5rem',
            }}
          >
            Soft pastel aesthetics. TypeScript ready.
            <br />
            Built for Next.js and React projects.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
            <Link
              href="/components"
              className="pbp"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: '#5a8df5',
                color: '#fff',
                padding: '12px 26px',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
            >
              Browse Components
            </Link>
            <a
              href="https://github.com/putriwulandr/putix-react"
              target="_blank"
              rel="noopener noreferrer"
              className="pbo"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'transparent',
                color: '#6b758a',
                padding: '12px 26px',
                borderRadius: '9999px',
                border: '1px solid #e2e5ec',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              View on GitHub
            </a>
          </div>
        </section>

        {/* ── STATS ── */}
        <section
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 2rem 5rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              background: '#e2e5ec',
              border: '1px solid #e2e5ec',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            {[
              { value: '5+', label: 'Components' },
              { value: '100%', label: 'TypeScript' },
              { value: '0', label: 'Dependencies' },
              { value: 'MIT', label: 'License' },
            ].map((s) => (
              <div
                key={s.label}
                style={{ background: '#fff', padding: '1.75rem', textAlign: 'center' }}
              >
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#5a8df5',
                    marginBottom: '0.25rem',
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.12em',
                    color: '#9aa2b4',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DESIGN PRINCIPLES ── */}
        <section
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 2rem 5rem',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                color: '#9aa2b4',
                textTransform: 'uppercase',
              }}
            >
              — Design Principles —
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {principles.map((p) => (
              <div
                key={p.title}
                className="pfc"
                style={{
                  background: '#fff',
                  border: '1px solid #e2e5ec',
                  borderRadius: '16px',
                  padding: '1.75rem',
                }}
              >
                <div style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{p.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1e2436',
                    marginBottom: '0.5rem',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.7rem', lineHeight: 1.8, color: '#6b758a', margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPARISON ── */}
        <section
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 2rem 5rem',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                color: '#9aa2b4',
                textTransform: 'uppercase',
              }}
            >
              — How Putix Compares —
            </span>
          </div>
          <div style={{ border: '1px solid #e2e5ec', borderRadius: '16px', overflow: 'hidden' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: "'DM Mono', monospace",
              }}
            >
              <thead>
                <tr style={{ background: '#f5f6f8', borderBottom: '1px solid #e2e5ec' }}>
                  <th
                    style={{
                      padding: '12px 16px',
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      color: '#9aa2b4',
                      textTransform: 'uppercase',
                      textAlign: 'left',
                      fontWeight: 400,
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: '12px 16px',
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      color: '#5a8df5',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      fontWeight: 600,
                    }}
                  >
                    Putix ✦
                  </th>
                  <th
                    style={{
                      padding: '12px 16px',
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      color: '#9aa2b4',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      fontWeight: 400,
                    }}
                  >
                    shadcn
                  </th>
                  <th
                    style={{
                      padding: '12px 16px',
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      color: '#9aa2b4',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      fontWeight: 400,
                    }}
                  >
                    MUI
                  </th>
                  <th
                    style={{
                      padding: '12px 16px',
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      color: '#9aa2b4',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      fontWeight: 400,
                    }}
                  >
                    Chakra
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: i < comparisons.length - 1 ? '1px solid #f5f6f8' : 'none',
                    }}
                  >
                    <td
                      style={{
                        padding: '12px 16px',
                        fontSize: '0.7rem',
                        color: '#424b5f',
                        background: '#fff',
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: '12px 16px',
                        fontSize: '0.7rem',
                        color: '#5a8df5',
                        textAlign: 'center',
                        fontWeight: 600,
                        background: '#ebf4ff',
                      }}
                    >
                      {row.putix}
                    </td>
                    <td
                      style={{
                        padding: '12px 16px',
                        fontSize: '0.7rem',
                        color: '#9aa2b4',
                        textAlign: 'center',
                        background: '#fff',
                      }}
                    >
                      {row.shadcn}
                    </td>
                    <td
                      style={{
                        padding: '12px 16px',
                        fontSize: '0.7rem',
                        color: '#9aa2b4',
                        textAlign: 'center',
                        background: '#fff',
                      }}
                    >
                      {row.mui}
                    </td>
                    <td
                      style={{
                        padding: '12px 16px',
                        fontSize: '0.7rem',
                        color: '#9aa2b4',
                        textAlign: 'center',
                        background: '#fff',
                      }}
                    >
                      {row.chakra}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── ROADMAP ── */}
        <section
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 2rem 5rem',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                color: '#9aa2b4',
                textTransform: 'uppercase',
              }}
            >
              — Roadmap —
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {roadmap.map((r) => (
              <div
                key={r.status}
                style={{
                  background: '#fff',
                  border: '1px solid #e2e5ec',
                  borderRadius: '16px',
                  padding: '1.75rem',
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.58rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    background: statusStyle[r.status].bg,
                    color: statusStyle[r.status].color,
                    border: `1px solid ${statusStyle[r.status].border}`,
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    display: 'inline-block',
                    marginBottom: '1.25rem',
                  }}
                >
                  {r.label}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {r.items.map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: statusStyle[r.status].color,
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: '0.72rem', color: '#424b5f' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 2rem 5rem',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                color: '#9aa2b4',
                textTransform: 'uppercase',
              }}
            >
              — How It Works —
            </span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {steps.map((s) => (
              <StepCard key={s.step} s={s} />
            ))}
          </div>
        </section>

        {/* ── GET INVOLVED ── */}
        <section
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 2rem 6rem',
          }}
        >
          <div
            style={{
              background: '#ebf4ff',
              border: '1px solid #bddeff',
              borderRadius: '20px',
              padding: '3rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌸</div>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#1e2436',
                marginBottom: '0.75rem',
              }}
            >
              Help make Putix <em style={{ color: '#5a8df5' }}>better.</em>
            </h2>
            <p
              style={{
                fontSize: '0.75rem',
                lineHeight: 1.9,
                color: '#6b758a',
                maxWidth: '460px',
                margin: '0 auto 2rem',
              }}
            >
              Putix is open source and always improving. Whether you want to report a bug, suggest a
              component, or contribute code — every bit helps.
            </p>
            <div
              style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <a
                href="https://github.com/putriwulandr/putix-react"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: '#5a8df5',
                  color: '#fff',
                  padding: '12px 26px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                }}
              >
                ✦ Star on GitHub
              </a>
              <a
                href="https://github.com/putriwulandr/putix-react/issues"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: '#fff',
                  color: '#3d6fd4',
                  padding: '12px 26px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  border: '1px solid #90c8ff',
                }}
              >
                Report an Issue
              </a>
              <a
                href="https://github.com/putriwulandr/putix-react/pulls"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: '#fff',
                  color: '#3d6fd4',
                  padding: '12px 26px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  border: '1px solid #90c8ff',
                }}
              >
                Contribute
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            paddingBottom: '2.5rem',
            borderTop: '1px solid #f5f6f8',
            paddingTop: '2rem',
          }}
        >
          <p
            style={{
              fontSize: '0.62rem',
              letterSpacing: '0.12em',
              color: '#c8ceda',
              textTransform: 'uppercase',
            }}
          >
            by Putri Wulandari &nbsp;·&nbsp; MIT License
          </p>
        </footer>

        <FloatingMenu />
      </main>
    </>
  )
}
