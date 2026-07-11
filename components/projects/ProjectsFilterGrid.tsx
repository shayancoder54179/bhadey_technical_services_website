"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsFilterGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      {/* Filter pills - horizontal scroll on mobile */}
      <div
        className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible scrollbar-none"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {projectCategories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeFilter === cat}
            onClick={() => setActiveFilter(cat)}
            className={cn(
              "shrink-0 border px-4 py-2.5 font-mono text-xs uppercase tracking-wide transition-colors duration-200",
              activeFilter === cat
                ? "border-signal-orange bg-signal-orange text-ink"
                : "border-steel/20 bg-paper text-muted-foreground hover:border-steel/40 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid — flat instrument-panel treatment, individually bordered (filtered count varies) */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeFilter}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={`${project.name}-${project.location}-${project.category}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={cardVariants}
              layout
              className={cn(
                "group relative flex min-h-[140px] flex-col justify-end border border-steel/20 bg-paper p-5",
                "transition-colors duration-300 ease-out hover:bg-concrete/50"
              )}
            >
              {project.featured && (
                <span
                  className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-signal-orange px-2 py-1 font-mono text-[10px] font-semibold uppercase text-ink"
                  aria-label="Featured project"
                >
                  <Star className="size-3.5 fill-current" aria-hidden />
                  Featured
                </span>
              )}

              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 pr-12 tracking-tight">
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
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
