import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-purple-600 text-black px-6 py-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4">OLUX</h2>
          <p className="text-sm leading-relaxed">
            Ride smarter with us — explore Mileage, Electric & Sports bikes all in one place.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/mileage">Mileage Bikes</Link></li>
            <li><Link href="/sports">Sports</Link></li>
            <li><Link href="/electric">Electric</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/sell">Sell</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/user">User</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-12 text-center text-xs border-t border-purple-700 pt-6">
        © {new Date().getFullYear()} olux. All rights reserved.
      </div>
    </footer>
  );
}
