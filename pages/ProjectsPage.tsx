import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectDetail } from '../components/ProjectDetail';
import {
  PenToolIcon,
  BotIcon,
  CreditCardIcon,
  BarChartIcon,
} from '../components/icons';

export interface Project {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  detailedDescription: string;
  technologies: string[];
  gallery: string[];
}

const projects: Project[] = [
  {
    icon: <PenToolIcon className="h-10 w-10 text-blue-400" />,
    title: 'Anota aí',
    description: 'Solução intuitiva para gerenciamento de pedidos, otimizando o fluxo de trabalho para restaurantes e deliverys.',
    imageUrl: 'https://placehold.co/400x300/0a0a0a/3b82f6?text=Anota+Aí',
    detailedDescription: 'O "Anota aí" foi desenvolvido para simplificar a vida de donos de restaurantes. A plataforma centraliza pedidos de diferentes canais, gerencia o status de cada um em tempo real e oferece relatórios detalhados de vendas, ajudando a identificar gargalos e otimizar a operação do delivery.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    gallery: [
        'https://placehold.co/800x600/0a0a0a/3b82f6?text=Dashboard',
        'https://placehold.co/800x600/0a0a0a/3b82f6?text=Tela+de+Pedidos',
        'https://placehold.co/800x600/0a0a0a/3b82f6?text=Relatórios',
    ],
  },
  {
    icon: <BotIcon className="h-10 w-10 text-purple-400" />,
    title: 'Nexus Automate',
    description: 'Plataforma de automação de processos que aumenta a eficiência operacional e reduz custos para empresas.',
    imageUrl: 'https://placehold.co/400x300/0a0a0a/a855f7?text=Nexus+Automate',
    detailedDescription: 'Nexus Automate é uma solução de RPA (Robotic Process Automation) que permite a criação de "robôs" para executar tarefas repetitivas, como preenchimento de formulários, extração de dados e integração entre sistemas legados. A plataforma visa democratizar a automação, com uma interface visual e de baixo código.',
    technologies: ['Python', 'Django', 'React', 'Docker', 'RabbitMQ'],
    gallery: [
        'https://placehold.co/800x600/0a0a0a/a855f7?text=Builder+Visual',
        'https://placehold.co/800x600/0a0a0a/a855f7?text=Monitoramento',
        'https://placehold.co/800x600/0a0a0a/a855f7?text=Logs+de+Execução',
    ],
  },
   {
    icon: <CreditCardIcon className="h-10 w-10 text-blue-400" />,
    title: 'Cartões Digitais',
    description: 'Criação de cartões de visita digitais e interativos, uma abordagem moderna e sustentável para networking.',
    imageUrl: 'https://placehold.co/400x300/0a0a0a/3b82f6?text=Cartões+Digitais',
    detailedDescription: 'Esta plataforma permite que profissionais e empresas criem cartões de visita digitais personalizáveis. Os cartões podem incluir links para redes sociais, portfólio, WhatsApp e mais, sendo facilmente compartilháveis via QR Code ou link. Uma solução ecológica que moderniza o networking.',
    technologies: ['Vue.js', 'Firebase', 'Node.js', 'QR Code API'],
     gallery: [
        'https://placehold.co/800x600/0a0a0a/3b82f6?text=Editor+de+Cartão',
        'https://placehold.co/800x600/0a0a0a/3b82f6?text=Visualização+Mobile',
        'https://placehold.co/800x600/0a0a0a/3b82f6?text=Analytics',
    ],
  },
  {
    icon: <BarChartIcon className="h-10 w-10 text-purple-400" />,
    title: 'Análise de Criptomoedas',
    description: 'Software robusto para análise de mercado de criptoativos, oferecendo insights e dados em tempo real.',
    imageUrl: 'https://placehold.co/400x300/0a0a0a/a855f7?text=Cripto+Análise',
    detailedDescription: 'Uma ferramenta poderosa para traders e entusiastas de criptomoedas. O software se conecta a múltiplas exchanges via API para coletar dados de preço, volume e sentimento de mercado em tempo real. Os usuários podem criar dashboards personalizados, configurar alertas e testar estratégias de trading (backtesting).',
    technologies: ['TypeScript', 'React', 'Go', 'GraphQL', 'TimescaleDB'],
     gallery: [
        'https://placehold.co/800x600/0a0a0a/a855f7?text=Dashboard+Principal',
        'https://placehold.co/800x600/0a0a0a/a855f7?text=Gráficos+Avançados',
        'https://placehold.co/800x600/0a0a0a/a855f7?text=Configuração+de+Alertas',
    ],
  },
];

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };
  
  const handleGoBack = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleGoBack} />;
  }

  return (
    <section id="projects" className="max-w-7xl mx-auto animate-fade-in">
      <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12 text-center text-shadow-neon-blue">
        Projetos em Destaque
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" style={{ perspective: '1000px' }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            icon={project.icon}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            index={index}
            onClick={() => handleProjectSelect(project)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
