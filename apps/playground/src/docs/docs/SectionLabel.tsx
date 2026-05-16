export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '0.62rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#9aa2b4',
        marginBottom: '1rem',
      }}
    >
      — {children} —
    </p>
  )
}
