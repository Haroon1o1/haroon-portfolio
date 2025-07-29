import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../project-data";

// interface Params {
//   slug: string;
// }

// interface Props<T = Params> {
//   params: T | Promise<T>;  // params can be either T or Promise<T>
// }


export default async function ProjectDetails({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await params;


  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const images = project.images;

  return (
    <main className="max-w-screen-2xl mx-auto px-4 py-12 text-center">
      {/* Title */}
      <h1 className="text-4xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
        {project.title}
      </h1>
      <p className="text-gray-500 mt-5">{project.year}</p>

      {/* Banner image */}
      <div className="mt-8 w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <Image
          src={project.banner}
          alt={`${project.title} banner`}
          width={1200}
          height={600}
          className="object-cover"
          priority
        />
      </div>

      {/* Description under banner */}
      <p className="mt-6 max-w-5xl mx-auto text-white text-lg">
        {project.description}
      </p>

      {/* Zig-zag image-text rows */}
      <section className="mt-12 max-w-5xl mx-auto space-y-20">
{/* 1st row: image left, text right */}
<div className="flex flex-col md:flex-row items-start gap-8 mx-auto w-full max-w-[1200px]">
  <div className="flex-shrink-0 w-full md:w-[400px] rounded-lg overflow-hidden shadow-md">
    <Image
      src={images[0].src}
      alt={images[0].label}
      width={400}
      height={400}
      className="object-cover rounded-lg"
    />
  </div>
  <div className="flex-grow text-left">
    <h2 className="text-2xl font-semibold mb-3">{images[0].label}</h2>
    <p className="text-gray-700">{images[0].description}</p>
  </div>
</div>

{/* 2nd row: image right, text left */}
<div className="flex flex-col md:flex-row-reverse items-start gap-8 mx-auto w-full max-w-[1200px]">
  <div className="flex-shrink-0 w-full md:w-[400px] rounded-lg overflow-hidden shadow-md">
    <Image
      src={images[1].src}
      alt={images[1].label}
      width={400}
      height={400}
      className="object-cover rounded-lg"
    />
  </div>
  <div className="flex-grow text-left">
    <h2 className="text-2xl font-semibold mb-3">{images[1].label}</h2>
    <p className="text-gray-700">{images[1].description}</p>
  </div>
</div>

{/* 3rd row: image left, text right */}
<div className="flex flex-col md:flex-row items-start gap-8 mx-auto w-full max-w-[1200px]">
  <div className="flex-shrink-0 w-full md:w-[400px] rounded-lg overflow-hidden shadow-md">
    <Image
      src={images[2].src}
      alt={images[2].label}
      width={400}
      height={400}
      className="object-cover rounded-lg"
    />
  </div>
  <div className="flex-grow text-left">
    <h2 className="text-2xl font-semibold mb-3">{images[0].label}</h2>
    <p className="text-gray-700">{images[0].description}</p>
  </div>
</div>


      </section>

      {/* Tools & Technologies */}
     <section className="mt-20 max-w-5xl mx-auto">
  <h2 className="text-2xl font-semibold mb-6 text-left">Tools & Technologies</h2>
  <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
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
