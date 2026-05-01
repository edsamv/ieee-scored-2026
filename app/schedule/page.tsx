import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, MapPin, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Conference Schedule | IEEE SCOReD 2026",
  description: "View the complete conference schedule for IEEE SCOReD 2026",
}

const scheduleDay1 = [
  { time: "08:00 - 09:00", event: "Registration", venue: "Main Lobby", type: "registration" },
  { time: "09:00 - 09:30", event: "Opening Ceremony", venue: "Main Hall", type: "ceremony" },
  { time: "09:30 - 10:30", event: "Keynote Session 1", speaker: "TBA", venue: "Main Hall", type: "keynote" },
  { time: "10:30 - 11:00", event: "Tea Break", venue: "Foyer", type: "break" },
  { time: "11:00 - 12:30", event: "Technical Session 1A / 1B / 1C", venue: "Rooms TBA", type: "technical" },
  { time: "12:30 - 14:00", event: "Lunch Break", venue: "Cafeteria", type: "break" },
  { time: "14:00 - 15:30", event: "Technical Session 2A / 2B / 2C", venue: "Rooms TBA", type: "technical" },
  { time: "15:30 - 16:00", event: "Tea Break", venue: "Foyer", type: "break" },
  { time: "16:00 - 17:00", event: "Keynote Session 2", speaker: "TBA", venue: "Main Hall", type: "keynote" },
  { time: "19:00 - 21:00", event: "Conference Dinner", venue: "TBA", type: "ceremony" },
]

const scheduleDay2 = [
  { time: "08:30 - 09:00", event: "Registration", venue: "Main Lobby", type: "registration" },
  { time: "09:00 - 10:00", event: "Keynote Session 3", speaker: "TBA", venue: "Main Hall", type: "keynote" },
  { time: "10:00 - 10:30", event: "Tea Break", venue: "Foyer", type: "break" },
  { time: "10:30 - 12:00", event: "Technical Session 3A / 3B / 3C", venue: "Rooms TBA", type: "technical" },
  { time: "12:00 - 13:30", event: "Lunch Break", venue: "Cafeteria", type: "break" },
  { time: "13:30 - 15:00", event: "Technical Session 4A / 4B / 4C", venue: "Rooms TBA", type: "technical" },
  { time: "15:00 - 15:30", event: "Tea Break", venue: "Foyer", type: "break" },
  { time: "15:30 - 16:30", event: "Closing Ceremony & Awards", venue: "Main Hall", type: "ceremony" },
]

const typeColors: Record<string, string> = {
  registration: "bg-blue-100 text-blue-800",
  ceremony: "bg-amber-100 text-amber-800",
  keynote: "bg-green-100 text-green-800",
  technical: "bg-[#2d4a47]/10 text-[#2d4a47]",
  break: "bg-muted text-muted-foreground",
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-[#2d4a47] text-white py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Conference Program</h1>
            <p className="mt-2 text-white/80">25-26 November 2026 | Multimedia University, Cyberjaya</p>
          </div>
        </div>

        {/* Schedule Notice */}
        <div className="bg-muted/50 border-b border-border py-4">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <p className="text-sm">
                This is a preliminary schedule. Final program will be announced closer to the conference date.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-12 lg:px-8">
          {/* Day 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Day 1 - 25th November 2026</h2>
            <p className="text-muted-foreground mb-6">Opening Day</p>

            <div className="overflow-hidden border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2d4a47] text-white">
                    <th className="px-4 py-3 text-left text-sm font-medium w-36">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Time
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Session / Event</th>
                    <th className="px-4 py-3 text-left text-sm font-medium w-32">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Venue
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleDay1.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`border-t border-border ${item.type === "break" ? "bg-muted/30" : "bg-card"}`}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-muted-foreground">{item.time}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 text-xs font-medium ${typeColors[item.type]}`}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </span>
                          <div>
                            <span className="text-foreground">{item.event}</span>
                            {item.speaker && (
                              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                <User className="h-3 w-3" />
                                {item.speaker}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{item.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Day 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Day 2 - 26th November 2026</h2>
            <p className="text-muted-foreground mb-6">Closing Day</p>

            <div className="overflow-hidden border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2d4a47] text-white">
                    <th className="px-4 py-3 text-left text-sm font-medium w-36">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Time
                      </div>
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Session / Event</th>
                    <th className="px-4 py-3 text-left text-sm font-medium w-32">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Venue
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleDay2.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`border-t border-border ${item.type === "break" ? "bg-muted/30" : "bg-card"}`}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-muted-foreground">{item.time}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 text-xs font-medium ${typeColors[item.type]}`}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </span>
                          <div>
                            <span className="text-foreground">{item.event}</span>
                            {item.speaker && (
                              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                <User className="h-3 w-3" />
                                {item.speaker}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{item.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Keynote Speakers */}
          <section id="keynotes">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Keynote Speakers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-card border border-border p-6 text-center">
                  <div className="h-24 w-24 bg-muted mx-auto mb-4 flex items-center justify-center">
                    <User className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">Keynote Speaker {num}</h3>
                  <p className="text-sm text-muted-foreground">To be announced</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
