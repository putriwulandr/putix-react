import { useState } from 'react'
import { Button } from 'putix-react'
import type { ButtonVariant, ButtonSize } from 'putix-react'
import { CodeBlock } from '@/docs/docs/CodeBlocks'
import { DocsLayout } from '@/docs/docs/DocsLayout'
import { SectionLabel } from '@/docs/docs/SectionLabel'

const VARIANTS: ButtonVariant[] = ['primary', 'outline', 'ghost', 'soft']
const SIZES: ButtonSize[] = ['sm', 'md', 'lg']

function PropRow({
  name,
  type,
  defaultVal,
  desc,
}: {
  name: string
  type: string
  defaultVal: string
  desc: string
}) {
  return (
    <tr>
      <td style={tdStyle}>
        <code style={codeStyle}>{name}</code>
      </td>
      <td style={tdStyle}>
        <code style={{ ...codeStyle, color: '#5a8df5', background: '#ebf4ff' }}>{type}</code>
      </td>
      <td style={tdStyle}>
        <code style={{ ...codeStyle, color: '#9aa2b4' }}>{defaultVal}</code>
      </td>
      <td
        style={{
          ...tdStyle,
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.72rem',
          color: '#6b758a',
        }}
      >
        {desc}
      </td>
    </tr>
  )
}

