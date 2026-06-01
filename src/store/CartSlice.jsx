import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],        // [{ plant, quantity }]
    addedIds: [],     // plant ids already added (to disable buttons)
  },
  reducers: {
    addToCart(state, action) {
      const plant = action.payload
      const existing = state.items.find(item => item.plant.id === plant.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ plant, quantity: 1 })
        state.addedIds.push(plant.id)
      }
    },
    removeFromCart(state, action) {
      const id = action.payload
      state.items = state.items.filter(item => item.plant.id !== id)
      state.addedIds = state.addedIds.filter(addedId => addedId !== id)
    },
    increaseQuantity(state, action) {
      const id = action.payload
      const item = state.items.find(item => item.plant.id === id)
      if (item) item.quantity += 1
    },
    decreaseQuantity(state, action) {
      const id = action.payload
      const item = state.items.find(item => item.plant.id === id)
      if (item) {
        if (item.quantity <= 1) {
          state.items = state.items.filter(i => i.plant.id !== id)
          state.addedIds = state.addedIds.filter(addedId => addedId !== id)
        } else {
          item.quantity -= 1
        }
      }
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions

// Selectors
export const selectCartItems = state => state.cart.items
export const selectAddedIds = state => state.cart.addedIds
export const selectCartCount = state =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotal = state =>
  state.cart.items.reduce((total, item) => total + item.plant.price * item.quantity, 0)

export default cartSlice.reducer
