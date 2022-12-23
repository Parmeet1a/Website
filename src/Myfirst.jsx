import React from 'react'
import download from './download.jpg'

function Myfirst() {
  return (
    <div className='border-2  h-[600px] w-[1200px] mt-[50px] ml-[150px]'>
         <div className=' h-[400px] bg-blue-900 rounded-[25px] w-[800px] mt-[100px] ml-[280px] absolute ' >
           <div className=' ml-[150px] mt-[100px] h-[250px] w-[600px]'> <span className='font-bold text-indigo-200 text-xl '>Join Our Team</span><p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem tempora voluptas magnam voluptatum, optio non distinctio, saepe animi earum eaque facilis nisi aperiam sed!</p><button className='mt-[30px] ml-[0px] rounded-[10px] bg-white  font-bold h-[30px] w-[200px] text-indigo-600 px-[10px] '>
            Explore open positions </button></div>
         </div>
         <div className=' rounded-[25px] h-[250px] w-[250px] mt-[170px] ml-[150px] relative'><img className='rounded-[25px] h-[251px] w-[250px]' src={download} alt="office"/></div>
      
    </div>

   

    


  )
}

export default Myfirst
