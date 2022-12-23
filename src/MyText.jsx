import React,{useState} from 'react'

export default function MyText() {
    const[val,setVal]=useState("");
    const[oval,setOval]=useState("")

    const Text1 = e=>{
       let Value= e.target.value;
       setVal(Value);

    }
     function Click() {

        let reqVal = val;
        const myArray = reqVal.split(" ");
        let fWord = myArray[0];
        let sWord = myArray[1];

        let a= fWord.charAt(0);
        let b= sWord.charAt(0);

        let result = a.toUpperCase() + ' ' + b.toUpperCase();
        setOval(result);

         
    }
    function Clear(){
        setOval("")
        setVal("")
    }


  return (
    <div>
        <div className='main body h-[600px] w-[700px] border-2 border-black ml-[460px] mt-[75px]'>
            <div className='1st sec h-[300px] w-[700px] border-2 border-red-500 flex'>
                <div className='1st sec h-[300px] w-[400px] border-2 border-red-500'>
                    <input className=' border-2 border-red-500 h-[100px] w-[350px] mt-[125px] ml-[5px] text-[25px] text-center bold ' type="text" placeholder='Enter The Text' id='' value={val} onChange={Text1}  />
                </div>
                <div className='1st sec h-[100px] w-[260px] border-2 border-green-500 ml-[15px] mt-[125px]'>
                    <button onClick={Click} className=' h-[40px] w-[100px] border-2 border-red-500 ml-[10px] mt-[25px] bold text-[25px]'>Get</button>
                    <button onClick={Clear} className=' h-[40px] w-[100px] border-2 border-blue-500 ml-[10px] mt-[25px] bold text-[25px]'>Clear</button>
                </div>
            </div>
            <div className='2nd sec h-[300px] w-[700px] border-2 border-blue-500'>
            <input className=' border-2 border-red-500 h-[220px] w-[600px] mt-[25px] ml-[5px] text-[25px] text-center bold ' type="text" placeholder='The Text' id=''value={oval}  />
            </div>
        </div>
    </div>
  )
}
