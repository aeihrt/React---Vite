import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const LINKS = [
  { to: '/counter',    label: 'Counter App',    hoverBg: '#fce7f3', activeBg: '#fce7f3' },
  { to: '/toggle',     label: 'Toggle',     hoverBg: '#dbeafe', activeBg: '#dbeafe' },
  { to: '/login-form', label: 'Simple Login Form', hoverBg: '#fef9c3', activeBg: '#fef9c3' },
  { to: '/posts',      label: 'Posts',      hoverBg: '#dcfce7', activeBg: '#dcfce7' },
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
  const [logoutHovered, setLogoutHovered] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => navigate('/')

  return (
    <nav style={S.nav}>
      <span style={S.brand}>✦ My Activities</span>

      <ul style={S.list}>
        {LINKS.map((link) => (
          <NavTab key={link.to} {...link} />
        ))}
      </ul>

      <button
        style={{
          ...S.logoutBtn,
          background: logoutHovered ? '#fecdd3' : '#fce7f3',
          transform: logoutHovered ? 'scale(1.04)' : 'scale(1)',
        }}
        onMouseEnter={() => setLogoutHovered(true)}
        onMouseLeave={() => setLogoutHovered(false)}
        onClick={handleLogout}
      >
        Logout
      </button>
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
    flex: 1,                         
  },
  logoutBtn: {
    marginLeft: 'auto',
    flexShrink: 0,
    border: 'none',
    padding: '7px 18px',
    borderRadius: 100,
    fontWeight: 800,
    fontSize: 13,
    cursor: 'pointer',
    color: '#1a1a1a',
    fontFamily: 'Nunito, sans-serif',
    transition: 'background 0.15s, transform 0.15s',
  },
}