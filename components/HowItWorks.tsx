import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Users, Briefcase } from 'lucide-react'

const steps = [
  {
    title: 'Tell us what you need',
    description: 'Share your project requirements and the skills you\'re looking for.',
    icon: CheckCircle,
  },
  {
    title: 'We match you with top talent',
    description: 'Our AI-powered system finds the best-suited professionals for your needs.',
    icon: Users,
  },
  {
    title: 'Start working together',
    description: 'Begin your project with confidence, backed by our support team.',
    icon: Briefcase,
  },
]

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="bg-background">
                <CardHeader>
                  {IconComponent && <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />}
                  <CardTitle className="text-center">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks