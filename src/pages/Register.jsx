import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Button from '../components/Button'

// Minggu 13: Form Registrasi dengan validasi + konfirmasi password
function Register() {
  const [form, setForm] = useState({ email: '', password: '', konfirmasi: '' })
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.email.includes('@')) return setError('Email tidak valid')
    if (form.password.length < 6) return setError('Password minimal 6 karakter')
    if (form.password !== form.konfirmasi) return setError('Konfirmasi password tidak cocok')
    setError('')
    login(form.email)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
      <h2 className="text-xl font-bold">Registrasi</h2>
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
      <input
        type="password"
        placeholder="Konfirmasi Password"
        value={form.konfirmasi}
        onChange={(e) => setForm({ ...form, konfirmasi: e.target.value })}
        className="border rounded-md px-3 py-2 w-full"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full">Daftar</Button>
      <p className="text-sm text-gray-500">
        Sudah punya akun? <Link to="/login" className="text-blue-600">Login</Link>
      </p>
    </form>
  )
}

export default Register
