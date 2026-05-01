import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Technology background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* IEEE Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground border border-primary-foreground/20">
            <span className="font-semibold">IEEE Malaysia Section</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            IEEE SCOReD 2026
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl font-medium text-primary-foreground/90">
            Student Conference on Research and Development
          </p>
          
          {/* Description */}
          <p className="max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
            A premier platform for students and researchers to present innovations in engineering and technology
          </p>
          
          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Date TBA</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Cyberjaya, Malaysia</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/submission">Submit Paper</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/registration">Register Now</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
