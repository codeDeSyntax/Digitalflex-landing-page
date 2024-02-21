import { FaPlane , FaBuilding, FaUsers} from "react-icons/fa"


const IndustriesWeServe = () => {
    const IndustriesWeServe = [
       
        {
            id:1,
            title:'Retail Eccomerce ',
            icon:<FaPlane size={30} color="#c5c3c3" rotate={30}/>
        },
        {
            id:2,
            title:'Automobile',
            icon:<FaPlane size={30} color="#c5c3c3" rotate={30}/>
        },
        {
            id:3,
            title:'Banking',
            icon:<FaBuilding size={30} color="#c5c3c3" rotate={30}/>
        },
        {
            id:4,
            title:'Real Estate',
            icon:<FaBuilding size={30} color="#c5c3c3" rotate={30} className="rotate-45"/>
        },
        {
            id:5,
            title:'Logistics',
            icon:<FaUsers size={30} color="#c5c3c3" rotate={30}/>
        },
        {
            id:6,
            title:'Insurance',
            icon:<FaPlane size={30} color="#c5c3c3" rotate={30}/>
        },
        {
            id:7,
            title:'Capital markets',
            icon:<FaPlane size={30} color="#c5c3c3" rotate={30}/>
        },
        {
            id:8,
            title:'Manufacturing & Distribution',
            icon:<FaPlane size={30} color="#c5c3c3" rotate={30}/>
        },
    ]
  return (
    <div className="w-full bg-gradient-to-r from-[#020816] to-[#172d6d]  ">
         <div className="flex flex-col gap-10 w-[60%] md:w-[50%] m-auto items-center justify-center pt-14">
        <h2 className="font-bold text-white text-3xl">Industries we serve</h2>
        <input type="range" color="red" className="w-28 bg-red-600 "/>
        <p className="text-gray-500">We deliver value at speed and scale Lorem ipsum dolor sit, amet consectetur adipisicing eli</p>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-4 w-[80%] m-auto gap-5 mt-10 pb-10 justify-center items-center">
            {
                IndustriesWeServe.map((each) => (
                  
                      <div key={each.id} className="bg-white p-2 rounded-md  w-[90%] flex gap-2 items-center">
                        {each.icon} 
                        <p className="font-bold text-gray-600 text-[14px]">{each.title}</p>
                      </div>
                    
                ))
            }
       </div>
    </div>
  )
}

export default IndustriesWeServe