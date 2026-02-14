"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 12);

const CATEGORY_GRADIENTS: Record<string, string> = {
  Commercial: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
  Hospitality: "from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30",
  Corporate: "from-slate-50 to-zinc-50 dark:from-slate-950/30 dark:to-zinc-950/30",
  Developer: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
  Healthcare: "from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30",
  Contractor: "from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30",
  Residential: "from-cyan-50 to-indigo-50 dark:from-cyan-950/30 dark:to-indigo-950/30",
  Government: "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
  Interior: "from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/30 dark:to-pink-950/30",
};

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
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent-orange)] mb-3"
            aria-hidden
          >
            OUR PROJECTS
          </p>
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Trusted by UAE&apos;s Most Iconic Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            From luxury malls to hospitals, we&apos;ve delivered precision scanning
            and cutting services to leading developments
          </p>
        </header>

        {/* Project cards grid: 4 cols desktop, 3 tablet, 2 mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mb-12 md:mb-14">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={`${project.name}-${project.location}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={cn(
                "group relative rounded-xl border border-border bg-gradient-to-br p-5 shadow-sm",
                "transition-all duration-300 ease-out",
                "hover:shadow-md hover:border-[var(--color-secondary-blue)]/30",
                CATEGORY_GRADIENTS[project.category] ?? "from-muted/50 to-muted"
              )}
            >
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2 pr-2">
                {project.name}
              </h3>
              <Badge
                variant="secondary"
                className="mb-3 w-fit text-xs font-medium"
              >
                {project.category}
              </Badge>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-[var(--color-accent-orange)]" aria-hidden />
                {project.location}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Below grid: count + CTA */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-muted-foreground text-base md:text-lg mb-6">
            And 500+ more projects across UAE
          </p>
          <Button asChild size="lg" className="font-semibold">
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
                  className="text-sm font-medium text-muted-foreground whitespace-nowrap"
                >
                  {name}
                  <span className="mx-6 text-muted-foreground/50" aria-hidden>•</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
