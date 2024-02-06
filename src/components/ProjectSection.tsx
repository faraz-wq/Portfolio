"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Nextjs 14 Portfolio Website",
      description: "Project 1 description",
      image: "/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/M1sm4tch/Portfolio",
      previewUrl: "/",
    },
    {
      id:2,
      title:"HippoCons",
      description:"A digital marketplace for icons and UI kits.",
      image:"/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/M1sm4tch/Hippocons',
      previewUrl:'hippocons.up.railway.app'
    },
    {
      id:3,
      title:"Library Management",
      description:"A library management system complete with database integration and ORM.",
      image:"/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/M1sm4tch/library-management',
      previewUrl:'/'
    },
    {
      id:4,
      title:"Amazon Clone",
      description:"Ecommerce website with functional cart, built on vanilla js.",
      image:"/projects/4.png",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/M1sm4tch/javascript-amazon-project',
      previewUrl:'https://amazon-fr0nt.netlify.app/amazon.html'
    },
    {
      id:5,
      title:"Notes App",
      description:"A notes manager with text editing, supports markdown language.",
      image:"/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/M1sm4tch/NotesApp',
      previewUrl:'/'
    },
    {
      id:6,
      title:"MemeGen",
      description:"Meme generator website, gets random meme from top 100 popular memes which can be edited.",
      image:"/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/M1sm4tch/memegen',
      previewUrl:'https://rand0m-memegen.netlify.app/'
    },
]

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <>
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Artificial Intelligence"
            isSelected={tag === "Artificial Intelligence"}
          />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12"> 
            {filteredProjects.map((project,index)=> {
                return (
                  <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                  />
                </motion.li>
                )
            })}
      </ul>
    </section>
    </>
  )
}

export default ProjectSection