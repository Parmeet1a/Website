import React, {useState} from 'react'


function TextExtract() {


    const [val,setVal] = useState('');
    const [secval,setSecval] = useState('');

    const handleChange = e =>{

        let tarVal = e.target.value;
        setVal(tarVal);
    }



    function onClick (){


       
        let reqVal = val;
       const myArray = reqVal.split(" ");
       let fname = myArray[0];
       let lname = myArray[1];
       let a = fname.charAt(0);
       let b = lname.charAt(0);
       let final = a.toUpperCase() + ' ' + b.toUpperCase();
       setSecval(final);



    }


    function onClear(){


        setVal('');
        setSecval('');
    }


  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <div className="ext-cont border-2 w-[600px] h-[600px]">

            <div className="h-[300px] flex items-center bg-gradient-to-t from-cyan-500 to-green-500 ">

                <div className=" font-bold w-[600px] h-{100px] flex justify-center items-center justify-between">
                    <input className='ml-4 text-5xl h-24 w-[400px] bg-transparent border-none outline-none text-white ' placeholder='Enter the text' value={val} onChange={handleChange} type="text" />
                    <button onClick={onClick} className='border-2 h-[50px] w-[150px] mr-4 hover:bg-cyan-200 active:bg-cyan-400 font-bold text-white'>Get</button>
                    <button onClick={onClear} className='border-2 h-[50px] w-[150px] mr-4 hover:bg-red-200 active:bg-red-400 font-bold text-white'>Clear</button>
                </div>
                
            </div>
           


            <div className="border-2 border-cyan-200 h-[300px] flex items-center">

            <div className="font-bold w-[600px] h-{100px] flex justify-center items-center justify-between">
                    <input className='text-5xl h-24 text-cyan-400  w-[400px] bg-transparent border-none outline-none text-center ' value={secval} type="text" />
                </div>
                
            </div>


        </div>
    </div>
  )
}

export default TextExtract