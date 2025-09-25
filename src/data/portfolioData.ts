import { type PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Eduardo de Andrade do Bomfim Júnior",
  title: "Desenvolvedor Backend & IA",
  email: "eduardo.a.junior.dev@gmail.com",
  socials: {
    github: "https://github.com/Eduardo-Bomfim",
    linkedin: "https://linkedin.com/in/eduardo-de-andrade-do-bomfim-júnior-47986528b",
  },
  about: "Estudante de Ciência da Computação. Tenho um forte interesse em arquiteturas de microsserviços e na aplicação de modelos de Machine Learning para criar produtos inovadores. Estou em busca de uma oportunidade de estágio para aplicar meu conhecimento teórico em um ambiente de desenvolvimento ágil e aprender com profissionais experientes. Tenho certificações em AWS Cloud Practitioner e Google Cloud, e me destaco pela capacidade de aprender rápido, criar soluções criativas e contribuir em equipe.",
  skills: {
    "Linguagens": ["Python", "JavaScript/TypeScript", "Java", "SQL"],
    "Backend": ["Node.js", "Express.js", "Flask", "REST APIs"],
    "IA & Machine Learning": ["TensorFlow", "PyTorch", "Pandas", "NumPy"],
    "Bancos de Dados": ["PostgreSQL", "MongoDB", "MySQL"],
    "Ferramentas & DevOps": ["Docker", "Git", "Linux", "AWS (S3, EC2, Lambda)"],
  },
  projects: [
    {
      title: 'Sistema de Login',
      description: 'Um projeto de API RESTful construído com .NET 8 para autenticação e registro de usuários. A arquitetura foi projetada para ser limpa, escalável e segura, utilizando uma camada de serviço para a lógica de negócio e Entity Framework Core para a persistência de dados.',
      tags: ['C#', '.NET 8', 'Microsoft SQL Server', 'Git', 'REST API', 'Mailtrap.io', 'JWT', 'BCrypt'],
      githubUrl: 'https://github.com/Eduardo-Bomfim/Sistema-de-login',
      liveUrl: ''
    },
    {
      title: 'Classificador de Spam',
      description: 'Este é um projeto de estudo que implementa um classificador de spam para mensagens SMS, utilizando o algoritmo Multinomial Naive Bayes. O modelo foi treinado e avaliado usando a biblioteca Scikit-learn, alcançando uma alta precisão na detecção de mensagens de spam.',
      tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy'],
      githubUrl: 'https://github.com/Eduardo-Bomfim/Classificador-de-Spam',
      liveUrl: ''
    },
    {
      title: 'ViajePlus - Chatbot de Roteiro de Viagem',
      description: 'O ViajePlus é um assistente de viagens inteligente que cria roteiros personalizados. Através de uma interface de chat simples, o usuário informa um destino e a duração da viagem, e a inteligência artificial gera um plano detalhado, dia a dia, com sugestões de atividades, dicas locais e restaurantes, tudo organizado em tabelas para fácil visualização.',
      tags: ['React', 'TypeScript', 'Python', 'Flask', 'LangChain', 'LLM', 'Hugging Face'],
      githubUrl: 'https://github.com/Eduardo-Bomfim/ViajePlus',
      liveUrl: ''
    },
  ],
  experience: [
    {
      role: "Estagiário de IA",
      company: "Compass UOL",
      period: "SET 2024 - FEV 2025",
      description: "Desenvolvimento de Sistema de Armazenamento de Dados Cadastrais utilizando localStorage com JavaScript. Site RSS com API em Node.js com Docker. Sistema de extração de dados de notas fiscais com IA. Chatbot Jurídico com LLM utilizando langchain, bucket S3, Amazon Bedrock, ChromaDB e integração com Telegram."
    }
  ]
};