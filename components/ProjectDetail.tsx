import React, { useState } from 'react';
import { ArrowLeftIcon } from './icons';
import type { Project } from '../pages/ProjectsPage';


interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [mainImage, setMainImage] = useState(project.gallery[0]);

  return (
    <div className="absolute top-0 left-0 w-full min-h-screen z-20 p-4 sm:p-8 md:p-12 text-gray-200 pt-24 sm:pt-28 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-orbitron text-lg text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeftIcon className="h-6 w-6" />
          Voltar aos Projetos
        </button>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6 md:p-8 shadow-lg shadow-blue-500/10">
          <h1 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 text-shadow-neon-blue">{project.title}</h1>
          
          {/* Gallery */}
          <div className="mb-8">
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-purple-500/30 mb-4">
              <img src={mainImage} alt="Main project view" className="w-full h-full object-cover transition-opacity duration-300" />
            </div>
            <div className="flex gap-2 justify-center">
              {project.gallery.map((imgSrc, index) => (
                <button 
                  key={index} 
                  onClick={() => setMainImage(imgSrc)}
                  className={`w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${mainImage === imgSrc ? 'border-blue-400' : 'border-transparent hover:border-blue-500/50'}`}
                >
                  <img src={imgSrc} alt={`Project thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="font-orbitron text-2xl font-bold mb-4 text-purple-400">Sobre o Projeto</h2>
              <p className="text-gray-300 leading-relaxed">{project.detailedDescription}</p>
            </div>
            <div>
              <h2 className="font-orbitron text-2xl font-bold mb-4 text-purple-400">Tecnologias</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-900/50 text-blue-300 text-sm font-medium px-3 py-1 rounded-full border border-blue-500/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
