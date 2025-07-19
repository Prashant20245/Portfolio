import { Button } from "@/components/ui/button";
import { projects } from "@/contents/projects";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="pt-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:max-w-3xl md:mx-auto">
        {projects.slice(0, 4).map((project) => (
          <article key={project.title} className="border rounded-xl shadow">
            <div className="relative w-full h-64 rounded-t-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
