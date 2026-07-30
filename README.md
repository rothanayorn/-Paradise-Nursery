# Paradise Nursery 🌿

A React + Redux shopping application for browsing and purchasing houseplants.

## Project Overview

Paradise Nursery is a front-end e-commerce application built with **React**, **Redux Toolkit**, and **React Router**. Users can browse houseplants across three categories, add them to a shopping cart, and manage their cart before checkout.

## Features

- **Landing Page** :  Full-screen hero with company info and Get Started button
- **Product Listing Page** :  18 unique houseplants in 3 categories (Flowering Plants, Tropical Foliage, Cacti & Succulents), each with thumbnail, name, price, and Add to Cart button that disables after adding
- **Shopping Cart Page** : View all cart items with thumbnails, names, unit prices, line totals; increase/decrease quantity; delete items; see total count and cost
- **Navbar** : Shared across product and cart pages with dynamic cart item count
- **Redux State Management** : Cart state managed via `@reduxjs/toolkit` slice

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Redux Toolkit | Global state (cart) |
| React Redux | Redux bindings |
| React Router v6 | Client-side routing |
| Vite | Build tool & dev server |

## Project Structure

```
src/
├── components/
│   ├── AboutUs.jsx       # Company info section
│   ├── AboutUs.css
│   ├── CartItem.jsx      # Shopping cart page
│   ├── CartItem.css
│   ├── Navbar.jsx        # Shared header/navigation
│   ├── plantsData.js     # Plant data (18 plants, 3 categories)
│   ├── ProductList.jsx   # Product listing page
│   └── ProductList.css
├── store/
│   ├── CartSlice.jsx     # Redux slice for cart state
│   └── store.js          # Redux store configuration
├── App.jsx               # App routes + Landing page
├── App.css               # Global styles + landing page background
├── index.css             # CSS reset
└── main.jsx              # React entry point + Provider
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/paradise-nursery.git
cd paradise-nursery
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

1. Install the GitHub Pages plugin:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Set `base` in `vite.config.js` to your repo name:
   ```js
   base: '/paradise-nursery/'
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Redux State Shape

```js
{
  cart: {
    items: [
      { plant: { id, name, price, emoji, category, image }, quantity: Number }
    ],
    addedIds: [Number]   // IDs of plants already added (disables Add button)
  }
}
```

### Cart Actions

| Action | Payload | Description |
|---|---|---|
| `addToCart` | plant object | Add plant or increment qty |
| `removeFromCart` | plant id | Remove plant entirely |
| `increaseQuantity` | plant id | +1 to quantity |
| `decreaseQuantity` | plant id | −1 (removes if qty reaches 0) |

## License

MIT
