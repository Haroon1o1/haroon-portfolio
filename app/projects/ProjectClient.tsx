"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects } from "./project-data";

export default function ProjectsClient() {
  const [selectedType, setSelectedType] = useState<"flutter" | "n8n">("flutter");

  const filteredProjects = projects.filter((p) => p.type === selectedType);

  const renderProjectCard = (project: typeof projects[0]) => (
    <Link
      key={project.slug}
      href={`/projects/${project.slug}`}
      className="cursor-pointer block border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:shadow-md hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
    >
      <div className="flex items-center gap-4">
        {/* Logo Image */}
        <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold text-black dark:text-white">
            {project.title}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mt-1 text-sm line-clamp-2">
            {project.description}
          </p>
          <span className="text-sm text-neutral-500 mt-1 block">{project.year}</span>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="mb-8 text-3xl font-bold">Projects</h1>

      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setSelectedType("flutter")}
          className={`cursor-pointer px-4 py-2 rounded ${
            selectedType === "flutter"
              ? "bg-lime-600 text-white"
              : "bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300"
          }`}
        >
          Flutter
        </button>
        <button
          onClick={() => setSelectedType("n8n")}
          className={`cursor-pointer px-4 py-2 rounded ${
            selectedType === "n8n"
              ? "bg-purple-600 text-white"
              : "bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300"
          }`}
        >
          n8n
        </button>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="space-y-4">{filteredProjects.map(renderProjectCard)}</div>
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400">No projects found.</p>
      )}
    </section>
  );
}
