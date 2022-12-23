import React,{useState} from 'react'



function MyCalculator() {
    const[value,setValue]=useState(0)
    const[Sval,setSval]=useState(0)
    const[Tval,setTval]=useState(0)

function Func(){
   let num=value;
   num--;
   setValue(num);

}
function MyFunc(){
    let num=value;
    num++;
    setValue(num);
 
 }

function Sfunc(){
   let num2=Sval;
   num2--;
   setSval(num2);

}
function Mysfunc(){
    let num2=Sval;
    num2++;
    setSval(num2);
 
 }
 function add(){
    setTval(value+Sval)
 }
 function subtract(){
    setTval(value-Sval)
 }
 function multiply(){
    setTval(value*Sval)
 }
 function divide(){
    setTval(value/Sval)
 }
 function percentage(){
    setTval((value/Sval)*100)
 }
 function allClear(){
    setValue(0)
    setSval(0)
    setTval(0)
  

}


  return (
    <div>
        <div className='border-4 border-black h-[740px] w-[505px] mt-[25px] ml-[500px] rounded-[20px]'>
        <div className='-500 h-[100px] w-[500px] flex '>
            <div className=' h-[100px] w-[280px] p-[40px] flex '> <img className='h-[40px] w-[40px]' src="https://img.icons8.com/pastel-glyph/2x/calculator.png" alt="" srcset="" /> <p className='text-center font-bold text-4xl text-green-500'>  Calculator</p></div> <input type="text" className=' h-[100px] w-[210px] text-[50px] text-center ' name='' id='' value={Tval} />
        </div>

            <div className='flex h-[250px] w-[500px]'>
                <div className=' h-[250px] w-[500px]'>
                    <div className=' ml-[10px] mt-[20px] w-[225px] h-[200px] text-[20px] flex justify-around '>
                        <button onClick={Func} className='inc border-2 h-[50px] w-[50px] text-6xl inc border-2 h-[50px] w-[50px] text-6xl  flex justify-center items-center pb-4 bg-green-500 hover:bg-green-600 active:bg-green-700 font-bold text-white pb-4 bg-green-500 hover:bg-green-600 active:bg-green-700 font-bold text-white mt-[100px]'>-</button>
                        <input type="text" className=' mt-[10px] h-[100px] w-[100px] text-[50px] text-center rounded-full' name='' id='' value={value}/>
                        <button  onClick={MyFunc} className='inc border-2 h-[50px] w-[50px] text-6xl  flex justify-center items-center pb-4 bg-green-500 hover:bg-green-600 active:bg-green-700 font-bold text-white mt-[100px]'>+</button>
                    </div>
                    </div> <div className=' h-[250px] w-[500px]'>
                    <div className=' ml-[10px] mt-[20px] w-[225px] h-[200px] text-[20px] flex justify-around '>
                        <button  onClick={Sfunc} className='inc border-2 h-[50px] w-[50px] text-6xl inc border-2 h-[50px] w-[50px] text-6xl  flex justify-center items-center pb-4 bg-green-500 hover:bg-green-600 active:bg-green-700 font-bold text-white pb-4 bg-green-500 hover:bg-green-600 active:bg-green-700 font-bold text-white mt-[100px]'>-</button>
                        <input type="text" className=' mt-[10px] h-[100px] w-[100px] text-[50px] text-center rounded-full' name='' id='' value={Sval} />
                        <button  onClick={Mysfunc} className='inc border-2 h-[50px] w-[50px] text-6xl  flex justify-center items-center pb-4 bg-green-500 hover:bg-green-600 active:bg-green-700 font-bold text-white mt-[100px]'>+</button>
                    </div>
                    </div>
            </div>
            <div className=' h-[360px] w-[500px] '>
                <button  onClick={add} className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-500 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>Add</button>
                <button  onClick={subtract} className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-900 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>Subtract</button>
                <button  onClick={multiply} className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-500 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>Multiply</button>
                <button onClick={divide}  className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-900 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>Divide</button>
                <button onClick={percentage}  className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-500 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>Percentage</button >
                <button onClick={allClear}  className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-900 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>All Clear</button>
            </div>
        </div>






    </div>
  )
}

export default MyCalculator