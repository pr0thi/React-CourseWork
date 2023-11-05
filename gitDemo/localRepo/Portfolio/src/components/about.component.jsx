import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from '../../public/aboutImage.jpg'

const About = () => {
  return (
    <section className="h-screen flex items-center flex-col text-white snap-center" id="about">
        <h2 className="text-grey text-xl tracking-[8px]  pt-14">ABOUT</h2>
        <div className="flex flex-col items-center justify-center h-[80%] space-y-5 md:flex-row md:space-x-8 w-full">
            <motion.div
            whileInView={{
                x:[-200,0],
                opacity:['0%','100%'],
            }}
            transition={{
                duration:1,
                ease:'easeInOut'
            }}
            >
                <div className="h-[150px] w-[150px] relative md:h-[300px] md:w-[200px]">
                    <Image src={aboutImage} alt="about image" fill className="object-cover rounded-full md:rounded-none"/>
                </div>
            </motion.div>
            <div className="text-center md:text-left  max-w-[400px]">
                <h3 className="text-lg mb-2 md:text-2xl md:pb-2">Here is a <span>little</span> background</h3>
                <p className="text-xs  leading-5 opacity-80 md:text-sm md:leading-5">
                    I am a passionate aspiring Full Stack Web Developer with expertise in front-end technologies like HTML, CSS, JavaScript, and React, as well as a good background in UI/UX using Figma and best design practices. My focus is on delivering high-quality solutions that are both visually stunning and easy to use.
                    Above all, I am dedicated to continuous learning and growth, staying up-to-date with the latest technologies and design trends in order to deliver the best possible solutions for my clients. With a strong work ethic, attention to detail, and a passion for excellence, I am confident in my ability to make a valuable contribution to any web development team.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About;
