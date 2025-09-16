import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground mb-8">
            <span className="mr-2">🚀</span>
            New: Advanced Analytics Dashboard
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
            Streamline Your
            <span className="text-primary"> Business </span>
            Operations
          </h1>

          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Transform your workflow with our powerful SaaS platform. Automate processes, gain insights, and scale your
            business with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-3xl"></div>
            <img
              src="/modern-analytics-dashboard.png"
              alt="StreamLine Dashboard"
              className="relative rounded-lg shadow-2xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
