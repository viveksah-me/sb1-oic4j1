import HeroSection from '@/components/HeroSection'
import FeaturedTalent from '@/components/FeaturedTalent'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <FeaturedTalent />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  )
}