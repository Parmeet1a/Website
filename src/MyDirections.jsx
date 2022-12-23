import React, { useState } from "react";

function MyDirections() {
  const [north, setNorth] = useState(0);
  const[rider,SetRider] = useState("Navneet")
  const[delarray,setDelarray]= useState([])

  function changeRider(id) {
    if (rider === "Navneet") {
      SetRider("Harshil");
      setNorth(0);

      larray.concat(delarray);
    } else {
      SetRider("Navneet");
      setNorth(0);
    }

     setLarray(mapArray);
     
    
  }
  

  function first() {
    let firstval = north;
    firstval++;
    setNorth(firstval);
  }

  const mapArray = [
    { title: "I will sleep", id: Math.random() },

    { title: "I will sleep", id: Math.random() },

    { title: "I will sleep", id: Math.random() },

    { title: "I will sleep", id: Math.random() },

    { title: "I will sleep", id: Math.random() },
  ];

  const [larray,setLarray]=useState(mapArray);
  function del(id){
    let filteredList = larray.filter((val) => val.id !== id);

    setLarray(filteredList);
    setDelarray(larray.filter((val) => val.id === id));

   
  }
  const [listarray2, setListarray2] = useState([
    {
      
      title: "Will sleep 2 hrs",
      id: Math.random() ,
    },

    {
     
      title: "I will study 3 hrs",
      id: Math.random() ,
    },

    {
     
      title: "Exercising is must",
      id: Math.random() ,
    },

    {
      
      title: "Will go to play ",
      id: Math.random() ,
    },

    {
      
      title: "Will go for lunch",
      id: Math.random() ,
    },
  ]);

  function del2(id) {
    let filteredList = listarray2.filter((val) => val.id !== id);

    setListarray2(filteredList);
  }




  return (
    <div className="">
      <div className="container  ml-[10px] mt-[0px] w-[100%] h-[210vh] ">
        <div className=" h-[150px] w-[100%] flex flex-row ">
          <img
            className=" h-[150px] w-[10%]"
            alt=""
            src="https://static.thenounproject.com/png/1317275-200.png"
          ></img>

          <h1 className=" h-[150px] w-[36.5%] font-bold text-[50px] pt-[25px] pl-[20px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Head Towards North
          </h1>

          <div className="border-2 border-red-500 h-[150px] w-[30%] text-[50px] font-bold  pt-[20px] text-center mt-[10px] text-red-500 ">
            {rider}
          </div>

          <button onClick={() => {
              changeRider();
            }} className=" h-[50px] w-[200px] rounded-[100px] bg-green-500 mt-[40px] text-white text-[20px] font-bold">
            Change Rider
          </button>
          <img
            className=" h-[150px] w-[10%]"
            src="https://static.thenounproject.com/png/1317275-200.png" 
            alt=""
          ></img>
        </div>

        <div className=" border-2 border-black mt-[25px] ml-[15px] rounded-[20px] h-[150px] w-[98%] flex flex-row justify-evenly">
          <div className=" h-[150px] w-[10%] flex flex-col align-center">
            <h1 className="text-[20px] font-bold pl-[50px]">North </h1>
            <img
              className=" h-[60px] w-[60%] mt-[10px] ml-[35px]"
              src="https://static.thenounproject.com/png/1317275-200.png"
              alt=""
            ></img>
            <button
              onClick={first}
              className="bg-green-500 mt-[10px] text-white text-[20px] font-bold rounded-[100px]"
            >
              {" "}
              5 Km North
            </button>
          </div>
          <div className=" h-[150px] w-[10%] flex flex-col align-center">
            <h1 className="text-[20px] font-bold pl-[30px]">Turn Left </h1>
            <img
              className="h-[60px] w-[60%] mt-[10px] ml-[35px]"
              src="https://static.thenounproject.com/png/1317275-200.png"
              alt=""
            ></img>
            <button
              onClick={first}
              className="bg-green-500 mt-[10px] text-white text-[20px] font-bold rounded-[100px]"
            >
              5 Km Left
            </button>
          </div>
          <div className=" h-[150px] w-[10%] flex flex-col align-center">
            <h1 className="text-[20px] font-bold pl-[30px]">Turn Right </h1>
            <img
              className=" h-[60px] w-[60%] mt-[10px] ml-[35px]"
              src="https://static.thenounproject.com/png/1317275-200.png"
              alt=""
            ></img>
            <button
              onClick={first}
              className="bg-green-500 mt-[10px] text-white text-[20px] font-bold rounded-[100px]"
            >
              5 Km Right
            </button>
          </div>
        </div>
        <div className="h-[700px] w-[100%] mt-[25px] flex flex-row">
          <div className=" h-[650px] w-[32%] mx-[10px] my-[10px]">
            <div className="  h-[600px] w-[480px] border border-black ">
              {larray.map((val) => (
                <div className="border-2 border-green-500 text-[40px] text-center px-[5px] py[5px] mt-[20px] h-[80px] w-[470px] rounded-[40px] flex justify-evenly  ">
                  <img src="https://img.icons8.com/emoji/2x/sleeping-face.png" />
                  {val.title}
                  <button  onClick={() => {
                      del(val.id);
                      alert(val.title + " " + "is deleted");
                    }} className="">
                    <img
                      className="h-[40px] w-[50px] mt-[-5px] ]"
                      alt=""
                      src="https://img.icons8.com/ios/2x/close-window--v2.png"
                    ></img>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className=" h-[650px] w-[32%]  mx-[10px] my-[10px] text-center  ">
            <div className="text-[50px] font-bold text-center mt-[250px] text-red-500 ">
              Total Distance {north} <br></br>Km
            </div>
          </div>
          <div className=" h-[650px] w-[32%]  mx-[10px] my-[10px]">
            <div className="  h-[600px] w-[480px] grid ">
              {listarray2.map((val) => (
                <div className="border-2 border-green-500 text-[40px] text-center px-[5px] py[5px] mt-[5px] h-[80px] w-[470px] rounded-[40px] flex justify-evenly  ">
                  <img
                    src="https://img.icons8.com/emoji/2x/sleeping-face.png"
                    alt=""
                  />
                  {val.title}
                  <button
                     onClick={() => {
                      del2(val.id);
                      alert(val.title + " " + "is deleted");
                    }}
                    className=""
                  >
                    <img
                      className="h-[40px] w-[50px] mt-[-5px] ]"
                      src="https://img.icons8.com/ios/2x/close-window--v2.png"
                    ></img>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDirections;
