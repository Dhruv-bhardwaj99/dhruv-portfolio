import { Badge } from "@/components/ui/badge";
import SectionTitle from "../common/SectionTitle";

export default function Skills() {
  const skills = {
    Languages: ["JavaScript", "Java", "SQL", "HTML", "CSS"],
    Frameworks: ["React", "Node.js", "Express", "React Native", "Redux Toolkit", "Handlebars"],
    Databases: ["MongoDB", "MySQL", "Sequelize"],
    Tools: ["Git", "Postman", "VS Code", "AWS", "Azure TFS", "Shopify"],
    Concepts: ["REST APIs", "MVC", "Authentication", "Session Management", "Input Validation", "XSS Protection"],
  };

  return (
    <section id="skills" className="py-16">
      <div className="space-y-8">
        <div className="space-y-1">
          <SectionTitle text="Skills" />
          <p className="text-muted-foreground text-sm m-0">
            A focused stack aligned to production full-stack work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className={`group rounded-xl border p-5`}>
              <h3 className="font-semibold tracking-tight">{group}</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="
                      transition
                      hover:border-black hover:text-black hover:bg-transparent
                      dark:hover:bg-white dark:hover:text-black dark:hover:border-transparent
                    "
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}