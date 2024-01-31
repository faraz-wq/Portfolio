"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
      title: "Programming Languages",
      id: "languages",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Python</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Express</li>
        </ul>
      ),
    },
    {
      title: "Technologies",
      id: "technologies",
      content: (
        <ul className="list-disc pl-2">
          <li>Next js</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>REST APIs</li>
          <li>Socket.io</li>
					<li>Numpy</li>
					<li>Tensorflow</li>
          <li>Django Framework</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Sinhgad Academy of Engineering, Pune</li>
          <li>AKI’s Poona College of Science, Pune</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
					<li>JavaScript Programming by Meta Via Coursera</li>
					<li>Python Programming Meta Via Coursera</li>
          <li>Django Framework Meta Via Coursera</li>
          <li>Deep Learning by Internshala Trainings</li>					
					<li>Internship & Job Preparation Internshala Trainings</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab,setTab] = useState("certifications")
    const [isPending,startTransition] = useTransition()

    const handleTabChange = (id: string) => {
      startTransition(() => {
        setTab(id);
      });
    };

  return (
    <section className='text-white mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
                src="/aboutsection.jpg" 
                alt="about section" 
                width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-sm lg:text-md'>
                    Committed to developing interactive and responsive websites, I possess a strong background in Python, JavaScript, and TypeScript. Proficient in front-end technologies like React, HTML, JSX, and Tailwind, and experienced in backend tasks with Node.js, Express, and Django. Currently exploring Next.js, I&apos;m driven by a continuous enthusiasm for learning. Eager to deepen my understanding of front-end, back-end technologies, delve into systems design, and embrace some DevOps practices. Knowledgeable in databases, including MySQL, MongoDB, and PostgreSQL, I can seamlessly integrate these technologies into projects.
                </p>
                <div className="flex flex-row flex-wrap justify-start mt-8 md:flex-no-wrap">		
								{
									TAB_DATA.map((tabdata,index) => {
										return (
											<TabButton
												key={index}
												selectTab={() => handleTabChange(tabdata.id)}
												active={tab === tabdata.id}
											>
												{" "}
												{tabdata.title}{" "}
											</TabButton>
										)
									})
								}					
								</div>
                <hr className="from-[#348F50] to-[#56B4D3] sm:hidden "/>
								<div className="mt-2 sm:mt-8">
									{TAB_DATA.find((t) => t.id === tab)?.content}
								</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection