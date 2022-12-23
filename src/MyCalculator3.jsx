import React,{useState} from 'react'

function MyCalculator3() {
  const[Val,setVal]=useState("")
  const[Result,setResult]=useState("")


  const Clear = () =>{
    setVal("")
    setVal(Val.slice(0,-1))
  }

  const AllClear = () =>{
    setVal("")
    setResult("")
  }
  const Calculate = ()=>{
    
    let Value =(Val + Result);
        let newVal = eval((Value));
        setResult(newVal);
        setVal('');
  }

  return (
    <div >
      <div className=' h-[100vh] w-[100%] my-[2px] mx-[500px] bg-black'>
      <div className=' h-[200px] w-[380px] mt-[50px] mx-[6px] '>
        <input type="text"  className=' h-[95px] w-[375px] bg-purple-200 rounded-[10px] text-[30px] text-center mt-[2.5px]' name='' placeholder='Result Value' value={Result}  />
        <input type="text"  className=' h-[95px] w-[375px] bg-purple-200 rounded-[10px] text-[30px] text-center mt-[2.5px] text-red-600' name='' placeholder='Enter The Value' onChange={(e)=>setVal(e.target.value)} value={Val} />
       

</div>
      <div className='border-2 border-purple-400 h-[365px] w-[380px] mt-[-6px] ml-[6px] bg-purple-400 rounded-[10px] '>
       <div className='flex mt-[10px] ml-[4px] '> <div className=' grid grid grid-cols-4 gap-2 '> 
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px] hover:bg-orange-100 bg-purple-100' value="1" onClick={(e)=>setVal(Val + e.target.value)}>1</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="2" onClick={(e)=>setVal(Val + e.target.value)}>2</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="3" onClick={(e)=>setVal(Val + e.target.value)}>3</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100'  onClick={Clear} onDoubleClick={AllClear}>AC/C</button>

       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="4" onClick={(e)=>setVal(Val + e.target.value)}>4</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="5" onClick={(e)=>setVal(Val + e.target.value)}>5</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="6" onClick={(e)=>setVal(Val + e.target.value)}>6</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="+" onClick={(e)=>setVal(Val + e.target.value)}>+</button>

       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="7" onClick={(e)=>setVal(Val + e.target.value)}>7</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="8" onClick={(e)=>setVal(Val + e.target.value)}>8</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="9" onClick={(e)=>setVal(Val + e.target.value)}>9</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="-" onClick={(e)=>setVal(Val + e.target.value)}>-</button>

       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="/" onClick={(e)=>setVal(Val + e.target.value)}>/</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="0" onClick={(e)=>setVal(Val + e.target.value)}>0</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-orange-100 bg-purple-100' value="*" onClick={(e)=>setVal(Val + e.target.value)}>*</button>
       <button className='border-2 border-black w-[85px] h-[80px] text-[22px] font-bold rounded-[10px]  hover:bg-red-400 bg-purple-100'  onClick={Calculate}>=</button>
       
        </div></div>
      </div>
      </div> 
     
    </div>
  )
}

export default MyCalculator3