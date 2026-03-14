// Lab 2 – Hooks Practice | useState · useEffect · fetch API · display list
import { useState, useEffect } from 'react'
import PostCard  from '../components/PostCard'
import PageShell from '../components/PageShell'
import { fetchPosts } from '../utils/api'

export default function PostsList() {
  const [posts,   setPosts]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  // useEffect — runs once on mount, fetches from JSONPlaceholder
  useEffect(() => {
    fetchPosts(9)
      .then(data  => { setPosts(data); setLoading(false) })
      .catch(err  => { setError(err.message); setLoading(false) })
  }, [])

  return (
    <PageShell
      badge="Lab 2"
      badgeColor="#dcfce7"
      title="Posts from API"
      subtitle="useState · useEffect · fetch · JSONPlaceholder"
    >
      {/* Loading */}
      {loading && (
        <div style={S.center}>
          <div style={S.spinner} />
          <p style={S.loadTxt}>Fetching posts from API…</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={S.errBox}>❌ {error}</div>
      )}

      {/* Content — two-column layout inspired by reference image 2 */}
      {!loading && !error && (
        <div style={S.layout}>

          {/* Left — post cards list */}
          <div style={S.list}>
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>

          {/* Right — summary panel */}
          <aside style={S.panel}>
            <p style={S.panelLabel}>Overview</p>
            <p style={S.panelNum}>{posts.length}</p>
            <p style={S.panelSub}>posts loaded</p>

            {[
              { color:'#fce7f3', icon:'📋', name:'JSONPlaceholder', val:'API'   },
              { color:'#ede9fe', icon:'🪝', name:'useEffect',       val:'hook'  },
              { color:'#dbeafe', icon:'✦',  name:'useState',        val:'hook'  },
              { color:'#dcfce7', icon:'🔗', name:'React Router',    val:'Lab 4' },
            ].map(r => (
              <div key={r.name} style={S.acctRow}>
                <div style={{ ...S.acctDot, background: r.color }}>{r.icon}</div>
                <span style={S.acctName}>{r.name}</span>
                <span style={S.acctVal}>{r.val}</span>
              </div>
            ))}
          </aside>
        </div>
      )}
    </PageShell>
  )
}

const S = {
  center:   { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 0' },
  spinner:  { width: 36, height: 36, border: '3px solid #e9d5ff', borderTop: '3px solid #7c3aed', borderRadius: '50%', animation: 'spin 0.8s linear infinite' },
  loadTxt:  { marginTop: 14, fontSize: 14, fontWeight: 700, color: '#4b5563' },
  errBox:   { background: '#fce7f3', border: '1px solid #fda4af', borderRadius: 12, padding: '12px 18px', color: '#1a1a1a', fontWeight: 700 },
  layout:   { display: 'grid', gridTemplateColumns: '1fr 230px', gap: 16, alignItems: 'start' },
  list:     { display: 'flex', flexDirection: 'column', gap: 10 },
  panel:    { background: '#fff', border: '1.5px solid #e9d5ff', borderRadius: 18, padding: '20px 18px' },
  panelLabel:{ fontSize: 11, fontWeight: 800, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 4 },
  panelNum: { fontSize: 34, fontWeight: 900, color: '#1a1a1a', letterSpacing: '-1px', marginBottom: 2 },
  panelSub: { fontSize: 12, fontWeight: 600, color: '#6b7280', marginBottom: 14 },
  acctRow:  { display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0', borderTop: '1px solid #f3f4f6' },
  acctDot:  { width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 },
  acctName: { fontSize: 12, fontWeight: 700, color: '#1a1a1a', flex: 1 },
  acctVal:  { fontSize: 12, fontWeight: 700, color: '#6b7280' },
}
