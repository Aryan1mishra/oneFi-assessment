import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import ProductCard from "../components/ProductCard";
import ProductGridSkeleton from "../components/ProductGridSkeleton";
import ShopHero from "../components/ShopHero";
import ShopTabs from "../components/ShopTabs";
import { useProducts } from "../hooks/useProducts";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const { data: products, loading, error } = useProducts(search);

  return (
    <div className="min-h-screen pb-32">
      <ShopHero />
      <ShopTabs />

      <main className="page-container py-8">
        <header className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-wider text-onefi-600">
            Shop with 1Fi
          </p>
          <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">
            1Fi Marketplace
          </h1>
          <p className="mt-2 max-w-2xl text-gray-500">
            Browse products, compare variants and choose an EMI plan before you
            proceed.
          </p>
        </header>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="       Search products..."
              className="w-full rounded-full border border-gray-200 bg-white py-4 pl-13 pr-5 outline-none focus:border-onefi-500 focus:ring-4 focus:ring-onefi-100"
            />
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-full border bg-white px-5 py-3 font-semibold text-gray-700">
            <SlidersHorizontal size={18} />
            Filter
          </button>
        </div>

        {loading && <ProductGridSkeleton />}

        {!loading && error && (
          <div className="surface p-10 text-center">
            <h2 className="text-xl font-bold">Unable to load products</h2>
            <p className="mt-2 text-gray-500">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="primary-button mt-5"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="surface p-12 text-center">
            <h2 className="text-xl font-bold">No products found</h2>
            <p className="mt-2 text-gray-500">
              Try another product name or category.
            </p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <>
            <p className="mb-4 text-sm text-gray-500">
              {products.length} products available
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
