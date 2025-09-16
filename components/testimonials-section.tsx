import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "StreamLine has transformed how we operate. Our productivity increased by 40% within the first month.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, GrowthCorp",
    content: "The automation features saved us countless hours. Best investment we've made for our business.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, InnovateLab",
    content: "Incredible platform with outstanding support. The analytics insights have been game-changing.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Trusted by
            <span className="text-primary"> thousands </span>
            of businesses
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            See what our customers have to say about their experience with StreamLine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 text-balance">"{testimonial.content}"</blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
