import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from '../store/CartSlice'
import Navbar from './Navbar'
import './CartItem.css'

function CartItem() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const cartCount = useSelector(selectCartCount)
  const cartTotal = useSelector(selectCartTotal)
  const [checkoutMsg, setCheckoutMsg] = useState('')

  const handleCheckout = () => {
    setCheckoutMsg('🎉 Coming Soon — checkout is on its way!')
    setTimeout(() => setCheckoutMsg(''), 3500)
  }

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="cart-wrap">
          <div className="cart-page-header">
            <h1 className="page-title">Shopping Cart</h1>
            <p className="page-sub">Review your selections before checkout</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <h3>Your cart is empty</h3>
              <p>Looks like you haven't added any plants yet.</p>
              <button className="btn-go-shop" onClick={() => navigate('/products')}>
                Browse Plants
              </button>
            </div>
          ) : (
            <>
              {/* Summary banner */}
              <div className="cart-summary">
                <div className="cart-summary-nums">
                  <div className="sum-item">
                    <span className="sum-label">Total Plants</span>
                    <span className="sum-val">{cartCount}</span>
                  </div>
                  <div className="sum-divider" />
                  <div className="sum-item">
                    <span className="sum-label">Total Cost</span>
                    <span className="sum-val">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                <div className="cart-actions">
                  <button className="btn-continue" onClick={() => navigate('/products')}>
                    ← Continue Shopping
                  </button>
                  <button className="btn-checkout" onClick={handleCheckout}>
                    Checkout →
                  </button>
                </div>
              </div>

              {/* Checkout message */}
              {checkoutMsg && (
                <div className="checkout-msg">{checkoutMsg}</div>
              )}

              {/* Cart items */}
              <div className="cart-items-list">
                {cartItems.map(({ plant, quantity }) => (
                  <div key={plant.id} className="cart-item-row">
                    {/* Thumbnail */}
                    <div className="ci-thumb">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        onError={e => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="ci-emoji-fallback" style={{ display: 'none' }}>
                        {plant.emoji}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="ci-info">
                      <p className="ci-name">{plant.name}</p>
                      <p className="ci-unit">Unit price: ${plant.price.toFixed(2)}</p>
                    </div>

                    {/* Quantity controls */}
                    <div className="ci-qty">
                      <button
                        className="qty-btn"
                        onClick={() => dispatch(decreaseQuantity(plant.id))}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="qty-num">{quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => dispatch(increaseQuantity(plant.id))}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Line total */}
                    <div className="ci-total">
                      ${(plant.price * quantity).toFixed(2)}
                    </div>

                    {/* Delete */}
                    <button
                      className="ci-del"
                      onClick={() => dispatch(removeFromCart(plant.id))}
                      aria-label={`Remove ${plant.name} from cart`}
                      title="Remove item"
                    >
                      🗑
                    </button>
                  </div>
                ))}
              </div>

              {/* Bottom action bar (duplicate for UX) */}
              <div className="cart-bottom-actions">
                <button className="btn-continue" onClick={() => navigate('/products')}>
                  ← Continue Shopping
                </button>
                <button className="btn-checkout" onClick={handleCheckout}>
                  Checkout →
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CartItem
