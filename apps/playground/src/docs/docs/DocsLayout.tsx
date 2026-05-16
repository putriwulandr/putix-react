import Link from 'next/link'
import { useRouter } from 'next/router'
import { COMPONENTS } from './data'

const NAV_LINKS = [
  { label: 'Components', href: '/components' },
  { label: 'GitHub', href: 'https://github.com/putriwulandr/putix-react', external: true },
  { label: 'npm', href: 'https://www.npmjs.com/package/putix-react', external: true },
]

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  stable: { bg: '#edfaf3', color: '#0f5a2e' },
  beta: { bg: '#ebf4ff', color: '#1260c4' },
  soon: { bg: '#f5f6f8', color: '#9aa2b4' },
}

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const router = useRouter()

  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: "'DM Mono', monospace" }}>
      {/* Grid background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Nav */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 2.5rem',
          borderBottom: '1px solid #e2e5ec',
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Link href="/">
          <img
            src="/putix-ui-logos.png"
            alt="putix logo"
            style={{ height: '36px', objectFit: 'contain' }}
          />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={navLinkStyle}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} style={navLinkStyle}>
                {link.label}
              </Link>
            )
          )}
        </div>
      </nav>

      <div
        style={{
          display: 'flex',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: '200px',
            flexShrink: 0,
            padding: '2.5rem 0',
            position: 'sticky',
            top: '72px',
            alignSelf: 'flex-start',
            height: 'calc(100vh - 72px)',
            overflowY: 'auto',
          }}
        >
          <p style={sidebarLabelStyle}>Sections</p>
          {[
            { label: 'Introduction', href: '/components' },
            { label: 'Installation', href: '/components#installation' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                ...sidebarLinkStyle,
                color:
                  router.pathname === '/components' && item.href === '/components'
                    ? '#1e2436'
                    : '#9aa2b4',
                fontWeight:
                  router.pathname === '/components' && item.href === '/components' ? 600 : 400,
              }}
            >
              {item.label}
            </Link>
          ))}

          <p style={{ ...sidebarLabelStyle, marginTop: '1.5rem' }}>Components</p>
          {COMPONENTS.map((comp) => (
            <Link
              key={comp.slug}
              href={`/components/${comp.slug}`}
              style={{
                ...sidebarLinkStyle,
                color: router.asPath === `/components/${comp.slug}` ? '#1e2436' : '#9aa2b4',
                fontWeight: router.asPath === `/components/${comp.slug}` ? 600 : 400,
                opacity: comp.status === 'soon' ? 0.4 : 1,
                pointerEvents: comp.status === 'soon' ? 'none' : 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {comp.name}
              {comp.status !== 'stable' && (
                <span
                  style={{
                    fontSize: '0.55rem',
                    padding: '1px 6px',
                    borderRadius: '9999px',
                    background: STATUS_COLORS[comp.status].bg,
                    color: STATUS_COLORS[comp.status].color,
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                  }}
                >
                  {comp.status}
                </span>
              )}
            </Link>
          ))}
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: '3rem 0 6rem 4rem', minWidth: 0 }}>{children}</main>
      </div>
    </div>
  )
}

const navLinkStyle: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.65rem',
  letterSpacing: '0.12em',
  color: '#9aa2b4',
  textTransform: 'uppercase',
  textDecoration: 'none',
  transition: 'color 0.15s',
}

const sidebarLabelStyle: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.6rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#c8ceda',
  marginBottom: '0.5rem',
}

const sidebarLinkStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.75rem',
  textDecoration: 'none',
  padding: '5px 0',
  transition: 'color 0.15s',
}
