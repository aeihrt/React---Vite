// Lab 4 – Navbar | pastel kawaii, exact hover colors from reference image 2
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/counter',    label: '🔢 Counter',    hoverBg: '#fce7f3', activeBg: '#fce7f3' },
  { to: '/toggle',     label: '👁 Toggle',     hoverBg: '#dbeafe', activeBg: '#dbeafe' },
  { to: '/login-form', label: '📝 Login Form', hoverBg: '#fef9c3', activeBg: '#fef9c3' },
  { to: '/posts',      label: '📋 Posts',      hoverBg: '#dcfce7', activeBg: '#dcfce7' },
]

function NavTab({ to, label, hoverBg, activeBg }) {
  const [hovered, setHovered] = useState(false)

  return (
    <li>
      <NavLink
        to={to}
        style={({ isActive }) => ({
          display: 'block',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: 13,
          color: '#1a1a1a',
          padding: '6px 16px',
          borderRadius: 100,
          transition: 'background 0.15s',
          background: isActive
            ? activeBg
            : hovered
            ? hoverBg
            : 'transparent',
        })}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </NavLink>
    </li>
  )
}

export default function Navbar() {
  return (
    <nav style={S.nav}>
      <span style={S.brand}>✦ CSE317L</span>
      <ul style={S.list}>
        {LINKS.map((link) => (
          <NavTab key={link.to} {...link} />
        ))}
      </ul>
    </nav>
  )
}

const S = {
  nav: {
    position: 'sticky', top: 0, zIndex: 999,
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1.5px solid #f3e8ff',
    display: 'flex', alignItems: 'center',
    padding: '0 28px', height: 58, gap: 20,
    boxShadow: '0 1px 12px rgba(200,160,255,0.1)',
  },
  brand: {
    fontWeight: 900, fontSize: 17,
    color: '#1a1a1a', letterSpacing: '-0.5px', flexShrink: 0,
  },
  list: {
    listStyle: 'none', display: 'flex',
    alignItems: 'center', gap: 4, flexWrap: 'wrap',
  },
}
