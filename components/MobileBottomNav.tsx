import React from 'react';
import { HomeIcon, UserIcon, CodeIcon, MailIcon } from './icons';

const navItems = [
    { href: '#home', label: 'Início', icon: <HomeIcon className="h-6 w-6" /> },
    { href: '#about', label: 'Quem Sou', icon: <UserIcon className="h-6 w-6" /> },
    { href: '#projects', label: 'Projetos', icon: <CodeIcon className="h-6 w-6" /> },
    { href: '#contact', label: 'Contato', icon: <MailIcon className="h-6 w-6" /> },
];

interface MobileBottomNavProps {
    activeSection: string;
}

const NavLink: React.FC<{
    item: typeof navItems[0];
    isActive: boolean;
}> = ({ item, isActive }) => {
    
    const activeClasses = 'text-blue-400';
    const inactiveClasses = 'text-gray-500 hover:text-blue-300';

    return (
        <a
            href={item.href}
            className={`flex flex-col items-center justify-center transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}
        >
            {item.icon}
            <span className="text-xs mt-1 font-medium">{item.label}</span>
        </a>
    );
};


export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeSection }) => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-t border-purple-500/30">
            <div className="flex justify-around items-center h-16">
                {navItems.map(item => (
                    <NavLink key={item.href} item={item} isActive={activeSection === item.href} />
                ))}
            </div>
        </nav>
    );
}