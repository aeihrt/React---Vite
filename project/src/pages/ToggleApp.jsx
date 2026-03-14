// Show/Hide Toggle
import { useState } from 'react'
import PageShell from '../components/PageShell'

export default function ToggleApp() {
  const [visible, setVisible] = useState(false)

  return (
    <PageShell
      badge="Lab 1"
      badgeColor="#dbeafe"
      title="Show / Hide Toggle"
      subtitle="useState · conditional rendering"
    >
      {/* Toggle button */}
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <button
          style={{
            ...S.btn,
            background: visible ? '#fecdd3' : '#bfdbfe',
          }}
          onClick={() => setVisible(v => !v)}
        >
          {visible ? '🙈 Hide Message' : '👀 Show Message'}
        </button>
      </div>

      {/* Message — always mounted, CSS transition */}
      <div style={{
        ...S.msgBox,
        opacity:        visible ? 1 : 0,
        transform:      visible ? 'translateY(0)' : 'translateY(-10px)',
        pointerEvents:  visible ? 'auto' : 'none',
      }}>
        <div style={S.msgTitle}>🎉 Hello there!</div>
        <p style={S.msgBody}>You toggled me on! Click the button again to hide me.</p>
      </div>

      <p style={S.hint}>
        State: <code>isVisible = </code>
        <strong style={{ color: visible ? '#15803d' : '#b91c1c' }}>{String(visible)}</strong>
      </p>
    </PageShell>
  )
}

const S = {
  btn: {
    padding: '12px 44px', borderRadius: 100, border: 'none',
    fontWeight: 800, fontSize: 15, cursor: 'pointer',
    color: '#1a1a1a', transition: 'background 0.2s',
  },
  msgBox: {
    background: '#fff', border: '1.5px solid #bbf7d0',
    borderRadius: 18, padding: '28px 24px',
    textAlign: 'center', maxWidth: 440,
    margin: '0 auto 24px',
    transition: 'opacity 0.25s, transform 0.25s',
  },
  msgTitle: { fontSize: 20, fontWeight: 900, color: '#1a1a1a', marginBottom: 8 },
  msgBody:  { fontSize: 14, color: '#374151', fontWeight: 600, lineHeight: 1.6 },
  hint:     { textAlign: 'center', fontSize: 13, color: '#4b5563', fontWeight: 600 },
}
