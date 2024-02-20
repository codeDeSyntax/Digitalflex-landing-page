import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center pl-4 pr-4">
       <div className='flex gap-3 justify-center items-center'>
       <img src={logo} alt="logo" className='w-15 h-20'/>
       <p className='font-bold text-2xl'>Digital Flex <br/> solutions</p>
       </div>
        <div className='flex justify-center items-center gap-5 pr-20'>
           <ul className='flex gap-6 font-medium text-white' >
           <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Solution</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Partner with us</a></li>
           </ul>
            <button className='p-2 bg-blue-800 text-white rounded-md w-[8vw]'>
                <a href=''>Contact</a>
            </button>
        </div>
    </nav>
  )
}

export default Navbar