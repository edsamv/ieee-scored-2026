import { User } from "lucide-react"

const speakers = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-20 lg:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Featured Presenters</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Keynote Speakers</h2>
          <p className="mt-4 text-muted-foreground">
            Distinguished speakers will be announced soon
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative bg-card rounded-lg border border-border p-6 text-center hover:border-primary/50 transition-colors"
            >
              {/* Avatar Placeholder */}
              <div className="mx-auto h-32 w-32 rounded-full bg-muted border-2 border-dashed border-border flex items-center justify-center mb-4">
                <User className="h-12 w-12 text-muted-foreground/50" />
              </div>
              
              {/* Name Placeholder */}
              <div className="h-6 bg-muted rounded w-3/4 mx-auto mb-2" />
              
              {/* Title Placeholder */}
              <div className="h-4 bg-muted/70 rounded w-1/2 mx-auto mb-1" />
              
              {/* Institution Placeholder */}
              <div className="h-4 bg-muted/50 rounded w-2/3 mx-auto" />
              
              {/* Overlay text */}
              <p className="mt-4 text-xs text-muted-foreground">Speaker details to be announced</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Keynote speaker information will be updated as confirmations are received.
          </p>
        </div>
      </div>
    </section>
  )
}
