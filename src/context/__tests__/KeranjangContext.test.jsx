import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { KeranjangProvider, useKeranjang } from '../KeranjangContext'

beforeEach(() => localStorage.clear())

describe('KeranjangContext', () => {
  it('menambahkan produk baru ke keranjang', () => {
    const { result } = renderHook(() => useKeranjang(), { wrapper: KeranjangProvider })
    act(() => result.current.tambahKeKeranjang({ id: 1, nama: 'Kaos', harga: 75000 }))
    expect(result.current.item).toHaveLength(1)
    expect(result.current.item[0].qty).toBe(1)
  })

  it('menambah qty jika produk yang sama ditambahkan lagi', () => {
    const { result } = renderHook(() => useKeranjang(), { wrapper: KeranjangProvider })
    act(() => result.current.tambahKeKeranjang({ id: 1, nama: 'Kaos', harga: 75000 }))
    act(() => result.current.tambahKeKeranjang({ id: 1, nama: 'Kaos', harga: 75000 }))
    expect(result.current.item).toHaveLength(1)
    expect(result.current.item[0].qty).toBe(2)
  })

  it('menghapus produk dari keranjang', () => {
    const { result } = renderHook(() => useKeranjang(), { wrapper: KeranjangProvider })
    act(() => result.current.tambahKeKeranjang({ id: 1, nama: 'Kaos', harga: 75000 }))
    act(() => result.current.hapusDariKeranjang(1))
    expect(result.current.item).toHaveLength(0)
  })
})
