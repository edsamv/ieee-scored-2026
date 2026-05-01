import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Plane, Train, FileText, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Venue | IEEE SCOReD 2026",
  description: "Travel information for Multimedia University, Cyberjaya, Malaysia.",
}

const mapLinks = [
  { label: "Google Maps", href: "https://www.google.com/maps/search/?api=1&query=Multimedia+University+Cyberjaya" },
  { label: "Waze", href: "https://waze.com/ul?q=Multimedia%20University%20Cyberjaya&navigate=yes" },
]

const kliaDirections = [
  "Take the exit from KLIA towards Lebuhraya Putrajaya-Dengkil-KLIA/Route 26.",
  "Continue towards Cyberjaya via ELITE or MEX depending on traffic conditions.",
  "Follow signs to Cyberjaya and Persiaran Multimedia.",
  "Enter the Multimedia University Cyberjaya campus from Persiaran Multimedia.",
]

export default function VenuePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-[#2d4a47] text-white py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Venue</h1>
            <p className="mt-2 text-white/80">Conference location and travel information</p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <section id="location" className="mb-16">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
              How to Reach Multimedia University, Cyberjaya
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-muted/50 p-6 border-l-4 border-[#2d4a47] mb-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Multimedia University, Cyberjaya
                  </h3>
                  <p className="text-muted-foreground">
                    Multimedia University<br />
                    Persiaran Multimedia<br />
                    63100 Cyberjaya, Selangor<br />
                    Malaysia
                  </p>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <p>
                    <span className="font-semibold text-foreground">GPS Coordinates:</span>{" "}
                    2.9275&deg; N, 101.6416&deg; E
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {mapLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d4a47] text-white text-sm font-medium hover:bg-[#3d5a57] transition-colors"
                      >
                        {link.label}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-foreground leading-relaxed mb-4">
                  Multimedia University (MMU) Cyberjaya is located in Malaysia&apos;s digital technology hub and
                  is accessible by car, e-hailing, and public transport connections through Putrajaya and Cyberjaya.
                </p>

                <p className="text-foreground leading-relaxed">
                  The campus offers modern academic facilities suitable for conference sessions, exhibitions, and
                  networking activities.
                </p>
              </div>

              <div className="min-h-80 bg-muted/30 overflow-hidden border border-border">
                <iframe
                  title="Multimedia University Cyberjaya map"
                  src="https://www.google.com/maps?q=Multimedia%20University%20Cyberjaya&z=16&output=embed"
                  className="h-full min-h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Getting There</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-card border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-[#2d4a47] text-white flex items-center justify-center">
                    <Plane className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">Travelling from KLIA</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {kliaDirections.map((direction) => (
                    <li key={direction} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 bg-[#2d4a47]" />
                      <span>{direction}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-[#2d4a47] text-white flex items-center justify-center">
                    <Train className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">Public Transport</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Take KLIA Transit or MRT Putrajaya Line connections to Putrajaya & Cyberjaya, then continue to
                  MMU Cyberjaya by taxi, e-hailing, or local shuttle.
                </p>
              </div>

              <div className="bg-card border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-[#2d4a47] text-white flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">By Car</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  MMU Cyberjaya is accessible via MEX, ELITE, and major Cyberjaya roads. Parking is available on
                  campus, subject to university access arrangements.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Visa Information for International Participants</h2>
            <div className="bg-muted/50 border-l-4 border-[#2d4a47] p-6">
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-[#2d4a47] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    Participants are advised to check the official Malaysian Immigration Website for the latest
                    information regarding entry visa to Malaysia. Visa requirements by country as well as visa fees
                    can be obtained from the website. Some countries are eligible for eVisa.
                  </p>
                  <a
                    href="https://www.imi.gov.my/index.php/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2d4a47] hover:text-[#1e3a5f] font-medium"
                  >
                    Malaysian Immigration Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
