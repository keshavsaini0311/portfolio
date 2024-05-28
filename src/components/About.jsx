/* eslint-disable no-unused-vars */
import React from 'react'
import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import { useRef } from 'react';
export default function About() {
  return (
    <div  className='p-4 bg-gradient-to-r from-zinc-800 to-neutral-950 py-6'>

    <section  id='about' className="mt-0 overflow-auto text-center container mx-auto m-3 bg-hero-pattern bg-cover bg-center text-white items-center my-6">
      <h1 className="ml-10 mt-10 text-3xl font-bold mb-4 flex-wrap">Skills</h1>
      <div className="mt-10 mx-auto w-full transition-all ease-in-out duration-200">

      <div className="flex flex-wrap text-center items-center  transition-opacity "> 
       <div className=" mx-auto flex flex-wrap bg-neutral-900 rounded-lg w-3/12 hover:scale-105 transition-transform hover:shadow-zinc-600 hover:shadow-lg p-3">
            <h1 className=" overflow-auto mb-4 text-2xl font-bold mx-auto">JAVASCRIPT</h1>
            <img className='p-3 rounded-lg  mx-auto' src={meter1} alt="" />
        </div>
        <div className=" mx-auto  bg-neutral-900 rounded-lg w-3/12 hover:scale-105 transition-transform hover:shadow-zinc-600 hover:shadow-lg p-3">
            <h1 className=" mb-4 text-2xl font-bold ">REACT</h1>
            <img className='p-3 rounded-lg  mx-auto' src={meter2} alt="" />
        </div>
        <div className=" mx-auto bg-neutral-900 rounded-lg w-3/12 hover:scale-105 transition-transform hover:shadow-zinc-600 hover:shadow-lg p-3">
            <h1 className="overflow-auto mb-4 text-2xl font-bold ">MONGODB</h1>
            <img className='p-3 rounded-lg  mx-auto' src={meter3} alt="" />
        </div>

      </div>
      <div className="mt-10 flex flex-wrap text-center items-center  transition-opacity mb-6"> 
       <div className=" mx-auto bg-neutral-900 rounded-lg w-3/12 hover:scale-105 transition-transform hover:shadow-zinc-600 hover:shadow-lg p-3">
            <h1 className=" mb-4 text-2xl font-bold mx-auto">BACK-END</h1>
            <img className='p-3 rounded-lg  mx-auto' src={meter3} alt="" />
        </div>
        <div className=" mx-auto  bg-neutral-900 rounded-lg w-3/12 hover:scale-105 transition-transform hover:shadow-zinc-600 hover:shadow-lg p-3">
            <h1 className=" mb-4 text-2xl font-bold ">DSA</h1>
            <img className='p-3 rounded-lg  mx-auto' src={meter1} alt="" />
        </div>
        

      </div>
      </div>
    </section>

    </div>
  )
}
