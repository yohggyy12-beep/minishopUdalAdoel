import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useKeranjang } from '../context/KeranjangContext'
import Button from '../components/Button'

// Minggu 5: Route Parameter & Halaman Detail (versi API - Fase 4)
function DetailProduk() {
  const { id } = useParams()
  const [produk, setProduk] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { tambahKeKeranjang } = useKeranjang()

  useEffect(() => {
    setLoading(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduk({
          id: data.id,
          nama: data.title,
          harga: data.price,
          gambar: data.image,
          deskripsi: data.description,
        })
        setLoading(false)
      })
     .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Memuat...</p>
  if (error || !produk) return (
  <div className="text-center py-10">
    <p className="text-gray-500 mb-4">Produk tidak ditemukan atau gagal dimuat.</p>
    <Link to="/" className="text-blue-600">Kembali ke Beranda</Link>
  </div>
)

  return (
    <div className="max-w-2xl mx-auto">
      <Link to="/" className="text-blue-600 text-sm">&larr; Kembali</Link>
      <div className="flex flex-col sm:flex-row gap-6 mt-4">
        <img src={produk.gambar} alt={produk.nama} className="w-full sm:w-64 h-64 object-contain border rounded" />
        <div>
          <h2 className="text-2xl font-bold">{produk.nama}</h2>
          <p className="text-xl text-gray-700 mt-2">Rp {produk.harga.toLocaleString("id-ID")}</p>
          <p className="text-gray-500 mt-3">{produk.deskripsi}</p>
          <Button className="mt-4" onClick={() => {
            tambahKeKeranjang(produk)
            alert(`${produk.nama} ditambahkan ke keranjang`)
          }}>Tambah ke Keranjang</Button>
        </div>
      </div>
    </div>
  )
}

export default DetailProduk
