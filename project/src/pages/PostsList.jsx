// React Hooks Practice
import { useState, useEffect } from 'react'
import PostCard  from '../components/PostCard'
import PageShell from '../components/PageShell'
import { fetchPosts } from '../utils/api'

export default function PostsList() {
  const [theories, setTheories] = useState([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(null)

  // useEffect
  useEffect(() => {
    fetchPosts(9)
      .then(data  => { setTheories(data); setLoading(false) })
      .catch(err  => { setError(err.message); setLoading(false) })
  }, [])

  return (
    <PageShell
      badge="Lab 2"
      badgeColor="#dcfce7"
      title="Digital Circus Fan Theories"
    >
      {loading && (
        <div style={S.center}>
          <div style={S.spinner} />
          <p style={S.loadTxt}>Fetching theories from local API…</p>
        </div>
      )}

      {error && (
        <div style={S.errBox}>
          <p style={{ fontWeight: 800, marginBottom: 6 }}>❌ Could not connect to API</p>
          <p style={{ fontSize: 12 }}>Open a second terminal and run: <code style={S.code}>npm run server</code></p>
        </div>
      )}

    {!loading && !error && (
  <div style={S.list}>
    {theories.map((theory, i) => (
      <PostCard key={theory.id} post={theory} index={i} />
    ))}
  </div>
)}
    </PageShell>
  )
}

const S = {
  center:     { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 0' },
  spinner:    { width: 36, height: 36, border: '3px solid #e9d5ff', borderTop: '3px solid #7c3aed', borderRadius: '50%', animation: 'spin 0.8s linear infinite' },
  loadTxt:    { marginTop: 14, fontSize: 14, fontWeight: 700, color: '#4b5563' },
  errBox:     { background: '#fce7f3', border: '1px solid #fda4af', borderRadius: 12, padding: '16px 18px', color: '#1a1a1a' },
  code:       { background: '#f3e8ff', padding: '2px 8px', borderRadius: 6, fontFamily: 'monospace', fontSize: 12 },
  list:       { display: 'flex', flexDirection: 'column', gap: 10 },
}
