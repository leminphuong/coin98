export default function ReportPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">Report</h1>

      <p className="text-gray-600 mb-6">
        You can send us your feedback or report an issue using the form below.
      </p>

      <textarea
        className="w-full border rounded-md p-3"
        rows={5}
        placeholder="Describe your issue..."
      ></textarea>

      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md">
        Submit
      </button>
    </main>
  );
}
