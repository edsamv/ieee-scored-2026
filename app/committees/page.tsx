import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { User } from "lucide-react"

export const metadata: Metadata = {
  title: "Committee | IEEE SCOReD 2026",
  description: "Meet the organizing committee, technical program committee, and advisory board of IEEE SCOReD 2026.",
}

const committees = [
  {
    name: "Organizing Committee",
    members: [
      { role: "General Chair", name: "To be announced", affiliation: "Multimedia University" },
      { role: "General Co-Chair", name: "To be announced", affiliation: "IEEE Malaysia Section" },
      { role: "Technical Program Chair", name: "To be announced", affiliation: "Multimedia University" },
      { role: "Technical Program Co-Chair", name: "To be announced", affiliation: "" },
      { role: "Publication Chair", name: "To be announced", affiliation: "" },
      { role: "Publicity Chair", name: "To be announced", affiliation: "" },
      { role: "Finance Chair", name: "To be announced", affiliation: "" },
      { role: "Registration Chair", name: "To be announced", affiliation: "" },
    ],
  },
  {
    name: "Advisory Board",
    members: [
      { role: "Patron", name: "To be announced", affiliation: "Multimedia University" },
      { role: "Advisor", name: "To be announced", affiliation: "IEEE Malaysia Section" },
      { role: "Advisor", name: "To be announced", affiliation: "" },
    ],
  },
  {
    name: "Technical Program Committee",
    members: [
      { role: "TPC Member", name: "To be announced", affiliation: "" },
      { role: "TPC Member", name: "To be announced", affiliation: "" },
      { role: "TPC Member", name: "To be announced", affiliation: "" },
      { role: "TPC Member", name: "To be announced", affiliation: "" },
      { role: "TPC Member", name: "To be announced", affiliation: "" },
      { role: "TPC Member", name: "To be announced", affiliation: "" },
    ],
  },
]

export default function CommitteesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-[#2d4a47] text-white py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Committee</h1>
            <p className="mt-2 text-white/80">Meet the dedicated team organizing IEEE SCOReD 2026</p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
          {/* Committees Sections */}
          {committees.map((committee, idx) => (
            <section key={committee.name} className="mb-12">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 pb-2 border-b-2 border-[#2d4a47]">
                {committee.name}
              </h2>
              
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {committee.members.map((member, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card border border-border hover:border-[#2d4a47]/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar Placeholder */}
                      <div className="h-12 w-12 bg-muted border border-border flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-muted-foreground/50" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-[#2d4a47] uppercase tracking-wider mb-1">
                          {member.role}
                        </p>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        {member.affiliation && (
                          <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Join Committee CTA */}
          <section className="bg-muted/50 border-l-4 border-[#2d4a47] p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Join Our Team</h3>
            <p className="text-muted-foreground mb-4">
              Interested in joining the Technical Program Committee or volunteering for the conference? 
              We welcome your participation.
            </p>
            <a 
              href="mailto:scored2026@mmu.edu.my"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d4a47] text-white font-medium hover:bg-[#3d5a57] transition-colors"
            >
              Contact Us
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
