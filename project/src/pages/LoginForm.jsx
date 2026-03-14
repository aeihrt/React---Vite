// SimpleLogin Form
import { useState } from 'react'
import PageShell from '../components/PageShell'

export default function LoginForm() {
  const [form, setForm]       = useState({ username: '', password: '' })
  const [submitted, setSubmit] = useState(false)
  const [error, setError]     = useState('')

  const onChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.username || !form.password) { setError('Please fill in all fields.'); return }
    setSubmit(true)
  }

  const onReset = () => {
    setForm({ username: '', password: '' })
    setSubmit(false)
    setError('')
  }

  return (
    <PageShell
      badge="Lab 1"
      badgeColor="#fef9c3"
      title="Simple Login Form"
      subtitle="useState · controlled components · event handling"
    >
      <div style={S.wrap}>
        {submitted ? (
          /* ── Success state ── */
          <div style={S.successCard}>
            <div style={S.successEmoji}>🌸</div>
            <h2 style={S.successTitle}>Welcome, {form.username}!</h2>
            <p style={S.successSub}>You have successfully logged in.</p>
            <button style={S.logoutBtn} onClick={onReset}>log out</button>
          </div>
        ) : (
          /* ── Form state ── */
          <form style={S.card} onSubmit={onSubmit}>
            <div style={S.field}>
              <label style={S.label} htmlFor="lf-user">Username</label>
              <input
                id="lf-user" name="username" type="text"
                style={S.input} placeholder="Enter your username"
                value={form.username} onChange={onChange}
              />
            </div>

            <div style={S.field}>
              <label style={S.label} htmlFor="lf-pass">Password</label>
              <input
                id="lf-pass" name="password" type="password"
                style={S.input} placeholder="Enter your password"
                value={form.password} onChange={onChange}
              />
            </div>

            {error && <div style={S.errBox}>{error}</div>}

            <button type="submit" style={S.submitBtn}>log in.</button>

            <p style={S.hint}>
              Controlled inputs — each keystroke updates <code>useState</code>
            </p>
          </form>
        )}
      </div>
    </PageShell>
  )
}

const S = {
  wrap:        { maxWidth: 420, margin: '0 auto' },
  card:        { background: '#fff', border: '1.5px solid #e9d5ff', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 16 },
  field:       { display: 'flex', flexDirection: 'column', gap: 6 },
  label:       { fontSize: 12, fontWeight: 800, color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.05em' },
  input:       { padding: '10px 14px', borderRadius: 12, border: '1.5px solid #e9d5ff', background: '#fdf4ff', fontSize: 14, fontWeight: 600, color: '#1a1a1a', outline: 'none' },
  errBox:      { background: '#fce7f3', border: '1px solid #fda4af', borderRadius: 10, padding: '8px 14px', fontSize: 13, fontWeight: 700, color: '#1a1a1a' },
  submitBtn:   { background: '#f9a8d4', color: '#1a1a1a', border: 'none', padding: '12px', borderRadius: 100, fontWeight: 900, fontSize: 15, cursor: 'pointer' },
  hint:        { textAlign: 'center', fontSize: 11, color: '#6b7280', fontWeight: 600 },
  successCard: { background: '#fff', border: '1.5px solid #bbf7d0', borderRadius: 20, padding: '44px 32px', textAlign: 'center' },
  successEmoji:{ fontSize: 52, marginBottom: 16 },
  successTitle:{ fontSize: 24, fontWeight: 900, color: '#1a1a1a', marginBottom: 6 },
  successSub:  { fontSize: 14, color: '#374151', fontWeight: 600, marginBottom: 24 },
  logoutBtn:   { background: '#dcfce7', color: '#1a1a1a', border: '1.5px solid #bbf7d0', padding: '10px 30px', borderRadius: 100, fontWeight: 800, fontSize: 14, cursor: 'pointer' },
}
