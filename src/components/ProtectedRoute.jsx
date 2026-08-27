import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// Minggu 14: melindungi halaman agar hanya bisa diakses setelah login
function ProtectedRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

export default ProtectedRoute
