import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

const footerNavigation = {
  conference: [
    { name: "Home", href: "/" },
    { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Conference Program", href: "/schedule" },
    { name: "Presentation Guideline", href: "/submission" },
  ],
  participation: [
    { name: "Registration", href: "/registration" },
    { name: "Venue", href: "/venue" },
    { name: "Sponsorship", href: "/sponsorship" },
    { name: "Committee", href: "/committees" },
  ],
  more: [
    { name: "Gallery", href: "/gallery" },
    { name: "Past Editions", href: "/past-editions" },
    { name: "Contact Us", href: "/contact" },
  ],
  resources: [
    { name: "IEEE Malaysia Section", href: "https://ieee.org.my", external: true },
    { name: "IEEE Xplore", href: "https://ieeexplore.ieee.org", external: true },
    { name: "EDAS Submission", href: "https://edas.info", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#2d4a47] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/ieee-mmu-logo-wide.png"
                alt="IEEE MMU Student Branch"
                width={274}
                height={100}
                className="h-auto w-64 max-w-full bg-white p-2 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">SCOReD 2026</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              24th IEEE Student Conference on Research and Development - A premier platform for students and researchers to present innovations in engineering and technology.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>scored2026@mmu.edu.my</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Multimedia University, Cyberjaya, Malaysia</span>
              </div>
            </div>
          </div>

          {/* Conference Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#5cb8a8]">Conference</h3>
            <ul className="space-y-2">
              {footerNavigation.conference.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-[#5cb8a8] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participation Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#5cb8a8]">Participation</h3>
            <ul className="space-y-2">
              {footerNavigation.participation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-[#5cb8a8] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More & Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#5cb8a8]">More</h3>
            <ul className="space-y-2 mb-6">
              {footerNavigation.more.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-[#5cb8a8] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#5cb8a8]">Resources</h3>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 hover:text-[#5cb8a8] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © 2026 IEEE SCOReD. All rights reserved.
            </p>
            <p className="text-sm text-white/70">
              Organized by Multimedia University IEEE Student Branch in collaboration with IEEE Malaysia Section
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
