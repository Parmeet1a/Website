import React,{useState} from 'react'

function Age() {

    const [inputValue,setInputValue] = useState('');
    const [stringValue,setStringValue] = useState('');
    const [ageValue,setAgeValue] = useState('');
    const [reversedValue,setReversedValue] = useState('');
  return (
    
    <div className="">
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
            <a href="/">Home</a>
          </li>
          <li className="mx-4 hover:text-green-500 active:text-orange-500">
            <a href="/">Features</a>
          </li>
          <li className="mx-4 hover:text-green-500 active:text-orange-500">
            <a href="/">Contact Us</a>
          </li>
          <li className="mx-4 hover:text-green-500 active:text-orange-500">
            <a href="/">About Us</a>
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


      <div className=" h-full">

        <div className="bg-sky-500 h-[400px] flex justify-center items-center">

            <div className=" flex flex-col items-center justify-center  h-[300px] w-[500px]">
                <input className='h-2 p-8 w-[400px] my-4' onChange={(e)=>{ const val = e.target.value;setInputValue(val)}} value={inputValue} type="text" placeholder='Enter your Birth Year' />
                <button
                 onClick={()=>{

                        const presentYear = new Date().getFullYear();
                        const userAge = presentYear - inputValue;
                        console.log(userAge);
                        setAgeValue(userAge)
                }} 
                className='bg-white h-12 w-[200px] active:bg-sky-200 my-4'>Get Your Age</button>
                <div className="h-16 flex items-center justify-center w-24 text-white mt-8 text-6xl text-center font-bold">{ageValue}</div>
            </div>


        </div>



        <div className=" h-[400px] flex justify-center items-center">

<div className=" flex flex-col items-center justify-center   h-[300px] w-[500px]">
    <input className='h-2 border border-black p-8 w-[400px] my-4' onChange={(e)=>{ const val = e.target.value;setStringValue(val)}} value={stringValue} type="text" placeholder='Enter the text ' />
    <button
     onClick={()=>{

            const inputString = stringValue;
            let splitString =inputString.split('');
            let reversedString = splitString.reverse();
            let finalString = reversedString.join('');
            setReversedValue(finalString);



           
    }} 
    className='bg-sky-500 font-bold text-white active:bg-sky-300 h-12 w-[200px] my-4'>Reverse</button>
    <div className="h-16 flex items-center justify-center w-24 text-sky-500 mt-8 text-6xl text-center font-bold">{reversedValue}</div>
</div>


</div>
      </div>


    </div>
  )
}

export default Age