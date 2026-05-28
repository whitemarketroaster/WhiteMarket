import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Team } from './Team';
import { Honors } from './Honors';
import { Menu } from './Menu';
import { Contact } from './Contact';
import { Footer } from './Footer';

const LoginScreen: React.FC = () => {
  return (
    <div className="bg-background text-on-surface selection:bg-primary selection:text-on-primary min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Honors />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LoginScreen;
