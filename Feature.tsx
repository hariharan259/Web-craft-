import { Shield, Clock, CreditCard, Headphones } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure Booking',
    description: 'Your personal and payment information is always protected',
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Book your tickets anytime, anywhere with our round-the-clock service',
  },
  {
    icon: CreditCard,
    title: 'Easy Payments',
    description: 'Multiple payment options for your convenience',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Our dedicated team is always ready to assist you',
  },
]

export default function Features() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-red-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

