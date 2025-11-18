interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Slug: {params.slug}</h1>
      <p className="text-gray-600">Đây là trang động đã được build thành HTML tĩnh.</p>
    </main>
  );
}
export async function generateStaticParams() {
  return [
    { slug: "btc" },
    { slug: "eth" },
    { slug: "sol" },
  ];
}
