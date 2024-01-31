import React from 'react'
import NavLink from './NavLink'

interface NavLinkprop {
    href : string
    title: string
    icon: any
}
interface NavLinkprops{
    navLinks: NavLinkprop[]
}
const MenuOverlay = ({navLinks}:NavLinkprops) => {
  return (
            <ul className="flex flex-col items-center md:hidden">
                {navLinks.map((link:NavLinkprop,index)=>{
                    return(
                        <li key={index}>
                            <NavLink title={link.title} href={link.href} icon={link.icon}/>
                        </li>
                    )
                })}
            </ul>
  )
}

export default MenuOverlay