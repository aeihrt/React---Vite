import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'
import Navbar      from './components/Navbar'
import CounterApp  from './pages/CounterApp'
import ToggleApp   from './pages/ToggleApp'
import LoginForm   from './pages/LoginForm'
import PostsList   from './pages/PostsList'
import PostDetail  from './pages/PostDetail'

// "/" → kawaii login screen (no navbar)
// "/counter", "/toggle", "/login-form", "/posts", "/posts/:id" → main app with navbar

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/counter"    element={<CounterApp />} />
                <Route path="/toggle"     element={<ToggleApp />} />
                <Route path="/login-form" element={<LoginForm />} />
                <Route path="/posts"      element={<PostsList />} />
                <Route path="/posts/:id"  element={<PostDetail />} />
                <Route path="*"           element={<Navigate to="/counter" replace />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
