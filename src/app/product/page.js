'use client';

import { useRouter } from 'next/navigation';
import { Star } from 'lucide-react';
import CustomerReviews from '../Component/Reviews';
import Footer from '../Component/utils/Footer';
import NavBar from '../Component/utils/Navbar';

export default function ProductPage() {
  const router = useRouter();

  const product = {
    name: 'Revolt RV 400',
    image: './bikes/rs 200.webp',
    price: '₹1,39,000',
    rating: 4.3,
    description:
      'The Revolt RV 400 is India’s first AI-enabled electric motorcycle...',
    specs: {
      topSpeed: '85 Kmph',
      range: '150 Km',
      chargeTime: '4.5 Hrs',
      weight: '108 kg',
      battery: '3.24 kWh Lithium-Ion',
    },
  };

  const handleBuyNow = () => {
    router.push('/checkout?product=rv400');
  };

  return (
    <>
      <NavBar />

      <section className="bg-white text-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="w-full flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl shadow-lg max-h-[400px] object-contain"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>

            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.floor(product.rating) ? 'fill-yellow-400' : 'text-gray-300'}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">({product.rating}/5)</span>
            </div>

            <div className="text-2xl font-semibold text-purple-600">{product.price}</div>

            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 text-sm mt-4">
              <div><strong>Top Speed:</strong> {product.specs.topSpeed}</div>
              <div><strong>Range:</strong> {product.specs.range}</div>
              <div><strong>Charge Time:</strong> {product.specs.chargeTime}</div>
              <div><strong>Battery:</strong> {product.specs.battery}</div>
              <div><strong>Weight:</strong> {product.specs.weight}</div>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
            >
              Buy Now
            </button>
            {/* <a href="/checkout">Buy</a> */}
          </div>
        </div>
      </section>

      <CustomerReviews />
      <Footer />
    </>
  );
}
