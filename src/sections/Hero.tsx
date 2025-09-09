import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from '../components/icons/GithubIcon';
import { LinkedinIcon } from '../components/icons/LinkedinIcon';
import { MailIcon } from '../components/icons/MailIcon';

export const Hero = () => (
  <section id="hero" className="relative bg-secondary overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
        Olá, eu sou <span className="bg-clip-text text-blue-800 bg-gradient-to-r from-primary to-accent">
          {portfolioData.name}
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        {portfolioData.title}
      </p>
      <div className="flex justify-center items-center space-x-6">
        <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
          <GithubIcon className="w-8 h-8" />
        </a>
        <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
          <LinkedinIcon className="w-8 h-8" />
        </a>
        <a href={`mailto:${portfolioData.email}`} aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
          <MailIcon className="w-8 h-8" />
        </a>
      </div>
    </div>
  </section>
);