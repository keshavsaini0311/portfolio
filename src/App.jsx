/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Mesection from './components/Mesection'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import image from './assets/background.jpg'

function App() {
  const [count, setCount] = useState(0)
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

  console.log(scrollPosition);

  return (
    <>
      <Header />
      <div style={{ backgroundImage: `url(${image})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="w-full h-screen fixed-top sticky">
      <Mesection />
      </div>

      <About  />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
