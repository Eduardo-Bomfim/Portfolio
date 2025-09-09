import { portfolioData } from '../data/portfolioData';

export const Contact = () => (
    <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Entre em Contato</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
            </p>
            <a 
                href={`mailto:${portfolioData.email}`}
                className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-colors text-lg"
            >
                Enviar um Email
            </a>
        </div>
    </section>
);