/* eslint-disable no-unused-vars */
import React from 'react'
import project1 from "../assets/download.jpg";
export default function Projects() {
    const projectList = [
        { name: "SaharaHousing", description:"Discover SaharaHousing, a MERN stack application for seamless real estate management. Browse listings, use powerful search filters, and handle secure transactions with ease. Accessible from any device, it simplifies your real estate needs.", image:"https://firebasestorage.googleapis.com/v0/b/assignmet-allianz.appspot.com/o/project1.png?alt=media&token=0ad9b640-48c6-4b87-9a6c-02fd27f223e2" },
        { name: "Daily Journal", description: "Welcome to Daily Journal, a MERN stack app for daily reflections. Capture thoughts, track moods, and set goals with customizable templates. Secure and accessible from any device, it fosters mindful writing and personal growth.", image: "https://firebasestorage.googleapis.com/v0/b/assignmet-allianz.appspot.com/o/project2.png?alt=media&token=4c9d09d5-0209-4deb-a208-9bdf9d0e2908" },
        { name: "Portfolio", description: "Explore my portfolio, featuring web development projects created with React. Discover intuitive, responsive, and efficient applications showcasing my skills in clean code and innovative design. Let's connect and bring your digital vision to life.        ", image: "https://firebasestorage.googleapis.com/v0/b/assignmet-allianz.appspot.com/o/project3.png?alt=media&token=73292cd0-f4be-46cf-bc84-8a82180be6e9" },
      ];
    
      return (
        <div  className='p-4 mt-0 bg-gradient-to-r from-zinc-800 to-neutral-950'>

        <section id="projects" className="mt-0 container mx-auto p-4">
          <h1 className="text-3xl text-white text-center font-bold mb-4">Projects</h1>
          <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projectList.map((project, index) => (
              <div key={index} className="bg-zinc-800 p-4 rounded shadow-lg transform transition hover:scale-105 h-fit w-fit mx-auto">
                <img src={project.image} alt={project.name} className="" />
                <h2 className="text-xl text-center font-bold">{project.name}</h2>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        </div>
      );
}
