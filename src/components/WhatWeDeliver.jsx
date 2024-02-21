 import '../../src/App.css'

const WhatWeDeliver = () => {
  return (
    <section className="w-full md:h-screen py-3 md:pt-4 wwd flex flex-col justify-center items-center">
         <div className="flex flex-col gap-10 w-[70%] md:w-[40%] m-auto items-center justify-center mt-6">
           <h2 className="font-bold text-3xl text-white">We always deliver value</h2>
            <input type="range" color="red" className="w-28 bg-red-600 "/>
            <p className="text-gray-500">We deliver value at speed and scale</p>
           </div>

           <div className='flex w-[80%] md:justify-between m-auto gap-4 mt-16 md:flex-row flex-col justify-center items-center'>
            <div className='bg-[rgba(0,0,0,0.4)] flex flex-col items-center w-[80%] md:w-[30%] p-6'>
                <p className='text-blue-600  '>Fixed Cost Project</p>
                <p className='text-gray-700'> Where scope of work is detailed</p>
            </div>
            <div className='bg-[rgba(0,0,0,0.4)] flex flex-col items-center w-[80%] md:w-[30%] p-6'>
                <p className='text-blue-600'>TIme& Materials <br /> Based</p>
                <p className='text-gray-700 text-center'>Where scope of work is detailed</p>
            </div>
            <div className='bg-[rgba(0,0,0,0.4)] flex flex-col items-center w-[80%] md:w-[30%] p-6'>
            <p className='text-blue-500 text-center'>TIme& Materials <br /> Based</p>
                <p className='text-gray-700 text-center'>Where scope of work is detailed</p>
            </div>
            <div className='bg-[rgba(0,0,0,0.4)] flex flex-col items-center w-[80%] md:w-[30%] p-6 justify-center'>
            <p className='text-blue-600'>TIme& Materials <br /> Based</p>
                <p className='text-gray-700 text-center'>Where scope of work is detailed</p>
            </div>
            
           </div>

           <section className='border-dashed border-[1px] border-gray-500 w-[80%] md:w-[70%] m-auto mt-20 flex p-4 md:p-6 md:justify-between justify-center items-center rounded-md'  >
            <div className='text-white'>
                <p className='text-[14px]'>Have a question or a technology problem that needs solving?</p>
                <p>Dont hesitate to call us</p>
            </div>
                <button className='p-2 bg-blue-700
                rounded-md text-white text-[14px] md:w-[30%] w-[90%] h-10'>Contact us</button>
           </section>
    </section>
  )
}

export default WhatWeDeliver