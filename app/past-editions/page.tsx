import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Past Editions | IEEE SCOReD 2026",
  description: "History of IEEE SCOReD conferences",
}

const pastEditions = [
  {
    year: 2025,
    edition: "23rd",
    location: "Multimedia University, Cyberjaya",
    theme: "Convergence of Intelligent Systems and Sustainable Engineering",
    participants: "300+",
    papers: "150+",
  },
  {
    year: 2024,
    edition: "22nd",
    location: "Universiti Teknologi Malaysia, Johor",
    theme: "Advancing Research for Sustainable Development",
    participants: "280+",
    papers: "140+",
  },
  {
    year: 2023,
    edition: "21st",
    location: "Universiti Putra Malaysia, Selangor",
    theme: "Engineering Innovation for a Better Tomorrow",
    participants: "250+",
    papers: "120+",
  },
  {
    year: 2022,
    edition: "20th",
    location: "Universiti Kebangsaan Malaysia, Selangor",
    theme: "Digital Transformation in Engineering",
    participants: "220+",
    papers: "110+",
  },
  {
    year: 2021,
    edition: "19th",
    location: "Virtual Conference",
    theme: "Resilience in Research and Development",
    participants: "200+",
    papers: "100+",
  },
  {
    year: 2020,
    edition: "18th",
    location: "Virtual Conference",
    theme: "Innovation During Challenging Times",
    participants: "180+",
    papers: "90+",
  },
]

export default function PastEditionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-[#2d4a47] text-white py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Past Editions</h1>
            <p className="mt-2 text-white/80">History of IEEE SCOReD conferences</p>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-foreground leading-relaxed">
              IEEE Student Conference on Research and Development (SCOReD) has been a flagship conference 
              for students and researchers since its inception. Over the years, SCOReD has grown to become 
              one of the premier student conferences in the region, providing a platform for young researchers 
              to present their work and network with peers and industry professionals.
            </p>
          </section>
          
          {/* Past Editions Timeline */}
          <section>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8">Conference History</h2>
            
            <div className="space-y-6">
              {pastEditions.map((edition) => (
                <div 
                  key={edition.year}
                  className="bg-card border border-border p-6 flex flex-col md:flex-row md:items-center gap-6"
                >
                  <div className="md:w-24 flex-shrink-0">
                    <span className="text-3xl font-bold text-[#2d4a47]">{edition.year}</span>
                    <p className="text-sm text-muted-foreground">{edition.edition} Edition</p>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{edition.location}</h3>
                    <p className="text-sm text-muted-foreground italic mb-3">&quot;{edition.theme}&quot;</p>
                    <div className="flex gap-6 text-sm">
                      <span className="text-[#2d4a47]">
                        <strong>{edition.participants}</strong> Participants
                      </span>
                      <span className="text-[#2d4a47]">
                        <strong>{edition.papers}</strong> Papers
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-sm text-[#2d4a47] hover:text-[#1e3a5f] font-medium"
                    >
                      View Proceedings
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* IEEE Xplore */}
          <section className="mt-12">
            <div className="bg-muted/50 border-l-4 border-[#2d4a47] p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Conference Proceedings</h3>
              <p className="text-muted-foreground mb-4">
                All accepted and presented papers from past SCOReD conferences are available on IEEE Xplore Digital Library.
              </p>
              <a 
                href="https://ieeexplore.ieee.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2d4a47] hover:text-[#1e3a5f] font-medium"
              >
                Browse on IEEE Xplore
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
