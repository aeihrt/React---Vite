import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { fetchPostById } from '../utils/api'

export default function PostDetail() {
  const { id } = useParams()

  const [theory,  setTheory]  = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchPostById(id)
      .then(data => { setTheory(data); setLoading(false) })
      .catch(err => { setError(err.message); setLoading(false) })
  }, [id])

  if (loading) return (
    <PageShell badge="Lab 4" badgeColor="#fef9c3" title="Loading Theory…" subtitle="">
      <div style={S.center}>
        <div style={S.spinner} />
        <p style={S.loadTxt}>Fetching theory #{id}…</p>
      </div>
    </PageShell>
  )

  if (error) return (
    <PageShell badge="Lab 4" badgeColor="#fef9c3" title="Not Found" subtitle="">
      <div style={S.errBox}>{error}</div>
      <Link to="/posts" style={S.backBtn}>← Back to Theories</Link>
    </PageShell>
  )

  return (
    <PageShell
      badge="Lab 4"
      badgeColor="#fef9c3"
      title={theory.title}
    >
      <Link to="/posts" style={S.backBtn}>← Back to Theories</Link>

      <div style={S.card}>

        {/* Theory header */}
        <div style={S.header}>
          <div style={{ ...S.avatar, background: theory.tagColor }}>
            {theory.emoji}
          </div>
          <div>
            <div style={S.tagRow}>
              <span style={{ ...S.tag, background: theory.tagColor }}>{theory.tag}</span>
              <span style={S.character}>{theory.character}</span>
              <span style={S.ep}>📺 {theory.episode}</span>
            </div>
            <h2 style={S.theoryTitle}>{theory.title}</h2>
            <div style={S.stats}>
              <span>❤️ {theory.likes.toLocaleString()} likes</span>
              <span>💬 {theory.comments} comments</span>
            </div>
          </div>
        </div>

        <div style={S.divider} />

        <p style={S.summary}>{theory.summary}</p>

        <div style={S.theoryBox}>
          <h3 style={S.sectionTitle}>📖 Full Theory</h3>
          <p style={S.body}>{theory.body}</p>
        </div>


      </div>
    </PageShell>
  )
}

const S = {
  center:      { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 0' },
  spinner:     { width: 36, height: 36, border: '3px solid #e9d5ff', borderTop: '3px solid #7c3aed', borderRadius: '50%', animation: 'spin 0.8s linear infinite' },
  loadTxt:     { marginTop: 14, fontSize: 14, fontWeight: 700, color: '#4b5563' },
  errBox:      { background: '#fce7f3', border: '1px solid #fda4af', borderRadius: 12, padding: '12px 18px', color: '#1a1a1a', fontWeight: 700, marginBottom: 14 },
  backBtn:     { display: 'inline-block', marginBottom: 18, fontSize: 13, fontWeight: 800, color: '#1a1a1a', textDecoration: 'none', background: '#f3e8ff', padding: '7px 20px', borderRadius: 100 },
  card:        { background: '#fff', border: '1.5px solid #e9d5ff', borderRadius: 20, padding: 28 },
  header:      { display: 'flex', gap: 16, marginBottom: 18, alignItems: 'flex-start' },
  avatar:      { width: 56, height: 56, borderRadius: 14, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 },
  tagRow:      { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 6, alignItems: 'center' },
  tag:         { fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 20, color: '#1a1a1a' },
  character:   { fontSize: 12, fontWeight: 700, color: '#7c3aed' },
  ep:          { fontSize: 11, fontWeight: 600, color: '#9ca3af' },
  theoryTitle: { fontSize: 20, fontWeight: 900, color: '#1a1a1a', marginBottom: 8, lineHeight: 1.3 },
  stats:       { display: 'flex', gap: 16, fontSize: 12, fontWeight: 700, color: '#6b7280' },
  divider:     { height: 1, background: '#f3f4f6', margin: '0 0 16px' },
  summary:     { fontSize: 14, fontWeight: 700, color: '#374151', marginBottom: 18, lineHeight: 1.6, fontStyle: 'italic' },
  theoryBox:   { background: 'linear-gradient(135deg,#fdf4ff,#eff6ff)', border: '1.5px solid #e9d5ff', borderRadius: 14, padding: '18px 20px', marginBottom: 20 },
  sectionTitle:{ fontSize: 13, fontWeight: 800, color: '#1a1a1a', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.05em' },
  body:        { fontSize: 14, color: '#374151', fontWeight: 600, lineHeight: 1.8 },
  chipRow:     { display: 'flex', flexWrap: 'wrap', gap: 8, borderTop: '1px solid #f3f4f6', paddingTop: 16 },
  chip:        { background: '#f3e8ff', color: '#1a1a1a', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 8, fontFamily: 'monospace' },
}
