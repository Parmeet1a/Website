import React, { useState } from "react";

function Todo() {
  const [title, setTitle] = useState("");
  const [descp, setDescp] = useState("");
  const [time, setTime] = useState("");

  const [myarray, setMyarray] = useState([]);

  const handleChange = (e) => {
    let listTitle = e.target.value;
    setTitle(listTitle);
  };
  const handleChange2 = (e) => {
    let listDescp = e.target.value;
    setDescp(listDescp);
  };
  const handleChange3 = (e) => {
    let listTime = e.target.value;
    setTime(listTime);
  };

  function addNote() {
    title && descp && time !== ""
      ? setMyarray(
        myarray.concat({
          ltitle: title,
          listDescp: descp,
          ltime: time,
          id: Math.floor(Math.random() * 10),
        })
      )
      : alert("Please fill all the fields ");

    setTitle("");
    setDescp("");
    setTime("");
    console.log(myarray);
  }

  function onDel(id) {
    let delData = myarray.filter((val) => val.id !== id);

    setMyarray(delData);
  }

  function editNote(id) {
    let editData = myarray.filter((val) => val.id === id);

    console.log(editData[0].ltitle);

    setTitle(editData[0].ltitle);
    setDescp(editData[0].listDescp);
    setTime(editData[0].ltime);

    setMyarray(myarray.filter((val) => val.id !== id));
  }

  return (
    <div className="bg-black  ">
      <div className=" h-[150px] text-white flex justify-center pt-6">
        <div className="  text-center h-[150px] ">
          <p className=" text-6xl w-[500px] ml-[40px]">Organize your</p>
          <p className=" text-6xl w-[600px]">time and work finally.</p>
        </div>
      </div>

      <div className=""></div>
      <div className=" flex justify-center">
        <div className=" w-[700px] h-[400px] flex justify-center  align-between">
          <div className="">
            <input
              className="first border-2 h-16 w-[600px] ml-12 rounded-full my-4 bg-transparent border-cyan-400  outline-none shadow-2xl shadow-cyan-400/50 text-cyan-400  text-2xl pl-8 focus:border-4"
              value={title}
              onChange={handleChange}
              placeholder="Title text"
            />
            <input
              className="first border-2 h-16 w-[600px] ml-12 rounded-full my-4 bg-transparent border-pink-400  outline-none shadow-2xl shadow-pink-400/50 text-pink-400  text-2xl pl-8 focus:border-4"
              value={descp}
              onChange={handleChange2}
              placeholder="Description"
            />
            <input
              className="first border-2 h-16 w-[600px] ml-12 rounded-full my-4 bg-transparent border-orange-400 outline-none shadow-2xl shadow-orange-400/50 text-orange-400 text-2xl pl-8 focus:border-4"
              value={time}
              onChange={handleChange3}
              placeholder="Time"
            />
            <button
              className=" border-2 h-12 w-[200px] rounded-full text-white font-bold ml-[240px] mt-[30px] hover:border-green-400  active:bg-green-900"
              onClick={addNote}
            >
              Add Note
            </button>
          </div>
        </div>
      </div>

      <div className={`h-[100vh]`}>
        {myarray.map((val, index) => (
          <div className="list-cont h-[200px] flex justify-center items-center ">
            <div
              className={
                val.id > 2
                  ? `list border-2 border-red-200 h-[120px] w-[1000px] rounded-bl-[50px] bg-cyan-400 rounded-tr-[50px] relative`
                  : `list border-2 border-red-200 h-[120px] w-[1000px] rounded-bl-[50px] bg-pink-400 rounded-tr-[50px] relative`
              }
            >
              <div className=" h-12 text-white text-center text-xl font-bold mt-2 w-[92%] ml-16">
                {val.ltime}
              </div>
              <div className="sr-no  h-[70px] w-12 ml-2 text-6xl text-white absolute top-6 text-center">
                {index + 1}
              </div>
              <div className="2nd border-2 border-green-200 h-[120px] w-[1000px] absolute left-[80px] top-12 rounded-bl-[50px] rounded-tr-[50px] bg-white ">
                <div className="centre flex">
                  <div className="text-cont  h-16 w-[45%] mt-4 ml-4 flex items-center justify-center text-3xl font-bold text-cyan-500">
                    {val.ltitle}
                  </div>
                  <div className="text-cont  h-16 w-[75%] mt-4 ml-4 flex items-center justify-center text-xl font-bold text-slate-400">
                    {val.listDescp}
                  </div>
                  <div className=" h-16 w-[20%] mt-8 ml-1 flex">
                    <svg
                      onClick={() => {
                        editNote(val.id);
                      }}
                      className="h-8 w-8 cursor-pointer mt-2 ml-32 hover:bg-green-200 active:bg-green-400 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <g data-name="72 - Edit">
                        <path
                          fill="#3939aa"
                          d="M12,21.5a1.5,1.5,0,0,1-1.49-1.69l.56-4.36a1.52,1.52,0,0,1,.42-.87L22.35,3.73a4.19,4.19,0,1,1,5.92,5.92L17.42,20.51a1.52,1.52,0,0,1-.87.42l-4.36.56Zm4.36-2.05h0ZM14,16.34l-.25,1.93L15.66,18,26.15,7.53a1.18,1.18,0,0,0,0-1.68,1.21,1.21,0,0,0-1.68,0Z"
                        />
                        <path
                          fill="#3939aa"
                          d="M24.89 12.41A1.51 1.51 0 0 1 23.83 12L20 8.17a1.5 1.5 0 1 1 2.12-2.12L26 9.85a1.5 1.5 0 0 1-1.06 2.56zM26 29.5H4A1.5 1.5 0 0 1 2.5 28V6A1.5 1.5 0 0 1 4 4.5H15a1.5 1.5 0 0 1 0 3H5.5v19h19V17a1.5 1.5 0 0 1 3 0V28A1.5 1.5 0 0 1 26 29.5z"
                        />
                      </g>
                    </svg> 
                    <svg
                      onClick={() => {
                        onDel(val.id);
                      }}
                      className="h-12 w-12 ml-2 cursor-pointer hover:bg-red-200 active:bg-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <linearGradient
                          id="a"
                          x1="24"
                          x2="24"
                          y1="41"
                          y2="7"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#21acce" />
                          <stop offset="1" stop-color="#a124fa" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#a)"
                        d="M35,11H28.82A3,3,0,0,0,26,7H22a3,3,0,0,0-2.82,4H13a3,3,0,0,0,0,6V37a4,4,0,0,0,4,4H31a4,4,0,0,0,4-4V17A3,3,0,0,0,35,11ZM21,10a1,1,0,0,1,1-1h4a1,1,0,0,1,0,2H22A1,1,0,0,1,21,10ZM33,37a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17H33Zm2-22H13a1,1,0,0,1,0-2H35A1,1,0,0,1,35,15ZM18,35.08V21a1,1,0,0,1,2,0v14a1,1,0,0,1-2,0Zm10,0V21a1,1,0,0,1,2,0v14a1,1,0,0,1-2,0Zm-5-3V24a1,1,0,0,1,2,0v8a1,1,0,0,1-2,0Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
