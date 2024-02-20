const Values = () => {
  const values = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We are a team of professionals who are passionate about providing the best services to our customers.",
    },
    {
        id: 2,
        title: "Web Design",
        description:
          "We are a team of professionals who are passionate about providing the best services to our customers.",
      },
    {
        id: 3,
        title: "Web Development",
        description:
          "We are a team of professionals who are passionate about providing the best services to our customers.",
      },
    
  ];
  return (
    <div className="flex justify-between items-center w-[80%] m-auto mt-20">
      {values.map((eachBox) => 
      <div key={eachBox.id} className="flex flex-row gap-3 w-[30%]  m-auto bg-[#12110f] p-2 rounded-md border-dashed border-gray-500 border-[1px]">
        <div className="p-5 bg-white w-[30px] h-[30px] rounded-full  flex items-center justify-center ">hey</div>
        <div><h1 className="text-[13px] font-bold text-white">{eachBox.title}</h1>
        <p className=" text-gray-400 text-[12px]">{eachBox.description}</p></div>
      </div>
      )}
    </div>
  );
};

export default Values;
