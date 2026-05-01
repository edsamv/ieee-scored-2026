import Image from "next/image"

export function MainContent() {
  return (
    <div className="flex-1">
      {/* Theme Section */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1e3a5f] leading-tight mb-8">
          Theme: Convergence of Intelligent Systems and Sustainable Engineering: Shaping the Future of Technology and Society
        </h2>
        
        {/* IEEE MMU Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/ieee-mmu-logo-wide.png"
            alt="IEEE MMU Student Branch"
            width={384}
            height={140}
            className="h-auto w-full max-w-xl object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Paper Submissions Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-[#1e3a5f] text-center mb-8">
          Paper submissions for SCOReD 2026
        </h3>
        
        <div className="text-foreground leading-relaxed text-justify space-y-4">
          <p>Dear All,</p>
          
          <p>
            2026 IEEE 24th Student Conference on Research and Development (SCOReD) will be held at{" "}
            <strong>Multimedia University</strong>, Cyberjaya, Malaysia. The conference date is TBA. This flagship
            conference is organized by <strong>Multimedia University IEEE Student Branch (MMU)</strong> in collaboration with{" "}
            <strong>IEEE Malaysia Section</strong>. The conference provides a platform for local and international
            researchers, engineers and scientists from academia and industry to present and discuss the
            latest technological advances and research progress in the fields of computing, technology,
            engineering, and other related areas. The previous IEEE-SCOReD flagship conferences were
            successful with more than 300 participants from all over the world.
          </p>
          
          <p>
            We cordially invite you to submit your research papers to SCOReD 2026. All accepted and presented 
            papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore&apos;s scope and quality requirements.
          </p>
          
          <p>
            We look forward to your participation and contribution to make SCOReD 2026 a great success!
          </p>
          
          <p className="mt-6">
            Best regards,<br />
            <strong>SCOReD 2026 Organizing Committee</strong>
          </p>
        </div>
      </div>
      
      {/* Conference Tracks */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-[#1e3a5f] mb-6">Conference Tracks</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-muted/50 p-4 border-l-4 border-[#2d4a47]">
            <h4 className="font-medium text-foreground">Track 1: Intelligent Systems</h4>
            <p className="text-sm text-muted-foreground mt-1">AI, Machine Learning, Deep Learning, Robotics</p>
          </div>
          <div className="bg-muted/50 p-4 border-l-4 border-[#2d4a47]">
            <h4 className="font-medium text-foreground">Track 2: Sustainable Engineering</h4>
            <p className="text-sm text-muted-foreground mt-1">Green Technology, Renewable Energy, Smart Cities</p>
          </div>
          <div className="bg-muted/50 p-4 border-l-4 border-[#2d4a47]">
            <h4 className="font-medium text-foreground">Track 3: Computing & Networks</h4>
            <p className="text-sm text-muted-foreground mt-1">IoT, Cloud Computing, Cybersecurity, Networks</p>
          </div>
          <div className="bg-muted/50 p-4 border-l-4 border-[#2d4a47]">
            <h4 className="font-medium text-foreground">Track 4: Electronics & Communications</h4>
            <p className="text-sm text-muted-foreground mt-1">VLSI, Signal Processing, Wireless Communications</p>
          </div>
        </div>
      </div>
    </div>
  )
}
