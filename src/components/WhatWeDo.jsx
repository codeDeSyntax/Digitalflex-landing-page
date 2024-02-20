
const WhatWeDo = () => {
    const WhatWeDo = [
        {
            id:1,
            title:'Get/Create Project stability',
            description:'Get Oriented and create stability in the project and team'
        },
        {
            id:2,
            title:'Get/Create Project stability',
            description:'Get Oriented and create stability in the project and team'
        },
        {
            id:3,
            title:'Get/Create Project stability',
            description:'Get Oriented and create stability in the project and team'
        },
    ]
  return (
    <main className="w-full h-screen ">
        <section className="w-full h-[50%] p-5 ">
           <div className="flex flex-col gap-3 w-[40%] m-auto items-center justify-center">
           <h2 className="font-bold text-3xl">What we do</h2>
            <input type="range" color="red" className="w-28 bg-red-600 "/>
            <p className="text-gray-500">We deliver value at speed and scale</p>
           </div>

           <div className=" w-[100%] m-auto gap-3 mt-14">
            <div className="w-[90%] m-auto flex justify-between">
            {
               WhatWeDo.map((each) =>
             <div key={each.id} className="flex p-2 w-[30%] gap-4">
            <div className="w-[60px] h-[50px] bg-blue-500 rounded-md">

            </div>
            <div className="flex flex-col gap-2 justify-start items-start">
                <h3 className="font-bold">{each.title}</h3>
                <p className="text-[.9rem]">{each.description}</p>
                <button className="font-bold text-blue-400">→ See more</button>
            </div>
             </div>  
               )
            }
            </div>
           </div>
        </section>
        <section className="w-full h-[50%]  flex  items-center justify-center bg-gradient-to-r from-blue-800 to-blue-200">
            <div className="flex justify-center items center w-[40%]">Image loading...</div>
            <div className="flex justify-center items-center w-[60%] flex-col gap-4">
                <p className="text-center font-bold">Delivering value at speed and Scale is <br /> crtical for any client project</p>
                <p className="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Similique facilis nostrum ea aspernatur voluptatibus veniam nobis quam magni necessitatibus consequuntur nisi mollitia,.</p>
            </div>
        </section>
    </main>
  )
}

export default WhatWeDo