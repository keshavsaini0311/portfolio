/* eslint-disable no-unused-vars */
import React from 'react';
import {ReactTyped} from 'react-typed';
import image from '../assets/background.jpg';
export default function Mesection()  {
  
  return (
    <section id='home' className="sm:mt-0 text-center  ml-10   flex flex-col justify-center text-white m-4 p-3 rounded-3xl ">
      
      <div  className="mt-12 p-3 bg-neutral-900 bg-opacity-60  rounded-2xl text-violet-400 mb-5  z-10 ">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Keshav Saini</h1>
        <ReactTyped
          className="text-2xl"
          strings={["A Web Developer.", "CP Enthusiast", "Dedicated problem solver."]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
      <div className="flex text-center bg-neutral-900 bg-opacity-60 rounded-2xl">

      <div className="mx-auto text-purple-400 max-w-4xl  p-3 font-sans text-xl font-normal leading-relaxed  rounded-2xl text-justify">
      Welcome to my portfolio. I'm a web developer passionate about creating sleek, user-friendly experiences. Dive into my projects where innovation meets functionality. Explore the latest in web development as we embark on a journey to shape the digital world together.
      
      </div>
      
      </div>
    </section>
  );
}