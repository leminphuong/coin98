export default function Footer() {
  return (
    <footer className="border-t bg-white py-8 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Coin98 Clone — Built with ❤️ using Next.js & Tailwind CSS</p>
      <p className="text-xs mt-2">
        Inspired by Coin98.net | Powered by WordPress REST API
      </p>
    </footer>
  );
}
