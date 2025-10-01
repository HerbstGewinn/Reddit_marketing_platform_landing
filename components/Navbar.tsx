export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-full border-2 border-brand-500 ring-2 ring-brand-200" />
          <span className="text-lg font-semibold">redditmarketing.co</span>
        </a>
        <nav className="hidden gap-8 text-sm text-gray-600 md:flex">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#reviews" className="hover:text-gray-900">Reviews</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Login</a>
          <a href="#cta" className="btn-primary">Start Growing</a>
        </div>
      </div>
    </header>
  )
}
