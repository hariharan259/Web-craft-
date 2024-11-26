import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PopularRoutes from '@/components/PopularRoutes'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      <Header />
      <main>
        <HeroSection />
        <PopularRoutes />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
