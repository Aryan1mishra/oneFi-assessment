export default function ShopHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-700 to-purple-600 text-white">
      <div className="page-container relative min-h-[330px] py-12 sm:min-h-[380px]">
        <div className="max-w-xl">
          <div className="mb-5 inline-flex rounded-full border border-white/70 px-4 py-2 text-sm font-bold tracking-wider">
            ✨ NO-COST EMIs
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.02] sm:text-6xl">
            Shop today,
            <br />
            <span className="font-normal italic">Pay later using</span>
            <br />
            Mutual funds.
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
            No credit score required. No interest.
            <br />
            Backed by your investments.
          </p>
        </div>

        <div className="pointer-events-none absolute -right-16 bottom-0 hidden h-full w-[48%] sm:block">
          <div className="absolute right-12 top-16 rotate-6 text-8xl">📱</div>
          <div className="absolute right-2 top-28 -rotate-6 text-8xl">💻</div>
          <div className="absolute right-24 top-44 text-7xl">🚗</div>
          <div className="absolute right-0 top-48 rotate-12 text-7xl">🏍️</div>
          <div className="absolute bottom-0 right-28 text-8xl">🛍️</div>
        </div>
      </div>
    </section>
  );
}
