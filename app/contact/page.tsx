import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Globe, Clock, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | IEEE SCOReD 2026",
  description: "Contact the IEEE SCOReD 2026 organizing committee.",
}

const contactInfo = [
  { icon: Mail, label: "Email", value: "scored2026@mmu.edu.my", href: "mailto:scored2026@mmu.edu.my" },
  { icon: Phone, label: "Phone", value: "+60 3-8312 XXXX", href: "tel:+6038312XXXX" },
  { icon: MapPin, label: "Address", value: "Multimedia University, Cyberjaya", href: null },
  { icon: Globe, label: "IEEE Malaysia", value: "ieee.org.my", href: "https://ieee.org.my" },
]

const inquiryCategories = [
  { title: "Paper Submission", description: "Questions about paper submission or EDAS", email: "submission.scored2026@mmu.edu.my" },
  { title: "Registration", description: "Inquiries about registration fees or payment", email: "registration.scored2026@mmu.edu.my" },
  { title: "Sponsorship", description: "Partnership and sponsorship opportunities", email: "sponsorship.scored2026@mmu.edu.my" },
  { title: "General Inquiries", description: "Any other questions or requests", email: "scored2026@mmu.edu.my" },
]

const externalForms = [
  { title: "Registration Form", description: "External registration form will be linked here.", href: "https://forms.google.com" },
  { title: "Presenter Information Form", description: "External presenter details form will be linked here.", href: "https://forms.google.com" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-[#2d4a47] text-white py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 text-white/80">Get in touch with the organizing committee</p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
          <section className="mb-12">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="p-6 bg-card border border-border text-center">
                  <div className="h-12 w-12 bg-[#2d4a47]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-[#2d4a47]" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground font-medium hover:text-[#2d4a47] transition-colors"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">How Can We Help?</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {inquiryCategories.map((category) => (
                <div key={category.title} className="p-6 bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <a href={`mailto:${category.email}`} className="text-sm text-[#2d4a47] hover:underline">
                    {category.email}
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">External Forms</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {externalForms.map((form) => (
                <a
                  key={form.title}
                  href={form.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-card border border-border hover:border-[#2d4a47]/60 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{form.title}</h3>
                      <p className="text-sm text-muted-foreground">{form.description}</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-[#2d4a47] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock className="h-5 w-5" />
            <p className="text-sm">We typically respond within 2-3 business days</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
