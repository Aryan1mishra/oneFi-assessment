import { BarChart3, Home, ReceiptText, ShoppingBag, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { label: "Home", icon: Home, to: "/shop" },
  { label: "Shop", icon: ShoppingBag, to: "/shop" },
  { label: "EMI Dues", icon: ReceiptText, to: "/shop" },
  { label: "Limit", icon: BarChart3, to: "/shop" },
  { label: "Profile", icon: User, to: "/shop" }
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-3 left-1/2 z-40 w-[calc(100%-24px)] max-w-5xl -translate-x-1/2 rounded-[2rem] border border-white bg-white/95 px-2 py-3 shadow-xl backdrop-blur">
      <div className="grid grid-cols-5">
        {items.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-1 py-1 text-xs sm:text-sm ${
                isActive && label === "Shop"
                  ? "font-semibold text-onefi-600"
                  : "text-gray-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && label === "Shop" && (
                  <span className="absolute -top-3 h-1 w-10 rounded-full bg-onefi-600" />
                )}
                <Icon size={24} strokeWidth={2} />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
