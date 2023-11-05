import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { RiCodeBoxFill } from 'react-icons/ri'

const ProjectCard = ({project}) => {
    return(
        <div className=" px-4 py-8 border-grey border-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] min-w-full mr-0 md:min-w-[49%] md:mr-[1%] md:last:mr-0 snap-center lg:min-w-[32%] lg:mr-[2%]">
            <motion.div className="flex justify-center mb-4"
            whileInView={{
                y:[-100,0],
                opacity:['0%','100%']
            }}
            transition={{
                duration:1,
                ease:'easeInOut'
            }}
            >
                <img src={project.imageUrl} alt='project icon' />
            </motion.div>
            <div>
                <h3 className="text-[22px]">{project.category}</h3>
                <p className="text-[18px]">{project.tittle}</p>
                <div className="flex  my-2 space-x-5">
                    {
                        project.icons.map((icon)=>{
                            return <img src={icon.imageUrl} alt={icon.name} key={icon.name}/>
                        })
                    }
                </div>
                <ul className="list-disc text-sm opacity-80 ml-5">
                    {
                        project.descriptions.map((description)=>{
                            return <li key={description.id}>{description.text}</li>
                        })
                    }
                </ul>
                <div className='flex justify-center text-2xl mt-4'>
                    <a href={project.github} className='hover:opacity-80'>
                        <FaGithub className='mr-2'/>
                    </a>
                    <a href={project.website} className='hover:opacity-80'>
                        <RiCodeBoxFill/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;