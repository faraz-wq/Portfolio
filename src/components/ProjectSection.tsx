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
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id:2,
      title:"Osteoarthritis Detection with CNN",
      description:"A cnn algorithm trained to detect signs of deneration in joint tissues.",
      image:"/projects/1.png",
      tag: ["All", "Artificial Intelligence"],
      gitUrl: '/',
      previewUrl:'/'
    }
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
    <h2>
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
    <div>
        {filteredProjects.map((project)=> {
            return (
                <ProjectCard key={project.id} 
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tag={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}/>
            )
        })}
    </div>
    </>
  )
}

export default ProjectSection