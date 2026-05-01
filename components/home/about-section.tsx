import { GraduationCap, Lightbulb, Users, Globe } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Student-Centered",
    description: "A platform designed specifically for undergraduate and postgraduate students to showcase their research.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Encouraging innovative solutions and cutting-edge research in engineering and technology fields.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with peers, industry professionals, and academic experts from across the region.",
  },
  {
    icon: Globe,
    title: "IEEE Recognition",
    description: "Accepted papers will be submitted for inclusion in IEEE Xplore Digital Library.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About the Conference</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            IEEE SCOReD 2026
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The IEEE Student Conference on Research and Development (SCOReD) is an annual IEEE Malaysia Section conference that provides a platform for students and young researchers to present their research findings and innovations in various fields of engineering and technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
