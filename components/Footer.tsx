import Link from 'next/link'
import { Button } from '@/components/ui/button'

const footerLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/contact', label: 'Contact' },
]

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pera Infotech</h3>
            <p className="text-muted-foreground">Connecting businesses with top remote talent worldwide.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/software-development" className="text-muted-foreground hover:text-primary">Software Development</Link></li>
              <li><Link href="/services/design" className="text-muted-foreground hover:text-primary">Design</Link></li>
              <li><Link href="/services/project-management" className="text-muted-foreground hover:text-primary">Project Management</Link></li>
              <li><Link href="/services/data-science" className="text-muted-foreground hover:text-primary">Data Science</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/press" className="text-muted-foreground hover:text-primary">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <Button asChild variant="outline" className="w-full mb-2">
              <Link href="/hire">Hire Talent</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/apply">Apply as Talent</Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 Pera Infotech. All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer