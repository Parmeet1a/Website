import axios from "axios";
import React, { useState } from "react";
import "./form.css";

function Form() {
  const [fName, setFname] = useState("");
  const [sName, setSname] = useState("");
  const [Gender, setGender] = useState("");
  const [Street, setStreet] = useState("");
  const [Email, setEmail] = useState("");

  const [Area, setArea] = useState("");
  const [District, setDistrict] = useState("");
  const [State, setState] = useState("");

  const handleChange = (e) => {
    let na = e.target.value;
    console.log(na);
    setFname(e.target.value);
  };
  const handleChange1 = (e) => {
    setSname(e.target.value);
  };
  const handleChange2 = (e) => {
    setGender(e.target.value);
  };

  const handleChange3 = (e) => {
    setEmail(e.target.value);
  };
  const handleChange4 = (e) => {
    setStreet(e.target.value);
  };
  const handleChange5 = (e) => {
    setArea(e.target.value);
  };
  const handleChange6 = (e) => {
    setDistrict(e.target.value);
    console.log(District);
  };
  const handleChange7 = (e) => {
    setState(e.target.value);
  };

  const body = {
    firstName: fName,
    secondName: sName,
    gender: Gender,
    email: Email,
    address: {
      street: Street,
      area: Area,
      district: District,
      state: State,
    },
  };



  const onSubmit = () =>{

    axios
    .post("https://jsonplaceholder.typicode.com/posts", body)
    .then((response) => {
      console.log(response);
    });

    
  }

 

  return (
    <div className=" border w-[500px] h-[650px] shadow-2xl rounded-xl form-cont ">
      <div className=" text-4xl font-bold w-[80%] ml-12 mt-16 text-white">
        Login Form
      </div>
      <div className="info-cont  flex justify-center items-center mt-12 flex-col">
        <input
          placeholder="First Name"
          onChange={(e) => {
            handleChange(e);
          }}
          className=" form-inp w-[85%] h-12 rounded-full text-2xl my-2 shadow-2xl shadow-black/50 p-4 outline-none "
        ></input>
        <input
          placeholder="Last Name"
          onChange={(e) => {
            handleChange1(e);
          }}
          className=" form-inp w-[85%] h-12 rounded-full text-2xl my-2 shadow-2xl shadow-black/50 p-4 outline-none "
        ></input>
        <input
          placeholder="Gender"
          onChange={(e) => {
            handleChange2(e);
          }}
          className=" form-inp w-[85%] h-12 rounded-full text-2xl my-2 shadow-2xl shadow-black/50 p-4 outline-none "
        ></input>
        <input
          placeholder="Email Id"
          onChange={(e) => {
            handleChange3(e);
          }}
          className=" form-inp w-[85%] h-12 rounded-full text-2xl my-2 shadow-2xl shadow-black/50 p-4 outline-none "
        ></input>
        <div className="flex mt-4 ">
          <input
            placeholder="Street"
            onChange={(e) => {
              handleChange4(e);
            }}
            className=" form-inp w-[40%] h-12 mx-8 rounded-full text-2xl my-2 shadow-2xl shadow-black/50 p-4 outline-none "
          ></input>
          <input
            placeholder="Area"
            onChange={(e) => {
              handleChange5(e);
            }}
            className=" form-inp w-[40%] h-12 rounded-full text-2xl my-2 shadow-2xl shadow-black/50 p-4 outline-none "
          ></input>
        </div>
        <div className="flex">
          <input
            placeholder="State"
            onChange={(e) => {
              handleChange6(e);
            }}
            className=" form-inp w-[40%] h-12 rounded-full mx-8 text-2xl my-2 shadow-2xl shadow-black/50 p-4 outline-none "
          ></input>
          <input
            placeholder="District"
            onChange={(e) => {
              handleChange7(e);
            }}
            className=" form-inp w-[40%] h-12 rounded-full text-2xl my-2 shadow-2xl shadow-black/50 p-4 outline-none "
          ></input>
        </div>
        <div className=" w-[85%] mt-6 ">
          <button onClick={onSubmit} className="border w-[150px] h-12 rounded-full text-2xl bg-white text-black hover:bg-slate-200 active:bg-slate-500">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
