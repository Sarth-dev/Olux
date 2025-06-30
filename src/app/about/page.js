import Footer from "../Component/utils/Footer";
import NavBar from "../Component/utils/Navbar";



export default function AboutUs() {
  return (
    <>
    <NavBar/>
      <div className="bg-white text-gray-800 px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Olux</h1>
          <p className="text-lg text-gray-600">
            Your trusted destination for discovering and comparing bikes in India.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/bikes/banner.avif"
            alt="Olux Mission"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Olux, we believe that finding the perfect bike should be easy, enjoyable, and insightful.
              Whether you're looking for a fuel-efficient daily rider, a sporty beast, or an eco-friendly electric scooter — we've got it all covered.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Bike Comparisons</h3>
              <p className="text-sm text-gray-600">Compare mileage, price, features, and more to make smarter choices.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Expert Reviews</h3>
              <p className="text-sm text-gray-600">Stay updated with honest reviews and insights from biking enthusiasts.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Sell & Discover</h3>
              <p className="text-sm text-gray-600">Post your old bike or discover great deals on second-hand rides.</p>
            </div>
          </div>
        </div>

        {/* Team / Trust Section */}
        <div className="bg-gray-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Built for Riders, by Riders</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We’re a passionate team of bikers, techies, and storytellers dedicated to making your two-wheeler journey more informed and exciting.
            Join thousands of users across India who trust Olux to explore their next ride.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-10">
          <h3 className="text-xl font-semibold mb-3">Ready to explore?</h3>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Browse Bikes
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
