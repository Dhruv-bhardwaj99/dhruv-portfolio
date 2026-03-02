import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../data/projects";
import { hoverCard } from "@/lib/utils";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16">
      <div className="space-y-8">
        <div className="space-y-1">
          <SectionTitle text="Featured Projects" />
          <p className="text-muted-foreground text-sm m-0">
            Real systems, measurable impact, and clean engineering decisions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} className={`h-full ${hoverCard}`}>
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle>{p.title}</CardTitle>
                  <Badge variant="secondary">{p.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {p.highlights?.length ? (
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} className="bg-black text-white dark:bg-white dark:text-black" variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {p.links.github && (
                    <Button variant="outline" asChild className="gap-2">
                      <a href={p.links.github} target="_blank" rel="noreferrer">
                        <FaGithub className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {p.links.demo && (
                    <Button variant="outline" asChild className="gap-2">
                      <a href={p.links.demo} target="_blank" rel="noreferrer">
                        <FaGlobe className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}