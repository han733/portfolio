import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../data';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <a
            href="#"
            className="opacity-0 group-hover:opacity-100 bg-white text-[#007ACC] p-3 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </div>
      <div className="p-8">
        <span className="text-xs font-bold tracking-wider text-[#007ACC] uppercase mb-2 block">
          {project.category}
        </span>
        <h4 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h4>
        <p className="text-gray-600 mb-6 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};