import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const KeranjangContext = createContext()

// Minggu 7-8: Context keranjang + hitung total + hapus/ubah jumlah
// Minggu 9: dipersiskan pakai useLocalStorage agar tidak hilang saat refresh
export function KeranjangProvider({ children }) {
  const [item, setItem] = useLocalStorage('keranjang', [])

  function tambahKeKeranjang(produk) {
    setItem((prev) => {
      const sudahAda = prev.find((p) => p.id === produk.id)
      if (sudahAda) {
        return prev.map((p) =>
          p.id === produk.id ? { ...p, qty: p.qty + 1 } : p
        )
      }
      return [...prev, { ...produk, qty: 1 }]
    })
  }

  function hapusDariKeranjang(id) {
    setItem((prev) => prev.filter((p) => p.id !== id))
  }

  function ubahJumlah(id, qty) {
    if (qty < 1) return
    setItem((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)))
  }

  function kosongkanKeranjang() {
    setItem([])
  }

  return (
    <KeranjangContext.Provider
      value={{ item, tambahKeKeranjang, hapusDariKeranjang, ubahJumlah, kosongkanKeranjang }}
    >
      {children}
    </KeranjangContext.Provider>
  )
}

export function useKeranjang() {
  return useContext(KeranjangContext)
}
