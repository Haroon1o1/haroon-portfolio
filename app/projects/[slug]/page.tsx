import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../project-data";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 py-12">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center">
        {project.title}
      </h1>

      {/* Date */}
      <p className="text-gray-500 text-center mt-2">{project.year}</p>

      {/* Banner Image */}
      <div className="mt-6 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <Image
          src={project.banner}
          alt={`${project.title} banner`}
          width={1200}
          height={600}
          className="object-cover w-full h-auto rounded-lg"
          priority
        />
      </div>

      {/* Overview/Details */}
      <p className="mt-10 max-w-3xl mx-auto text-center text-white-700 text-base sm:text-lg">
        {project.description}
      </p>

      {/* Screens Grid */}
     <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{project.images?.map((img, idx) => (
    <div
      key={idx}
      className="w-full flex justify-center rounded-lg overflow-hidden shadow-md"
    >
      <Image
        src={img.src}
        alt={`Project image ${idx + 1}`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-[90%] h-auto object-contain rounded-lg"
      />
    </div>
  ))}
</div>
<div className="mt-8  mx-auto">
  <h3 className="text-xl font-semibold mb-4 text-left text-gray-900 dark:text-gray-100">
    Features
  </h3>
  <ul className="space-y-3">
    {project.features.map((feature, index) => (
      <li
        key={index}
        className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow"
      >
        {/* Icon */}
        <svg
          className="w-6 h-6 flex-shrink-0 text-blue-500 mt-1"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>

        {/* Feature Text */}
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
          {feature}
        </p>
      </li>
    ))}
  </ul>
</div>




      {/* Tools & Technologies */}
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-left">Tools & Technologies</h2>
        <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
          {project.techStack.map((tool) => (
            <li
              key={tool.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white shadow"
              style={{ backgroundColor: tool.color }}
            >
              {tool.name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
