import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projectsData } from '../data';

const filters = ['All', 'Web App', 'Data Analysis'] as const;

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');

  const filteredProjects =
    activeFilter === 'All' ? projectsData : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold tracking-wider text-[#007ACC] uppercase mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h3>
          </div>

          {/* Filters */}
          <div className="flex space-x-2 mt-6 md:mt-0 bg-white p-1 rounded-xl shadow-sm border border-gray-200">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#007ACC] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-[#007ACC] font-semibold hover:underline">
            View All Projects (Pages/Blog) <ChevronRight size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};