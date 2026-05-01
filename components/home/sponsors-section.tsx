import { Building2 } from "lucide-react"

const sponsorTiers = [
  {
    tier: "Platinum Sponsors",
    count: 2,
    size: "large",
  },
  {
    tier: "Gold Sponsors", 
    count: 3,
    size: "medium",
  },
  {
    tier: "Partners",
    count: 4,
    size: "small",
  },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Supporters</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Sponsors & Partners</h2>
          <p className="mt-4 text-muted-foreground">
            Sponsorship opportunities are available
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier}>
              <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                {tier.tier}
              </h3>
              <div className={`grid gap-6 ${
                tier.size === "large" 
                  ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto" 
                  : tier.size === "medium"
                  ? "grid-cols-2 sm:grid-cols-3 max-w-3xl mx-auto"
                  : "grid-cols-2 sm:grid-cols-4 max-w-4xl mx-auto"
              }`}>
                {Array.from({ length: tier.count }).map((_, index) => (
                  <div
                    key={index}
                    className={`bg-card rounded-lg border-2 border-dashed border-border flex items-center justify-center hover:border-primary/30 transition-colors ${
                      tier.size === "large" 
                        ? "h-32 sm:h-40" 
                        : tier.size === "medium"
                        ? "h-24 sm:h-32"
                        : "h-20 sm:h-24"
                    }`}
                  >
                    <div className="text-center">
                      <Building2 className={`mx-auto text-muted-foreground/30 ${
                        tier.size === "large" ? "h-12 w-12" : tier.size === "medium" ? "h-10 w-10" : "h-8 w-8"
                      }`} />
                      <p className="mt-2 text-xs text-muted-foreground">Logo placeholder</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in sponsoring IEEE SCOReD 2026?
          </p>
          <a 
            href="mailto:scored2026@ieee.org.my" 
            className="text-primary font-medium hover:underline"
          >
            Contact us for sponsorship opportunities
          </a>
        </div>
      </div>
    </section>
  )
}
