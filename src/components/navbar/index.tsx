"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface NavItemProps {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let maxOffsetTop = -Infinity;
      let currentSectionId: string | null = null;

      sections.forEach((section: HTMLElement) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5) {
          if (rect.top > maxOffsetTop) {
            maxOffsetTop = rect.top;
            currentSectionId = section.id;
          }
        }
      });

      setCurrentSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full px-5 md:px-40 py-8 z-50">
      <div className="flex justify-around items-center py-5 px-10 bg-slate-800 bg-opacity-50 backdrop-blur-xl text-white rounded-lg">
        <div className="font-bold cursor-pointer transition-all duration-500 text-3xl  hover:bg-gradient-to-r ease-in-out delay-100 hover:-translate-y-1 hover:from-sky-700 hover:to-pink-300 hover:bg-opacity-15 hover:ring-4 hover:ring-blue-400 rounded-full w-[5rem] flex justify-center items-center">
          <Image src="/assets/landing-page/logo.svg" alt='logo' width={55} height={60} />
        </div>
        <div className="hidden lg:flex justify-evenly w-full">
          <NavItem onClick={() => scrollToSection('home')} isActive={currentSection === 'home'}>Home</NavItem>
          <NavItem onClick={() => scrollToSection('about')} isActive={currentSection === 'about'}>About</NavItem>
          <NavItem onClick={() => scrollToSection('skills')} isActive={currentSection === 'skills'}>Skills</NavItem>
          <NavItem onClick={() => scrollToSection('projects')} isActive={currentSection === 'projects'}>Projects</NavItem>
          <NavItem onClick={() => scrollToSection('contact')} isActive={currentSection === 'contact'}>Contact</NavItem>
          <NavItem onClick={() => scrollToSection('journey')} isActive={currentSection === 'journey'}>Journey</NavItem>
        </div>
        <div className="lg:hidden flex gap-x-10">
          <button className="cursor-pointer" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col absolute top-28 gap-y-4 left-0 w-full bg-slate-800 bg-opacity-80 backdrop-blur-3xl rounded-2xl text-white py-4">
            <NavItem onClick={() => scrollToSection('home')} isActive={currentSection === 'home'}>Home</NavItem>
            <NavItem onClick={() => scrollToSection('about')} isActive={currentSection === 'about'}>About</NavItem>
            <NavItem onClick={() => scrollToSection('skills')} isActive={currentSection === 'skills'}>Skills</NavItem>
            <NavItem onClick={() => scrollToSection('projects')} isActive={currentSection === 'projects'}>Projects</NavItem>
            <NavItem onClick={() => scrollToSection('contact')} isActive={currentSection === 'contact'}>Contact</NavItem>
            <NavItem onClick={() => scrollToSection('journey')} isActive={currentSection === 'journey'}>Journey</NavItem>
          </div>
        )}
        <button className="bg-gradient-to-r from-sky-700 to-pink-300 bg-opacity-20 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 w-fit text-nowrap text-white py-2 px-4 font-bold rounded-lg transition-all duration-700 hover:bg-clip-text ring-2 hover:ring-blue-300 hover:text-transparent">
        <a href="mailto:shashank.sanket014@gmail.com">
          Hire Me
        </a>
        </button>
      </div>
    </nav>
  );
}

function NavItem({ onClick, isActive, children }: NavItemProps) {
  return (
    <p
      className={`cursor-pointer transition-all duration-300 hover:ring-[2px] hover:ring-blue-400 hover:bg-gradient-to-r hover:from-sky-700 hover:to-pink-300 hover:bg-opacity-20 rounded-lg px-2 ${isActive ? 'text-blue-400' : ''}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
}
