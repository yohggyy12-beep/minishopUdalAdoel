import { memo } from 'react'
import { Link } from 'react-router-dom'
// import Badge from './Badge'
import Button from './Button'
import { useKeranjang } from '../context/KeranjangContext'
import { formatRupiah } from '../utils/format'

// Minggu 1-2: struktur dasar & props
// Minggu 3: styling Tailwind + Badge
// Minggu 7: terhubung ke Context untuk tombol "Tambah ke Keranjang"
// Minggu 16: dibungkus React.memo supaya tidak re-render tanpa perlu
function ProdukCard({ produk }) {
  const { tambahKeKeranjang } = useKeranjang()
  // const habis = produk.stok === 0

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col">
      <div className="relative">
        <img src={produk.gambar} alt={produk.nama} className="w-full h-40 object-contain rounded-xl bg-gray-50 p-2" />
      </div>
        <h3 className="text-lg font-bold mt-4">{formatRupiah(produk.nama)}</h3>
        <p className="text-gray-600">{formatRupiah(produk.harga)}</p>
        <div className="mt-auto pt-3 flex gap-2">
        <Link to={`/produk/${produk.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">Lihat Detail</Button>
        </Link>
        <Button onClick={() => {
          tambahKeKeranjang(produk)
          alert(`${produk.nama} ditambahkan ke keranjang`)
        }}>Tambah</Button>
      </div>
    </div>
  )
}

export default memo(ProdukCard)
