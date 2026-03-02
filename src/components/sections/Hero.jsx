import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlurText from "../bits/BlurText";
import TiltedCard from "../bits/TiltedCard";
import dhruvPic from "../../assets/dhruvb_26.jpg";
import { profile } from "../data/profile.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiChevronRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="items-center py-16">
      <div className="relative z-10 w-full grid items-center gap-6 md:grid-cols-[360px_1fr]">
        {/* LEFT: Photo + rotating text */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
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

        {/* RIGHT: Existing hero content */}
        <div className="space-y-6 text-left">
          {/* <Badge variant="secondary">Open to SWE Full-time</Badge> */}

          <div className="inline-flex items-center gap-2 rounded-full border bg-blue-50/70 px-2 py-1 text-sm font-semibold backdrop-blur dark:bg-black/40">
            {/* Download icon (downloads local /public/resume.pdf) */}
            <a
              href={profile.links.resume}
              download="Dhruv_Bhardwaj_resume_SIT.pdf"
              className="inline-flex items-center gap-2 rounded-full px-2 py-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              aria-label="Download resume"
            >
              <FiDownload className="h-4 w-4" />
            </a>
            <span className="px-4">Download Resume</span>

            {/* Drive link (right chevron) */}
            <a
              href="https://drive.google.com/file/d/1NeImCQbZutDT_eAdWd4WYxz4SJ9Qqea2/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full px-2 py-1 text-muted-foreground bg-white hover:text-foreground dark:text-black"
              aria-label="Open resume on Google Drive"
            >
              <FiChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-2">
            <BlurText
              text="Hi, I'm Dhruv"
              delay={200}
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Full-Stack Software Engineer (MERN) | MS CS @ Stevens Institute of
              Technology
            </p>
          </div>

          {/* <ul className="space-y-2 text-sm text-muted-foreground">
                        {profile.highlights.map((p, index) => (
                            <li key={index}>• {p}</li>
                        ))}
                    </ul> */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Full-stack Software Engineer with experience building production web
            and mobile applications using React, React Native, Node.js/Express,
            and MongoDB. Skilled in REST API design, authentication, and
            delivering end-to-end features with clean, maintainable code.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              variant="outline"
              asChild
              className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-2">
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </span>
              </a>
            </Button>

            <Button
              variant="outline"
              asChild
              className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <span className="inline-flex items-center gap-2">
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
