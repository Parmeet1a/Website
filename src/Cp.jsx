import React from 'react'
import { useState } from 'react'

function CapitalFirst() {

  const [str,setStr]=useState("")
  const [str2,setStr2]=useState("")


  const Change=(e)=>{
    setStr(e.target.value)
  }

  const Capital=()=>{
    let output = str.split(0,1).map(str=>{
      return str.charAt(0).toUpperCase() 

    }) 
   
setStr2(  output)

  
  }



  return (

    <div className='h-96 w-80 bg-gray-500 mt-24 ml-[500px] rounded-lg'>
     <div className='h-12 w-12'>
     <input type="text" className='w-80 h-12 bg-gray-300 mt-8 rounded-lg' value={str}  placeholder='Enter Value'  onChange={Change}  name="" id="input1" /></div>

     <div>
     <button
                            className=" mt-28 font-bold bg-gray-200 p-4 rounded-full mb-2 "
                            onClick={Capital}
                        >
                            Capital
                        </button>
     </div>
     <div>
      <p className='mt-8 font-bold text-xl'>{str2} </p>
     </div>
    </div>
   
)}

export default CapitalFirst