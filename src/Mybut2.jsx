
import React,{useState} from 'react'

function Mybut2() {
    const[value,setValue]=useState(0)
    function myFun(){
    
    }


  return (
    <div><div className='border-2 border-black h-[25vh] w-[100vh] flex justify-around p-[25px] mt-[250px] ml-[250px]'> 
    <button className='border-2 border-black  bg-orange-300 h-[150px] w-[150px] text-[80px] text-center '>
    get
</button>
<input type="text" className='border-2 border-black h-[150px] w-[150px] text-[20px] text-center ' name='' placeholder='enter the value' onChange={(e)=>{
    console.log('e',e.target.value)
}} id='' />
<button className='border-2 border-black  bg-indigo-300 h-[150px] w-[150px] text-[80px] text-center '>get
    
</button>
</div>
</div>
  )
}

export default Mybut2