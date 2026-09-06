import { useNavigate, useLocation } from "react-router-dom";

export default function ShopTabs() {
  const navigate = useNavigate();
  const location = useLocation();
  const marketplaceActive = location.pathname.startsWith("/marketplace");

  return (
    <div className="-mt-7 px-4">
      <div className="mx-auto grid max-w-4xl grid-cols-3 rounded-full border border-purple-100 bg-purple-50 p-1.5 shadow-soft">
        <button
          onClick={() => navigate("/shop")}
          className={`rounded-full py-4 text-sm font-semibold sm:text-base ${
            !marketplaceActive
              ? "bg-white text-onefi-600 shadow"
              : "text-gray-500"
          }`}
        >
          Top Brands
        </button>

        <button
          onClick={() => navigate("/shop")}
          className="rounded-full py-4 text-sm font-semibold text-gray-500 sm:text-base"
        >
          Nearby Stores
        </button>

        <button
          onClick={() => navigate("/marketplace")}
          className={`rounded-full py-4 text-sm font-semibold ${
            marketplaceActive
              ? "bg-white text-onefi-600 shadow"
              : "text-gray-500"
          }`}
        >
          1Fi Marketplace
        </button>
      </div>
    </div>
  );
}
