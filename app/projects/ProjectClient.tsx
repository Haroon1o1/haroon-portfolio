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
    className="group cursor-pointer block border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden transition transform hover:scale-[1.02] hover:shadow-lg"
  >
    {/* Banner Image */}
    <div className="relative w-full aspect-video bg-neutral-100 dark:bg-neutral-800">
      <Image
        src={project.logo} // fallback if you keep both
        alt={`${project.title} banner`}
        fill
        className="object-cover"
      />
    </div>

    {/* Card Content */}
    <div className="p-4">
      <h2 className="text-lg font-semibold text-black dark:text-white mb-1">
        {project.title}
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm line-clamp-2 mb-2">
        {project.smallDescription}
      </p>
      <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300">
        {project.year}
      </span>
    </div>
  </Link>
);


  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-10">
      <h1 className="mb-2 text-3xl font-bold">Projects</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        A collection of apps and automations I’ve built.
      </p>

      {/* Filter Buttons */}
      <div className="mb-8 flex gap-3">
        <button
          onClick={() => setSelectedType("flutter")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            selectedType === "flutter"
              ? "bg-lime-600 text-white"
              : "bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600"
          }`}
        >
          Flutter
        </button>
        <button
          onClick={() => setSelectedType("n8n")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            selectedType === "n8n"
              ? "bg-purple-600 text-white"
              : "bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600"
          }`}
        >
          n8n
        </button>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(renderProjectCard)}
        </div>
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400 text-left">
          No projects found.
        </p>
      )}
    </section>
  );
}
