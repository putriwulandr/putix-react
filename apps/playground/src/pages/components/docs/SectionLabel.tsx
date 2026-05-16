export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'Courier New', monospace",
        fontSize: '0.62rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#bbb',
        marginBottom: '1rem',
      }}
    >
      — {children} —
    </p>
  )
}
