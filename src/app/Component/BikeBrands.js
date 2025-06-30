const brands = [
  {
    name: "Royal Enfield",
    img: "./brands/royal-enfield.jpg",
  },
  {
    name: "Honda",
    img: "./brands/Honda.jpg",
  },
  {
    name: "Hero",
    img: "./brands/Hero.jpg",
  },
  {
    name: "Bajaj",
    img: "./brands/Bajaj.jpg",
  },
  {
    name: "Yamaha",
    img: "./brands/Yamaha.jpg",
  },
  {
    name: "TVS",
    img: "./brands/TVS.jpg",
  },
  {
    name: "Kawasaki",
    img: "./brands/Kawasaki.jpg",
  },
  {
    name: "KTM",
    img: "./brands/KTM.jpg"
  },
  {
    name: "BMW",
    img: "./brands/BMW.jpg",
  },
  {
    name: "Triumph",
    img: "./brands/TRIUMPH.jpg",
  },
];

export default function BikeBrandsSection() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Explore Bikes in India</h2>
      <p className="text-gray-100 mb-10 max-w-4xl">
        Finding the right bike can be a complicated process for most of us.
        Olux helps you in making this process easier. You can search bikes
        based on brands. Explore all the new bike models with their price in
        India. Olux brings you all the updates & expert reviews related to new
        bikes in India. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cum.
      </p>

      <h3 className="text-2xl font-semibold mb-6">Browse Bikes By</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="border p-4 flex flex-col items-center hover:shadow-lg bg-white text-gray-800 transition rounded-md"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="h-12 object-cover mb-2"
            />
            <span className="text-sm text-center">{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
