import { Button } from 'putix'

export default function Home() {
  return (
    <main style={{ padding: '2rem', display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="soft">Soft</Button>
    </main>
  )
}