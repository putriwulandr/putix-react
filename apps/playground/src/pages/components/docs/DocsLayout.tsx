import Link from 'next/link'
import { useRouter } from 'next/router'
import { COMPONENTS } from './data'

const NAV_LINKS = [
  { label: 'Components', href: '/components' },
  { label: 'GitHub', href: 'https://github.com/putriwulandr/putix-react', external: true },
  { label: 'npm', href: 'https://www.npmjs.com/package/putix-react', external: true },
]

const STATUS_COLORS: Record<string, string> = {
  stable: '#c8e6c9',
  beta: '#ffe0b2',
  soon: '#eeeeee',
}

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const router = useRouter()

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Nav */}
      <nav
        className="relative z-10 flex items-center justify-between px-10 py-6"
        style={{ borderBottom: '1px solid #f0f0f0', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)', position: 'sticky', top: 0 }}
      >
        <Link href="/">
          <img src="/putix-ui-logos.png" alt="putix logo" style={{ height: '50px', objectFit: 'contain' }} />
        </Link>
        <div className="flex items-center gap-8">
          {NAV_LINKS.map(link =>
            link.external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={navLinkStyle}>
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

      <div style={{ display: 'flex', maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Sidebar */}
        <aside style={{ width: '200px', flexShrink: 0, padding: '2.5rem 0', position: 'sticky', top: '80px', alignSelf: 'flex-start', height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
          <p style={sidebarLabelStyle}>Sections</p>
          {[
            { label: 'Introduction', href: '/components' },
            { label: 'Installation', href: '/components#installation' },
          ].map(item => (
            <Link key={item.label} href={item.href} style={{
              ...sidebarLinkStyle,
              color: router.pathname === '/components' && item.href === '/components' ? '#171717' : '#888',
              fontWeight: router.pathname === '/components' && item.href === '/components' ? 600 : 400,
            }}>
              {item.label}
            </Link>
          ))}

          <p style={{ ...sidebarLabelStyle, marginTop: '1.5rem' }}>Components</p>
          {COMPONENTS.map(comp => (
            <Link
              key={comp.slug}
              href={`/components/${comp.slug}`}
              style={{
                ...sidebarLinkStyle,
                color: router.asPath === `/components/${comp.slug}` ? '#171717' : '#888',
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
                <span style={{
                  fontSize: '0.55rem',
                  padding: '1px 6px',
                  borderRadius: '9999px',
                  background: STATUS_COLORS[comp.status],
                  color: '#555',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                }}>
                  {comp.status}
                </span>
              )}
            </Link>
          ))}
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: '3rem 0 6rem 4rem', minWidth: 0 }}>
          {children}
        </main>
      </div>
    </div>
  )
}

const navLinkStyle: React.CSSProperties = {
  fontFamily: "'Courier New', monospace",
  fontSize: '0.7rem',
  letterSpacing: '0.12em',
  color: '#181818',
  textTransform: 'uppercase',
  textDecoration: 'none',
}

const sidebarLabelStyle: React.CSSProperties = {
  fontFamily: "'Courier New', monospace",
  fontSize: '0.6rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#bbb',
  marginBottom: '0.5rem',
}

const sidebarLinkStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: "'Courier New', monospace",
  fontSize: '0.75rem',
  textDecoration: 'none',
  padding: '5px 0',
  transition: 'color 0.15s',
}