'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';

const electricBikes = [
  {
    name: 'Joy e-bike Monster',
    rating: 3.7,
    speed: '25 Kmph',
    range: '75 Km',
    weight: '93 kg',
    chargeTime: '4.5 Hrs',
    price: '₹ 1,00,500',
    image: '/bikes/yamaha mt15.webp',
  },
  {
    name: 'Revolt RV 400',
    rating: 4.2,
    speed: '85 Kmph',
    range: '150 Km',
    weight: '108 kg',
    chargeTime: '4.5 Hrs',
    price: '₹ 1,39,000',
    image: '/bikes/rs 200.webp',
  },
  {
    name: 'Ather 450X',
    rating: 4.6,
    speed: '90 Kmph',
    range: '146 Km',
    weight: '111 kg',
    chargeTime: '5 Hrs',
    price: '₹ 1,44,921',
    image: '/bikes/hunter350re.webp',
  },
  {
    name: 'Joy e-bike Monster',
    rating: 3.7,
    speed: '25 Kmph',
    range: '75 Km',
    weight: '93 kg',
    chargeTime: '4.5 Hrs',
    price: '₹ 1,00,500',
    image: '/bikes/yamaha mt15.webp',
  },
  {
    name: 'Revolt RV 400',
    rating: 4.2,
    speed: '85 Kmph',
    range: '150 Km',
    weight: '108 kg',
    chargeTime: '4.5 Hrs',
    price: '₹ 1,39,000',
    image: '/bikes/rs 200.webp',
  },
  {
    name: 'Ather 450X',
    rating: 4.6,
    speed: '90 Kmph',
    range: '146 Km',
    weight: '111 kg',
    chargeTime: '5 Hrs',
    price: '₹ 1,44,921',
    image: '/bikes/hunter350re.webp',
  },
];

export default function ElectricBikeSliderSwiper() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Explore Bikes</h2>

      <Swiper
        loop={true}
        spaceBetween={20}
        slidesPerView={1.1}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={2500} // Smooth speed
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {electricBikes.map((bike, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-teal-300 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="flex flex-col md:flex-row items-center gap-4 p-4">
                
                {/* Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="h-28 object-contain"
                  />
                </div>

                {/* Info */}
                <div className="w-full md:w-2/3">
                  <h3 className="text-lg font-semibold text-red-600">{bike.name}</h3>
                  <div className="flex items-center text-sm text-gray-800 mt-1">
                    <Star className="fill-yellow-400 text-yellow-400 mr-1" size={16} />
                    {bike.rating}/5 <span className="ml-2 font-medium">Ratings</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    {bike.speed} | {bike.range} | {bike.weight} | {bike.chargeTime}
                  </p>
                  <div className="text-lg font-bold text-black mt-2">{bike.price}</div>
                  <button className="mt-3 px-4 py-1.5 border border-cyan-500 text-cyan-500 font-medium rounded-md hover:bg-cyan-500 hover:text-white transition w-fit">
                    Check on site
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
