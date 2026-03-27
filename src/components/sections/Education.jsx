import SectionTitle from "../common/SectionTitle";
import stevensLogo from "../../assets/SIT.png";
import bmsLogo from "../../assets/BMSIT.png";
import { FiArrowUpRight, FiCalendar, FiMapPin } from "react-icons/fi";

const education = [
  {
    school: "Stevens Institute of Technology",
    degreeLine: "M.S. in Computer Science",
    dates: "2025 – 2026",
    location: "New Jersey, USA",
    logo: stevensLogo,
    url: "https://www.stevens.edu/",
    grad: "from-(--grad-from) to-(--grad-to)",
  },
  {
    school: "BMS Institute of Technology and Management",
    degreeLine: "B.E. in Electronics and Communication Engineering",
    dates: "2017 – 2021",
    location: "Bangalore, India",
    logo: bmsLogo,
    url: "https://bmsit.ac.in/",
    grad: "from-violet-500 to-fuchsia-500",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="space-y-10">
        <div className="space-y-2">
          <SectionTitle text="Education" />
          <span className="section-underline block" />
          <p className="text-muted-foreground text-sm">
            Academic foundation in computer science and engineering.
          </p>
        </div>

        <div className="space-y-4">
          {education.map((e) => (
            <a
              key={e.school}
              href={e.url}
              target="_blank"
              rel="noreferrer"
              className="block group"
            >
              <div className="relative rounded-xl border bg-(--card) fancy-card grad-border-top overflow-hidden p-5">
                <div className="flex items-center justify-between gap-4">
                  {/* Left: logo + info */}
                  <div className="flex items-center gap-4">
                    {/* Logo with gradient ring */}
                    <div className={`p-0.5 rounded-full bg-linear-to-br ${e.grad} shrink-0`}>
                      <div className="rounded-full bg-(--card) p-0.5">
                        <img
                          src={e.logo}
                          alt={`${e.school} logo`}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold leading-tight inline-flex items-center gap-1.5">
                        {e.school}
                        <FiArrowUpRight className="h-4 w-4 opacity-0 -translate-y-0.5 transition group-hover:opacity-100 group-hover:translate-y-0 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">{e.degreeLine}</div>
                    </div>
                  </div>

                  {/* Right: dates + location */}
                  <div className="text-right space-y-1 shrink-0">
                    <div className="flex items-center justify-end gap-1.5 text-sm font-semibold">
                      <FiCalendar className="h-3.5 w-3.5 text-primary" />
                      {e.dates}
                    </div>
                    <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                      <FiMapPin className="h-3 w-3" />
                      {e.location}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
