import React, { useState, useEffect } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';

export const Header: React.FC = () => {
  const activeSection = useActiveSection(['home', 'about', 'team', 'menu', 'contact']);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'shop', label: 'Shop' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant transition-colors duration-300">
        <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-8 lg:px-margin-desktop max-w-container-max mx-auto relative z-50">
          <a
            className="relative group flex items-center justify-start font-headline-md text-headline-md font-black tracking-tighter text-primary uppercase"
            href="#home"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out whitespace-nowrap">
              WHITE MARKET
            </span>
            <img
              src="/assets/logo.webp"
              alt="White Market"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`font-label-sm text-label-sm transition-all duration-300 uppercase tracking-widest ${activeSection === link.id
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-primary'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>


          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-primary transform transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-primary transform transition-all duration-300 ease-in-out origin-center ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>
        </nav>

      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-surface/95 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className={`flex flex-col items-center gap-8 transform transition-transform duration-500 delay-100 ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-8'
          }`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-headline-md text-3xl transition-all duration-300 uppercase tracking-widest ${activeSection === link.id
                ? 'text-primary'
                : 'text-on-surface-variant'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
