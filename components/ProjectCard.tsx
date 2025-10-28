import React from 'react';

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  index: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, description, imageUrl, index, onClick }) => {
  const animationDelay = `${index * 100}ms`;
  const borderColor = index % 2 === 0 ? 'border-blue-500/50' : 'border-purple-500/50';
  const hoverBorderColor = index % 2 === 0 ? 'hover:border-blue-400' : 'hover:border-purple-400';
  const shadowColor = index % 2 === 0 ? 'hover:shadow-blue-500/20' : 'hover:shadow-purple-500/20';

  return (
    <button
      onClick={onClick}
      className={`group bg-gray-900/40 backdrop-blur-sm rounded-lg border ${borderColor} ${hoverBorderColor} transition-all duration-300 transform hover:shadow-2xl ${shadowColor} flex flex-col opacity-0 animate-fade-in-up overflow-hidden text-left w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${index % 2 === 0 ? 'focus:ring-blue-500' : 'focus:ring-purple-500'}`}
      style={{ animationDelay, transformStyle: 'preserve-3d' }}
    >
      <div className="overflow-hidden h-40">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col items-center text-center flex-grow">
          <div className="mb-4">
            {icon}
          </div>
          <h3 className="font-orbitron text-xl font-bold mb-3 text-gray-100">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
        }
        .group:hover img {
           transform: scale(1.05);
        }
        button:hover {
            transform: translateZ(10px) scale(1.02);
        }
      `}</style>
    </button>
  );
};