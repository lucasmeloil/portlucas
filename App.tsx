import React, { useState, useEffect } from 'react';
import { CyberWebBackground } from './components/CyberWebBackground';
import { Header } from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import { MobileBottomNav } from './components/MobileBottomNav';

const App: React.FC = () => {
  // Simple hash-based routing
  const [route, setRoute] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Set initial route based on hash on load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#about':
        return <AboutPage />;
      case '#projects':
        return <ProjectsPage />;
      case '#contact':
        return <ContactPage />;
      case '#home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <CyberWebBackground />
      <Header activeSection={route} />
      
      <main className="relative z-10 p-4 sm:p-8 md:p-12 text-gray-200 pt-24 sm:pt-28 pb-24 md:pb-12">
        {renderPage()}
      </main>
      
      <MobileBottomNav activeSection={route} />

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        a {
          transition: color 0.2s ease-in-out;
        }
        .text-shadow-neon-blue {
          text-shadow: 0 0 5px rgba(59, 130, 246, 0.7), 0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3);
        }
        .text-shadow-neon-purple {
          text-shadow: 0 0 5px rgba(168, 85, 247, 0.7), 0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3);
        }
        .icon-glow-blue {
          filter: drop-shadow(0 0 3px rgba(59, 130, 246, 0.7));
        }
        .icon-glow-purple {
          filter: drop-shadow(0 0 3px rgba(168, 85, 247, 0.7));
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
         @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;