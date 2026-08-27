import { memo } from 'react'
import { Link } from 'react-router-dom'
import Badge from './Badge'
import Button from './Button'
import { useKeranjang } from '../context/KeranjangContext'

// Minggu 1-2: struktur dasar & props
// Minggu 3: styling Tailwind + Badge
// Minggu 7: terhubung ke Context untuk tombol "Tambah ke Keranjang"
// Minggu 16: dibungkus React.memo supaya tidak re-render tanpa perlu
function ProdukCard({ produk }) {
  const { tambahKeKeranjang } = useKeranjang()
  const habis = produk.stok === 0

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col">
      <div className="relative">
        <img src={produk.gambar} alt={produk.nama} className="w-full h-40 object-cover rounded" />
        {habis && (
          <div className="absolute top-2 right-2">
            <Badge color="red">Stok Habis</Badge>
          </div>
        )}
      </div>
      <h3 className="font-semibold mt-2 line-clamp-1">{produk.nama}</h3>
      <p className="text-gray-600">Rp {produk.harga.toLocaleString("id-ID")}</p>
      <div className="mt-auto pt-3 flex gap-2">
        <Link to={`/produk/${produk.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">Lihat Detail</Button>
        </Link>
        <Button disabled={habis} onClick={() => tambahKeKeranjang(produk)}>Tambah</Button>
      </div>
    </div>
  )
}

export default memo(ProdukCard)
