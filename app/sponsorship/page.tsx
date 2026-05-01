import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export const metadata = {
  title: "Sponsorship | IEEE SCOReD 2026",
  description: "Sponsorship opportunities for IEEE SCOReD 2026",
}

const sponsorshipTiers = [
  {
    name: "Platinum",
    price: "RM 15,000",
    color: "bg-gradient-to-b from-gray-100 to-gray-200",
    borderColor: "border-gray-400",
    benefits: [
      "Premium logo placement on all conference materials",
      "Dedicated exhibition booth (3m x 3m)",
      "5 complimentary conference registrations",
      "Speaking opportunity at opening/closing ceremony",
      "Full-page advertisement in conference proceedings",
      "Logo on conference website with link",
      "Social media recognition",
      "Certificate of appreciation",
    ],
  },
  {
    name: "Gold",
    price: "RM 10,000",
    color: "bg-gradient-to-b from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-500",
    benefits: [
      "Logo placement on conference materials",
      "Exhibition booth (2m x 2m)",
      "3 complimentary conference registrations",
      "Half-page advertisement in conference proceedings",
      "Logo on conference website with link",
      "Social media recognition",
      "Certificate of appreciation",
    ],
  },
  {
    name: "Silver",
    price: "RM 5,000",
    color: "bg-gradient-to-b from-gray-50 to-gray-100",
    borderColor: "border-gray-300",
    benefits: [
      "Logo placement on selected materials",
      "Exhibition table",
      "2 complimentary conference registrations",
      "Quarter-page advertisement in proceedings",
      "Logo on conference website",
      "Certificate of appreciation",
    ],
  },
  {
    name: "Bronze",
    price: "RM 2,500",
    color: "bg-gradient-to-b from-orange-50 to-orange-100",
    borderColor: "border-orange-400",
    benefits: [
      "Logo on conference website",
      "1 complimentary conference registration",
      "Acknowledgement in proceedings",
      "Certificate of appreciation",
    ],
  },
]

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-[#2d4a47] text-white py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Sponsorship</h1>
            <p className="mt-2 text-white/80">Partner with us for IEEE SCOReD 2026</p>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Become a Sponsor</h2>
            <p className="text-foreground leading-relaxed mb-4">
              IEEE SCOReD 2026 offers excellent opportunities for organizations to showcase their products, 
              services, and commitment to supporting research and development in engineering and technology. 
              As a sponsor, you will gain visibility among students, researchers, academics, and industry professionals.
            </p>
            <p className="text-foreground leading-relaxed">
              Join us in nurturing the next generation of engineers and researchers. Your sponsorship directly 
              supports students in presenting their research and connecting with the broader academic and industry community.
            </p>
          </section>
          
          {/* Sponsorship Tiers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Sponsorship Packages</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorshipTiers.map((tier) => (
                <div 
                  key={tier.name} 
                  className={`${tier.color} border-2 ${tier.borderColor} p-6 flex flex-col`}
                >
                  <h3 className="text-xl font-bold text-[#1e3a5f] text-center mb-2">{tier.name}</h3>
                  <p className="text-2xl font-bold text-[#2d4a47] text-center mb-6">{tier.price}</p>
                  
                  <ul className="space-y-3 flex-1">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 text-[#2d4a47] mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          
          {/* Custom Sponsorship */}
          <section className="mb-12">
            <div className="bg-muted/50 border-l-4 border-[#2d4a47] p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Custom Sponsorship</h3>
              <p className="text-muted-foreground">
                We also welcome custom sponsorship arrangements tailored to your organization&apos;s needs and objectives. 
                This includes sponsoring specific events such as the conference dinner, best paper awards, student travel grants, 
                or workshop sessions. Contact us to discuss how we can create a partnership that meets your goals.
              </p>
            </div>
          </section>
          
          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Contact Us</h2>
            <p className="text-foreground mb-4">
              For sponsorship inquiries, please contact:
            </p>
            <div className="bg-card border border-border p-6 inline-block">
              <p className="font-semibold text-foreground">Sponsorship Committee</p>
              <p className="text-muted-foreground">IEEE SCOReD 2026</p>
              <p className="text-[#2d4a47] mt-2">sponsorship.scored2026@mmu.edu.my</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
