import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, ArrowRight } from "lucide-react"

export function CFPSection() {
  return (
    <section id="cfp" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Call for Papers</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6 text-balance">
              Submit Your Research
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We invite researchers, students, and practitioners to submit original papers presenting their latest research findings in various areas of engineering and technology.
            </p>
            <p className="text-muted-foreground mb-8">
              Detailed information about research topics, paper format, and submission guidelines will be announced soon. Please check back for updates or subscribe to our mailing list.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/call-for-papers">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/submission">Submission Guidelines</Link>
              </Button>
            </div>
          </div>

          {/* Placeholder for Conference Poster */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center p-8 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Conference Poster</h3>
              <p className="text-sm text-muted-foreground">
                Research topics and call for papers poster will be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
