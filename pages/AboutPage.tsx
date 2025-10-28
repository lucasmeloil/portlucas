import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto animate-fade-in">
      <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12 text-center text-shadow-neon-purple">
        Quem Sou
      </h2>
      <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6 md:p-8 shadow-lg shadow-blue-500/10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gray-800 border-2 border-purple-500 overflow-hidden shadow-lg shadow-purple-500/20">
              <img src="https://placehold.co/200x200/0a0a0a/a855f7?text=LM" alt="Lucas Melo" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-2">
             <p className="text-base md:text-lg leading-relaxed text-gray-300">
              Como CEO da Nexus Softtech, minha paixão é transformar ideias complexas em soluções de software elegantes e eficientes. Com vasta experiência em arquitetura de sistemas e liderança de equipes de alta performance, dedico-me a impulsionar a inovação tecnológica. Minha visão é construir o futuro, desenvolvendo ferramentas que não apenas resolvem problemas, mas que também abrem novos horizontes para nossos clientes e parceiros.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Habilidades Principais */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 shadow-lg shadow-purple-500/10">
          <h3 className="font-orbitron text-2xl font-bold mb-4 text-purple-400">Habilidades Principais</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start"><span className="text-blue-400 mr-2">›</span> <strong>Arquitetura de Software:</strong> Design de sistemas escaláveis, resilientes e de alta performance (Microsserviços, Serverless, DDD).</li>
            <li className="flex items-start"><span className="text-blue-400 mr-2">›</span> <strong>Desenvolvimento Full Stack:</strong> Proficiência em todo o ciclo de vida do software, do front-end (React, Vue) ao back-end (Node.js, Python, Go).</li>
            <li className="flex items-start"><span className="text-blue-400 mr-2">›</span> <strong>Liderança Técnica e Mentoria:</strong> Capacidade de liderar, inspirar e capacitar equipes de engenharia para alcançar a excelência técnica.</li>
             <li className="flex items-start"><span className="text-blue-400 mr-2">›</span> <strong>DevOps & Cloud:</strong> Cultura de automação, CI/CD, e experiência com provedores de nuvem como AWS e Google Cloud.</li>
          </ul>
        </div>

        {/* Filosofia de Trabalho */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6 shadow-lg shadow-blue-500/10">
          <h3 className="font-orbitron text-2xl font-bold mb-4 text-blue-400">Filosofia de Trabalho</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start"><span className="text-purple-400 mr-2">›</span> Acredito que a melhor tecnologia é aquela que se torna invisível, resolvendo problemas complexos de forma intuitiva para o usuário final.</li>
            <li className="flex items-start"><span className="text-purple-400 mr-2">›</span> Meu foco é na entrega de valor contínuo, utilizando metodologias ágeis e uma abordagem pragmática para a engenharia de software.</li>
            <li className="flex items-start"><span className="text-purple-400 mr-2">›</span> A inovação nasce da colaboração. Promovo um ambiente onde a criatividade, a autonomia e a experimentação são incentivadas.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;