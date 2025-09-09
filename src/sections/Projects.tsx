import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from '../components/ui/ProjectCard';
import { type Project } from '../types';

export const Projects = () => (
  <section id="projects" className="py-20 bg-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Projetos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project: Project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);