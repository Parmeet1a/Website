import React from 'react'

function Mappract() {
   const newArray=["Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
              "Lorem ipsulor sit, amet consectetur adipisicing elit.", 
              "Lorem ipsum door sit, amet consectetur adipisicing elit.",
              "Lorem ipsum dolsit, amet consectetur adipisicing elit.", 
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
              "Lorem ipsum dolor consectetur adipisicing elit.", 
              "Lorem ipsum dolor sit, ammmmet consectetur adipisicing elit.",
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.", 
              "Lorem ipsum dolor sit, amctetur adipisicing elit.",
              "Lorem ipsum dolor sit, amet conse adipisicing elit.", 
]
  return (
    <div className=' h-[600px] w-[95%]'>
  <div className='h-[200px] w-[90%] flex mt-[10px] ml-[10px]'>
         <div className=' h-[200px] w-[75%] text-center'>
          <p className='mt-[40px] font-bold  text-[40px] py-[10px] '>Everything You Need For<span className='text-indigo-500 font-bold  text-[40px]' > $99 a month</span></p>
         <span className=' mt-[10px] ml-[-40px] text-[20px] text-gray-600'>Included every feature we offer plus unlimited projects and unlimited users. </span></div>
       <button className='mt-[100px] ml-[150px] text-center font-bold bg-blue-800 text-white h-[50px]  w-[200px] rounded-[10px] py-[10px] '>Get Started Today</button>
           </div>
           <div className=' h-[300px] w-[500px] ml-[10px] mt-[10px] ml-[80px]'>
            <p className='h-[50px] w-[500px] text-xl font-bold text-purple-500 py-[10px] px-[10px]'>Everything You need</p>
            <h1 className='h-[50px] w-[500px]  text-3xl font-bold text-black py-[10px] px-[10px]'>All-In-One-Platform</h1>
            <p className='h-[200px] w-[500px]  text-medium text-left font-bold text-blue-900 px-[10px] py-[10px] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam accusantium cupiditateest molestias quibusdam accusamus saepe. Nihil quaerat accusamus corporis officia? Delectus cum ad fugit labore!</p>
           </div>

           <div className=' h-[350px] w-[700px] ml-[582px] mt-[-300px]  '>

            <div className='grid grid-cols-2 '>
           {
            newArray.map((item)=>(
             <div className=' h-[70px] w-[350px] flex '><img className='h-[25px] w-[30px] my-2 mx-2 ml-[5px]' src="https://img.icons8.com/emoji/48/null/check-mark-emoji.png" alt=''/>{item} </div>

            ))
           }
           </div>
</div>
           
           </div>  











  )      
}

export default Mappract
