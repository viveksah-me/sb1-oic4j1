import Link from 'next/link'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Top 3% of Remote Talent at Your Fingertips</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        Pera Infotech connects you with elite remote professionals across various industries. Build your dream team today.
      </p>
      <div className="flex justify-center space-x-4">
        <Button asChild size="lg">
          <Link href="/hire">Hire Top Talent</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/apply">Apply as Talent</Link>
        </Button>
      </div>
    </section>
  )
}

export default HeroSection