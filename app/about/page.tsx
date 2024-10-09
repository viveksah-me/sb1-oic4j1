import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">About Pera Infotech</h1>
      <p className="mb-6 text-lg">
        Pera Infotech is a leading remote staffing firm dedicated to connecting businesses with top-tier talent from around the world. Our mission is to bridge the gap between companies seeking skilled professionals and individuals looking for rewarding remote work opportunities.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
      <p className="mb-6 text-lg">
        We envision a future where geographical boundaries no longer limit talent acquisition. By leveraging technology and our extensive network, we aim to create a global workforce that drives innovation and growth for businesses of all sizes.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">Our Values</h2>
      <ul className="mb-6 list-inside list-disc text-lg">
        <li>Excellence in service delivery</li>
        <li>Integrity in all our interactions</li>
        <li>Innovation in remote work solutions</li>
        <li>Commitment to client and talent success</li>
      </ul>
      <h2 className="mb-4 text-2xl font-semibold">Why Choose Us?</h2>
      <p className="mb-6 text-lg">
        With years of experience in the remote staffing industry, Pera Infotech has developed a robust process for matching the right talent with the right opportunities. Our team of experts understands the unique challenges of remote work and provides ongoing support to ensure successful collaborations.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}