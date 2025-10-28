import React, { useState } from 'react';
import { HomeIcon, UserIcon, CodeIcon, MailIcon, MenuIcon, XIcon } from './icons';

interface HeaderProps {
    activeSection: string;
}

const navItems = [
    { href: '#home', label: 'Início', icon: <HomeIcon className="h-5 w-5" /> },
    { href: '#about', label: 'Quem Sou', icon: <UserIcon className="h-5 w-5" /> },
    { href: '#projects', label: 'Projetos', icon: <CodeIcon className="h-5 w-5" /> },
    { href: '#contact', label: 'Contato', icon: <MailIcon className="h-5 w-5" /> },
];

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      window.location.hash = href;
      setMobileMenuOpen(false);
    };

    const NavLink: React.FC<{
        item: typeof navItems[0];
        isActive: boolean;
        isMobile?: boolean;
    }> = ({ item, isActive, isMobile = false }) => {
        
        const activeClasses = 'text-blue-400 icon-glow-blue';
        const inactiveClasses = 'text-gray-400 hover:text-blue-300';
        
        return (
            <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`transition-colors duration-300 flex items-center gap-2 ${isActive ? activeClasses : inactiveClasses} ${isMobile ? 'text-2xl py-4' : 'text-sm font-medium'}`}
            >
                {item.icon}
                <span>{item.label}</span>
            </a>
        );
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-purple-500/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="font-orbitron text-xl font-bold text-white">
                                Lucas Melo <span className="text-purple-400">|</span> Full Stack
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-6">
                                {navItems.map(item => (
                                    <NavLink key={item.href} item={item} isActive={activeSection === item.href} />
                                ))}
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full transition-transform duration-300 ${isMobileMenuOpen ? 'scale-100' : 'scale-95'}`}>
                  <div className="flex flex-col items-center justify-center h-full space-y-6">
                      {navItems.map(item => (
                          <NavLink key={item.href} item={item} isActive={activeSection === item.href} isMobile={true}/>
                      ))}
                  </div>
                </div>
            </div>
        </>
    );
};
