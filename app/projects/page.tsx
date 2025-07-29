import type { Metadata } from "next";
import ProjectsClient from "./ProjectClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Haroon's featured projects in Flutter and n8n",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
