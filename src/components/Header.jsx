/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleScrollToSection = (id) => {
    window.scrollTo({
      top: document.querySelector(`#${id}`).offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <header className="overflow-x-clip fixed w-full top-0 z-50 backdrop-blur-sm text-purple-500 p-4">
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo (Optional) */}
        <div className="text-xl font-bold">
          <a href="#home">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-8 h-8 text-purple-500"
>
  <path d="M12 2L2 7l10 5 10-5-10-5z" />
  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
</svg>

          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center px-2 py-1 rounded-md hover:bg-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <div className={`lg:flex lg:items-center lg:gap-4 absolute lg:static top-full right-0 mt-2p-4  md:bg-inherit  rounded-lg transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <li
              onClick={() => handleScrollToSection('home')}
              className={`btn btn--hoverEffect2 p-2 rounded-lg ${
                activeSection === 'home' ? 'active text-white' : ''
              }`}
            >
              Home
            </li>
            <li
              onClick={() => handleScrollToSection('about')}
              className={`btn btn--hoverEffect2 p-2 rounded-lg ${
                activeSection === 'about' ? 'active text-white' : ''
              }`}
            >
              About
            </li>
            <li
              onClick={() => handleScrollToSection('project')}
              className={`btn btn--hoverEffect2 p-2 rounded-lg ${
                activeSection === 'project' ? 'active text-white' : ''
              }`}
            >
              Projects
            </li>
            <li
              onClick={() => handleScrollToSection('contact')}
              className={`btn btn--hoverEffect2 p-2  rounded-lg ${
                activeSection === 'contact' ? 'active text-white' : ''
              }`}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
