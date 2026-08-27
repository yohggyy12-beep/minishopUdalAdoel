import { useState, useEffect } from 'react'

// Custom hook Minggu 9: menyimpan & membaca state dari localStorage
export function useLocalStorage(key, nilaiAwal) {
  const [nilai, setNilai] = useState(() => {
    try {
      const tersimpan = localStorage.getItem(key)
      return tersimpan ? JSON.parse(tersimpan) : nilaiAwal
    } catch {
      return nilaiAwal
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(nilai))
  }, [key, nilai])

  return [nilai, setNilai]
}
