import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import profileImage from '../../public/profileImage.jpg'
import Link from "next/link";

const Hero = () => {
    return(
        <section className="h-screen flex flex-col items-center text-grey text-xs md:text-[14px] justify-center pb-12 md:space-y-1 snap-center relative overflow-hidden"> 
            <div className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] relative rounded-full border-white mb-5">
                <Image src={profileImage} alt='profile image' fill className="object-cover rounded-full" priority/>
            </div>
            <p className="tracking-[5px]">FRONT-END DEVELOPER</p>
            <div className="text-white text-2xl md:text-3xl">
                <Typewriter
                    options={{
                        strings: ['I am a Front-End Developer', 'I am a UI/UX Designer'],
                        autoStart: true,
                        loop: true,
                        delay:70,
                        pauseFor:2500,
                    }} 
                />
            </div>
            <div className="flex space-x-2">
                <Link href='#about'>
                    <p className="hover:text-white/70 cursor-pointer">About</p>
                </Link>
                <Link href='#skills'>
                    <p className="hover:text-white/70 cursor-pointer">Skills</p>
                </Link>
                <Link href='#projects'>
                    <p className="hover:text-white/70 cursor-pointer">Projects</p>
                </Link>
                <Link href='#contact'>
                    <p className="hover:text-white/70 cursor-pointer">Contact</p>
                </Link>
            </div>
            <motion.div 
            className="h-[350px] w-[350px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] border-[1px] border-grey rounded-full absolute -z-10"
            whileInView={{
                scale:[1,1.5,2,2,1.5,1],
                opacity:['60%','30%','0%','0%','30%','60%'],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1
              }}
            ></motion.div>
        </section>
    ) 
}

export default Hero;

