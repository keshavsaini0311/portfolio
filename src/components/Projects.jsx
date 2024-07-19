/* eslint-disable no-unused-vars */
import React from 'react'
import project1 from "../assets/download.jpg";
export default function Projects() {
    const projectList = [
      {name:"Threads-Clone",link:"https://social-media-9ll3.onrender.com/",description:"This social media app, inspired by Threads, is built using the MERN stack and Chakra UI. It offers seamless user experiences for sharing posts, following others, and engaging in discussions. Developed collaboratively with friends Sagar and Nishant, the app showcases modern web development practices and interactive design.",image:"https://firebasestorage.googleapis.com/v0/b/assignmet-allianz.appspot.com/o/project4.png?alt=media&token=a6aaa475-fd25-4031-a13e-6a98d03a85a1"},
        { name: "SaharaHousing",link:"https://saharahousing.onrender.com/" ,description:"Discover SaharaHousing, a MERN stack application for seamless real estate management. Browse listings, use powerful search filters, and handle secure transactions with ease. Accessible from any device, it simplifies your real estate needs.", image:"https://firebasestorage.googleapis.com/v0/b/assignmet-allianz.appspot.com/o/project1.png?alt=media&token=0ad9b640-48c6-4b87-9a6c-02fd27f223e2" },
        { name: "Daily Journal", link:"https://blog-website-56w9.onrender.com/" ,description: "Welcome to Daily Journal, a MERN stack app for daily reflections. Capture thoughts, track moods, and set goals with customizable templates. Secure and accessible from any device, it fosters mindful writing and personal growth.", image: "https://firebasestorage.googleapis.com/v0/b/assignmet-allianz.appspot.com/o/project2.png?alt=media&token=4c9d09d5-0209-4deb-a208-9bdf9d0e2908" },
        { name: "Portfolio",link:"https://portfolio-mu-liart-14.vercel.app/" , description: "Explore my portfolio, featuring web development projects created with React. Discover intuitive, responsive, and efficient applications showcasing my skills in clean code and innovative design. Let's connect and bring your digital vision to life.        ", image: "https://firebasestorage.googleapis.com/v0/b/assignmet-allianz.appspot.com/o/project3.png?alt=media&token=73292cd0-f4be-46cf-bc84-8a82180be6e9" },
      ];
    
      return (
        <div  className='p-4 mt-0 bg-gradient-to-r from-zinc-800 to-neutral-950'>

        <section id="project" className="mt-0 container mx-auto p-4">
          <h1 className="text-3xl text-white text-center font-bold mb-4">Projects</h1>
          <div className="text-white w-full flex-wrap flex  gap-8 mt-8">
            {projectList.map((project, index) => (
              <a className='mx-auto md:w-[600px] ' data-aos="zoom-in-up" data-aos-ease="ease-in-sine"  data-aos-duration="700"  key={index}  href={project.link}>
              <div data-aos="zoom-in-up" data-aos-duration="700"  className=" bg-zinc-800 p-3 rounded shadow-lg transform transition hover:scale-105 h-fit w-fit mx-auto">
                <img src={project.image} alt={project.name} className="" />
                <h2 className="text-xl text-center font-bold">{project.name}</h2>
                <p>{project.description}</p>
              </div>
              </a>
            ))}
          </div>
        </section>

        </div>
      );
}
