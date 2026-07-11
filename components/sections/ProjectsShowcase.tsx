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
    rootMargin: "-60px 0px -60px 0px",
    threshold: 0.08,
  });

  const allProjectNames = projects.map((p) => p.name);

  return (
    <section
      ref={ref}
      className="bg-paper py-16 md:py-20 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p
            className="font-mono text-xs font-semibold uppercase tracking-widest text-signal-orange mb-3"
            aria-hidden
          >
            Our Projects
          </p>
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight"
          >
            Trusted by UAE&apos;s Most Iconic Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            From luxury malls to hospitals, we&apos;ve delivered precision scanning
            and cutting services to leading developments
          </p>
        </header>

        {/* Project cards grid: flat instrument-panel treatment, individually bordered (count isn't guaranteed to divide evenly into the grid) */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 mb-12 md:mb-14">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={`${project.name}-${project.location}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={cn(
                "group flex min-h-[160px] flex-col justify-end border border-steel/20 bg-paper p-5",
                "transition-colors duration-300 ease-out hover:bg-concrete/50"
              )}
            >
              <h3 className="text-base md:text-lg font-semibold mb-2 pr-2 text-foreground tracking-tight">
                {project.name}
              </h3>
              <span className="mb-3 w-fit border border-steel/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-steel">
                {project.category}
              </span>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin
                  className="size-4 shrink-0 text-signal-orange"
                  aria-hidden
                />
                {project.location}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Below grid: count + CTA */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-muted-foreground text-base md:text-lg mb-6">
            And more projects across UAE
          </p>
          <Button asChild size="lg" className="rounded-none bg-signal-orange font-semibold text-ink hover:bg-signal-orange/90">
            <Link href="/projects">
              View All Projects
              <span className="ml-1.5" aria-hidden>→</span>
            </Link>
          </Button>
        </div>

        {/* Scrolling marquee */}
        <div
          className="relative border-t border-border pt-6 overflow-hidden"
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
                  className="font-mono text-sm text-muted-foreground whitespace-nowrap"
                >
                  {name}
                  <span className="mx-6 text-signal-orange/60" aria-hidden>·</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
