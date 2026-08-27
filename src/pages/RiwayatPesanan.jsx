import { useState, useEffect } from 'react'

// Halaman terproteksi (Minggu 14) untuk melihat riwayat checkout
function RiwayatPesanan() {
  const [riwayat, setRiwayat] = useState([])

  useEffect(() => {
    setRiwayat(JSON.parse(localStorage.getItem('riwayat') || '[]'))
  }, [])

  if (riwayat.length === 0) {
    return <p className="text-center text-gray-500 py-10">Belum ada riwayat pesanan.</p>
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Riwayat Pesanan</h2>
      {riwayat.slice().reverse().map((r) => (
        <div key={r.id} className="border rounded-lg p-4 mb-3">
          <p className="text-sm text-gray-500">{new Date(r.tanggal).toLocaleString("id-ID")}</p>
          <ul className="text-sm my-2 list-disc list-inside">
            {r.item.map((p) => <li key={p.id}>{p.nama} x{p.qty}</li>)}
          </ul>
          <p className="font-semibold">Total: Rp {r.total.toLocaleString("id-ID")}</p>
        </div>
      ))}
    </div>
  )
}

export default RiwayatPesanan
