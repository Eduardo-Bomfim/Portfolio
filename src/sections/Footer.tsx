import { portfolioData } from '../data/portfolioData';

export const Footer = () => (
    <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.</p>
        </div>
    </footer>
);