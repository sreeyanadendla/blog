import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        {/* Logo - Left */}
        <Link href="/" className="text-2xl font-serif text-rose-300 cursor-pointer hover:text-rose-200 transition-colors">
          SN
        </Link>
        
        {/* Navigation - Right */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide cursor-pointer">Home</Link>
          <Link href="/travel" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide cursor-pointer">Travel</Link>
          <Link href="/tech" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide cursor-pointer">Tech</Link>
          <Link href="/other" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide cursor-pointer">Other</Link>
          <button className="bg-rose-300 text-black px-5 py-2 rounded-full hover:bg-rose-200 transition-colors font-light tracking-wide cursor-pointer">
            Search
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="flex items-start space-x-8 mb-16 mt-8">
          {/* Profile Picture */}
          <div className="w-48 h-48 bg-rose-200 rounded-full flex items-center justify-center text-4xl font-serif text-black">
            SN
          </div>
          
          {/* Name and Caption */}
          <div className="flex-1 pt-8">
            <h1 className="text-5xl font-serif text-white mb-4 font-light">
              Sreeya Nadendla
            </h1>
            <p className="text-xl text-gray-300 font-light italic tracking-wide">
              a little idea that wouldn't leave me alone, now it lives here.
            </p>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-rose-300 mb-8 font-light">Latest Adventures</h2>
          
          {/* Travel Book Covers Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Travel Book 1 */}
            <Link href="/travel" className="group cursor-pointer">
              <div className="bg-yellow-300 p-8 rounded-lg h-80 flex flex-col justify-between hover:scale-105 transition-transform">
                <div>
                  <div className="text-black text-xs font-light mb-2 tracking-wider">001</div>
                  <div className="text-black text-xs font-light mb-4 tracking-wider">Le Périple</div>
                  <h3 className="text-black text-2xl font-serif font-light">Tokyo</h3>
                </div>
                <div className="text-black text-xs font-light">
                  Cherry blossoms and city lights
                </div>
              </div>
            </Link>

            {/* Travel Book 2 */}
            <Link href="/travel" className="group cursor-pointer">
              <div className="bg-blue-300 p-8 rounded-lg h-80 flex flex-col justify-between hover:scale-105 transition-transform">
                <div>
                  <div className="text-black text-xs font-light mb-2 tracking-wider">002</div>
                  <div className="text-black text-xs font-light mb-4 tracking-wider">Le Périple</div>
                  <h3 className="text-black text-2xl font-serif font-light">Europe</h3>
                </div>
                <div className="text-black text-xs font-light">
                  Cobblestone streets and museums
                </div>
              </div>
            </Link>

            {/* Travel Book 3 */}
            <Link href="/travel" className="group cursor-pointer">
              <div className="bg-green-300 p-8 rounded-lg h-80 flex flex-col justify-between hover:scale-105 transition-transform">
                <div>
                  <div className="text-black text-xs font-light mb-2 tracking-wider">003</div>
                  <div className="text-black text-xs font-light mb-4 tracking-wider">Le Périple</div>
                  <h3 className="text-black text-2xl font-serif font-light">Bali</h3>
                </div>
                <div className="text-black text-xs font-light">
                  Temple visits and sunset beaches
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Tech Section Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-rose-300 mb-8 font-light">Tech Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/tech" className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-rose-300 transition-colors cursor-pointer">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-white mb-3 font-light">My First Website</h3>
                <p className="text-gray-300 text-sm font-light">Building this blog from scratch with Next.js</p>
              </div>
            </Link>
            <Link href="/tech" className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-rose-300 transition-colors cursor-pointer">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-white mb-3 font-light">Learning to Code</h3>
                <p className="text-gray-300 text-sm font-light">My journey into web development</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Other Section Preview */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif text-rose-300 mb-8 font-light">Everything Else</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/other" className="bg-rose-200 p-6 rounded-lg text-black text-center hover:bg-rose-100 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">📚</div>
              <h4 className="font-light tracking-wide">Book Reviews</h4>
            </Link>
            <Link href="/other" className="bg-orange-200 p-6 rounded-lg text-black text-center hover:bg-orange-100 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">🎨</div>
              <h4 className="font-light tracking-wide">Creative Projects</h4>
            </Link>
            <Link href="/other" className="bg-purple-200 p-6 rounded-lg text-black text-center hover:bg-purple-100 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">💭</div>
              <h4 className="font-light tracking-wide">Random Thoughts</h4>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-rose-300 mb-8 font-light">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-white font-light mb-4 tracking-wide">Get in Touch</h3>
              <p className="text-gray-300 font-light mb-2">email@sreyya.com</p>
              <p className="text-gray-300 font-light">Based in [Your City]</p>
            </div>
            <div>
              <h3 className="text-white font-light mb-4 tracking-wide">Follow Along</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://instagram.com/sreeya_nadendla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-rose-300 transition-colors font-light"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-rose-300 transition-colors font-light"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-rose-300 transition-colors font-light"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500 font-light text-sm">© 2025 Sreeya Nadendla</p>
          </div>
        </div>
      </div>
    </div>
  );
}
