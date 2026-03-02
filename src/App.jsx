import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Hero from "./components/sections/Hero";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import FlickeringGrid from "./components/ui/flickering-grid";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";

export default function App() {
  return (
    <main id="top" className="relative min-h-screen">
      <div className="pointer-events-none fixed top-0 left-0 right-0 h-[50vh] -z-10"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
        }}>
        {/* Light mode grid */}
        <div className="absolute inset-0 dark:hidden">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={3}
            gridGap={6}
            color="rgb(0,0,0)" // visible on light background
            maxOpacity={0.1} // keep subtle in light mode
            flickerChance={0.08}
          />
        </div>
        {/* Dark mode grid */}
        <div className="absolute inset-0 hidden dark:block">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={3}
            gridGap={6}
            color="rgb(255,255,255)" // visible on dark background
            maxOpacity={0.1}
            flickerChance={0.1}
          />
        </div>
      </div>
      <Navbar />
      <Container>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <FeaturedProjects />
        <Contact/>
      </Container>
    </main>
  );
}
