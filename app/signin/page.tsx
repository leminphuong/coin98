export default function SigninPage() {
  return (
    <main className="max-w-md mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>

      <form className="space-y-5">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded-md"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded-md"
            placeholder="••••••••"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-3">
          Sign In
        </button>
      </form>
    </main>
  );
}
