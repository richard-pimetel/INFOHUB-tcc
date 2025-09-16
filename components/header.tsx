"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold text-foreground">StreamLine</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="block text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary">
                Sign In
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
