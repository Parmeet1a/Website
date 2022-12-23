import React,{useState} from 'react'

function TwelfthUi() {

    const [value,setValue] = useState(0);

    function increment (){

        let dataVal = value;
        if(dataVal < 10){
        dataVal++;

        setValue(dataVal);

        }

        else{

        }

       

        

        
    }


    function decrement (){

        let dataVal = value;
        if(dataVal > 0){
        dataVal--;

        setValue(dataVal);

        }

        else{

        }

        
    }


    
  return (

    
    <div className='flex justify-center w-[100%] h-[70vh] items-center'>
      <div className="cont  flex items-center w-[60%] h-[300px] ">
      <div className="flex w-[100%] justify-around">

        <button onClick={decrement} className='border-2 h-[150px] w-[150px]  rounded-full text-center text-9xl bg-gradient-to-r from-cyan-500 to-green-500'>-</button>

        <input type="text" value={value} className='text-center text-3xl' />




        <button onClick={increment} className='border-2 h-[150px] w-[150px] text-center text-9xl rounded-full bg-gradient-to-r from-cyan-500 to-green-500'>+</button>
      </div>
      </div>
    </div>
  )
}

export default TwelfthUi
