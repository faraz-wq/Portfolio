import Link from 'next/link'

interface NavLinkprops {
    href : string
    title: string
    icon: any
}
const NavLink = ({href, title, icon}:NavLinkprops) => {
  return (
    <Link href={href} className='flex justify-evenly items-center py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
        {icon}
        <p className='ml-2'>{title}</p>
    </Link>
  )
}

export default NavLink