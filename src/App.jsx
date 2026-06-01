import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import './App.css'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="landing-bg">
      <div className="landing-overlay" />
      <div className="landing-content">
        <span className="landing-badge">🌱 Est. 2019</span>

        <h1 className="landing-title">
          Welcome to<br />
          <em>Paradise Nursery</em>
        </h1>

        <p className="landing-desc">
          We believe every home deserves a touch of nature. Our curated collection
          of houseplants brings life, colour, and calm to any space — hand-picked
          by expert botanists and delivered with love directly to your door.
        </p>

        <button className="landing-cta" onClick={() => navigate('/products')}>
          Get Started →
        </button>

        <div className="landing-stats">
          <div className="stat">
            <span className="stat-num">200+</span>
            <span className="stat-lbl">Plant Varieties</span>
          </div>
          <div className="stat">
            <span className="stat-num">12k</span>
            <span className="stat-lbl">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-num">5★</span>
            <span className="stat-lbl">Avg. Rating</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  )
}

export default App
