"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 12);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.35 },
  }),
};

export function ProjectsShowcase() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "300px 0px 300px 0px",
    threshold: 0,
  });

  const allProjectNames = projects.map((p) => p.name);

  return (
    <section
      ref={ref}
      className="section-y bg-surface"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <header className="mb-12 flex flex-col gap-6 border-b border-hairline pb-10 md:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Dubai Mall · Emaar · ADNOC</p>
            <h2 id="projects-heading" className="display-lg mt-4 text-graphite">
              Trusted on the UAE&apos;s most demanding sites.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-deep">
              From luxury malls to hospitals — precision scanning and cutting
              where getting it wrong is not an option.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="shrink-0 rounded-md border-hairline bg-mist font-semibold text-graphite shadow-panel transition-all hover:border-safety hover:bg-mist hover:text-safety hover:shadow-lift"
          >
            <Link href="/projects">
              View all projects
              <span className="ml-1.5" aria-hidden>
                &rarr;
              </span>
            </Link>
          </Button>
        </header>

        {/* Project cards grid: flat instrument-panel treatment, individually bordered (count isn't guaranteed to divide evenly into the grid) */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:mb-14">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={`${project.name}-${project.location}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={cn(
                "group flex min-h-[170px] flex-col justify-end rounded-xl border border-hairline bg-surface p-5 shadow-panel",
                "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-safety/40 hover:shadow-lift"
              )}
            >
              <h3 className="display-sm mb-2 pr-2 text-graphite">
                {project.name}
              </h3>
              <span className="spec-label mb-3 w-fit rounded-full border border-hairline bg-mist-tint px-2.5 py-1 text-slate-soft">
                {project.category}
              </span>
              <p className="flex items-center gap-1.5 text-sm text-slate-deep">
                <MapPin className="size-4 shrink-0 text-safety" aria-hidden />
                {project.location}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Scrolling marquee */}
        <div
          className="relative overflow-hidden border-t border-hairline pt-6"
          aria-label="Project names"
        >
          <div className="flex w-full overflow-hidden select-none">
            <motion.div
              className="flex shrink-0 gap-6 pr-6"
              animate={{ x: [0, "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear",
                },
              }}
              style={{ width: "max-content" }}
            >
              {[...allProjectNames, ...allProjectNames].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="whitespace-nowrap font-mono text-sm text-slate-soft"
                >
                  {name}
                  <span className="mx-6 text-safety" aria-hidden>·</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
