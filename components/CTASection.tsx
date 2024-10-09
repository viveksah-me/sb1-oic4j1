import Link from 'next/link'
import { Button } from '@/components/ui/button'

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of companies that have found their perfect remote talent match with Pera Infotech.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/hire">Get Started Today</Link>
        </Button>
      </div>
    </section>
  )
}

export default CTASection