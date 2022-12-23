
import React,{useState} from 'react'

function Mybut() {
    const[Val,setVal]=useState(0)

    function myFunc(){
        if (Val<10){
            let num = Val;
            num++;
            setVal(num);
        }
        else{
            
        }

        
       
    }
    function Func() {
        if (Val>0){
            let num = Val;
            num--;
            setVal(num);
        }
        else{
            
        }
        
    }
    

  return (
    <div>
       
       <div className='border-2 border-black h-[25vh] w-[100vh] flex justify-around p-[25px] mt-[250px] ml-[250px]'> <button onClick={myFunc} className='border-2 border-black rounded-full bg-orange-300 h-[150px] w-[150px] text-[80px] text-center '>
            +
        </button>
        <input type="text" className='border-2 border-black h-[150px] w-[150px] text-[80px] text-center rounded-full' name='' value={Val} id='' />
        <button onClick={Func} className='border-2 border-black rounded-full bg-indigo-300 h-[150px] w-[150px] text-[80px] text-center '>-
            
        </button>
        </div>


    </div>
  )
}

export default Mybut