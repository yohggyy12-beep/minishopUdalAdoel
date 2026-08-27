import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Button from '../components/Button'

// Minggu 13: Form Registrasi dengan validasi + konfirmasi password
function Register() {
  const [form, setForm] = useState({ email: '', password: '', konfirmasi: '' })
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.email.includes('@')) return setError('Email tidak valid')
    if (form.password.length < 6) return setError('Password minimal 6 karakter')
    if (form.password !== form.konfirmasi) return setError('Konfirmasi password tidak cocok')

    const hasil = register(form.email, form.password)
    if (!hasil.sukses) {
      setError(hasil.pesan)
      return
    }
    setError('')
    login(form.email)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm mt-10">
      <h2 className="text-xl font-bold">Registrasi</h2>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border border-gray-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border border-gray-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Konfirmasi Password"
        value={form.konfirmasi}
        onChange={(e) => setForm({ ...form, konfirmasi: e.target.value })}
        className="border border-gray-200 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full">Daftar</Button>
      <p className="text-sm text-gray-500">
        Sudah punya akun? <Link to="/login" className="text-amber-600">Login</Link>
      </p>
    </form>
  )
}

export default Register
