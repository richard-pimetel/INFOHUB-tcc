import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Shield, Zap, Users } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your business performance with real-time analytics and customizable dashboards.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, SSO integration, and compliance certifications.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline your processes with our intelligent automation engine.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enhance team productivity with real-time collaboration tools and seamless communication features.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Everything you need to
            <span className="text-primary"> succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Powerful features designed to help your business grow and thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
