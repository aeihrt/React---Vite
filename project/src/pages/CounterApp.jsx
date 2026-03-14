// Counter App
import { useState } from 'react'
import PageShell from '../components/PageShell'

export default function CounterApp() {
  const [count, setCount] = useState(0)

  const numColor = count > 0 ? '#15803d' : count < 0 ? '#b91c1c' : '#1a1a1a'

  return (
    <PageShell
      badge="Lab 1"
      badgeColor="#fce7f3"
      title="Counter App"
    >

      <div style={S.box}>
        <div style={{ ...S.num, color: numColor }}>{count}</div>
      </div>

      <div style={S.row}>
        <button style={{ ...S.btn, ...S.red   }} onClick={() => setCount(c => c - 1)}>− Decrement</button>
        <button style={{ ...S.btn, ...S.ghost }} onClick={() => setCount(0)}>Reset</button>
        <button style={{ ...S.btn, ...S.green }} onClick={() => setCount(c => c + 1)}>+ Increment</button>
      </div>

    </PageShell>
  )
}

const S = {
  box: {
    background: '#fff', border: '1.5px solid #e9d5ff',
    borderRadius: 20, padding: '40px 32px',
    textAlign: 'center', marginBottom: 24,
  },
  num: {
    fontSize: 100, fontWeight: 900, letterSpacing: '-4px',
    lineHeight: 1, transition: 'color 0.2s',
    fontVariantNumeric: 'tabular-nums',
  },
  row:   { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 },
  btn:   { padding: '11px 28px', borderRadius: 100, border: 'none', fontWeight: 800, fontSize: 14, cursor: 'pointer', color: '#1a1a1a' },
  red:   { background: '#fecdd3' },
  green: { background: '#bbf7d0' },
  ghost: { background: '#f3e8ff', border: '1.5px solid #e9d5ff' },
  hint:  { textAlign: 'center', fontSize: 13, color: '#4b5563', fontWeight: 600 },
}
