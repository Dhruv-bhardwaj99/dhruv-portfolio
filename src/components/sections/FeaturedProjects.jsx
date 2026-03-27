import SectionTitle from "../common/SectionTitle";
import { projects } from "../data/projects";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projectGrads = [
  "from-(--grad-from) to-(--grad-to)",
  "from-violet-500 to-fuchsia-500",
  "from-emerald-500 to-teal-500",
];

const typeColors = {
  Production:  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  Academic:    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "Client Work": "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16">
      <div className="space-y-10">
        <div className="space-y-2">
          <SectionTitle text="Featured Projects" />
          <span className="section-underline block" />
          <p className="text-muted-foreground text-sm">
            Real systems, measurable impact, and clean engineering decisions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => {
            const grad = projectGrads[index % projectGrads.length];
            return (
              <div
                key={p.title}
                className="group relative flex flex-col rounded-xl border bg-(--card) fancy-card overflow-hidden"
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-linear-to-r ${grad}`} />

                {/* Large number watermark */}
                <div
                  className={`pointer-events-none absolute right-4 top-2 text-7xl font-black opacity-[0.04] bg-linear-to-br ${grad} bg-clip-text select-none`}
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex flex-col flex-1 p-5 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-base leading-snug pr-2">{p.title}</h3>
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${typeColors[p.type] ?? ""}`}>
                        {p.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>

                  {/* Highlights */}
                  {p.highlights?.length ? (
                    <ul className="space-y-1.5">
                      {p.highlights.map((h, hi) => (
                        <li key={hi} className="flex gap-2 text-xs text-muted-foreground">
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-br ${grad}`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border px-2.5 py-0.5 text-xs font-medium bg-(--secondary) text-(--secondary-foreground)"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links — pushed to bottom */}
                  <div className="mt-auto flex gap-3 pt-2">
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition hover:bg-(--secondary)"
                      >
                        <FaGithub className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    )}
                    {p.links.demo && (
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold bg-linear-to-r ${grad} text-white transition hover:opacity-90`}
                      >
                        <FaGlobe className="h-3.5 w-3.5" />
                        Live Demo
                        <FiExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
