export default function PageShell({ badge, badgeColor = '#f3e8ff', title, subtitle, children }) {
  return (
    <div style={S.page}>
      <div className="fade-up" style={S.container}>
        <div style={S.header}>
          <span style={{ ...S.badge, background: badgeColor }}>{badge}</span>
          <h1 style={S.title}>{title}</h1>
          {subtitle && <p style={S.subtitle}>{subtitle}</p>}
          <div style={S.divider} />
        </div>
        {children}
      </div>
    </div>
  )
}

const S = {
  page: {
    minHeight: 'calc(100vh - 58px)',
    // Soft light mode gradient — very pale lavender to pale blue
    background: 'linear-gradient(160deg, #fdf8ff 0%, #f5f0ff 40%, #eef4ff 100%)',
    padding: '40px 24px 80px',
  },
  container: { maxWidth: 900, margin: '0 auto' },
  header:    { marginBottom: 28 },
  badge: {
    display: 'inline-block',
    fontSize: 11, fontWeight: 800,
    letterSpacing: '0.07em', textTransform: 'uppercase',
    padding: '3px 12px', borderRadius: 100,
    color: '#1a1a1a', marginBottom: 10,
  },
  title:    { fontSize: 28, fontWeight: 900, color: '#1a1a1a', letterSpacing: '-0.8px', margin: '0 0 4px' },
  subtitle: { fontSize: 13, fontWeight: 600, color: '#6b7280', margin: 0 },
  divider:  { height: 2, background: '#ede9fe', borderRadius: 2, marginTop: 18 },
}
