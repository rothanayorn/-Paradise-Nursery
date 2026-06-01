import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/CartSlice'

function Navbar() {
  const navigate = useNavigate()
  const cartCount = useSelector(selectCartCount)

  return (
    <header>
      <div className="logo" onClick={() => navigate('/')}>
        Paradise <span>Nursery</span>
      </div>
      <nav className="nav-links">
        <button className="nav-btn" onClick={() => navigate('/')}>
          🏠 Home
        </button>
        <button className="nav-btn" onClick={() => navigate('/products')}>
          🪴 Plants
        </button>
        <button className="cart-nav-btn" onClick={() => navigate('/cart')}>
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