function Playground() {
  const [variant, setVariant] = useState<ButtonVariant>('primary')
  const [size, setSize] = useState<ButtonSize>('md')
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const code = `<Button
  variant="${variant}"
  size="${size}"${disabled ? '\n  disabled' : ''}${loading ? '\n  loading' : ''}
>
  Click me
</Button>`

  const toggleStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.68rem',
    padding: '4px 12px',
    borderRadius: '9999px',
    border: '1px solid',
    borderColor: active ? '#5a8df5' : '#e2e5ec',
    background: active ? '#5a8df5' : '#fff',
    color: active ? '#fff' : '#9aa2b4',
    cursor: 'pointer',
    transition: 'all 0.15s',
  })

  return (
    <div style={{ border: '1px solid #e2e5ec', borderRadius: '12px', overflow: 'hidden' }}>
      {/* Preview */}
      <div
        style={{
          background: '#f5f6f8',
          padding: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '130px',
          borderBottom: '1px solid #e2e5ec',
        }}
      >
        <Button variant={variant} size={size} disabled={disabled} loading={loading}>
          Click me
        </Button>
      </div>

      {/* Controls */}
      <div
        style={{
          padding: '1.5rem',
          background: '#fff',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          borderBottom: '1px solid #e2e5ec',
        }}
      >
        <div>
          <p style={controlLabelStyle}>Variant</p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {VARIANTS.map((v) => (
              <button key={v} onClick={() => setVariant(v)} style={toggleStyle(variant === v)}>
                {v}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p style={controlLabelStyle}>Size</p>
          <div style={{ display: 'flex', gap: '6px' }}>
            {SIZES.map((s) => (
              <button key={s} onClick={() => setSize(s)} style={toggleStyle(size === s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p style={controlLabelStyle}>States</p>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button onClick={() => setDisabled((d) => !d)} style={toggleStyle(disabled)}>
              disabled
            </button>
            <button onClick={() => setLoading((l) => !l)} style={toggleStyle(loading)}>
              loading
            </button>
          </div>
        </div>
      </div>

      {/* Generated code */}
      <CodeBlock code={code} filename="playground.tsx" />
    </div>
  )
}

export default function ButtonPage() {
  return (
    <DocsLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {/* Header */}
        <div>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#9aa2b4',
              marginBottom: '1rem',
            }}
          >
            Components
          </p>
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: '#1e2436',
              marginBottom: '0.5rem',
            }}
          >
            Button
          </h1>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.78rem',
              color: '#6b758a',
              lineHeight: '1.8',
            }}
          >
            Triggers an action or event. Supports multiple variants, sizes, and states.
          </p>
        </div>

        {/* Installation */}
        <section>
          <SectionLabel>Installation</SectionLabel>
          <CodeBlock filename="terminal" code="pnpm add putix-react" />
        </section>

        {/* Usage */}
        <section>
          <SectionLabel>Usage</SectionLabel>
          <CodeBlock
            filename="example.tsx"
            code={`import { Button } from 'putix-react'

export default function Example() {
  return <Button variant="primary">Click me</Button>
}`}
          />
        </section>

        {/* Variants */}
        <section>
          <SectionLabel>Variants</SectionLabel>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1px',
              border: '1px solid #e2e5ec',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {[
              { variant: 'primary', desc: 'Main action. High visual emphasis.' },
              { variant: 'outline', desc: 'Secondary action. Bordered, lower emphasis.' },
              { variant: 'ghost', desc: 'Minimal style. For toolbars or menus.' },
              { variant: 'soft', desc: 'Soft pastel fill. Gentle, low contrast.' },
            ].map(({ variant, desc }) => (
              <div
                key={variant}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem 1.5rem',
                  background: '#fff',
                  borderBottom: '1px solid #f5f6f8',
                  gap: '2rem',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.78rem',
                      color: '#1e2436',
                      marginBottom: '2px',
                    }}
                  >
                    {variant}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.68rem',
                      color: '#9aa2b4',
                    }}
                  >
                    {desc}
                  </p>
                </div>
                <Button variant={variant as ButtonVariant}>Click me</Button>
              </div>
            ))}
          </div>
        </section>

        {/* Sizes */}
        <section>
          <SectionLabel>Sizes</SectionLabel>
          <div
            style={{
              border: '1px solid #e2e5ec',
              borderRadius: '12px',
              padding: '2rem',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {SIZES.map((size) => (
              <Button key={size} variant="primary" size={size}>
                {size}
              </Button>
            ))}
          </div>
        </section>

        {/* States */}
        <section>
          <SectionLabel>States</SectionLabel>
          <div
            style={{
              border: '1px solid #e2e5ec',
              borderRadius: '12px',
              padding: '2rem',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Button variant="primary">Default</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="primary" loading>
              Loading
            </Button>
          </div>
        </section>

        {/* Playground */}
        <section>
          <SectionLabel>Playground</SectionLabel>
          <Playground />
        </section>

        {/* Props */}
        <section>
          <SectionLabel>Props</SectionLabel>
          <div style={{ border: '1px solid #e2e5ec', borderRadius: '12px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f5f6f8', borderBottom: '1px solid #e2e5ec' }}>
                  {['Prop', 'Type', 'Default', 'Description'].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: '10px 16px',
                        textAlign: 'left',
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '0.62rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#9aa2b4',
                        fontWeight: 400,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <PropRow
                  name="variant"
                  type='"primary" | "outline" | "ghost" | "soft"'
                  defaultVal='"primary"'
                  desc="Visual style of the button."
                />
                <PropRow
                  name="size"
                  type='"sm" | "md" | "lg"'
                  defaultVal='"md"'
                  desc="Size of the button."
                />
                <PropRow
                  name="disabled"
                  type="boolean"
                  defaultVal="false"
                  desc="Disables interaction."
                />
                <PropRow
                  name="loading"
                  type="boolean"
                  defaultVal="false"
                  desc="Shows a loading state."
                />
                <PropRow name="onClick" type="() => void" defaultVal="—" desc="Click handler." />
              </tbody>
            </table>
          </div>
        </section>

        {/* Reference */}
        <section>
          <SectionLabel>Reference</SectionLabel>
          <div style={{ border: '1px solid #e2e5ec', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              {
                label: 'GitHub Source',
                url: 'https://github.com/putriwulandr/putix-react/tree/main/packages/putix/src/components/Button',
              },
              { label: 'npm Package', url: 'https://www.npmjs.com/package/putix-react' },
            ].map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.5rem',
                  borderBottom: '1px solid #f5f6f8',
                  textDecoration: 'none',
                  background: '#fff',
                  transition: 'background 0.15s',
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.78rem',
                    color: '#1e2436',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#5a8df5',
                  }}
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}

const tdStyle: React.CSSProperties = {
  padding: '10px 16px',
  borderBottom: '1px solid #f5f6f8',
  verticalAlign: 'top',
}

const codeStyle: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.72rem',
  background: '#f5f6f8',
  padding: '2px 6px',
  borderRadius: '4px',
  color: '#424b5f',
}

const controlLabelStyle: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.6rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#9aa2b4',
  marginBottom: '8px',
}
