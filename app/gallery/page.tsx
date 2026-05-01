import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Camera, ExternalLink, FolderOpen } from "lucide-react"

export const metadata = {
  title: "Gallery | IEEE SCOReD 2026",
  description: "Photo gallery link for IEEE SCOReD 2026",
}

const galleryLink = {
  title: "SCOReD 2026 Gallery",
  description: "Photos from this edition will be available through the official Google Drive folder.",
  href: "https://drive.google.com",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-[#2d4a47] text-white py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Gallery</h1>
            <p className="mt-2 text-white/80">Photo gallery for this edition</p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
          <section className="text-center mb-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center bg-[#2d4a47]/10">
              <Camera className="h-7 w-7 text-[#2d4a47]" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">SCOReD 2026 Photo Gallery</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              The official conference photos will be shared in one Google Drive folder for easy viewing and download.
            </p>
          </section>

          <a
            href={galleryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-border bg-card p-6 transition-colors hover:border-[#2d4a47]/60"
          >
            <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="grid grid-cols-[3rem_1fr] gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-[#2d4a47] text-white">
                  <FolderOpen className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-tight text-foreground">{galleryLink.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{galleryLink.description}</p>
                </div>
              </div>
              <div className="inline-flex h-10 w-full items-center justify-center gap-2 bg-[#2d4a47] px-4 text-sm font-medium text-white transition-colors group-hover:bg-[#3d5a57] sm:w-auto sm:self-center">
                Open Drive
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
