import SectionTitle from "../common/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { experience } from "../data/experience.js";
import { FiMapPin } from "react-icons/fi";

const companyColors = {
  TechVibrant: "from-(--grad-from) to-(--grad-to)",
  "Foxmula — The Smart Way": "from-violet-500 to-fuchsia-500",
};

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="space-y-10">
        <div className="space-y-2">
          <SectionTitle text="Experience" />
          <span className="section-underline block" />
          <p className="text-muted-foreground text-sm">
            Industry experience across web, mobile, and production systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px timeline-line hidden sm:block" />

          <div className="space-y-8">
            {experience.map((job, index) => {
              const grad = companyColors[job.company] ?? "from-[var(--grad-from)] to-[var(--grad-to)]";
              return (
                <div key={index} className="relative flex gap-6 sm:gap-8">
                  {/* Dot */}
                  <div className="relative z-10 hidden sm:flex flex-col items-center shrink-0">
                    <div className={`h-8 w-8 rounded-full bg-linear-to-br ${grad} flex items-center justify-center shadow-lg`}>
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-xl border bg-(--card) fancy-card grad-border-top overflow-hidden">
                    <div className="p-5 space-y-3">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-bold text-base leading-snug">{job.title}</h3>
                          <p className={`text-sm font-semibold bg-linear-to-r ${grad} bg-clip-text`}
                            style={{ WebkitTextFillColor: "transparent" }}>
                            {job.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <Badge variant="secondary" className="text-xs">{job.dates}</Badge>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <FiMapPin className="h-3 w-3" />
                            {job.location}
                          </span>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 pl-1">
                        {job.bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-2 text-sm text-muted-foreground">
                            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-br ${grad}`} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
