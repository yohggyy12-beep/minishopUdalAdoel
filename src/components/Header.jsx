import { Link } from 'react-router-dom'
import { useKeranjang } from '../context/KeranjangContext'
import { useAuth } from '../context/AuthContext'

function Header() {
  const { item } = useKeranjang()
  const { user, logout } = useAuth()

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-10">
      <Link to="/" className="text-xl font-bold text-blue-600">MiniShop</Link>
      <nav className="flex items-center gap-4 text-sm">
        <Link to="/" className="hover:text-blue-600">Beranda</Link>
        <Link to="/keranjang" className="hover:text-blue-600">
          Keranjang
          {item.length > 0 && (
            <span className="ml-1 text-xs bg-blue-600 text-white rounded-full px-2">{item.length}</span>
          )}
        </Link>
        {user && <Link to="/riwayat" className="hover:text-blue-600">Riwayat</Link>}
        {user ? (
          <>
            <span className="text-gray-500 hidden sm:inline">Hi, {user.email}</span>
            <button onClick={logout} className="hover:text-red-600">Logout</button>
          </>
        ) : (
          <Link to="/login" className="hover:text-blue-600">Login</Link>
        )}
      </nav>
    </header>
  )
}

export default Header
