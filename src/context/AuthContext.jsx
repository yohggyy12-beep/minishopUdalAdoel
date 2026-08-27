import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const AuthContext = createContext()

// Minggu 14: AuthContext menyimpan status login pengguna (disederhanakan,
// tanpa backend sungguhan - cocok untuk latihan)
export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('user', null)

  function login(email) {
    setUser({ email })
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
