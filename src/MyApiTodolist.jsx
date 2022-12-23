import React, { useState, useEffect } from "react";


function MyApiTodolist() {
  const [searchdata, setSearchdata] = useState("");
  return (
    <div>
      <div className="border border-black h-[10vh] w-[200vh] flex gap-[130vh] bg-gray-400 ">
        <div className="flex border">
          {" "}
          <img
            className="h-[80px] w-[80px]"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/message-notification-4039168-3345831@0.png"
            alt=""
            srcset=""
          />
          <h1 className="border border-black h-[40px] w-[150px] mt-[20px] text-center text-[25px] font-bold ">
            MyApiTodo
          </h1>
        </div>
        <div className="  flex">
          <input
            className="border border-black h-[40px] w-[200px] mt-[20px] text-center text-[25px] font-bold bg-cyan-300 rounded-[10px] mr-[10px]"
            type={""}
            placeholder="Search....."
            onChange={(e)=>{setSearchdata(e.target.value)
            console.log(searchdata);}}
          ></input>
          <button
          onClick={''}
           className="mt-[10px]">
            


            <img
              className="h-[40px] w-[40px] "
              src="https://cdn.iconscout.com/icon/free/png-128/search-1404496-1187757.png"
              alt=""
              srcset=""
            />
          </button>
        </div>
      </div>
      <div className="border border-red-500 w-[800px] h-[100px] flex row gap-20 ml-[50vh] mt-[25px]">
        <button className="border border-black ml-[80px] w-[60px] h-[40px] mt-[25px] font-bold text-[25px] text-green-800 bg-red-500">Get</button>
        <button className="border border-black ml-[80px] w-[70px] h-[40px] mt-[25px] font-bold text-[25px] ">Clear</button>
        <button className="border border-black ml-[80px] w-[130px] h-[40px] mt-[25px] font-bold text-[25px] ">Favourite</button>
      </div>
    </div>
  );
}

export default MyApiTodolist;
