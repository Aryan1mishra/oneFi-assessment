import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

function formatPrice(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

export default function ProductCard({ product }) {
  const startingEmi = Math.min(...product.emiPlans.map((plan) => plan.monthly));

  return (
    <article className="surface overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/marketplace/${product.id}`} className="block">
        <div className="relative flex h-52 items-center justify-center bg-gray-50 p-5">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain mix-blend-multiply"
            loading="lazy"
          />
          <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-sm">
            {product.category}
          </span>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-onefi-600">
                {product.brand}
              </p>
              <h2 className="mt-1 text-lg font-bold text-gray-950">{product.name}</h2>
            </div>

            <div className="flex items-center gap-1 text-sm font-semibold">
              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              {product.rating}
            </div>
          </div>

          <p className="mt-3 text-2xl font-extrabold text-gray-950">
            {formatPrice(product.price)}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Starting at{" "}
            <span className="font-bold text-gray-900">
              {formatPrice(startingEmi)}/mo
            </span>
          </p>

          <div className="mt-5 flex items-center justify-between border-t pt-4">
            <span className="text-sm font-semibold text-onefi-600">
              View details
            </span>
            <ArrowRight size={18} className="text-onefi-600" />
          </div>
        </div>
      </Link>
    </article>
  );
}
