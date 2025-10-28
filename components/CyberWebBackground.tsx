import React from 'react';
import {
  ReactIcon,
  NodeIcon,
  PythonIcon,
  JSIcon,
  DockerIcon,
  GitHubIcon,
  AngularIcon,
  HTMLIcon,
} from './icons';

// Lista de ícones de tecnologia disponíveis para o fundo
const techIcons = [
  ReactIcon,
  NodeIcon,
  PythonIcon,
  JSIcon,
  DockerIcon,
  GitHubIcon,
  AngularIcon,
  HTMLIcon,
];

// Gera um conjunto de ícones com propriedades aleatórias para a animação
const floatingIcons = Array.from({ length: 30 }).map((_, i) => {
  const IconComponent = techIcons[i % techIcons.length];
  const size = Math.random() * 50 + 20; // Tamanho entre 20px e 70px
  return {
    id: i,
    Component: IconComponent,
    style: {
      position: 'absolute' as React.CSSProperties['position'],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      // Animação com duração e atraso aleatórios para um efeito mais natural
      animation: `float-up ${Math.random() * 25 + 20}s ${Math.random() * 15}s linear infinite`,
    },
  };
});

export const CyberWebBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {floatingIcons.map(({ id, Component, style }) => (
        <div key={id} style={style} className="text-blue-900/50 opacity-20">
          <Component className="w-full h-full" />
        </div>
      ))}
      <style>{`
        @keyframes float-up {
          0% {
            /* Começa fora da tela, abaixo, e com rotação e opacidade zeradas */
            transform: translateY(10vh) rotate(0deg);
            opacity: 0;
          }
          10%, 90% {
            /* A opacidade aumenta para criar um efeito de fade-in e fade-out suave */
            opacity: 1;
          }
          100% {
            /* Termina fora da tela, acima, com rotação, para um loop contínuo */
            transform: translateY(-110vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
