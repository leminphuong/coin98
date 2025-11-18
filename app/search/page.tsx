export default function SearchPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Search</h1>

      <input
        type="text"
        placeholder="Search..."
        className="w-full border px-4 py-2 rounded-md"
      />
    </main>
  );
}
