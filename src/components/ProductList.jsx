import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart, selectAddedIds, selectCartCount } from '../store/CartSlice'
import { plantsData, categories } from './plantsData'
import Navbar from './Navbar'
import AboutUs from './AboutUs'
import './ProductList.css'

function PlantCard({ plant }) {
  const dispatch = useDispatch()
  const addedIds = useSelector(selectAddedIds)
  const isAdded = addedIds.includes(plant.id)

  const handleAdd = () => {
    if (!isAdded) dispatch(addToCart(plant))
  }

  return (
    <div className="plant-card">
      <div className="plant-thumb">
        <img
          src={plant.image}
          alt={plant.name}
          onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
        />
        <div className="plant-emoji-fallback" style={{ display: 'none' }}>
          {plant.emoji}
        </div>
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-price">${plant.price.toFixed(2)}</p>
        <button
          className={`add-btn ${isAdded ? 'added' : ''}`}
          onClick={handleAdd}
          disabled={isAdded}
        >
          {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

function ProductList() {
  return (
    <>
      <Navbar />
      <div className="products-page">
        <div className="products-wrap">
          <div className="page-hero">
            <h1 className="page-title">Our Plant Collection</h1>
            <p className="page-sub">Discover the perfect plant for every corner of your home</p>
          </div>

          {categories.map(category => {
            const plants = plantsData.filter(p => p.category === category)
            return (
              <section key={category} className="category-section">
                <div className="category-label">
                  <span>🪴</span> {category}
                </div>
                <div className="plants-grid">
                  {plants.map(plant => (
                    <PlantCard key={plant.id} plant={plant} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
        <AboutUs />
      </div>
    </>
  )
}

export default ProductList
