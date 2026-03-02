import SectionTitle from "../common/SectionTitle";
import { Card } from "@/components/ui/card";
import stevensLogo from "../../assets/SIT.png";
import bmsLogo from "../../assets/BMSIT.png";
import { hoverCard } from "@/lib/utils";
import { FiArrowUpRight } from "react-icons/fi";

export default function Education() {
  const education = [
    {
      school: "Stevens Institute of Technology",
      degreeLine: "M.S. in Computer Science",
      dates: "2025 – 2026",
      location: "New Jersey, USA",
      logo: stevensLogo,
      url: "https://www.stevens.edu/",
    },
    {
      school: "BMS Institute of Technology and Management",
      degreeLine: "B.E. in Electronics and Communication Engineering",
      dates: "2017 – 2021",
      location: "Bangalore, India",
      logo: bmsLogo,
      url: "https://bmsit.ac.in/",
    },
  ];

  return (
    <section id="education" className="py-16">
      <div className="space-y-8">
        <div className="space-y-1">
          <SectionTitle text="Education" />
          <p className="text-muted-foreground text-sm m-0">
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
              className="block"
            >
              <Card className={`p-4 ${hoverCard} group`}>
                <div className="flex items-start justify-between gap-4">
                  {/* Left: logo + name + degree */}
                  <div className="flex items-start gap-3">
                    <img
                      src={e.logo}
                      alt={`${e.school} logo`}
                      className="h-10 w-10 rounded-full object-cover"
                    />

                    <div className="space-y-1">
                      <div className="font-semibold leading-tight inline-flex items-center gap-1">
                        {e.school}
                        <FiArrowUpRight className="h-4 w-4 opacity-0 translate-y-[1px] transition group-hover:opacity-100 group-hover:translate-y-0" />
                      </div>
                      <div className="text-sm text-muted-foreground">{e.degreeLine}</div>
                    </div>
                  </div>

                  {/* Right: dates + location */}
                  <div className="text-right space-y-1">
                    <div className="text-sm font-medium">{e.dates}</div>
                    <div className="text-sm text-muted-foreground">{e.location}</div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}