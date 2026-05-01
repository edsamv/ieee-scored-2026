import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileText, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Call for Papers | IEEE SCOReD 2026",
  description: "Submit your research papers to IEEE SCOReD 2026. Topics include engineering, technology, and innovation.",
}

const topicAreas = [
  {
    track: "Track 1: Intelligent Systems",
    topics: [
      "Artificial Intelligence and Machine Learning",
      "Deep Learning and Neural Networks",
      "Computer Vision and Image Processing",
      "Natural Language Processing",
      "Robotics and Automation",
    ],
  },
  {
    track: "Track 2: Sustainable Engineering",
    topics: [
      "Renewable Energy Systems",
      "Green Technology and Sustainability",
      "Smart Cities and Urban Computing",
      "Environmental Engineering",
      "Energy Efficiency and Management",
    ],
  },
  {
    track: "Track 3: Computing & Networks",
    topics: [
      "Internet of Things (IoT)",
      "Cloud and Edge Computing",
      "Cybersecurity and Privacy",
      "Blockchain Technology",
      "Network Systems and Protocols",
    ],
  },
  {
    track: "Track 4: Electronics & Communications",
    topics: [
      "VLSI and Embedded Systems",
      "Signal Processing",
      "Wireless Communications",
      "Antenna and Microwave Engineering",
      "Power Electronics",
    ],
  },
]

export default function CallForPapersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-[#2d4a47] text-white py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Call for Papers</h1>
            <p className="mt-2 text-white/80">Submit your research to IEEE SCOReD 2026</p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">About the Conference</h2>
            <p className="text-foreground leading-relaxed mb-4">
              IEEE SCOReD 2026 invites researchers, students, and practitioners to submit original papers presenting 
              their latest research findings. The conference provides an excellent platform for sharing knowledge and 
              networking with peers in the fields of engineering and technology.
            </p>
            <p className="text-foreground leading-relaxed">
              All accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting 
              IEEE Xplore&apos;s scope and quality requirements.
            </p>
          </section>

          {/* Conference Poster Placeholder */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Conference Poster</h2>
            <div className="max-w-3xl mx-auto">
              <div className="aspect-[3/4] bg-muted/30 border-2 border-dashed border-border flex flex-col items-center justify-center p-8 text-center">
                <div className="h-16 w-16 bg-[#2d4a47]/10 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-[#2d4a47]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call for Papers Poster</h3>
                <p className="text-muted-foreground text-sm max-w-md">
                  The official conference poster will be displayed here.
                </p>
              </div>
            </div>
          </section>

          {/* Topic Areas */}
          <section id="topics" className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Research Tracks & Topics</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {topicAreas.map((area, index) => (
                <div key={index} className="bg-card border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">
                    {area.track}
                  </h3>
                  <ul className="space-y-2">
                    {area.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-[#2d4a47] mt-1">-</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground italic">
              Papers addressing topics related but not limited to the above areas are also welcome.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-muted/50 border-l-4 border-[#2d4a47] p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Submit?</h3>
            <p className="text-muted-foreground mb-4">
              Review the submission guidelines and submit your paper through EDAS.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#2d4a47] hover:bg-[#3d5a57]">
                <Link href="/submission">
                  Submission Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://edas.info" target="_blank" rel="noopener noreferrer">
                  Submit via EDAS
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
