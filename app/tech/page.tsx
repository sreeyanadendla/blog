import Link from 'next/link';

export default function Tech() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="text-2xl font-serif text-rose-300">SN</div>
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide">Home</Link>
          <Link href="/travel" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide">Travel</Link>
          <Link href="/tech" className="text-rose-300 font-light tracking-wide">Tech</Link>
          <Link href="/other" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide">Other</Link>
          <button className="bg-rose-300 text-black px-5 py-2 rounded-full hover:bg-rose-200 transition-colors font-light tracking-wide">Search</button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6 pt-12">
        <h1 className="text-4xl font-serif text-white mb-4 font-light">Projects</h1>
        <p className="text-gray-400 font-light tracking-wide mb-12">Showcase of some of my projects</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Card */}
          <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="h-64 bg-gray-700 flex items-center justify-center">
              <div className="text-gray-500 text-lg font-light">Project Image</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-white mb-3 font-light">My Personal Website</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-4">
                A Next.js-powered website that lets me share my thoughts on technology, travel, and everything in between. Built from scratch with a focus on clean design and user experience.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-rose-300 hover:text-rose-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
