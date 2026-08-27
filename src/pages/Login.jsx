import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Button from '../components/Button'

// Minggu 13: Form Login dengan validasi (email, password)
function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.email.includes('@')) {
      setError('Email tidak valid')
      return
    }
    if (form.password.length < 6) {
      setError('Password minimal 6 karakter')
      return
    }
    setError('')
    login(form.email)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border rounded-md px-3 py-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border rounded-md px-3 py-2 w-full"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full">Login</Button>
      <p className="text-sm text-gray-500">
        Belum punya akun? <Link to="/register" className="text-blue-600">Daftar</Link>
      </p>
    </form>
  )
}

export default Login
