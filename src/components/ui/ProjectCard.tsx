import { type Project } from '../../types';
import { ExternalLinkIcon } from '../icons/ExternalLinkIcon';
import { GithubIcon } from '../icons/GithubIcon';

export const ProjectCard = ({ title, description, tags, githubUrl, liveUrl }: Project) => (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-100">{title}</h3>
          <div className="flex gap-4 text-gray-400 flex-shrink-0">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label={`Repositório de ${title}`}>
              <GithubIcon className="w-6 h-6" />
            </a>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label={`Demo ao vivo de ${title}`}>
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-700 text-cyan-300 text-xs font-mono px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
);