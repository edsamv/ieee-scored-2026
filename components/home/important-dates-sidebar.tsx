export function ImportantDatesSidebar() {
  const dates = [
    {
      label: "Call for Papers:",
      dates: [{ date: "TBA", passed: false }],
    },
    {
      label: "Submission of Full Paper:",
      dates: [
        { date: "TBA", passed: false, strikethrough: false },
      ],
    },
    {
      label: "Notification of Acceptance:",
      dates: [{ date: "TBA", passed: false }],
    },
    {
      label: "Registration Deadline (Early Bird):",
      dates: [{ date: "TBA", passed: false }],
    },
    {
      label: "Registration Deadline (Normal):",
      dates: [{ date: "TBA", passed: false }],
    },
    {
      label: "Camera-Ready Submission:",
      dates: [{ date: "TBA", passed: false }],
    },
    {
      label: "Conference Date:",
      dates: [{ date: "TBA", passed: false, highlight: true }],
    },
  ]

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-20">
        <h2 className="text-lg font-bold text-[#1e3a5f] uppercase tracking-wide mb-6 pb-2 border-b-2 border-[#2d4a47]">
          Important Dates
        </h2>
        
        <div className="space-y-5">
          {dates.map((item, index) => (
            <div key={index}>
              <p className="font-semibold text-foreground text-sm italic mb-1">
                {item.label}
              </p>
              {item.dates.map((dateItem, dateIndex) => (
                <p
                  key={dateIndex}
                  className={`text-sm ${
                    dateItem.strikethrough
                      ? "line-through text-muted-foreground"
                      : dateItem.highlight
                      ? "text-[#1e3a5f] font-semibold"
                      : "text-[#2d4a47]"
                  }`}
                >
                  {dateItem.date}
                </p>
              ))}
            </div>
          ))}
        </div>
        
        {/* Download Calendar */}
        <div className="mt-8 pt-6 border-t border-border">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-[#2d4a47] hover:text-[#1e3a5f] font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Add to Calendar
          </a>
        </div>
      </div>
    </aside>
  )
}
