/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaGithub ,FaLinkedinIn} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container flex justify-center text-center">
      <h1 className="text-white ">
        &copy; {new Date().getFullYear()+" "} 
          
          My Portfolio. All rights reserved.
        </h1>
        <a href="https://github.com/keshavsaini0311" className="text-white  hover:text-gray-400 ml-4">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/keshav-saini-190a53256/" className=" text-white hover:text-gray-400 ml-4">
          <FaLinkedinIn size={30} />
        </a>
      </div>
    </footer>
  )
}
