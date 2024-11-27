import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About RedBus Clone</h3>
            <p className="text-sm">We are committed to providing the best bus booking experience for our customers.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Info</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-red-300">About Us</a></li>
              <li><a href="#" className="hover:text-red-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-red-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-300">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Global Sites</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-red-300">VSB-webcraft.in</a></li>
              <li><a href="#" className="hover:text-red-300">m.bharat.in</a></li>
              <li><a href="#" className="hover:text-red-300">redbus@bhar.in</a></li>
              <li><a href="#" className="hover:text-red-300">redbus•bharath.in</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-300"><Facebook /></a>
              <a href="#" className="hover:text-red-300"><Twitter /></a>
              <a href="#" className="hover:text-red-300"><Instagram /></a>
              <a href="#" className="hover:text-red-300"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-red-700 text-center text-sm">
          <p>&copy; 2023 RedBus-bharathVSBian. web craft//All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


