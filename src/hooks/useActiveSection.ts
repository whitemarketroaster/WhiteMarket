import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], offset = 150) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const sectionTop = element.offsetTop;
          if (window.scrollY >= sectionTop - offset) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
