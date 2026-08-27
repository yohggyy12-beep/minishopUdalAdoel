import { useState, useEffect, useMemo } from 'react'
import ProdukCard from '../components/ProdukCard'

const PER_HALAMAN = 8

// Minggu 10: fetch data sungguhan dari Fake Store API + loading/error state
// Minggu 11: pencarian teks + filter kategori (dropdown dari /products/categories)
// Minggu 12: pagination sederhana
function Home() {
  const [produk, setProduk] = useState([])
  const [kategoriList, setKategoriList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [kataKunci, setKataKunci] = useState('')
  const [kategori, setKategori] = useState('semua')
  const [halaman, setHalaman] = useState(1)

  useEffect(() => {
    setLoading(true)
    Promise.all([
      fetch('https://fakestoreapi.com/products').then((res) => res.json()),
      fetch('https://fakestoreapi.com/products/categories').then((res) => res.json()),
    ])
      .then(([dataProduk, dataKategori]) => {
        const dinormalisasi = dataProduk.map((p) => ({
          id: p.id,
          nama: p.title,
          harga: p.price,
          gambar: p.image,
          kategori: p.category,
        }))
        setProduk(dinormalisasi)
        setKategoriList(dataKategori)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const produkTersaring = useMemo(() => {
    return produk.filter((p) => {
      const cocokKataKunci = p.nama.toLowerCase().includes(kataKunci.toLowerCase())
      const cocokKategori = kategori === 'semua' || p.kategori === kategori
      return cocokKataKunci && cocokKategori
    })
  }, [produk, kataKunci, kategori])

  const totalHalaman = Math.max(1, Math.ceil(produkTersaring.length / PER_HALAMAN))
  const produkDitampilkan = produkTersaring.slice((halaman - 1) * PER_HALAMAN, halaman * PER_HALAMAN)

  if (loading) return <p className="text-center py-10">Memuat produk...</p>
  if (error) return <p className="text-center text-red-600 py-10">Gagal memuat produk: {error}</p>

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          placeholder="Cari produk..."
          value={kataKunci}
          onChange={(e) => { setKataKunci(e.target.value); setHalaman(1) }}
          className="border rounded-md px-3 py-2 flex-1"
        />
        <select
          value={kategori}
          onChange={(e) => { setKategori(e.target.value); setHalaman(1) }}
          className="border rounded-md px-3 py-2"
        >
          <option value="semua">Semua Kategori</option>
          {kategoriList.map((k) => <option key={k} value={k}>{k}</option>)}
        </select>
      </div>

      {produkDitampilkan.length === 0 ? (
        <p className="text-center text-gray-500 py-10">Produk tidak ditemukan.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {produkDitampilkan.map((p) => <ProdukCard key={p.id} produk={p} />)}
        </div>
      )}

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={halaman === 1}
          onClick={() => setHalaman((h) => h - 1)}
          className="px-3 py-1 border rounded disabled:opacity-40"
        >
          Sebelumnya
        </button>
        <span>Halaman {halaman} dari {totalHalaman}</span>
        <button
          disabled={halaman === totalHalaman}
          onClick={() => setHalaman((h) => h + 1)}
          className="px-3 py-1 border rounded disabled:opacity-40"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  )
}

export default Home
