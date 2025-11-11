// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="text-5xl font-bold mb-4">Apex Launch Studio</h1>
      <p className="text-xl mb-8">
        We build high-performance marketing agency websites using Next.js & Tailwind.
      </p>
      <a
        href="/contact"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Get a free quote
      </a>
    </main>
  );
}
