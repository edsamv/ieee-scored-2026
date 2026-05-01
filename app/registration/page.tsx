import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Users, GraduationCap, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Registration | IEEE SCOReD 2026",
  description: "Register for IEEE SCOReD 2026. View registration fees and categories.",
}

const registrationCategories = [
  {
    name: "IEEE Student Member",
    icon: GraduationCap,
    earlyBird: "RM 350",
    regular: "RM 450",
    features: [
      "Full conference access",
      "Conference kit",
      "Lunch and refreshments",
      "Certificate of participation",
      "IEEE member discount",
    ],
    highlighted: true,
  },
  {
    name: "IEEE Member",
    icon: Users,
    earlyBird: "RM 500",
    regular: "RM 600",
    features: [
      "Full conference access",
      "Conference kit",
      "Lunch and refreshments",
      "Certificate of participation",
      "IEEE member discount",
    ],
    highlighted: false,
  },
  {
    name: "Non-IEEE Student",
    icon: GraduationCap,
    earlyBird: "RM 450",
    regular: "RM 550",
    features: [
      "Full conference access",
      "Conference kit",
      "Lunch and refreshments",
      "Certificate of participation",
    ],
    highlighted: false,
  },
  {
    name: "Non-IEEE Member",
    icon: Briefcase,
    earlyBird: "RM 600",
    regular: "RM 700",
    features: [
      "Full conference access",
      "Conference kit",
      "Lunch and refreshments",
      "Certificate of participation",
    ],
    highlighted: false,
  },
]

export default function RegistrationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-[#2d4a47] text-white py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Registration</h1>
            <p className="mt-2 text-white/80">Register now to secure your spot at the conference</p>
          </div>
        </div>

        {/* Registration Notice */}
        <div className="bg-muted/50 border-b border-border py-4">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <p className="text-muted-foreground">
              Early bird registration deadline: <span className="font-semibold text-foreground">TBA</span>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          {/* Registration Categories */}
          <section id="fees" className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Registration Fees</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {registrationCategories.map((category) => (
                <div
                  key={category.name}
                  className={`relative p-6 border ${
                    category.highlighted 
                      ? "bg-[#2d4a47]/5 border-[#2d4a47]" 
                      : "bg-card border-border"
                  }`}
                >
                  {category.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 bg-[#2d4a47] text-white text-xs font-semibold">
                        Recommended
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="h-12 w-12 bg-[#2d4a47]/10 flex items-center justify-center mx-auto mb-4">
                      <category.icon className="h-6 w-6 text-[#2d4a47]" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="p-3 bg-muted/50 text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Early Bird</p>
                      <p className="text-xl font-bold text-[#2d4a47]">{category.earlyBird}</p>
                    </div>
                    <div className="p-3 bg-muted/30 text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Regular</p>
                      <p className="text-lg font-semibold text-muted-foreground">{category.regular}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-[#2d4a47] mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground italic">
              * At least one author must register for each accepted paper. Each registration covers only one paper.
            </p>
          </section>

          {/* Registration Steps */}
          <section id="payment" className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">How to Register</h2>
            
            <div className="space-y-4">
              {[
                { step: 1, title: "Paper Acceptance", desc: "Wait for your paper acceptance notification. At least one author must register." },
                { step: 2, title: "Complete Registration Form", desc: "Fill out the online registration form with your details and paper information." },
                { step: 3, title: "Payment", desc: "Complete the payment through the available payment methods (bank transfer or online payment)." },
                { step: 4, title: "Confirmation", desc: "Receive your registration confirmation via email. Keep this for your records." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-6 bg-card border border-border">
                  <div className="h-10 w-10 bg-[#2d4a47] flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-white">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-muted/50 border-l-4 border-[#2d4a47] p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Register?</h3>
            <p className="text-muted-foreground mb-4">
              Registration will open after paper acceptance notifications are sent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#2d4a47] hover:bg-[#3d5a57]" disabled>
                Register Now (Coming Soon)
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
