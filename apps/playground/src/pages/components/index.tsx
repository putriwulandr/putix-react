import Link from 'next/link'
import { CodeBlock } from '@/docs/docs/CodeBlocks'
import { DocsLayout } from '@/docs/docs/DocsLayout'
import { SectionLabel } from '@/docs/docs/SectionLabel'
import { COMPONENTS } from '@/docs/docs/data'

export default function ComponentsPage() {
  return (
    <DocsLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {/* Header */}
        <div>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: '#1e2436',
              marginBottom: '0.75rem',
            }}
          >
            Components
          </h1>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.78rem',
              color: '#6b758a',
              lineHeight: '1.8',
              maxWidth: '520px',
            }}
          >
            A collection of reusable components built with soft pastel aesthetics. TypeScript ready,
            zero dependencies.
          </p>
        </div>

        {/* Installation */}
        <section id="installation">
          <SectionLabel>Installation</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <CodeBlock filename="terminal" code="pnpm add putix-react" />
            <CodeBlock filename="terminal" code="npm install putix-react" />
            <CodeBlock filename="terminal" code="yarn add putix-react" />
          </div>
        </section>

        {/* Setup */}
        <section>
          <SectionLabel>Setup</SectionLabel>
          <CodeBlock
            filename="_app.tsx"
            code={`import 'putix-react/styles'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}`}
          />
        </section>

        {/* Usage */}
        <section>
          <SectionLabel>Usage</SectionLabel>
          <CodeBlock
            filename="page.tsx"
            code={`import { Button } from 'putix-react'

export default function Page() {
  return <Button variant="primary">Hello putix 🌸</Button>
}`}
          />
        </section>

        {/* Component list */}
        <section>
          <SectionLabel>All Components</SectionLabel>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '1px',
              background: '#e2e5ec',
              border: '1px solid #e2e5ec',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {COMPONENTS.map((comp) =>
              comp.status === 'soon' ? (
                <div key={comp.slug} style={gridItemStyle(false)}>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.78rem',
                      color: '#c8ceda',
                    }}
                  >
                    {comp.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.55rem',
                      color: '#c8ceda',
                      letterSpacing: '0.1em',
                    }}
                  >
                    soon
                  </span>
                </div>
              ) : (
                <Link key={comp.slug} href={`/components/${comp.slug}`} style={gridItemStyle(true)}>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.78rem',
                      color: '#1e2436',
                    }}
                  >
                    {comp.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.6rem',
                      color: '#5a8df5',
                    }}
                  >
                    →
                  </span>
                </Link>
              )
            )}
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}

function gridItemStyle(clickable: boolean): React.CSSProperties {
  return {
    background: '#fff',
    padding: '1.25rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',
    transition: clickable ? 'background 0.15s' : undefined,
    cursor: clickable ? 'pointer' : 'default',
  }
}
