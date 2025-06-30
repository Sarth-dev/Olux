const sportsBikes = [
  {
    name: 'Bajaj Pulsar RS 200',
    price: '₹ 96,500',
    image: './bikes/rs 200.webp',
  },
  {
    name: 'Yamaha R15 V4',
    price: '₹ 1,49,900',
    image: './bikes/r15.webp',
  },
  {
    name: 'Aprilla RS 457',
    price: '₹ 1,68,708',
    image: './bikes/rs 457.webp',
  },
];

export default function SportsBikes() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-2">Sports Bikes</h2>
      <h3 className="text-xl font-semibold text-gray-200 mb-6">Trending of January</h3>
      <hr className="mb-8 border-gray-300" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sportsBikes.map((bike) => (
          <div
            key={bike.name}
            className="bg-white transform scale-95 hover:scale-105 transition-transform  ease-in-out rounded-xl shadow-md hover:shadow-xl  duration-300 border"
          >
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full h-48 object-contain p-4"
            />
            <div className="border-t px-4 py-3">
              <h4 className="text-lg font-medium text-gray-800 mb-1">
                {bike.name}
              </h4>
              <div className="text-md font-bold text-black">
                {bike.price}{' '}
                <span className="text-gray-500 text-sm font-medium">
                  Onwards
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Avg. Ex-Showroom price
              </p>
              
                <a href="/product"><button className="mt-4 w-full border-2 border-cyan-500 text-cyan-500 py-1 rounded-lg hover:bg-cyan-500 hover:text-white transition">
              Buy</button></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
