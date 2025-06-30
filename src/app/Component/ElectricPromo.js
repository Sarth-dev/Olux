import { Leaf, PlugZap } from 'lucide-react'; // Optional icons

export default function ElectricPromo() {
  return (
    <div className="bg-teal-50 border border-teal-300 mb-10 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition duration-300 max-w-6xl mx-auto mt-12">
      
      {/* Left - Icon and text */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="text-teal-600 animate-pulse">
          <PlugZap size={40} />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-teal-700">Go Green, Go Electric.</h3>
          <p className="text-gray-700 mt-1 text-sm md:text-base">
            40+ electric bikes and scooters
          </p>
        </div>
      </div>

      {/* Right - Buttons */}
      <div className="flex gap-4 flex-wrap">
        <button className="px-4 py-2 text-teal-600 border border-teal-600 rounded-md hover:bg-teal-600 hover:text-white transition font-medium">
          <a href="/electric">Electric Bikes</a>
        </button>
        <button className="px-4 py-2 text-teal-600 border border-teal-600 rounded-md hover:bg-teal-600 hover:text-white transition font-medium">
        <a href="electric">  Electric Scooter</a>
        </button>
      </div>
    </div>
  );
}
