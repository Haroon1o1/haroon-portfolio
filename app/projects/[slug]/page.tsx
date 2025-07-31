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

  const images = project.images;

  return (
    <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 py-12 text-center">
      {/* Project Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-balance overflow-hidden text-ellipsis">
        {project.title}
      </h1>
      <p className="text-gray-500 mt-3">{project.year}</p>

      {/* Banner Image */}
      <div className=" mt-4 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <Image
          src={project.banner}
          alt={`${project.title} banner`}
          width={1200}
          height={600}
          className="object-cover w-full h-auto rounded-lg"
          priority
        />
      </div>

      {/* Description */}
      <p className="mt-10 max-w-5xl mx-auto text-black-200 text-base sm:text-lg">
        {project.description}
      </p>

      {/* Project Images Section */}
      <section className="mt-12 max-w-5xl mx-auto space-y-16">
        {images?.slice(0, images?.length).map((img, idx) => (
    <div
  key={idx}
  className={`flex flex-col items-center md:items-start gap-8 w-full ${
    idx % 2 === 1 && img.label !== "" ? "md:flex-row-reverse" : "md:flex-row"
  }`}
>
  <div
    className={`w-full flex justify-center md:justify-start ${
      img.label === "" ? "md:w-[1024px]" : "md:w-[233px]"
    } rounded-lg overflow-hidden shadow-md`}
  >
    <Image
      src={img.src}
      alt={img.label}
      width={img.label === "" ? 1024 : 233}
      height={602}
      className="object-contain rounded-lg"
    />
  </div>


            <div className="flex-grow text-left">
             <h2 className="text-2xl font-semibold mb-3 text-center md:text-left">{img.label}</h2>

              <p className="text-gray-700 text-center md:text-left">
  {img.description}
</p>

            </div>
          </div>
        ))}
      </section>

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
