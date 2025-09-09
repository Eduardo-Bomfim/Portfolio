import { portfolioData } from '../data/portfolioData';

export const Header = () => (
  <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#hero" className="text-xl font-bold text-gray-100 hover:text-cyan-400 transition-colors">
        {portfolioData.name}
      </a>
      <div className="hidden md:flex space-x-6 text-gray-300">
        <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a>
        <a href="#skills" className="hover:text-cyan-400 transition-colors">Habilidades</a>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projetos</a>
        <a href="#experience" className='hover:text-cyan-400 transition-colors'>Experiências</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
      </div>
    </nav>
  </header>
);