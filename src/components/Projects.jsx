/* eslint-disable no-unused-vars */
import React from 'react'

export default function Projects() {
    const projectList = [
        { name: "Project One", description: "Description for project one." },
        { name: "Project Two", description: "Description for project two." },
        { name: "Project Three", description: "Description for project three." },
      ];
    
      return (
        <div  className='p-4 mt-0 bg-gradient-to-r from-zinc-800 to-neutral-950'>

        <section id="projects" className="mt-0 container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectList.map((project, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-lg transform transition hover:scale-105">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        </div>
      );
}
