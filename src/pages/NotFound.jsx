import { Link } from 'react-router-dom'

// Minggu 6: halaman 404
function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold mb-2">404</h2>
      <p className="text-gray-500 mb-4">Halaman Tidak Ditemukan</p>
      <Link to="/" className="text-blue-600">Kembali ke Beranda</Link>
    </div>
  )
}

export default NotFound
