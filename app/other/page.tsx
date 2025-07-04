import Link from 'next/link';

export default function Other() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
      <Link href="/" className="text-2xl font-serif text-rose-300 cursor-pointer hover:text-rose-200 transition-colors">
  SN
</Link>

        <div className="flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide">Home</Link>
          <Link href="/travel" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide">Travel</Link>
          <Link href="/tech" className="text-white hover:text-rose-300 transition-colors font-light tracking-wide">Tech</Link>
          <Link href="/other" className="text-rose-300 font-light tracking-wide">Other</Link>
          <button className="bg-rose-300 text-black px-5 py-2 rounded-full hover:bg-rose-200 transition-colors font-light tracking-wide">Search</button>
        </div>
      </nav>

      {/* Coming Soon Content */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-6xl font-serif text-rose-300 mb-8 font-light">Coming Soon!</h1>
          <p className="text-gray-400 text-xl font-light italic">This section is under construction</p>
        </div>
      </div>
    </div>
  );
}