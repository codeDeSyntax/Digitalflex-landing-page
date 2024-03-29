import { FaSave } from "react-icons/fa";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "CMS web services",
      icon: FaSave,
      color: "#5c5cf7",
    },
    {
      id: 2,
      title: "Design services",
      icon: FaSave,
      color: "#5c5cf7",
    },

    {
      id: 3,
      title: "Development services",
      icon: FaSave,
      color: "#f7b95c",
    },
    {
      id: 4,
      title: "Marketing services",
      icon: FaSave,
      color: "#f75c64",
    },
    {
      id: 5,
      title: "Marketing services",
      icon: FaSave,
      color: "#5cf7d5",
    },
    {
      id: 6,
      title: "Marketing services",
      icon: FaSave,
      color: "#f75ce8",
    },
  ];
  return (
    <section className=" w-full h-[130vh] md:h-[120vh] pt-8 bg-blue-100">
      <div className="flex flex-col gap-3 md:w-[40%] w-[60%] m-auto items-center justify-center">
        <h2 className="font-bold text-2xl">Services we can help you with</h2>
        <input type="range" color="red" className="w-28 bg-red-600 " />
        <p className="text-gray-500">Our Services are designed to  deliver value at speed and scale</p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2  w-[80%] m-auto md:gap-x-5 gap-x-2 gap-y-5 mt-12 pb-4">
        {services.map((each) => (
          <div key={each.id} className="h-[40vh]lg:h-[20vh] md:h-[40vh] md:w-[70%] w-[90%] transform skew-x-12 mr-4 shadow-sm shadow-black flex flex-col items-center rounded-md p-2 gap-2 hover:scale-110 bg-[#0c1a3f] duration-100">
            <FaSave size={80} color={each.color}/>
           <p className={`font-bold md:text-2xl text-white`}> {each.title}</p>
           <a href="" className={`text-gray-500`}>→ Learn more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services
