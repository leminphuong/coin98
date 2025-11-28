interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Slug: {slug}</h1>
      <p className="text-gray-600">
        Đây là trang động đã được build thành HTML tĩnh.
      </p>
    </main>
  );
}
