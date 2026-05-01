import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Upload, FileCheck, Send } from "lucide-react"

const steps = [
  {
    icon: FileCheck,
    title: "Prepare Your Paper",
    description: "Format your paper according to IEEE conference template",
  },
  {
    icon: Upload,
    title: "Submit via EDAS",
    description: "Upload your paper through the EDAS submission system",
  },
  {
    icon: Send,
    title: "Review Process",
    description: "Papers will be peer-reviewed by technical program committee",
  },
]

export function SubmissionSection() {
  return (
    <section id="submission" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Paper Submission</p>
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">How to Submit</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Submit your research through the EDAS conference management system. Detailed submission guidelines will be available soon.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative inline-flex">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center mb-4">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary-foreground text-primary text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm opacity-80">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="secondary" asChild>
            <a href="https://edas.info" target="_blank" rel="noopener noreferrer">
              Submit via EDAS
            </a>
          </Button>
          <p className="mt-4 text-sm opacity-70">
            Submission system will open soon. Check back for updates.
          </p>
        </div>
      </div>
    </section>
  )
}
