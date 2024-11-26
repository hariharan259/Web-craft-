import Link from 'next/link'
import { Bus, User, HelpCircle } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
          <Bus size={32} />
          <span>RedBus.hari</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#" className="flex items-center space-x-1 hover:text-red-200">
                <User size={18} />
                <span>Account</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-1 hover:text-red-200">
                <HelpCircle size={18} />
                <span>Help</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


