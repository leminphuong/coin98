export default function Home() {
  return (
    <section className="max-w-5xl mx-auto py-20 text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to Coin98 Clone 🚀
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Explore crypto tutorials, DeFi insights, and blockchain news powered by
        WordPress API — rendered with Next.js 14.
      </p>
      <a
        href="/search"
        className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        Start Searching
      </a>
    </section>
  );
}
