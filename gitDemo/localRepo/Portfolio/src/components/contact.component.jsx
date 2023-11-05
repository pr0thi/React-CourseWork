import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr' 
import { ImLocation2 } from 'react-icons/im'

const Contact = () => {
    return(
        <section className="h-screen snap-center flex flex-col items-center" id='contact'>
            <h2 className="text-grey text-xl tracking-[8px]  pt-14 ">CONTACT</h2>
            <div className='flex flex-col items-center text-white mt-16'>
                <div className='flex items-center mb-2 cursor-pointer hover:opacity-80'>
                    <BsFillTelephoneFill className='mr-3 text-orange-400'/>
                    <a href="tel:+919330043216">
                        <p>+919330043216</p>
                    </a>
                </div>
                <div className='flex items-center mb-2 cursor-pointer hover:opacity-80'>
                    <GrMail className='mr-3 text-orange-400'/>
                    <a href="mailto:ritambiswas1801@gmail.com">
                        <p>ritambiswas1801@gmail.com</p>
                    </a>
                </div>
                <div className='flex items-center mb-2 cursor-pointer hover:opacity-80'>
                    <ImLocation2 className='mr-3 text-orange-400'/>
                    <a href="https://goo.gl/maps/myexEnUoGsqhf9LZA">
                        <p>chennai - 602203, Chennai</p>
                    </a>
                </div>
            </div>
            <form action='mailto:ritambiswas1801@gmail.com' className='flex flex-col w-[100%] md:w-[500px] flex-wrap justify-between space-y-1 text-sm mt-8'>
                <div className='flex justify-between w-full'>
                    <input type="text" name="" className='py-2 bg-grey/50 rounded-sm w-[49.5%] px-2' placeholder='Name'/>
                    <input type="text" name="" className='py-2 bg-grey/50 rounded-sm w-[49.5%] px-2' placeholder='Email'/>
                </div>
                <input type="text" name="" className='py-2 px-2 bg-grey/50 rounded-sm' placeholder='Subject'/>
                <textarea name="" id="" rows='6' placeholder='Message' className='bg-grey/50 rounded-sm px-2'/>
                <button type="submit" className='py-2  bg-orange-400 font-semibold hover:opacity-90'>Submit</button>
            </form>
        </section>
    )
}

export default Contact;