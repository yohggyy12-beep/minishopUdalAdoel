import { Link, useNavigate } from 'react-router-dom'
import { useKeranjang } from '../context/KeranjangContext'
import Button from '../components/Button'

// Minggu 8: Halaman Keranjang & Hitung Total
// Tugas mingguan Minggu 8: hapusDariKeranjang & ubahJumlah (quantity)
function Keranjang() {
  const { item, hapusDariKeranjang, ubahJumlah, kosongkanKeranjang } = useKeranjang()
  const navigate = useNavigate()
  const total = item.reduce((sum, p) => sum + p.harga * p.qty, 0)

  function checkout() {
    const riwayat = JSON.parse(localStorage.getItem('riwayat') || '[]')
    riwayat.push({ id: Date.now(), tanggal: new Date().toISOString(), item, total })
    localStorage.setItem('riwayat', JSON.stringify(riwayat))
    kosongkanKeranjang()
    alert('Pesanan berhasil dibuat!')
    navigate('/riwayat')
  }

  if (item.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 mb-4">Keranjang kamu masih kosong.</p>
        <Link to="/"><Button>Belanja Sekarang</Button></Link>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Keranjang Belanja</h2>
      {item.map((p) => (
        <div key={p.id} className="flex items-center justify-between border-b py-3">
          <div>
            <p className="font-medium">{p.nama}</p>
            <p className="text-sm text-gray-500">Rp {p.harga.toLocaleString("id-ID")}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => ubahJumlah(p.id, p.qty - 1)} className="border rounded px-2">-</button>
            <span>{p.qty}</span>
            <button onClick={() => ubahJumlah(p.id, p.qty + 1)} className="border rounded px-2">+</button>
            <button
              onClick={() => {
                if (window.confirm(`Hapus ${p.nama} dari keranjang?`)) {
                  hapusDariKeranjang(p.id)
                }
              }}
              className="text-red-600 text-sm ml-2"
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
      <h3 className="text-lg font-bold mt-4">Total: Rp {total.toLocaleString("id-ID")}</h3>
      <Button className="mt-4 w-full" onClick={checkout}>Checkout</Button>
    </div>
  )
}

export default Keranjang
