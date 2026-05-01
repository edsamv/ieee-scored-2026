import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const schedulePreview = [
  { time: "TBA", session: "Registration & Welcome", venue: "TBA" },
  { time: "TBA", session: "Opening Ceremony", venue: "TBA" },
  { time: "TBA", session: "Keynote Session 1", venue: "TBA" },
  { time: "TBA", session: "Technical Session", venue: "TBA" },
  { time: "TBA", session: "Keynote Session 2", venue: "TBA" },
  { time: "TBA", session: "Closing Ceremony", venue: "TBA" },
]

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Conference Program</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Schedule Preview</h2>
          <p className="mt-4 text-muted-foreground">
            Detailed schedule will be announced closer to the conference date
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Session</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground hidden sm:table-cell">Venue</th>
                </tr>
              </thead>
              <tbody>
                {schedulePreview.map((item, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground font-medium">{item.time}</td>
                    <td className="px-6 py-4 text-sm text-card-foreground">{item.session}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">{item.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/schedule">
              View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
