import React, { useState } from "react";

function MyTodo2() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [array, setArray] = useState([]);

  const one = (e) => {
    let firsttext = e.target.value;
    setTitle(firsttext);
  };
  const two = (e) => {
    let secondtext = e.target.value;
    setDescription(secondtext);
  };
  const three = (e) => {
    let thirdtext = e.target.value;
    setTime(thirdtext);
  };
  function click() {
    if (title && description && time !== "") {
      setArray(
        array.concat({
          firsttext: title,
          secondtext: description,
          thirdtext: time,
          id:Math.random()
        })
      );
    } else {
      alert("Kindly fill all");
    }
    setTitle("");
    setDescription("");
    setTime("");
  }
  console.log(array);




  function del(id){

    console.log(id);
    let dataval =  array.filter((data)=>data.id!==id);

    setArray(dataval)

     console.log(dataval);


  }

 function edit(id) {
 
  let ediData= array.filter((data)=>data.id ===id);

  setTitle(ediData[0].firsttext);
  setDescription(ediData[0].secondtext);
  setTime(ediData[0].thirdtext);

  setArray(array.filter((data)=>data.id !==id));
  
 }


 

  return (
    <div>
      <div className="container border-2 border-black h-[50vh] w-[500px] ml-[55vh]">
        <input
          className="border-2 border-green-500 h-[75px] w-[450px] ml-[18px] rounded-[40px] text-center font-bold text-[25px] "
          type="text"
          placeholder="title"
          value={title}
          onChange={one}
        ></input>

        <input
          className="border-2 border-red-500 h-[75px] w-[450px] ml-[18px] rounded-[40px] text-center font-bold text-[25px] mt-[25px] "
          type="text"
          placeholder="decscription"
          value={description}
          onChange={two}
        ></input>

        <input
          className="border-2 border-yellow-500 h-[75px] w-[450px] ml-[18px] rounded-[40px] text-center font-bold text-[25px] mt-[20px]"
          type="text"
          placeholder="time"
          value={time}
          onChange={three}
        ></input>
        <button
          className=" border-2 border-red-500 h-[50px] w-[150px] ml-[170px] rounded-[40px] text-center font-bold text-[15px] mt-[15px]"
          onClick={click}
        >
          Add Note
        </button>
      </div>

      <div className="border border-black w-full h-[100vh] flex items-center flex-col">
        {array.map((val) => (
          <div className="border border-black w-[70%] h-[220px] my-12  ">
            <div className="border border-black w-[500px] h-[50px] rounded-[40px] text-center font-bold text-[15px] mt-[15px] ">
              {val.firsttext}
            </div>
            <div className="border border-black w-[500px] h-[50px] rounded-[40px] text-center font-bold text-[15px] mt-[15px] ">
              {" "}
              {val.secondtext}
            </div>
            
            <div className="border border-black w-[500px] h-[50px] rounded-[40px] text-center font-bold text-[15px] mt-[15px] ">
              {val.thirdtext}
            </div>
            <div className=" border border-black  h-[40px] w-[300px] mt-[-190px] ml-[800px] flex justify-evenly">
              <button onClick={()=>{del(val.id)}} className="border border-black h-[30px] w-[80px]  ">
                Del
              </button>
              <button onClick={()=>{edit(val.id)}} className="border border-black h-[30px] w-[80px] ml-[10px]">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTodo2;
