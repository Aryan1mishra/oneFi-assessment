import { Check } from "lucide-react";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

export default function EmiPlanSelector({ plans, selectedPlanId, onSelect }) {
  return (
    <section className="surface overflow-hidden">
      <div className="border-b bg-gray-50 px-5 py-4">
        <h2 className="text-lg font-bold">Choose EMI Plan</h2>
        <p className="mt-1 text-sm text-gray-500">
          Select the plan that works best for you.
        </p>
      </div>

      <div>
        {plans.map((plan) => {
          const selected = selectedPlanId === plan.id;

          return (
            <button
              key={plan.id}
              onClick={() => onSelect(plan)}
              className={`flex w-full items-center justify-between gap-4 border-b px-5 py-5 text-left transition last:border-b-0 ${
                selected ? "bg-onefi-50" : "bg-white hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    selected
                      ? "border-onefi-600 bg-onefi-600 text-white"
                      : "border-gray-300"
                  }`}
                >
                  {selected && <Check size={14} />}
                </span>

                <div>
                  <p className="font-semibold text-gray-900">
                    {plan.months} months
                  </p>
                  <p className="text-sm text-gray-500">
                    {plan.rate}% p.a.
                  </p>
                </div>
              </div>

              <p className="font-bold text-gray-950">
                {formatCurrency(plan.monthly)}
                <span className="font-normal text-gray-400"> /mo</span>
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
