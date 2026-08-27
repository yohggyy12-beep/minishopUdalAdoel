import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import ProdukCard from '../ProdukCard'
import { KeranjangProvider } from '../../context/KeranjangContext'

function renderWithProviders(ui) {
  return render(
    <BrowserRouter>
      <KeranjangProvider>{ui}</KeranjangProvider>
    </BrowserRouter>
  )
}

describe('ProdukCard', () => {
  it('menampilkan nama dan harga produk dengan benar', () => {
    const produk = { id: 1, nama: 'Kaos Polos', harga: 75000, gambar: 'https://placehold.co/300' }
    renderWithProviders(<ProdukCard produk={produk} />)
    expect(screen.getByText('Kaos Polos')).toBeInTheDocument()
    expect(screen.getByText('Rp 75.000')).toBeInTheDocument()
  })

  it('menampilkan badge "Stok Habis" jika stok 0', () => {
    const produk = { id: 2, nama: 'Topi', harga: 40000, gambar: 'x', stok: 0 }
    renderWithProviders(<ProdukCard produk={produk} />)
    expect(screen.getByText('Stok Habis')).toBeInTheDocument()
  })
})
