import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Exact positions/sizes/colors matching the reference image
const STARS = [
  // teal star top-left
  { top:'13%', left:'6%',   size:44, color:'#5ee7e7', rot:0   },
  // yellow stars scattered
  { top:'7%',  left:'18%',  size:28, color:'#fde68a', rot:15  },
  { top:'9%',  right:'8%',  size:52, color:'#fde68a', rot:8   },
  { top:'22%', right:'4%',  size:34, color:'#fde68a', rot:25  },
  { top:'48%', right:'1%',  size:20, color:'#fde68a', rot:12  },
  { bottom:'10%', left:'8%', size:40, color:'#f9a8d4', rot:5 },
  { bottom:'22%', right:'5%',size:32, color:'#fde68a', rot:20 },
  { bottom:'6%',  left:'28%',size:22, color:'#fde68a', rot:30 },
  { top:'62%', left:'3%',   size:18, color:'#c4b5fd', rot:40  },
  { top:'35%', right:'6%',  size:16, color:'#fde68a', rot:50  },
]

// SVG 5-pointed star path
function StarShape({ size, color, style }) {
  // 5-point star polygon points
  const r = size / 2
  const points = Array.from({ length: 5 }, (_, i) => {
    const outer = (i * 4 * Math.PI) / 5 - Math.PI / 2
    const inner = outer + (2 * Math.PI) / 10
    const ri = r * 0.42
    return [
      r + r * Math.cos(outer), r + r * Math.sin(outer),
      r + ri * Math.cos(inner), r + ri * Math.sin(inner),
    ]
  }).flat()
  const poly = `${points[0]},${points[1]} ${points[2]},${points[3]} ${points[4]},${points[5]} ${points[6]},${points[7]} ${points[8]},${points[9]} ${points[10]},${points[11]} ${points[12]},${points[13]} ${points[14]},${points[15]} ${points[16]},${points[17]} ${points[18]},${points[19]}`

  return (
    <svg
      width={size} height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ position: 'absolute', ...style }}
    >
      <polygon points={poly} fill={color} />
    </svg>
  )
}

export default function LoginScreen() {
  const [form, setForm]     = useState({ username: '', password: '' })
  const [error, setError]   = useState('')
  const [hover, setHover]   = useState(false)
  const navigate            = useNavigate()

  const onChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.username || !form.password) {
      setError('please fill in all fields!')
      return
    }
    navigate('/counter')
  }

  return (
    <div style={S.page}>
      {/* Scattered 5-point stars */}
      {STARS.map((st, i) => (
        <StarShape
          key={i}
          size={st.size}
          color={st.color}
          style={{
            top: st.top, left: st.left,
            right: st.right, bottom: st.bottom,
            transform: `rotate(${st.rot}deg)`,
            opacity: 0.92,
          }}
        />
      ))}

      <h1 style={S.title}>🌸HELLO...💫</h1>

      {/* Frosted glass card */}
      <form style={S.card} onSubmit={onSubmit}>
        <p style={S.cardTitle}>welcome back</p>

        <div style={S.field}>
          <input
            style={S.input}
            type="text"
            name="username"
            placeholder="enter your username"
            value={form.username}
            onChange={onChange}
            autoComplete="off"
          />
          <div style={S.underline} />
        </div>

        <div style={S.field}>
          <input
            style={S.input}
            type="password"
            name="password"
            placeholder="enter your password"
            value={form.password}
            onChange={onChange}
          />
          <div style={S.underline} />
        </div>

        {error && <p style={S.err}>{error}</p>}

        <button
          type="submit"
          style={{
            ...S.btn,
            background: hover ? '#f472b6' : '#f9a8d4',
            transform: hover ? 'scale(1.04)' : 'scale(1)',
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          log in.
        </button>
      </form>

      {/* Little bear bottom-right of card */}
      <div style={S.bear}>🐻</div>
    </div>
  )
}

const S = {
  page: {
    minHeight: '100vh',
    // Exact gradient from image: periwinkle blue → medium purple → dusty pink/mauve
    background: 'linear-gradient(160deg, #7b9cdb 0%, #8b7fcc 25%, #a78fcc 50%, #c99ab8 75%, #d4a0b5 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontSize: 52,
    fontWeight: 900,
    fontStyle: 'italic',
    color: '#ff8fab',
    letterSpacing: '-1px',
    marginBottom: 32,
    WebkitTextStroke: '2px #fff',
    textShadow: '3px 3px 0 rgba(255,100,150,0.25)',
    position: 'relative',
    zIndex: 1,
  },
  card: {
    background: 'rgba(255,255,255,0.38)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1.5px solid rgba(255,255,255,0.6)',
    borderRadius: 22,
    padding: '38px 44px 32px',
    width: 340,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 800,
    color: '#2d1b4e',
    marginBottom: 28,
    letterSpacing: '-0.3px',
  },
  field: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    padding: '8px 2px',
    fontSize: 14,
    color: '#2d1b4e',
    fontWeight: 600,
    fontFamily: 'Nunito, sans-serif',
  },
  underline: {
    height: '1.5px',
    background: 'rgba(80, 50, 150, 0.28)',
    borderRadius: 2,
  },
  err: {
    fontSize: 12,
    color: '#9f1239',
    fontWeight: 700,
    marginBottom: 4,
    textAlign: 'center',
  },
  btn: {
    marginTop: 20,
    border: 'none',
    color: '#7c1d51',
    fontWeight: 900,
    fontSize: 16,
    padding: '13px 56px',
    borderRadius: 100,
    cursor: 'pointer',
    fontFamily: 'Nunito, sans-serif',
    letterSpacing: '0.3px',
    transition: 'background 0.18s, transform 0.15s',
  },
  bear: {
    fontSize: 36,
    marginTop: 14,
    position: 'relative',
    zIndex: 1,
  },
}
