import { Search, MapPin, Calendar } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Bus Tickets</h1>
        <p className="text-xl mb-8">Travel with comfort and convenience</p>
        <form className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="From"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="To"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-red-600 to-red-800 text-white py-2 px-4 rounded-md hover:from-red-700 hover:to-red-900 transition duration-300 ease-in-out flex items-center justify-center"
            >
              <Search className="mr-2" />
              Search Buses
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

