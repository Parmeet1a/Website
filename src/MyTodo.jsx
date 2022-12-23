import React, { useState } from "react";

function MyTodo() {
  const [inpVal, setInpVal] = useState("");
  const [inpVal2, setInpVal2] = useState("");
  const [inpVal3, setInpVal3] = useState("");

  const [myarray,SetMyarray] = useState([]);




  const one = (e) => {
    let oneTitle = e.target.value;
    setInpVal(oneTitle);
  };
  const two = (e) => {
    let secTitle = e.target.value;
    setInpVal2(secTitle);
  };
  const three = (e) => {
    let thirdTitle = e.target.value;
    setInpVal3(thirdTitle);
  };
  function click() {


    SetMyarray(

      myarray.concat({

        title: inpVal,
        discription: inpVal2,
        time:inpVal3
      })
    )
   
  }

  console.log(myarray);
  return (
    <div>
      <div className="border-2 border-black h-[400px] w-[500px]  grid grid-cols-1  ml-[350px] mt-[50px] ">
        <p className="h-[75px] w-[450px] ml-[18px] text-center font-bold text-[25px] ">
          Organise Your Work And Time Collectively
        </p>
        <input
          className="border-2 border-green-500 h-[75px] w-[450px] ml-[18px] rounded-[40px] text-center font-bold text-[25px] "
          type="text"
          placeholder="title"
          value={inpVal}
          onChange={one}
        />
        <input
          className="border-2 border-blue-500 h-[75px] w-[450px] ml-[18px] rounded-[40px] text-center font-bold text-[25px] "
          type="text"
          placeholder="title"
          value={inpVal2}
          onChange={two}
        />
        <input
          className="border-2 border-red-500 h-[75px] w-[450px] ml-[18px] rounded-[40px] text-center font-bold text-[25px] "
          type="text"
          placeholder="title"
          value={inpVal3}
          onChange={three}
        />
        <button
          className=" border-2 border-red-500 h-[50px] w-[150px] ml-[170px] rounded-[40px] text-center font-bold text-[15px] m2-[5px]"
          onClick={click}
        >
          Add Note
        </button>
      </div>


      <div className="border border-black w-full h-[100vh] flex items-center flex-col">


        {myarray.map((val)=>(


      

        <div className="border border-black w-[70%] h-32 my-12">

          <p>{val.title}</p>
          <p>{val.discription}</p>
          <p>{val.time}</p>
        </div>

))}
       
        
      </div>

      
      {/* <div className="border-2 border-black h-[400px] w-[500px]  grid grid-cols-1  ml-[350px]  ">
        <input
          className="border-2 border-green-500 h-[75px] w-[450px] ml-[18px] rounded-[40px] text-center font-bold text-[25px] "
          type="text"
          placeholder=""
          value={Title}
        />
        <input
          className="border-2 border-blue-500 h-[75px] w-[450px] ml-[18px] rounded-[40px] text-center font-bold text-[25px] "
          type="text"
          placeholder=""
          value={Stitle}
        />
        <input
          className="border-2 border-red-500 h-[75px] w-[450px] ml-[18px] rounded-[40px] text-center font-bold text-[25px] "
          type="text"
          placeholder=""
          value={Thtitle}
        />
      </div> */}
    </div>
  );
}

export default MyTodo;
