import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ProfileApi.css";
import download from "./download (1).jpg";

function ProfileApi() {
  const [profiledata, setProfiledata] = useState([]);
  const [singledata, setSingledata] = useState([]);
  const [toggle, setToggle] = useState("");
  const [ind, setInd] = useState("");

  const url = `https://jsonplaceholder.typicode.com/users/?id=${ind}`;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      setProfiledata(response.data);
    });
  }, []);

  // const reqData = () =>{

  //     axios.get(`${url}`).then((response)=>{

  //         console.log(response);

  //     })
  // }

  // console.log(reqData());

  const toggler = (id) => {
    setToggle("active");

    // console.log(id);
    // console.log(url);

    axios.get(`${url}`).then((response) => {
      setSingledata(response.data);
    });

    setInd(id);
  };

  return (
    <div>
      <div className="movement-div h-[1450px] w-[1000px] relative flex justify-center items-center">
        <div className="w-[50%] h-[100%]  ">
          {singledata.map((data) => (
            <div className="w-[100%] h-[50%]  flex justify-center items-center  ">
              <div className="w-[450px] h-[260px] rounded-2xl bg-white mt-16 relative  hover:h-[550px] hover:ease-in duration-[0.5s] ">
                <div className="w-[150px] h-[150px] bg-black overflow-hidden absolute rounded-2xl left-[50%] top-[-50px] translate-x-[-75px]">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover "
                    src={download}
                    alt=""
                  />
                </div>

                <div className="card-content absolute w-full h-[150px] translate-y-[110px] overflow-hidden hover:h-full hover:ease-in duration-300 ">
                  <div className="head mt-2 ">
                    <h1 className="text-3xl font-bold text-center">
                      {data.name}
                    </h1>
                    <p className="text-center font-bold opacity-50">
                      {data.email}
                    </p>
                  </div>
                  <div className="flex justify-around mt-4">
                    <button className="border-2 border-sky-500 w-[200px] rounded-full flex justify-center items-center break-all p-1">
                      <span>
                        <svg
                          className="w-12 h-12 mx-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z" />
                        </svg>
                      </span>
                      {data.phone}
                    </button>

                    <button className="border-2 border-sky-500 w-[200px] rounded-full flex justify-center items-center p-1 break-all">
                      <span>
                        <svg
                          className="w-12 h-12 mx-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z" />
                        </svg>
                      </span>

                      {data.email}
                    </button>
                  </div>

                  <div className="content  mt-8">
                    <div className="username  flex justify-center items-center my-2 ">
                      <div className="flex justify-around w-[85%]  items-center">
                        <h1 className="font-bold text-xl w-[100px]">
                          Username
                        </h1>

                        <p className="font-bold opacity-60 w-[300px] break-all ml-4">
                          {data.username}
                        </p>
                      </div>
                    </div>

                    <div className="Address flex justify-center items-center my-2 ">
                      <div className="flex justify-around w-[85%]  items-center">
                        <h1 className="font-bold text-xl w-[100px]">Address</h1>

                        <p className="font-bold opacity-60 w-[300px] break-all ml-6">{`${data.address.street} street,${data.address.suite},${data.address.city},zip-code - ${data.address.zipcode}`}</p>
                      </div>
                    </div>

                    <div className="Website flex justify-center items-center my-2">
                      <div className="flex justify-around w-[85%]  items-center">
                        <h1 className="font-bold text-xl w-[100px]">Website</h1>

                        <p className="font-bold opacity-60 w-[300px] break-all ml-6">
                          {data.website}
                        </p>
                      </div>
                    </div>

                    <div className="company flex justify-center items-center my-2 ">
                      <div className="flex justify-around w-[85%]  items-center">
                        <h1 className="font-bold text-xl w-[100px]">Company</h1>

                        <p className="font-bold opacity-60 w-[300px] break-all ml-6">
                          {data.company.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${toggle} first-box h-[100%] mt-8 w-[50%] bg-white absolute z-1000 rounded-[40px]`}
        >
          <div className="flex justify-center mt-4">
            <div className="  w-[70%]">
              <h1 className=" text-center text-4xl font-bold text-slate-400 ">
                CONTACTS
              </h1>
            </div>

            <svg
              className="h-12 w-12 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 7h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1zm0 6h14c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1z" />
            </svg>
          </div>

          <div className="list-cont  mt-8 flex flex-col justify-center items-center">
            {profiledata.map((val) => (
              <div className="w-[98%]  h-[100px] rounded-full border-4  shadow-lg flex my-4 ">
                <img
                  className="h-20 w-20 rounded-full overflow-hidden mt-2 ml-2 shadow-xl shadow-black/50"
                  src={download}
                  alt=""
                  srcset=""
                />

                <div className=" w-[77%] ml-2 flex items-center justify-between">
                  <div className="details-cont h-20 w-[100%] ml-2 ">
                    <p className="text-2xl font-bold ">{val.name}</p>
                    <p className="font-bold text-slate-500">{val.email}</p>
                  </div>

                  <svg
                    onClick={() => {
                      toggler(val.id);
                    }}
                    className="h-12 p-3 cursor-pointer w-12 bg-slate-300 border rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M24 24H0V0h24v24z" opacity=".87" />
                    <path
                      fill="#000000"
                      d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"
                      class="color000000 svgShape"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileApi;
