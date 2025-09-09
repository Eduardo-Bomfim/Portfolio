import { portfolioData } from '../data/portfolioData';

export const Skills = () => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Habilidades Técnicas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {(Object.entries(portfolioData.skills) as [string, string[]][]).map(([category, skillsList]) => (
          <div key={category} className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillsList.map(skill => (
                <span key={skill} className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);