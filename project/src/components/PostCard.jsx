import { Link } from 'react-router-dom'

export default function PostCard({ post: theory, index = 0 }) {
  return (
    <div style={S.card}>
      <div style={S.row}>

        {/* Character emoji avatar */}
        <div style={{ ...S.avatar, background: theory.tagColor }}>
          {theory.emoji}
        </div>

        <div style={S.info}>
          <div style={S.topRow}>
            <span style={{ ...S.tag, background: theory.tagColor }}>
              {theory.tag}
            </span>
            <span style={S.character}>{theory.character}</span>
          </div>
          <p style={S.title}>{theory.title}</p>
          <p style={S.summary}>{theory.summary}</p>
        </div>

        <div style={S.right}>
          <span style={S.num}>#{theory.id}</span>
          <span style={S.likes}>❤️ {theory.likes.toLocaleString()}</span>
        </div>
      </div>

      <div style={S.footer}>
        <span style={S.ep}>📺 {theory.episode}</span>
        <Link to={`/posts/${theory.id}`} style={S.link}>Read Theory →</Link>
      </div>
    </div>
  )
}

const S = {
  card:      { background: '#fff', border: '1.5px solid #e9d5ff', borderRadius: 16, padding: '14px 16px' },
  row:       { display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 },
  avatar:    { width: 48, height: 48, borderRadius: 12, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 },
  info:      { flex: 1, minWidth: 0 },
  topRow:    { display: 'flex', gap: 6, marginBottom: 5, flexWrap: 'wrap', alignItems: 'center' },
  tag:       { fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 20, color: '#1a1a1a' },
  character: { fontSize: 11, fontWeight: 700, color: '#7c3aed' },
  title:     { fontSize: 14, fontWeight: 800, color: '#1a1a1a', marginBottom: 4 },
  summary:   { fontSize: 11, color: '#6b7280', fontWeight: 500, lineHeight: 1.5 },
  right:     { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 },
  num:       { fontSize: 10, fontWeight: 800, background: '#f3e8ff', color: '#1a1a1a', padding: '2px 8px', borderRadius: 20 },
  likes:     { fontSize: 11, fontWeight: 700, color: '#1a1a1a' },
  footer:    { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  ep:        { fontSize: 11, fontWeight: 600, color: '#9ca3af' },
  link:      { fontSize: 12, fontWeight: 800, color: '#1a1a1a', textDecoration: 'none', background: '#f3e8ff', padding: '5px 16px', borderRadius: 100 },
}