import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Minggu 6: Layout bersama supaya Header/Footer tidak ditulis ulang
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
