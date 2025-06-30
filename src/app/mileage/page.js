'use client';

import Footer from "../Component/utils/Footer";
import NavBar from "../Component/utils/Navbar";
import MileageBanner from "./MileageBanner";

const mileageBikes = [
  {
    name: 'Bajaj Platina 100',
    price: '₹ 75,691',
    city: 'Sambhajinagar',
    image: './bikes/r15.webp',
  },
  {
    name: 'Bajaj Platina 110',
    price: '₹ 83,665',
    city: 'Sambhajinagar',
    image: './bikes/rs 200.webp',
  },
  {
    name: 'TVS Sports',
    price: '₹ 79,150',
    city: 'Sambhajinagar',
    image: './bikes/tvs raider.webp',
  },
  {
    name: 'Bajaj Platina 100',
    price: '₹ 75,691',
    city: 'Sambhajinagar',
    image: './bikes/r15.webp',
  },
  {
    name: 'Bajaj Platina 110',
    price: '₹ 83,665',
    city: 'Sambhajinagar',
    image: './bikes/rs 200.webp',
  },
  {
    name: 'TVS Sports',
    price: '₹ 79,150',
    city: 'Sambhajinagar',
    image: './bikes/tvs raider.webp',
  },
];

export default function MileageBikesSection() {
  return (
   <>
   <NavBar/>
   <MileageBanner/>
     <section className="max-w-7xl bg-gray-800  mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Mileage Bikes</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {mileageBikes.map((bike, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            {/* Image */}
            <div className="p-4">
              <img
                src={bike.image}
                alt={bike.name}
                className="h-40 w-full object-contain mx-auto"
              />
            </div>

            {/* Details */}
            <div className="bg-gray-50 px-4 py-4 rounded-b-xl">
              <h3 className="text-lg font-medium text-gray-800">{bike.name}</h3>

              <p className="text-xl font-bold text-black mt-1">
                {bike.price} <span className="text-sm font-medium text-gray-400">Onwards</span>
              </p>

              <p className="text-sm text-gray-600">On Road Price {bike.city}</p>

              <a href="/product"><button className="mt-3 w-full border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition font-semibold rounded-md py-1.5">
                Buy
              </button></a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
   </>
  );
}
