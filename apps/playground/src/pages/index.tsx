import { useState, useEffect } from 'react'
import Link from 'next/link'

function FloatingMenu() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 88)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', href: '/', internal: true },
    { label: 'Components', href: '/components', internal: true },
    { label: 'GitHub', href: 'https://github.com/putriwulandr/putix-react', internal: false },
    { label: 'npm', href: 'https://www.npmjs.com/package/putix-react', internal: false },
  ]

  if (!visible) return null

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
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
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: '#171717',
            color: '#fff',
            padding: '4px 10px',
            borderRadius: '9999px',
            whiteSpace: 'nowrap',
          }}>
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
                border: '1px solid #e5e5e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontFamily: "'Courier New', monospace", fontSize: '0.6rem', color: '#171717' }}>↗</span>
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
                border: '1px solid #e5e5e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontFamily: "'Courier New', monospace", fontSize: '0.6rem', color: '#171717' }}>↗</span>
            </a>
          )}
        </div>
      ))}

      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          overflow: 'hidden',
          boxShadow: open
            ? '0 0 0 3px #ffd6e0, 0 4px 20px rgba(0,0,0,0.12)'
            : '0 0 0 2px #ebebeb, 0 4px 12px rgba(0,0,0,0.08)',
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-10 py-6">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="/putix-ui-logos.png"
            alt="putix logo"
            style={{ width: "auto", height: "100px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-center gap-8">
          <Link
            href="/components"
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: "#181818",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Components
          </Link>
          <a
            href="https://github.com/putriwulandr/putix-react"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: "#181818",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/putix-react"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: "#181818",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            npm
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-32">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid #e5e5e5",
            borderRadius: "9999px",
            padding: "6px 16px",
            marginBottom: "2.5rem",
          }}
        >
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", fontFamily: "'Courier New', monospace", color: "#181818", textTransform: "uppercase" }}>
            — v0.0.1 now available —
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: "700",
            lineHeight: "1.1",
            color: "#171717",
            maxWidth: "780px",
            marginBottom: "1.5rem",
          }}
        >
          A UI library{" "}
          <span style={{ color: "#aaa", fontStyle: "italic" }}>crafted</span>
          <br />
          for modern React apps.
        </h1>

        <p
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.85rem",
            lineHeight: "1.8",
            color: "#181818",
            maxWidth: "480px",
            marginBottom: "3rem",
            letterSpacing: "0.02em",
          }}
        >
          Soft pastel aesthetics. TypeScript ready.
          <br />
          Built for Next.js and React projects.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link
            href="/components"
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: "#171717",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Browse Components
          </Link>
          <a
            href="https://github.com/putriwulandr/putix-react"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: "transparent",
              color: "#171717",
              padding: "12px 28px",
              borderRadius: "9999px",
              border: "1px solid #e5e5e5",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#aaa")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#e5e5e5")}
          >
            View on GitHub
          </a>
        </div>

        <div
          style={{
            marginTop: "3rem",
            background: "#fafafa",
            border: "1px solid #ebebeb",
            borderRadius: "12px",
            padding: "14px 24px",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.8rem", color: "#181818" }}>$</span>
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.8rem", color: "#181818" }}>
            pnpm add putix-react
          </span>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-4xl mx-auto px-10 pb-32">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1px",
            background: "#ebebeb",
            border: "1px solid #ebebeb",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {[
            { icon: "🌸", title: "Soft Aesthetics", desc: "Pastel color palette designed to be easy on the eyes and beautiful by default." },
            { icon: "⚡", title: "Tailwind Ready", desc: "Built with CSS variables, fully customizable to fit any design system." },
            { icon: "🔷", title: "TypeScript First", desc: "Full type support out of the box. Autocomplete and type safety included." },
            { icon: "📦", title: "Lightweight", desc: "No unnecessary dependencies. Ships only what you need." },
          ].map((f) => (
            <div key={f.title} style={{ background: "#fff", padding: "2rem" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "1rem", fontWeight: "600", color: "#171717", marginBottom: "0.5rem" }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.72rem", lineHeight: "1.7", color: "#888", letterSpacing: "0.01em" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick start */}
      <section className="relative z-10 max-w-4xl mx-auto px-10 pb-32">
        <div className="mb-10 text-center">
          <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#2b2b2b", textTransform: "uppercase" }}>
            — Quick Start —
          </span>
        </div>
        <div style={{ background: "#fafafa", border: "1px solid #ebebeb", borderRadius: "16px", overflow: "hidden" }}>
          <div style={{ padding: "12px 20px", borderBottom: "1px solid #ebebeb", display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffcdd2" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffe0b2" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#c8e6c9" }} />
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", color: "#323232", marginLeft: "8px", letterSpacing: "0.08em" }}>
              page.tsx
            </span>
          </div>
          <pre style={{ fontFamily: "'Courier New', monospace", fontSize: "0.8rem", lineHeight: "1.8", color: "#444", padding: "1.5rem 2rem", overflowX: "auto", margin: 0 }}>
{`import { Button, Card, Badge } from 'putix-react'

export default function App() {
  return (
    <Card>
      <Badge variant="soft">New</Badge>
      <h1>Hello from putix 🌸</h1>
      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  )
}`}
          </pre>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 text-center pb-10"
        style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#000000", textTransform: "uppercase" }}
      >
        by Putri Wulandari &nbsp;·&nbsp; MIT License
      </footer>

      <FloatingMenu />
    </main>
  )
}