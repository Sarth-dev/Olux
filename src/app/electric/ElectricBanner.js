export default function ElectricBanner() {
  return (
    <div
      className="bg-cover bg-center text-white py-14 px-6  rounded-b-xl shadow-md"
      style={{
        backgroundImage: `url('./bikes/electricbanner.avif')`,
      }}
    >
      <div className="max-w-4xl mx-auto bg-black/20 p-6 rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Explore Electric Bikes & Scooter
        </h1>
        <p className="text-sm md:text-base text-white/90">
          Save fuel, ride longer. Discover bikes that give you the best mileage across India.
        </p>
      </div>
    </div>
  );
}
