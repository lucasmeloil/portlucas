import React from 'react';
import { ReactIcon, NodeIcon, PythonIcon, DockerIcon, JSIcon, GitHubIcon } from '../components/icons';

const HomePage: React.FC = () => {
  return (
    <section id="home" className="text-center animate-fade-in-down min-h-[75vh] flex flex-col justify-center items-center">
      <h1 className="font-orbitron text-4xl md:text-6xl font-bold tracking-widest uppercase text-shadow-neon-blue">
        Lucas Melo
      </h1>
      <p className="text-lg md:text-2xl text-purple-400 mt-4 tracking-wider font-orbitron">
        Desenvolvedor Full Stack & Arquiteto de Software
      </p>
      <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
        Como CEO da Nexus Softtech, combino expertise técnica com visão estratégica para transformar ideias complexas em produtos de software robustos, escaláveis e intuitivos que impulsionam o crescimento de negócios.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <a href="#projects" className="font-orbitron text-lg px-8 py-3 rounded-md border-2 border-blue-500 text-blue-300 hover:bg-blue-500/20 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:scale-105">
          Ver Projetos
        </a>
        <a href="https://wa.me/5579996125356" target="_blank" rel="noopener noreferrer" className="font-orbitron text-lg px-8 py-3 rounded-md border-2 border-purple-500 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transform hover:scale-105">
          Entrar em Contato
        </a>
      </div>

      <div className="mt-20 w-full max-w-4xl opacity-0 animate-fade-in-up" style={{animationDelay: '300ms'}}>
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
            Principais Tecnologias
          </h3>
          <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap">
              <ReactIcon title="React" className="h-8 w-8 md:h-10 md:w-10 text-gray-500 hover:text-cyan-400 transition-colors" />
              <NodeIcon title="Node.js" className="h-8 w-8 md:h-10 md:w-10 text-gray-500 hover:text-green-400 transition-colors" />
              <PythonIcon title="Python" className="h-8 w-8 md:h-10 md:w-10 text-gray-500 hover:text-yellow-400 transition-colors" />
              <JSIcon title="JavaScript" className="h-8 w-8 md:h-10 md:w-10 text-gray-500 hover:text-yellow-300 transition-colors" />
              <DockerIcon title="Docker" className="h-8 w-8 md:h-10 md:w-10 text-gray-500 hover:text-blue-500 transition-colors" />
              <GitHubIcon title="GitHub" className="h-8 w-8 md:h-10 md:w-10 text-gray-500 hover:text-white transition-colors" />
          </div>
      </div>
    </section>
  );
};

export default HomePage;