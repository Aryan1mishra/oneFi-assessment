import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import ShopHero from "../components/ShopHero";
import ShopTabs from "../components/ShopTabs";

const brands = [
  { name: "Air India", emi: "No-cost EMIs upto 18 months", icon: "✈️" },
  { name: "Apple Premium Reseller", emi: "No-cost EMIs upto 24 months", icon: "" },
  { name: "CaratLane", emi: "No-cost EMIs upto 6 months", icon: "💎" }
];

export default function ShopPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen pb-32">
      <ShopHero />
      <ShopTabs />

      <main className="page-container pt-8">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search online stores..."
            className="w-full rounded-full border border-gray-200 bg-white py-4 pl-14 pr-5 text-base outline-none transition focus:border-onefi-500 focus:ring-4 focus:ring-onefi-100"
          />
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold">Top Brands</h2>
          <button
            onClick={() => navigate("/marketplace")}
            className="text-sm font-semibold text-onefi-600"
          >
            Marketplace →
          </button>
        </div>

        <div className="mt-5 space-y-4">
          {brands
            .filter((brand) =>
              brand.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((brand) => (
              <button
                key={brand.name}
                onClick={() => navigate("/marketplace")}
                className="surface flex w-full items-center gap-5 p-5 text-left transition hover:shadow-lg"
              >
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border bg-white text-4xl">
                  {brand.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{brand.name}</h3>
                  <p className="mt-1 text-gray-500">{brand.emi}</p>
                </div>
              </button>
            ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
