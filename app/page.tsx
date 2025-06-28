export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        {/* Logo - Left */}
        <div className="text-2xl font-serif text-pink-400">
          SN
        </div>
        
        {/* Navigation - Right */}
        <div className="flex items-center space-x-8">
          <a href="#" className="text-white hover:text-pink-400 transition-colors font-medium">Home</a>
          <a href="#" className="text-white hover:text-pink-400 transition-colors font-medium">Travel</a>
          <a href="#" className="text-white hover:text-pink-400 transition-colors font-medium">Tech</a>
          <a href="#" className="text-white hover:text-pink-400 transition-colors font-medium">Other</a>
          <button className="bg-pink-500 text-black px-4 py-2 rounded-full hover:bg-pink-400 transition-colors font-medium">
            Search
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="flex items-start space-x-8 mb-16 mt-8">
          {/* Profile Picture */}
          <div className="w-48 h-48 bg-gradient-to-br from-pink-400 to-coral-500 rounded-full flex items-center justify-center text-4xl font-bold text-black">
            SN
          </div>
          
          {/* Name and Caption */}
          <div className="flex-1 pt-8">
            <h1 className="text-5xl font-serif text-white mb-4">
              Sreeya Nadendla
            </h1>
            <p className="text-xl text-gray-300 font-light italic">
              a little idea that wouldn't leave me alone, now it lives here.
            </p>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-pink-400 mb-8">Latest Adventures</h2>
          
          {/* Travel Book Covers Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Travel Book 1 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-pink-300 to-pink-500 p-8 rounded-lg h-80 flex flex-col justify-between hover:scale-105 transition-transform shadow-2xl">
                <div>
                  <div className="text-black text-sm font-medium mb-2">TRAVEL JOURNAL</div>
                  <h3 className="text-black text-2xl font-serif font-bold mb-4">Tokyo Dreams</h3>
                </div>
                <div className="text-black text-sm">
                  <div className="w-16 h-16 bg-black bg-opacity-20 rounded-full mb-4 flex items-center justify-center">
                    🗾
                  </div>
                  <p>Cherry blossoms, neon lights, and the most incredible ramen...</p>
                </div>
              </div>
            </div>

            {/* Travel Book 2 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-coral-300 to-orange-400 p-8 rounded-lg h-80 flex flex-col justify-between hover:scale-105 transition-transform shadow-2xl">
                <div>
                  <div className="text-black text-sm font-medium mb-2">TRAVEL JOURNAL</div>
                  <h3 className="text-black text-2xl font-serif font-bold mb-4">European Escape</h3>
                </div>
                <div className="text-black text-sm">
                  <div className="w-16 h-16 bg-black bg-opacity-20 rounded-full mb-4 flex items-center justify-center">
                    🏰
                  </div>
                  <p>Cobblestone streets, endless museums, and the best gelato...</p>
                </div>
              </div>
            </div>

            {/* Travel Book 3 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-300 to-pink-400 p-8 rounded-lg h-80 flex flex-col justify-between hover:scale-105 transition-transform shadow-2xl">
                <div>
                  <div className="text-black text-sm font-medium mb-2">TRAVEL JOURNAL</div>
                  <h3 className="text-black text-2xl font-serif font-bold mb-4">Bali Bliss</h3>
                </div>
                <div className="text-black text-sm">
                  <div className="w-16 h-16 bg-black bg-opacity-20 rounded-full mb-4 flex items-center justify-center">
                    🌺
                  </div>
                  <p>Sunset beaches, temple visits, and digital nomad life...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-pink-400 mb-8">Tech Thoughts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-pink-400 transition-colors">
              <div className="text-pink-400 text-sm font-medium mb-2">TECHNOLOGY</div>
              <h3 className="text-xl font-serif text-white mb-3">Building My First Website</h3>
              <p className="text-gray-300 text-sm">The journey from idea to reality, and all the coffee in between...</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-pink-400 transition-colors">
              <div className="text-pink-400 text-sm font-medium mb-2">TECHNOLOGY</div>
              <h3 className="text-xl font-serif text-white mb-3">Apps That Changed My Life</h3>
              <p className="text-gray-300 text-sm">Digital tools for the modern traveler and creator...</p>
            </div>
          </div>
        </div>

        {/* Other Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-pink-400 mb-8">Everything Else</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-pink-200 to-pink-300 p-4 rounded-lg text-black text-center">
              <div className="text-2xl mb-2">📚</div>
              <h4 className="font-medium">Book Reviews</h4>
            </div>
            <div className="bg-gradient-to-br from-coral-200 to-coral-300 p-4 rounded-lg text-black text-center">
              <div className="text-2xl mb-2">🎨</div>
              <h4 className="font-medium">Creative Projects</h4>
            </div>
            <div className="bg-gradient-to-br from-purple-200 to-purple-300 p-4 rounded-lg text-black text-center">
              <div className="text-2xl mb-2">💭</div>
              <h4 className="font-medium">Random Thoughts</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 p-6 text-center">
        <div className="text-gray-400 text-sm">
          © 2025 Sreeya Nadendla • Made with ♡ and ctrl+z. lots of ctrl+z.
        </div>
      </footer>
    </div>
  );
}