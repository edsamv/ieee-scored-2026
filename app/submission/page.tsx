import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, FileText, Upload, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Presentation Guideline | IEEE SCOReD 2026",
  description: "Presentation guidelines for IEEE SCOReD presenters.",
}

const preConferenceItems = [
  "Presenters are required to prepare a maximum of 10 minutes of presentation slides in PowerPoint Format (ppt) and MUST be uploaded through EDAS (deadline 10th November 2025).",
  "Please use SCOReD2025 PowerPoint Slide Template.",
  "If you are unable to download this template, please try a different browser.",
  "Please name your presentation file with the PAPER ID (from EDAS) followed by the NAME OF PRESENTER (Example: 12345678 JOHN DOE).",
  "To upload your PowerPoint slide in EDAS, after logging into EDAS, click the My Papers tab, click on your paper title and then scroll down to the Presentation row and click on the cloud-shaped upload icon. From there, follow the instructions to upload your presentation.",
  "Please declare Presenter in EDAS. To do this, after logging into EDAS, click the My Papers tab, click on your paper title and then click the Change/Add icon in the Presenter(s) row. Indicate who will present the paper and click the Add presenter (Save) button.",
]

const conferenceDayItems = [
  "Please ensure that the presenter enters the correct conference room for the session (Refer to Conference Program page).",
  "All presenters should come to the presentation room at least 10 minutes before the session starts.",
  "The presentation time is 10 minutes, followed by Q&A session for 5 minutes.",
  "There will be NO recorded video allowed. All presenters must present LIVE physically according to the timetable.",
  "Each session will be hosted by a Session Chair and assisted by a Session Vice-Chair.",
  "All presenters must be in the conference room throughout the session.",
  "Please do not hesitate to contact us (ieeescored2025.um@gmail.com) for any further information.",
]

export default function SubmissionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-[#2d4a47] text-white py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Presentation Guideline</h1>
            <p className="mt-2 text-white/80">Instructions for presenters before and during the conference</p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-[#2d4a47] text-white flex items-center justify-center">
                <Upload className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#1e3a5f]">Pre-Conference</h2>
            </div>

            <div className="bg-card border border-border p-6">
              <ul className="space-y-4 text-sm text-muted-foreground">
                {preConferenceItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[#2d4a47]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="outline" asChild>
                  <a href="https://edas.info" target="_blank" rel="noopener noreferrer">
                    Open EDAS
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-[#2d4a47] text-white flex items-center justify-center">
                <Calendar className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#1e3a5f]">Conference Day (25-26 November 2025)</h2>
            </div>

            <div className="bg-card border border-border p-6">
              <ul className="space-y-4 text-sm text-muted-foreground">
                {conferenceDayItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[#2d4a47]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-3">
            <div className="bg-muted/50 p-5 border-l-4 border-[#2d4a47]">
              <FileText className="h-5 w-5 text-[#2d4a47] mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Format</h3>
              <p className="text-sm text-muted-foreground">PowerPoint Format (ppt)</p>
            </div>
            <div className="bg-muted/50 p-5 border-l-4 border-[#2d4a47]">
              <Clock className="h-5 w-5 text-[#2d4a47] mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Timing</h3>
              <p className="text-sm text-muted-foreground">10 minutes presentation + 5 minutes Q&A</p>
            </div>
            <div className="bg-muted/50 p-5 border-l-4 border-[#2d4a47]">
              <Mail className="h-5 w-5 text-[#2d4a47] mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Contact</h3>
              <a href="mailto:ieeescored2025.um@gmail.com" className="text-sm text-[#2d4a47] hover:underline">
                ieeescored2025.um@gmail.com
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
