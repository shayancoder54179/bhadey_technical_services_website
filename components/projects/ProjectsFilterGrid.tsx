"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

const CATEGORY_GRADIENTS: Record<string, string> = {
  Commercial: "from-amber-600/90 to-orange-700/90",
  Hospitality: "from-sky-600/90 to-blue-700/90",
  Corporate: "from-slate-600/90 to-zinc-700/90",
  Developer: "from-emerald-600/90 to-teal-700/90",
  Healthcare: "from-rose-600/90 to-red-700/90",
  Contractor: "from-violet-600/90 to-purple-700/90",
  Residential: "from-cyan-600/90 to-indigo-700/90",
  Government: "from-blue-600/90 to-indigo-700/90",
  Interior: "from-fuchsia-600/90 to-pink-700/90",
};

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
              "shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
              activeFilter === cat
                ? "bg-[var(--color-accent-orange)] text-white shadow-md"
                : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeFilter}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={`${project.name}-${project.location}-${project.category}`}
              variants={cardVariants}
              layout
              className={cn(
                "group relative rounded-xl overflow-hidden p-5 min-h-[140px]",
                "bg-gradient-to-br shadow-sm",
                "transition-all duration-300 ease-out",
                "hover:scale-[1.02] hover:shadow-lg",
                CATEGORY_GRADIENTS[project.category] ??
                  "from-slate-600/90 to-slate-700/90"
              )}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"
                aria-hidden
              />

              {project.featured && (
                <span
                  className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/25 px-2 py-1 text-xs font-semibold text-white"
                  aria-label="Featured project"
                >
                  <Star className="size-3.5 fill-current" aria-hidden />
                  Featured
                </span>
              )}

              <h3 className="text-base md:text-lg font-bold text-white mb-2 pr-12">
                {project.name}
              </h3>
              <Badge
                variant="secondary"
                className="mb-3 w-fit text-xs font-medium bg-white/25 text-white border-white/30"
              >
                {project.category}
              </Badge>
              <p className="flex items-center gap-1.5 text-sm text-white/90">
                <MapPin
                  className="size-4 shrink-0 text-white/80"
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
