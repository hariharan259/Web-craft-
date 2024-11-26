import { ArrowRight } from 'lucide-react'

const routes = [
  { from:'coimbatore', to: 'chennai', price: '₹1000' },
  { from: 'karur', to: 'coimbatore', price: '₹500' },
  { from: 'vellakovil', to: 'karur', price: '₹300' },
  { from: 'trichy', to: 'vellakovil', price: '₹600' },
]

export default function PopularRoutes() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-100 to-red-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-red-800">Popular Routes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-800">{route.from}</span>
                <ArrowRight className="text-red-600" />
                <span className="text-lg font-semibold text-gray-800">{route.to}</span>
              </div>
              <div className="text-2xl font-bold text-red-600">{route.price}</div>
              <button className="mt-4 w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-2 px-4 rounded-md hover:from-red-700 hover:to-red-900 transition duration-300 ease-in-out">
                Book Now✨
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

    
