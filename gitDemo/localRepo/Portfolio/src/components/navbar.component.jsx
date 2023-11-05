import { motion } from 'framer-motion'
import { ImFacebook } from 'react-icons/im'
import { ImLinkedin } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

const Navbar = () => {
  return (
    <div  className='text-grey flex justify-between items-center z-10 fixed left-0 top-2 w-full px-8 md:px-24 md:text-lg xl:px-48'>
        <motion.div 
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.5, ease:'easeInOut'}}
        className='flex items-center space-x-3'>
          <a href='https://www.facebook.com/profile.php?id=100009024275664' className='hover:text-white/70'>
            <ImFacebook/>
          </a>
          <a href='https://www.linkedin.com/in/ritambiswas1801/' className='hover:text-white/70'>
            <ImLinkedin />
          </a>
          <a href='https://github.com/Ritam-Biswas' className='hover:text-white/70'>
            <FaGithub />
          </a>
          <a href='https://www.instagram.com/boyhood_stories/' className='hover:text-white/70'>
            <BsInstagram />
          </a>
        </motion.div>
        <motion.div 
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.5, ease:'easeInOut'}}
        className='flex items-center space-x-3'>
            <a href="mailto:ritambiswas1801@gmail.com" className='hover:text-white/70'>
              <GrMail/>
            </a>
            <a className='font-medium hover:text-white/70' href='#contact'>Get in touch</a>
        </motion.div>
    </div>
  )
}

export default Navbar
