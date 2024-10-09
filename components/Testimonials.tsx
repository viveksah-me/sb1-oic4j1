'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CTO, TechCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    quote: 'Pera Infotech has been instrumental in helping us scale our development team. The talent they provided is top-notch.',
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager, InnovateCo',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    quote: 'The designers we hired through Pera Infotech have transformed our product. Their expertise and creativity are unmatched.',
  },
]

const Testimonials = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <CardHeader>
              <div className="flex items-center mb-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

const ImageWithFallback = (props) => {
  const { src, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc('/placeholder.png') // Make sure to add a placeholder image in your public folder
      }}
    />
  )
}

export default Testimonials