import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
 

<div className="text-white">
      <div className="navbar  h-16 flex bg-slate-800">
        <div className=" h-16 w-20  ml-4">
          <svg
            className="h-16 w-16 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#00ffff"
              d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"
              class="color000000 svgShape"
            />
          </svg>
        </div>

        <div className="lists text-white flex justify-center items-center text-xl  list-none ml-36 w-[800px]">

          <li className="mx-4 hover:text-green-500 active:text-orange-500">
          <Link to="/">Home</Link>
           
          </li>
          <li className="mx-4 hover:text-green-500 active:text-orange-500">
          <Link to="/Contact Us">Contact Us</Link>

          </li>
          <li className="mx-4 hover:text-green-500 active:text-orange-500">
          <Link to="/About Us">About Us</Link>

          </li>
          <li className="mx-4 hover:text-green-500 active:text-orange-500">
          </li>
        </div>

        <div className="w-[100%] text-white flex justify-end">
          <div className="flex justify-center items-center font-bold mr-8">
            Log in
          </div>
          <div className="flex justify-center items-center mr-16 ">
            <button className="border-black h-8 w-[150px] rounded-md bg-slate-500 font-bold">
              Start free Trial
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar