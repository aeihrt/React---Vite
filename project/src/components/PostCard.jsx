// Lab 2 – reusable card  |  Lab 4 – links to /posts/:id
import { Link } from 'react-router-dom'

const PALETTE = ['#fce7f3','#ede9fe','#dbeafe','#dcfce7','#fef9c3','#ffedd5']

export default function PostCard({ post, index = 0 }) {
  const avatarBg = PALETTE[index % PALETTE.length]
  const initial  = post.title[0].toUpperCase()

  return (
    <div style={S.card}>
      <div style={S.row}>
        <div style={{ ...S.avatar, background: avatarBg }}>{initial}</div>
        <div style={S.info}>
          <p style={S.title}>{post.title}</p>
          <p style={S.body}>{post.body.slice(0, 64)}…</p>
        </div>
        <span style={S.num}>#{post.id}</span>
      </div>
      <div style={S.footer}>
        <Link to={`/posts/${post.id}`} style={S.link}>View Details →</Link>
      </div>
    </div>
  )
}

const S = {
  card: {
    background: '#fff',
    border: '1.5px solid #e9d5ff',
    borderRadius: 16, padding: '14px 16px',
  },
  row: { display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 },
  avatar: {
    width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontWeight: 900, fontSize: 15, color: '#1a1a1a',
  },
  info:  { flex: 1, minWidth: 0 },
  title: { fontSize: 13, fontWeight: 700, color: '#1a1a1a', textTransform: 'capitalize', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  body:  { fontSize: 11, color: '#6b7280', fontWeight: 500, marginTop: 2, lineHeight: 1.5 },
  num:   { fontSize: 10, fontWeight: 800, background: '#f3e8ff', color: '#1a1a1a', padding: '2px 8px', borderRadius: 20, flexShrink: 0 },
  footer: { display: 'flex', justifyContent: 'flex-end' },
  link: {
    fontSize: 12, fontWeight: 800, color: '#1a1a1a', textDecoration: 'none',
    background: '#f3e8ff', padding: '5px 16px', borderRadius: 100,
  },
}
