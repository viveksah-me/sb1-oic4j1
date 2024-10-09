'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/talent', label: 'Hire Talent' },
  { href: '/services', label: 'Our Services' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Insights' },
]

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="bg-background shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">Pera Infotech</Link>
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground'
                } hover:text-primary transition-colors`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild>
            <Link href="/hire">Hire Talent</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header