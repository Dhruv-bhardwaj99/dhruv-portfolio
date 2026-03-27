import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Hero from "./components/sections/Hero";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import FlickeringGrid from "./components/ui/flickering-grid";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";

/* ── Ambient gradient orb background ──────────────── */
function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">

      {/* ── Dark mode orbs ── */}
      {/* Purple / indigo — top left */}
      <div
        className="orb-1 absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.25 290 / 30%) 0%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />
      {/* Cyan — top right */}
      <div
        className="orb-2 absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, oklch(0.82 0.16 200 / 22%) 0%, transparent 70%)",
          filter: "blur(90px)",
          willChange: "transform",
        }}
      />
      {/* Deep blue — bottom center */}
      <div
        className="orb-3 absolute bottom-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, oklch(0.45 0.22 265 / 18%) 0%, transparent 70%)",
          filter: "blur(100px)",
          willChange: "transform",
        }}
      />

      {/* ── Light mode orbs ── */}
      {/* Soft indigo — top right */}
      <div
        className="orb-2 absolute -top-20 right-0 h-[500px] w-[500px] rounded-full opacity-100 dark:opacity-0"
        style={{
          background: "radial-gradient(circle, oklch(0.70 0.18 265 / 14%) 0%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />
      {/* Soft violet — top left */}
      <div
        className="orb-1 absolute -top-32 -left-20 h-[450px] w-[450px] rounded-full opacity-100 dark:opacity-0"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.20 300 / 10%) 0%, transparent 70%)",
          filter: "blur(90px)",
          willChange: "transform",
        }}
      />

      {/* ── Flickering grid — hero area only ── */}
      <div
        className="absolute inset-x-0 top-0 h-[55vh]"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
          maskImage:        "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="absolute inset-0 dark:hidden">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={3}
            gridGap={6}
            color="rgb(99,102,241)"
            maxOpacity={0.06}
            flickerChance={0.05}
          />
        </div>
        <div className="absolute inset-0 hidden dark:block">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={3}
            gridGap={6}
            color="rgb(34,211,238)"
            maxOpacity={0.06}
            flickerChance={0.07}
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main id="top" className="relative min-h-screen">
      <AmbientBackground />
      <Navbar />
      <Container>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <FeaturedProjects />
        <Contact />
      </Container>
    </main>
  );
}
