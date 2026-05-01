import { Calendar } from "lucide-react"

const importantDates = [
  {
    title: "Paper Submission Deadline",
    date: "TBA",
    description: "Full paper submission deadline",
  },
  {
    title: "Notification of Acceptance",
    date: "TBA",
    description: "Authors will be notified of paper status",
  },
  {
    title: "Camera-Ready Submission",
    date: "TBA",
    description: "Final paper submission deadline",
  },
  {
    title: "Early Bird Registration",
    date: "TBA",
    description: "Discounted registration deadline",
  },
  {
    title: "Conference Date",
    date: "TBA",
    description: "Main conference event",
  },
]

export function DatesSection() {
  return (
    <section id="dates" className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Mark Your Calendar</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Important Dates</h2>
          <p className="mt-4 text-muted-foreground">
            Key deadlines and dates for the conference
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {importantDates.map((item, index) => (
            <div
              key={item.title}
              className="relative p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                    {item.description}
                  </p>
                  <h3 className="text-base font-semibold text-card-foreground mb-1">{item.title}</h3>
                  <p className="text-lg font-bold text-primary">{item.date}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-4xl font-bold text-muted/30">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            All deadlines are at 11:59 PM (AoE - Anywhere on Earth)
          </p>
        </div>
      </div>
    </section>
  )
}
