import {FaUser} from 'react-icons/fa'
const WhatOthersSay = () => {
    const whatOthers = [
        {
            id:1,
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quae reprehenderit accusantium quasi minima q',
            role:'Retailer Distributor'
        },
        {
            id:2,
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quae reprehenderit accusantium quasi minima',
            role:'Retailer Distributor'
        },
        {
            id:3,
            description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quae reprehenderit accusantium quasi minima voluptatibus',
            role:'Retailer Distributor'
        },
    ]
  return (
    <div className="w-full pb-10  bg-blue-100 flex flex-col  ">
        <div className="flex flex-col gap-10 md:w-[40%] m-auto items-center justify-center pt-14">
        <h2 className="font-bold text-3xl">What others say</h2>
        <input type="range" color="red" className="w-28 bg-red-600 "/>
        <p className="text-gray-500">We deliver value at speed and scale</p>
       </div>

       <div className="flex w-[80%] m-auto gap-5 mt-20 md:flex-row flex-col " >
            {
                whatOthers.map((each) => (
                   <div key={each.id} className='w-full flex flex-col gap-3  justify-centers items-center'>
                    <div  className="bg-blue-50 p-6 rounded-md h-[20vh] w-[90%]">
                        {each.description}
                        
                    </div>
                    <div className=''>
                        <FaUser color='#d28639' className=' rounded-full bg-black w-10 h-10 p-1'/><span className="ml-2 font-bold">{each.role}</span>
                    </div>
                   </div>
                    
                ))
            }
       </div>
    </div>
  )
}

export default WhatOthersSay