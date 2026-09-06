import { Routes, Route, Navigate } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import MarketplacePage from "./pages/MarketplacePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/shop" replace />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/marketplace/:productId" element={<ProductDetailsPage />} />
      <Route path="*" element={<Navigate to="/shop" replace />} />
    </Routes>
  );
}
