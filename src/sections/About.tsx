import { portfolioData } from '../data/portfolioData';

export const About = () => (
  <section id="about" className="py-20 bg-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Sobre Mim</h2>
      <p className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
        {portfolioData.about}
      </p>
    </div>
  </section>
);