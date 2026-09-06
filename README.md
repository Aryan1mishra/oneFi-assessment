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

## Implementation Notes - IMP
# 1Fi Marketplace is fully implemented as the primary feature.

# Product data is handled through a mock REST API rather than being hardcoded directly into UI components.

# Product listing includes product images, names, pricing, ratings, variants, and EMI information.

# Variant-based pricing and EMI calculation are implemented. Selecting a different variant recalculates the monthly EMI based on its price.

# Product details page supports variant selection and EMI-plan selection.

# Search functionality is implemented for marketplace products.

# Loading, error, and empty-result states are included.

# The UI is responsive and follows the existing 1Fi-inspired purple design system, spacing, cards, buttons, and bottom navigation style.
# Top Brands and Nearby Stores are kept as non-functional/placeholder sections as their implementation was not required for the assignment.
# The Nearby Stores option currently does not have store/location functionality implemented.
# The bottom navigation is primarily provided for UI consistency; only the Shop/Marketplace flow is functional in this assignment scope.
# Clicking "Proceed with EMI" / "Pay EMI" currently triggers a confirmation alert instead of a real payment transaction.
# No real payment gateway, authentication, order processing, or financial transaction has been integrated.
# EMI plans use mock data/configuration for demonstration purposes.
# Product images and product information are also based on mock/demo data.
# The project is structured so that the mock API can later be replaced with a production backend without changing the UI components significantly.
# The product numbers in `mock-api/db.json` are demonstration data only. Replace them with the API/business-approved EMI calculations if a real backend is provided.
