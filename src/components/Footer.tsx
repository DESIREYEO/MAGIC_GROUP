// components/Footer.tsx

export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-2">
          <p className="text-sm">
            © {new Date().getFullYear()} - Tous droits réservés.
          </p>
          <p className="text-xs text-gray-400">
            Développé avec Next.js ⚡
          </p>
        </div>
      </footer>
    );
  }
  