// Dynamic Routing
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { fetchPostById } from '../utils/api'

export default function PostDetail() {
  const { id } = useParams()   // useParams

  const [post,    setPost]    = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  // useEffect
  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchPostById(id)
      .then(data => { setPost(data); setLoading(false) })
      .catch(err => { setError(err.message); setLoading(false) })
  }, [id])

  if (loading) return (
    <PageShell badge="Lab 4" badgeColor="#fef9c3" title={`Post #${id}`} subtitle="useParams · useEffect · dynamic fetch">
      <div style={S.center}>
        <div style={S.spinner} />
        <p style={S.loadTxt}>Loading post #{id}…</p>
      </div>
    </PageShell>
  )

  if (error) return (
    <PageShell badge="Lab 4" badgeColor="#fef9c3" title="Not Found" subtitle="useParams · dynamic route">
      <div style={S.errBox}>{error}</div>
      <Link to="/posts" style={S.backBtn}>← Back to Posts</Link>
    </PageShell>
  )

  return (
    <PageShell badge="Lab 4" badgeColor="#fef9c3" title={`Post #${post.id}`} subtitle="useParams · useEffect · dynamic fetch">
      <Link to="/posts" style={S.backBtn}>← Back to Posts</Link>

      <div style={S.card}>
        <h2 style={S.postTitle}>{post.title}</h2>
        <p style={S.postBody}>{post.body}</p>


        <div style={S.chipRow}>
          <span style={S.chip}>useParams() → id = "{id}"</span>
          <span style={S.chip}>URL: /posts/{id}</span>
        </div>
      </div>
    </PageShell>
  )
}

const S = {
  center:    { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 0' },
  spinner:   { width: 36, height: 36, border: '3px solid #e9d5ff', borderTop: '3px solid #7c3aed', borderRadius: '50%', animation: 'spin 0.8s linear infinite' },
  loadTxt:   { marginTop: 14, fontSize: 14, fontWeight: 700, color: '#4b5563' },
  errBox:    { background: '#fce7f3', border: '1px solid #fda4af', borderRadius: 12, padding: '12px 18px', color: '#1a1a1a', fontWeight: 700, marginBottom: 14 },
  backBtn:   { display: 'inline-block', marginBottom: 18, fontSize: 13, fontWeight: 800, color: '#1a1a1a', textDecoration: 'none', background: '#f3e8ff', padding: '7px 20px', borderRadius: 100 },
  card:      { background: '#fff', border: '1.5px solid #e9d5ff', borderRadius: 20, padding: 28 },
  postTitle: { fontSize: 20, fontWeight: 900, color: '#1a1a1a', textTransform: 'capitalize', marginBottom: 14, lineHeight: 1.3 },
  postBody:  { fontSize: 14, color: '#374151', fontWeight: 600, lineHeight: 1.75, marginBottom: 24 },
  chipRow:   { display: 'flex', flexWrap: 'wrap', gap: 8, borderTop: '1px solid #f3f4f6', paddingTop: 16 },
  chip:      { background: '#f3e8ff', color: '#1a1a1a', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 8, fontFamily: 'monospace' },
}
