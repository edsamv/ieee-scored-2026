import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImportantDatesSidebar } from "@/components/home/important-dates-sidebar"
import { MainContent } from "@/components/home/main-content"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative bg-[#2d4a47] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          />
          <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
            <div className="text-center">
              <p className="text-[#5cb8a8] text-sm font-medium uppercase tracking-wider mb-2">
                IEEE Malaysia Section
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                SCOReD 2026
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-2">
                24th IEEE Student Conference on Research and Development
              </p>
              <p className="text-white/80">
                25-26 November 2026 | Multimedia University, Cyberjaya, Malaysia
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Content Area with Sidebar */}
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <ImportantDatesSidebar />
            <MainContent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
