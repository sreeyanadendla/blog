import Link from 'next/link';

export default function Travel() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="text-2xl font-serif text-rose-300">SN</div>
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide">Home</Link>
          <Link href="/travel" className="text-rose-300 font-light tracking-wide">Travel</Link>
          <Link href="/tech" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide">Tech</Link>
          <Link href="/other" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide">Other</Link>
          <button className="bg-rose-300 text-black px-5 py-2 rounded-full hover:bg-rose-200 transition-colors font-light tracking-wide">Search</button>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-6xl mx-auto p-6 pt-12">
        <h1 className="text-4xl font-serif text-white mb-4 font-light">Travel</h1>
        <p className="text-gray-300 font-light tracking-wide mb-12">Adventures from around the world</p>

        {/* Travel Books Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Book 1 - Yellow */}
          <div className="cursor-pointer hover:scale-105 transition-transform">
            <div className="bg-yellow-300 p-6 rounded-lg h-96 flex flex-col justify-between">
              <div>
                <div className="text-black text-xs font-light mb-2 tracking-wider">001</div>
                <div className="text-black text-xs font-light mb-4 tracking-wider">Le Périple</div>
              </div>
              <div>
                <h3 className="text-black text-2xl font-serif font-light mb-2">Tokyo</h3>
                <div className="text-black text-xs font-light">Spring 2024</div>
              </div>
            </div>
          </div>

          {/* Book 2 - Blue */}
          <div className="cursor-pointer hover:scale-105 transition-transform">
            <div className="bg-blue-300 p-6 rounded-lg h-96 flex flex-col justify-between">
              <div>
                <div className="text-black text-xs font-light mb-2 tracking-wider">002</div>
                <div className="text-black text-xs font-light mb-4 tracking-wider">Le Périple</div>
              </div>
              <div>
                <h3 className="text-black text-2xl font-serif font-light mb-2">Europe</h3>
                <div className="text-black text-xs font-light">Summer 2024</div>
              </div>
            </div>
          </div>

          {/* Book 3 - Green */}
          <div className="cursor-pointer hover:scale-105 transition-transform">
            <div className="bg-green-300 p-6 rounded-lg h-96 flex flex-col justify-between">
              <div>
                <div className="text-black text-xs font-light mb-2 tracking-wider">003</div>
                <div className="text-black text-xs font-light mb-4 tracking-wider">Le Périple</div>
              </div>
              <div>
                <h3 className="text-black text-2xl font-serif font-light mb-2">Bali</h3>
                <div className="text-black text-xs font-light">Fall 2024</div>
              </div>
            </div>
          </div>

          {/* Book 4 - Red */}
          <div className="cursor-pointer hover:scale-105 transition-transform">
            <div className="bg-red-300 p-6 rounded-lg h-96 flex flex-col justify-between">
              <div>
                <div className="text-black text-xs font-light mb-2 tracking-wider">004</div>
                <div className="text-black text-xs font-light mb-4 tracking-wider">Le Périple</div>
              </div>
              <div>
                <h3 className="text-black text-2xl font-serif font-light mb-2">Morocco</h3>
                <div className="text-black text-xs font-light">Winter 2024</div>
              </div>
            </div>
          </div>

          {/* Book 5 - Purple */}
          <div className="cursor-pointer hover:scale-105 transition-transform">
            <div className="bg-purple-300 p-6 rounded-lg h-96 flex flex-col justify-between">
              <div>
                <div className="text-black text-xs font-light mb-2 tracking-wider">005</div>
                <div className="text-black text-xs font-light mb-4 tracking-wider">Le Périple</div>
              </div>
              <div>
                <h3 className="text-black text-2xl font-serif font-light mb-2">Iceland</h3>
                <div className="text-black text-xs font-light">Coming Soon</div>
              </div>
            </div>
          </div>

          {/* Book 6 - Orange */}
          <div className="cursor-pointer hover:scale-105 transition-transform">
            <div className="bg-orange-300 p-6 rounded-lg h-96 flex flex-col justify-between">
              <div>
                <div className="text-black text-xs font-light mb-2 tracking-wider">006</div>
                <div className="text-black text-xs font-light mb-4 tracking-wider">Le Périple</div>
              </div>
              <div>
                <h3 className="text-black text-2xl font-serif font-light mb-2">Mexico</h3>
                <div className="text-black text-xs font-light">Coming Soon</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}