/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import image from '../assets/background.jpg'
export default function Header() {

  const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
    return (
      
        <header className="sticky top-0 z-50   backdrop-blur-sm text-purple-500 p-4">
      <nav className=' text-center'>
        <ul className="flex gap-4 ml-200 justify-between  text-center">
          <li className="hover:scale-105 hover:bg-black hover:bg-opacity-30 mx-auto p-2 rounded-lg">
            <a  href='#about' className="">Skills</a>
          </li>
          <li className="hover:scale-105 hover:bg-black hover:bg-opacity-30 p-2 mx-auto rounded-lg">
            <a href="#projects" className="">Projects</a>
          </li>
          <li className="hover:scale-105 hover:bg-black hover:bg-opacity-30 p-2 mx-auto rounded-lg">
            <a  href="#contact" className= " ">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
      
      );
}
