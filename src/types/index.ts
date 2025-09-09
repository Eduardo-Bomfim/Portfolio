export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
  about: string;
  skills: {
    [key: string]: string[];
  };
  projects: Project[];
  experience: ExperienceItem[];
}
