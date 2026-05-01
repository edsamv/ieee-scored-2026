"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const navigationRow1 = [
  { name: "HOME", href: "/", hasDropdown: false },
  { 
    name: "CALL FOR PAPERS", 
    href: "/call-for-papers", 
    hasDropdown: true,
    items: [
      { name: "Paper Submission", href: "/call-for-papers#submission" },
      { name: "Topics of Interest", href: "/call-for-papers#topics" },
    ]
  },
  { 
    name: "REGISTRATION", 
    href: "/registration", 
    hasDropdown: true,
    items: [
      { name: "Registration Fees", href: "/registration#fees" },
      { name: "Payment Info", href: "/registration#payment" },
    ]
  },
  { 
    name: "CONFERENCE PROGRAM", 
    href: "/schedule", 
    hasDropdown: true,
    items: [
      { name: "Schedule", href: "/schedule" },
      { name: "Keynote Speakers", href: "/schedule#keynotes" },
    ]
  },
  { name: "PRESENTATION GUIDELINE", href: "/submission", hasDropdown: false },
  { 
    name: "VENUE", 
    href: "/venue", 
    hasDropdown: true,
    items: [
      { name: "Location", href: "/venue#location" },
      { name: "Accommodation", href: "/venue#accommodation" },
    ]
  },
  { name: "SPONSORSHIP", href: "/sponsorship", hasDropdown: false },
  { name: "COMMITTEE", href: "/committees", hasDropdown: false },
]

const navigationRow2 = [
  { name: "GALLERY", href: "/gallery", hasDropdown: false },
  { name: "PAST EDITIONS", href: "/past-editions", hasDropdown: false },
  { name: "CONTACT US", href: "/contact", hasDropdown: false },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main Navigation - Dark Teal Background */}
      <nav className="bg-[#2d4a47]">
        {/* Row 1 */}
        <div className="hidden lg:block border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center justify-start gap-0">
              {navigationRow1.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-4 text-sm font-medium tracking-wide transition-colors ${
                      index === 0 
                        ? "text-[#5cb8a8] hover:text-[#7cd4c4]" 
                        : "text-white/90 hover:text-[#5cb8a8]"
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                  </Link>
                  
                  {/* Dropdown */}
                  {item.hasDropdown && item.items && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 bg-[#2d4a47] border border-white/10 min-w-48 shadow-lg z-50">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-white/90 hover:bg-[#3d5a57] hover:text-[#5cb8a8] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Row 2 */}
        <div className="hidden lg:block">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center justify-start gap-0">
              {navigationRow2.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium tracking-wide text-white/90 hover:text-[#5cb8a8] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-white font-bold text-lg">IEEE SCOReD 2026</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-white p-2"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#2d4a47] px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-white font-bold" onClick={() => setMobileMenuOpen(false)}>
                IEEE SCOReD 2026
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="space-y-1">
                {[...navigationRow1, ...navigationRow2].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-3 text-base font-medium text-white/90 hover:bg-[#3d5a57] hover:text-[#5cb8a8] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
