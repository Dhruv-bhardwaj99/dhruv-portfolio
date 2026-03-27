import SectionTitle from "../common/SectionTitle";

const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "Java", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frameworks",
    items: ["React", "Node.js", "Express", "React Native", "Redux Toolkit", "Handlebars"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "MySQL", "Sequelize"],
  },
  {
    group: "Tools & Cloud",
    items: ["Git", "Postman", "VS Code", "AWS", "Azure TFS", "Shopify"],
  },
  {
    group: "Concepts",
    items: ["REST APIs", "MVC", "Authentication", "Session Management", "Input Validation", "XSS Protection"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="space-y-10">
        <div className="space-y-2">
          <SectionTitle text="Skills" />
          <span className="section-underline block" />
          <p className="text-muted-foreground text-sm">
            A focused stack aligned to production full-stack work.
          </p>
        </div>

        <div className="rounded-xl border bg-(--card) overflow-hidden divide-y divide-(--border)">
          {skills.map(({ group, items }) => (
            <div
              key={group}
              className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] items-start gap-4 px-5 py-4 transition-colors hover:bg-(--muted)/40"
            >
              <div className="flex items-center gap-2.5 pt-0.5">
                <span className="h-4 w-0.5 rounded-full bg-linear-to-b from-(--grad-from) to-(--grad-to) shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {group}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-(--border) bg-(--background) px-2.5 py-1 text-xs font-medium text-(--foreground) transition-colors duration-150 hover:border-primary/50 hover:bg-(--muted)/60 cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
