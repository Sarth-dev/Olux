import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Amit Sharma',
    rating: 5,
    message: 'Best platform to explore bikes! Smooth experience and very informative. Got my dream bike through Olux!',
    image: './brands/Honda.jpg',
  },
  {
    name: 'Priya Mehta',
    rating: 4,
    message: 'Loved the UI and filters! Helped me compare electric bikes in seconds. Highly recommend Olux!',
    image: './brands/BMW.jpg' || 'nA',
  },
  {
    name: 'Rahul Verma',
    rating: 5,
    message: 'Very easy to use. Found the best mileage bike for daily commute. Reliable and trustworthy!',
    image: './brands/royal-enfield.jpg',
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 mb-12">Real Reviews from Happy Bikers across India 🚴</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? 'fill-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{review.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
