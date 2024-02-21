import {FaCheckCircle } from 'react-icons/fa'
import {BiBarChart } from 'react-icons/bi'
const Values = () => {
  const values = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We are a team of professionals who are passionate about providing the best services to our customers.",
        icon:<BiBarChart color='#d28639'/>
    },
    {
        id: 2,
        title: "Web Design",
        description:
          "We are a team of professionals who are passionate about providing the best services to our customers.",
          icon:<FaCheckCircle  color='#d28639'/>
      },
    {
        id: 3,
        title: "Web Development",
        description:
          "We are a team of professionals who are passionate about providing the best services to our customers.",
          icon:<FaCheckCircle color='#d28639'/>
      },
    
  ];
  return (
    <div className="flex justify-between items-center w-[80%] m-auto mt-20 md:flex-row flex-col gap-3">
      {values.map((eachBox) => 
      <div key={eachBox.id} className="flex flex-row gap-4 w-[80%] md:w-[30%]  m-auto bg-[#12110f] p-2 rounded-md border-dashed border-gray-500 border-[1px]">
        <div className=" bg-white w-[40px] h-[30px] rounded-full  flex items-center justify-center ">{eachBox.icon}</div>
        <div><h1 className="text-[13px] font-bold text-white">{eachBox.title}</h1>
        <p className=" text-gray-400 text-[12px]">{eachBox.description}</p></div>
      </div>
      )}
    </div>
  );
};

export default Values;
