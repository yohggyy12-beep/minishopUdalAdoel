import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import Login from '../Login'
import { AuthProvider } from '../../context/AuthContext'

function renderLogin() {
  return render(
    <BrowserRouter>
      <AuthProvider><Login /></AuthProvider>
    </BrowserRouter>
  )
}

describe('Form Login', () => {
  it('menampilkan error jika email tidak valid', () => {
    renderLogin()
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'salahemail' } })
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } })
    fireEvent.click(screen.getByText('Login'))
    expect(screen.getByText('Email tidak valid')).toBeInTheDocument()
  })

  it('menampilkan error jika password kurang dari 6 karakter', () => {
    renderLogin()
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'a@a.com' } })
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '123' } })
    fireEvent.click(screen.getByText('Login'))
    expect(screen.getByText('Password minimal 6 karakter')).toBeInTheDocument()
  })
})
