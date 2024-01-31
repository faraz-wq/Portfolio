"use client"
import Image from 'next/image'
import {TypeAnimation} from 'react-type-animation'

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="text-left md:text-center col-span-8 place-self-center md:mr-6 sm:h-400">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00467f] to-[#a5cc82]">
                        Hello, I&apos;m{" "}                        
                    </span>
                    <TypeAnimation
                        sequence={[
                        "Faraz",
                        1000,
                        "FullStack Developer",
                        1000,
                        "Systems Designer",
                        1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">                   
                    Dedicated to building captivating websites that seamlessly blend creativity with cutting-edge technology to deliver an exceptional user experience.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#348F50] to-[#56B4D3] hover:bg-slate-200 text-white">
                        Hire Me
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-[#348F50] to-[#56B4D3]hover:bg-slate-800 mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className="col-span-4 place-self-center mt-10 md:ml-10 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/ncprgrmer-removebg-preview.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection