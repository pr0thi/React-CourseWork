import Image from 'next/image'
import nextJs from '../../public/next-js.svg'

const SkillIcon = ({skill}) => {
    return(
        <div className='border-[grey] border-[1px] rounded-full  group flex items-center relative h-[55px] w-[55px] justify-center'>
            <div className='h-[40px] w-[40px] group-hover:grayscale relative'>
                {
                    skill.name == 'Next Js' ?
                    (
                        <Image src={nextJs} alt='skill icon' fill/>
                    ) :
                    (
                        <img src={skill.imageUrl} alt="skill icon" className=''/>
                    ) 
                }
            </div>
            <div className='absolute h-[55px] w-[55px] group-hover:flex hidden items-center justify-center group-hover:bg-white/70 rounded-full'>
                    <p className=''>{skill.proficiency}%</p>
            </div>
        </div>
    )
}

export default SkillIcon;