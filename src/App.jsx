import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import DetailProduk from './pages/DetailProduk'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

// Lazy load halaman yang tidak selalu dibutuhkan di awal (optimasi Fase 6)
const Keranjang = lazy(() => import('./pages/Keranjang'))
const RiwayatPesanan = lazy(() => import('./pages/RiwayatPesanan'))

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/produk/:id" element={<DetailProduk />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/keranjang"
          element={
            <ProtectedRoute>
              <Suspense fallback={<p className="text-center py-10">Memuat...</p>}>
                <Keranjang />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/riwayat"
          element={
            <ProtectedRoute>
              <Suspense fallback={<p className="text-center py-10">Memuat...</p>}>
                <RiwayatPesanan />
              </Suspense>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
