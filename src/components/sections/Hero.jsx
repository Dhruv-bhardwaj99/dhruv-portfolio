import { Button } from "@/components/ui/button";
import TiltedCard from "../bits/TiltedCard";
import TextType from "../bits/TextType";
import dhruvPic from "../../assets/dhruvb_26.jpg";
import { profile } from "../data/profile.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiChevronRight, FiBriefcase, FiCode, FiLayers } from "react-icons/fi";

const stats = [
  { icon: FiBriefcase, label: "Years Experience", value: "3+" },
  { icon: FiCode,      label: "Projects Shipped", value: "10+" },
  { icon: FiLayers,    label: "Stack",             value: "MERN" },
];

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center py-16">
      <div className="relative z-10 w-full grid items-center gap-10 md:grid-cols-[340px_1fr]">

        {/* LEFT: Tilted photo */}
        <div className="flex flex-col items-center md:items-start">
          <TiltedCard
            imageSrc={dhruvPic}
            altText="Dhruv's Picture"
            captionText="Dhruv Bhardwaj"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="320px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={<span>Software Engineer</span>}
          />
        </div>

        {/* RIGHT: Content */}
        <div className="space-y-6 text-left">

          {/* Resume pill */}
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-2 py-1 text-sm font-semibold backdrop-blur dark:bg-white/5 dark:border-white/10 shadow-sm">
            <a
              href={profile.links.resume}
              download="Dhruv_Bhardwaj_resume_SIT.pdf"
              className="inline-flex items-center gap-2 rounded-full px-2 py-1 transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              aria-label="Download resume"
            >
              <FiDownload className="h-4 w-4" />
            </a>
            <span className="px-2">Download Resume</span>
            <a
              href="https://drive.google.com/file/d/1NeImCQbZutDT_eAdWd4WYxz4SJ9Qqea2/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-white px-2 py-1 text-muted-foreground transition hover:text-foreground dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20"
              aria-label="Open resume on Google Drive"
            >
              <FiChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground font-medium">Hi, I'm</p>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl gradient-text leading-tight">
              Dhruv Bhardwaj
            </h1>

            {/* Typewriter role */}
            <div className="flex items-center gap-2 text-xl font-semibold text-muted-foreground h-8">
              <TextType
                text={[
                  "Full-Stack Engineer",
                  "MERN Developer",
                  "React & Node.js Dev",
                  "MS CS @ Stevens",
                ]}
                typingSpeed={55}
                deletingSpeed={30}
                pauseDuration={2200}
                className="text-xl font-semibold"
                cursorClassName="text-primary"
                loop
              />
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
            Full-stack Software Engineer with experience building production web
            and mobile applications using React, React Native, Node.js/Express,
            and MongoDB. Skilled in REST API design, authentication, and
            delivering end-to-end features with clean, maintainable code.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="stat-chip flex items-center gap-2 text-sm">
                <Icon className="h-4 w-4 text-primary" />
                <span className="font-bold">{value}</span>
                <span className="text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <Button
              variant="outline"
              asChild
              className="gap-2 transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button
              asChild
              className="gap-2 bg-gradient-to-r from-[var(--grad-from)] to-[var(--grad-to)] text-white border-0 hover:opacity-90 transition"
            >
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
