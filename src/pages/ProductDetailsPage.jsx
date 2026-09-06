import { ArrowLeft, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import EmiPlanSelector from "../components/EmiPlanSelector";
import { useProduct } from "../hooks/useProducts";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function calculateEMI(principal, annualRate, months) {
  if (annualRate === 0) {
    return Math.ceil(principal / months);
  }

  const monthlyRate = annualRate / 12 / 100;

  const emi =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return Math.ceil(emi);
}

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = useProduct(productId);

  const [variantId, setVariantId] = useState(null);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const selectedVariant = useMemo(() => {
    if (!product) return null;
    return (
      product.variants.find((variant) => variant.id === variantId) ||
      product.variants[0]
    );
  }, [product, variantId]);

  const emiPlans = useMemo(() => {
  if (!product || !selectedVariant) return [];

  const price = selectedVariant.price;

  return [
    {
      id: "3m",
      months: 3,
      rate: 0,
      monthly: calculateEMI(price, 0, 3)
    },
    {
      id: "6m",
      months: 6,
      rate: 2.99,
      monthly: calculateEMI(price, 2.99, 6)
    },
    {
      id: "12m",
      months: 12,
      rate: 3.99,
      monthly: calculateEMI(price, 3.99, 12)
    },
    {
      id: "24m",
      months: 24,
      rate: 4.99,
      monthly: calculateEMI(price, 4.99, 24)
    }
  ];
}, [product, selectedVariant]);

const selectedPlan = useMemo(() => {
  return (
    emiPlans.find((plan) => plan.id === selectedPlanId) ||
    emiPlans[0]
  );
}, [emiPlans, selectedPlanId]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-onefi-100 border-t-onefi-600" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-2xl font-bold">Product unavailable</h1>
          <p className="mt-2 text-gray-500">{error || "Product not found."}</p>
          <button onClick={() => navigate("/marketplace")} className="primary-button mt-5">
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32">
      <header className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur">
        <div className="page-container flex h-16 items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-full p-2 hover:bg-gray-100"
            aria-label="Go back"
          >
            <ArrowLeft />
          </button>
          <h1 className="font-bold">Product Details</h1>
        </div>
      </header>

      <main className="page-container py-6">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.9fr]">
          <section className="surface overflow-hidden">
            <div className="flex min-h-[420px] items-center justify-center bg-gray-50 p-8">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[390px] w-full object-contain mix-blend-multiply"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-onefi-600">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{product.rating}</span>
                <span className="text-gray-400">•</span>
                <span>{product.brand}</span>
              </div>

              <h2 className="mt-2 text-3xl font-extrabold">{product.name}</h2>
              <p className="mt-3 text-gray-500">{product.description}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {product.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={17} className="text-onefi-600" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="space-y-5">
            <section className="surface p-6">
              <p className="text-sm font-semibold text-gray-500">Price</p>
              <p className="mt-1 text-4xl font-extrabold">
                {formatCurrency(selectedVariant.price)}
              </p>

              <div className="mt-7">
                <h3 className="font-bold">Choose Variant</h3>
                <div className="mt-3 grid gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setVariantId(variant.id)}
                      className={`rounded-2xl border-2 p-4 text-left ${
                        selectedVariant.id === variant.id
                          ? "border-onefi-600 bg-onefi-50"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <p className="font-semibold">{variant.label}</p>
                      <p className="mt-1 text-sm text-gray-500">
                        {formatCurrency(variant.price)}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <EmiPlanSelector
              plans={emiPlans}
              selectedPlanId={selectedPlan.id}
              onSelect={(plan) => setSelectedPlanId(plan.id)}
            />

            <section className="surface p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 text-onefi-600" />
                <div>
                  <h3 className="font-bold">Selected EMI</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {selectedPlan.months} months at {selectedPlan.rate}% p.a.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-end justify-between border-t pt-5">
                <div>
                  <p className="text-sm text-gray-500">Monthly payment</p>
                  <p className="text-2xl font-extrabold">
                    {formatCurrency(selectedPlan.monthly)}
                    <span className="text-base font-normal text-gray-400">/mo</span>
                  </p>
                </div>

                <span className="rounded-full bg-onefi-50 px-3 py-1 text-xs font-bold text-onefi-700">
                  Plan selected
                </span>
              </div>

              <button
                onClick={() =>
                  alert(
                    `Proceeding with ${selectedPlan.months}-month EMI for ${product.name}.`
                  )
                }
                className="primary-button mt-6 w-full py-4 text-base"
              >
                Proceed with EMI
              </button>
            </section>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
