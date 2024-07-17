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
        <ul className="flex gap-4 ml-200 justify-between font-semibold text-xl text-center">
          <li 
          onClick = {(e)=>{
            e.preventDefault();
            window.scrollTo({
            top: document.querySelector("#about").offsetTop,
            behavior: "smooth",
            });
          }}
          className="00 bg-opacity- hover:scale-105 hover:bg-black hover:bg-opacity-30 mx-auto p-2 rounded-lg">
            Skills
          </li>
          <li 
          onClick = {(e)=>{
            e.preventDefault();
            window.scrollTo({
            top: document.querySelector("#projects").offsetTop,
            behavior: "smooth",
            });
          }}
          className="hover:scale-105 hover:bg-black hover:bg-opacity-30 p-2 mx-auto rounded-lg">
            Projects
          </li>
          <li 
          onClick = {(e)=>{
            e.preventDefault();
            window.scrollTo({
            top: document.querySelector("#contact").offsetTop,
            behavior: "smooth",
            });
          }}
          className="hover:scale-105 hover:bg-black hover:bg-opacity-30 p-2 mx-auto rounded-lg">
            Contact
          </li>
        </ul>
      </nav>
    </header>
      
      );
}
