import { motion } from 'framer-motion'
import { SKILLS } from '../skillsData'
import SkillIcon from './skillIcon.component'

const Skills = () => {

    const upperHalfSkills = SKILLS.filter((_,idx)=>idx<8)
    const lowerHalfSkills = SKILLS.filter((_,idx)=>idx>=8)

    return(
        <section className='h-screen snap-center flex flex-col items-center' id='skills'>
            <h2 className="text-grey text-xl tracking-[8px]  pt-14 ">SKILLS</h2>
            <p className='text-grey text-xs  mt-2 mb-[100px] md:text-sm'>Hover Over A Skill For Current Proficiency</p>
            <div className='md:w-[400px] w-[300px]'>
                <motion.div className='grid grid-cols-4 justify-items-center gap-y-2 mb-3 cursor-pointer'
                whileInView={{
                    x:[-200,0],
                    opacity:['0%','100%'],
                }}
                transition={{
                    duration:0.5,
                    ease:'linear',
                    delay:0.5
                }}
                >
                    {
                        upperHalfSkills.map((skill)=>{
                            return <SkillIcon skill={skill} key={skill.name}/>
                        })
                    }
                </motion.div>
                <motion.div className='grid grid-cols-4 justify-items-center gap-y-2'
                whileInView={{
                    x:[200,0],
                    opacity:['0%','100%'],
                }}
                transition={{
                    duration:0.5,
                    ease:'easeInOut',
                    delay:0.5
                }}
                >
                    {
                        lowerHalfSkills.map((skill)=>{  
                            return <SkillIcon skill={skill} key={skill.name}/>
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Skills;