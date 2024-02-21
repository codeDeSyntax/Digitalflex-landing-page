import vector from '../../Images/vector.jpg'
import logo from  '../../Images/logo.png'
import '../../src/App.css'
const Footer = () => {
  return (
    <section className='w-full'>
        <div className='w-full flex justify-center items-center md:flex-row flex-col py-5'>
            <figure>
                <img src={vector} alt="Vector" width={700} />
            </figure>

            <div className='w-1/2 flex flex-col gap-5'>
                <h2 className='text-center font-extrabold text-2xl text-[#d28639]'>Signup to our NewLetter</h2>
                <div className='flex justify-center'>
                    <input type="text" placeholder='Enter your business Email here' className='p-3 md:w-[25vw] w-[50vw] rounded-l-full bg-[#d28639] text-white newsletter'/>
                    <button className='p-3 bg-blue-700 rounded-r-full text-white'>Signup</button>
                </div>
                <p className='text-center'>We share the value</p>
            </div>
        </div>
        {/* Footer Footer */}
        <footer className="bg-[url(dotted.jpg)] bg-cover w-full h-flex  ">
            <div className='w-[80%] m-auto flex  md:justify-between md:flex-row flex-col justify-center items-center gap-5 py-10'>
            <div>
               <div className='flex items-center'> 
                <img src={logo} alt="Logo" width={60}/>
                <span className='font-bold text-xl'>Digital Flex</span>
               </div>
                <p className='text-[16px] text-gray-600'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br />Tenetur vel  repellat consequatur <br /> exercitationem sit enim, <br /> accusamus in ut itaque facilis .</p>
            </div>
            <div>
                <h2 className='font-bold text-[#d28639] text-xl'>Company</h2>
                <a href='' className='text-[16px] text-gray-600'>About us</a>
            </div>
            <div className='flex flex-col'>
                <h2 className='font-bold text-[#d28639] text-xl'>Contact</h2>
                <a href=''>Contact us</a>
                <a href='' className='text-[16px] text-gray-600'>Privacy Policy</a>

            </div>
            <div> 
                <h2 className='font-bold text-[#d28639] text-xl text-center'>Address</h2>
                <p>20-22 Wenlock Road, London</p>
                <p>Email:info@digitalflexxolution.com</p>
                <p>Phone:(+44)0172 45677</p>
            </div>
            </div>
        </footer>
    </section>
  )
}

export default Footer