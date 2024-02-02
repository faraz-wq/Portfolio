"use client"

import Image from 'next/image'
import NavLink from './NavLink'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon, CommandLineIcon, PhoneIcon, InformationCircleIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'


const navLinks = [
    {
        title:"About",
        href:"#about",
        icon:<InformationCircleIcon className='h-5 w-5'/>,
    },
    {
        title:"Projects",
        href:"#projects",
        icon:<CommandLineIcon className='h-5 w-5'/>
    },
    {
        title:"Contact",
        href:"#contact",
        icon:<PhoneIcon className='h-5 w-5'/>
    }
]

const Navbar = () => {
    const [navBarOpen,setNavBarOpen] = useState(false)

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto'>
            <Image src="/logo.svg" alt="logo" width={150} height={150} className='text-2xl text-white font-semibold sm:text-5xl'/>
            <div className='mobilemenu block md:hidden'>
                {
                    !navBarOpen ? (
                        <button onClick={()=>setNavBarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 rounded border border-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5'/>
                        </button>
                    ) :(
                        <button onClick={()=>setNavBarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 rounded border border-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5'/>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 mr-5">
                    {navLinks.map((link,index)=>{
                        return(
                            <li key={index}>
                                <NavLink title={link.title} href={link.href} icon={link.icon}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        {navBarOpen && <MenuOverlay navLinks={navLinks}/>}
    </nav>
  )
}

export default Navbar