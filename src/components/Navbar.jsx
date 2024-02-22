import logo from '../assets/logo.png'
import {FaTimes , FaBars} from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className=" flex justify-between items-center px-3 w-[100%] m-auto ">
       <div className='flex gap-3 justify-center items-center'>
       <img src={logo} alt="logo" className='md:w-15 md:h-20 w-10'/>
       <p className='font-bold md:text-2xl '>Digital Flex <br/> <sapn className='italic'>Solutions</sapn> </p>
       </div>
        <div className=' justify-center items-center gap-5  hidden sm:hidden  md:flex'>
           <ul className='flex gap-6 font-medium text-white' >
           <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Solution</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Partner with us</a></li>
           </ul>
            <button className='p-2 bg-blue-800 text-white rounded-md w-[9vw]'>
                <a href=''>Contact</a>
            </button>
        </div>
       <div onClick={toggleNavbar} className='md:hidden'>
       {isOpen ? <FaTimes/> : <FaBars/>}
       </div>

       <div className={`absolute top-0 left-0 w-[50%] md:hidden ${isOpen ? 'block' : 'hidden'}`}>
       <ul className=' flex flex-col gap-6 font-medium text-white bg-[rgba(0,0,0,0.9)] h-screen '  >
            <li className='p-4 border-b-[0.5px]'><a href="">Home</a></li>
            <li className='p-4 border-b-[0.5px]'><a href="">Services</a></li>
            <li className='p-4 border-b-[0.5px]'><a href="">Solution</a></li>
            <li className='p-4 border-b-[0.5px]'><a href="">About</a></li>
            <li className='p-4 border-b-[0.5px]'><a href="">Partner with us</a></li>
           </ul>
       </div>
    </nav>
  )
}

export default Navbar