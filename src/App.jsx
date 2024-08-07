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
import AnimatedCursor from "react-animated-cursor"
import AOS from "aos";
import "aos/dist/aos.css";
function App() {

  const [count, setCount] = useState(0)
useEffect(() => {
  AOS.init();
  AOS.refresh();
}, []);
  useEffect(() => {
    document.title = "Keshav Saini - Portfolio";
  }, [])

  return (
    <>
      <div className="">

      <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color="0, 50, 255" //blue
      outerAlpha={0.7}
      innerScale={0.7}
      outerScale={3}
      />
      <Header />
      <div style={{ backgroundImage: `url(${image})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="w-full h-screen fixed-top sticky cursor">
      <Mesection />
      </div>

      <About  />
      <Projects />
      <Contact />
      <Footer />
      
      </div>
    </>
  )
}

export default App
