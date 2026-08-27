import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', null)
  const [daftarAkun, setDaftarAkun] = useLocalStorage('akun', [])

  function register(email, password) {
    const sudahAda = daftarAkun.find((a) => a.email === email)
    if (sudahAda) {
      return { sukses: false, pesan: 'Email sudah terdaftar' }
    }
    setDaftarAkun((prev) => [...prev, { email, password }])
    setUser({ email })
    return { sukses: true }
  }

  function login(email, password) {
    const akun = daftarAkun.find((a) => a.email === email && a.password === password)
    if (!akun) {
      return { sukses: false, pesan: 'Email atau password salah' }
    }
    setUser({ email })
    return { sukses: true }
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}