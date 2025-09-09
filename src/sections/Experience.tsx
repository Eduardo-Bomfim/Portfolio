import { portfolioData } from '../data/portfolioData';

export const Experience = () => (
  <section id="experience" className="py-20 bg-secondary-focus">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16 text-white">Experiência Profissional</h2>
      
      <div className="relative border-l-2 border-gray-700/50 pl-8 max-w-3xl mx-auto">
        {portfolioData.experience.map((item, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute -left-[42.5px] top-1 bg-secondary-focus p-1 rounded-full">
              <div className="bg-primary w-4 h-4 rounded-full border-4 border-secondary-focus"></div>
            </div>
            
            <p className="text-sm text-gray-400 mb-1">{item.period}</p>
            <h3 className="text-xl font-bold text-gray-100">{item.role}</h3>
            <p className="text-md text-gray-300 font-semibold mb-3">{item.company}</p>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
