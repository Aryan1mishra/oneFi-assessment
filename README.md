# 1Fi Marketplace — SDE Intern Assignment

A React + Tailwind implementation of the 1Fi Marketplace experience using a mock REST API.

## Assignment scope

The assignment asks for a new **1Fi Marketplace** section inside the existing Shop experience. The Marketplace needs product listing, product image/name/price, variants, EMI plans, EMI selection and a CTA.

This project intentionally keeps the existing Shop concept simple and focuses engineering effort on Marketplace.

## Tech stack

- React 18
- Vite
- Tailwind CSS
- React Router
- Lucide React
- JSON Server for a local mock REST API

## Architecture

```text
src/
├── components/
│   ├── BottomNav.jsx
│   ├── EmiPlanSelector.jsx
│   ├── ProductCard.jsx
│   ├── ProductGridSkeleton.jsx
│   ├── ShopHero.jsx
│   └── ShopTabs.jsx
├── hooks/
│   └── useProducts.js
├── pages/
│   ├── MarketplacePage.jsx
│   ├── ProductDetailsPage.jsx
│   └── ShopPage.jsx
├── services/
│   └── productApi.js
├── App.jsx
├── index.css
└── main.jsx

mock-api/
└── db.json
```

## Run locally

Requirements:

- Node.js 18+
- npm

Install:

```bash
npm install
```

Start frontend + mock API:

```bash
npm run dev
```

The Vite app normally runs on:

```text
http://localhost:5173
```

The mock API runs on:

```text
http://localhost:3001
```

Useful endpoints:

```text
GET /products
GET /products/:id
```

## Environment configuration

Create `.env` if you want a different API:

```text
VITE_API_URL=http://localhost:3001
```

The API layer reads this variable, so replacing JSON Server with a real backend later only requires changing the service configuration rather than rewriting UI components.

## Engineering decisions

### 1. API abstraction

Components do not call `fetch()` directly. `src/services/productApi.js` owns API communication.

### 2. Reusable components

Product cards and EMI selection are isolated components so they can be reused for additional marketplace categories.

### 3. State management

Local React state is sufficient for this assignment:

- search query
- selected product variant
- selected EMI plan
- loading/error/data states

A global state library would add unnecessary complexity at this scope.

### 4. Loading and error states

Marketplace and product details both expose loading and error states.

### 5. Responsive UI

The layout uses Tailwind breakpoints for mobile, tablet and desktop widths.

## Important note

The product numbers in `mock-api/db.json` are demonstration data only. Replace them with the API/business-approved EMI calculations if a real backend is provided.
