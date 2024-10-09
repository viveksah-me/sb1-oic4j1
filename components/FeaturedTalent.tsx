'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

const featuredTalent = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Full-Stack Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    skills: ['React', 'Node.js', 'Python', 'AWS'],
  },
  {
    name: 'Michael Chen',
    role: 'UX/UI Designer',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research'],
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    skills: ['Python', 'Machine Learning', 'SQL', 'Data Visualization'],
  },
]

const FeaturedTalent = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Talent</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredTalent.map((talent) => (
          <Card key={talent.name}>
            <CardHeader>
              <ImageWithFallback
                src={talent.image}
                alt={talent.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <CardTitle className="text-center">{talent.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-4">{talent.role}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {talent.skills.map((skill) => (
                  <span key={skill} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
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

export default FeaturedTalent