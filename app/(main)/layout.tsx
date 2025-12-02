import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      
      <main className="flex flex-col flex-1 pt-1600 md:pt-sp160">
        {children}
      </main>
      <Footer />
    </>
  );
}
