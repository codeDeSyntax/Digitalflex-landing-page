import { FaCheckCircle } from "react-icons/fa"
const WhatWeDo = () => {
    const WhatWeDo = [
        {
            id:1,
            title:'Get/Create Project stability',
            description:'Get Oriented and create stability in the project and team',
            icon:<FaCheckCircle  color='white' size={30}/>
        },
        {
            id:2,
            title:'Get/Create Project stability',
            description:'Get Oriented and create stability in the project and team',
            icon:<FaCheckCircle  color='white' size={30}/>
        },
        {
            id:3,
            title:'Get/Create Project stability',
            description:'Get Oriented and create stability in the project and team',
            icon:<FaCheckCircle  color='white' size={30}/>
        },
    ]
  return (
    <main className="w-full  ">
        <section className="w-full h-[50%] p-5 ">
           <div className="flex flex-col gap-3     md:w-[40%] w-[60%] m-auto items-center justify-center">
           <h2 className="font-bold text-3xl">What we do</h2>
            <input type="range" color="red" className="w-28 bg-red-600 "/>
            <p className="text-gray-500">We deliver value at speed and scale</p>
           </div>

           <div className=" w-[100%] m-auto gap-3 mt-14">
            <div className="w-[90%] m-auto flex justify-between md:flex-row flex-col">
            {
               WhatWeDo.map((each) =>
             <div key={each.id} className="flex p-2 md:w-[30%] w-[90%] gap-5  ">
            <div className="w-[60px] h-[50px] bg-blue-500 rounded-md flex justify-center items-center ">
                {each.icon}
            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
                <h3 className="font-bold">{each.title}</h3>
                <p className="text-[.9rem]">{each.description}</p>
                <button className="font-bold text-[#d28639]">→ See more</button>
            </div>
             </div>  
               )
            }
            </div>
           </div>
        </section>
        <section className="w-full h-[50%] md:h-[50vh] flex  items-center justify-center md:flex-row flex-col bg-gradient-to-r from-[#000510] to-blue-900 py-5">
            <div className="flex justify-center items center w-[70%] md:w-[40%] text-white  ">
                <img src='student.jpg' alt="" className="h-60"/>
            </div>
            <div className="flex justify-center items-center w-[60%] flex-col gap-4">
                <p className="text-center font-bold md:text-3xl text-xl">Delivering value at speed and Scale is <br /> crtical for any client project</p>
                <p className="text-center text-gray-400 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Similique facilis nostrum ea aspernatur voluptatibus veniam nobis quam magni necessitatibus consequuntur nisi mollitia,.</p>
            </div>
        </section>
    </main>
  )
}

export default WhatWeDo