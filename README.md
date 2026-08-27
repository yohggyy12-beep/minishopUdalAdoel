# MiniShop 🛍️

Aplikasi toko online sederhana yang dibangun dengan **React 18 + Vite**, hasil dari proyek belajar ReactJS 1 semester (16 minggu). Mengimplementasikan seluruh 6 fase dari kurikulum: komponen, routing, state management (Context API), integrasi API, form/autentikasi, hingga optimasi & testing.

## ✨ Fitur

- Katalog produk (grid) dari **Fake Store API**, dengan pencarian teks, filter kategori, dan pagination
- Halaman detail produk berdasarkan route parameter (`/produk/:id`)
- Keranjang belanja: tambah, ubah jumlah, hapus, hitung total — persisten via `localStorage`
- Checkout sederhana yang mencatat **riwayat pesanan**
- Autentikasi sederhana (Login/Register dengan validasi) + halaman terproteksi (`ProtectedRoute`)
- Halaman 404
- Optimasi: `React.memo` pada `ProdukCard`, lazy loading + `Suspense` untuk halaman Keranjang & Riwayat
- Unit test dengan **Vitest** + **React Testing Library**
- Styling dengan **Tailwind CSS**

## 📁 Struktur Folder

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── ProdukCard.jsx
│   ├── Button.jsx
│   ├── Badge.jsx
│   ├── ProtectedRoute.jsx
│   └── __tests__/ProdukCard.test.jsx
├── pages/
│   ├── Home.jsx
│   ├── DetailProduk.jsx
│   ├── Keranjang.jsx
│   ├── RiwayatPesanan.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── NotFound.jsx
│   └── __tests__/Login.test.jsx
├── context/
│   ├── KeranjangContext.jsx
│   ├── AuthContext.jsx
│   └── __tests__/KeranjangContext.test.jsx
├── hooks/
│   └── useLocalStorage.js
├── data/
│   └── produk.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Cara Instalasi

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## 🧪 Menjalankan Test

```bash
npm run test
```

## 📦 Build & Deploy

```bash
npm run build
```

Folder hasil build ada di `dist/`. Deploy `dist/` ke **Vercel** atau **Netlify** (drag-and-drop, atau hubungkan repo GitHub).

## 🗺️ Peta Fase Pengerjaan

| Fase | Minggu | Fokus | Status |
|------|--------|-------|--------|
| 1 | 1–3 | Fondasi komponen & styling | ✅ |
| 2 | 4–6 | Routing & navigasi multi-halaman | ✅ |
| 3 | 7–9 | State management (Context API) | ✅ |
| 4 | 10–12 | Integrasi API (Fake Store API) | ✅ |
| 5 | 13–14 | Form, validasi, & autentikasi | ✅ |
| 6 | 15–16 | Optimasi, testing, & deployment | ✅ |
