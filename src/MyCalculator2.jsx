import React,{useState} from 'react'

export default function MyCalculator2() {

    const[Fvalue,setFvalue]=useState(0)
    const[Svalue,setSvalue]=useState(0)
    const[message,setMessage]=useState('')


    const handleChange = e =>{

        setMessage(e.target.value);
    }

    function addValue(){
        setFvalue(message)
        setMessage('');

    }  
    function addValue2(){
        setSvalue(message)
        setMessage('');

    }  
    function add(){
        let num1=Number(Fvalue);
       let num2=Number(Svalue);
        setMessage(num1+num2)
        setFvalue('');
        setSvalue('');
     }
     function subtract(){
        setMessage(Fvalue-Svalue);
        setFvalue('');
        setSvalue('');
     }
     function multiply(){
        setMessage(Fvalue*Svalue);
        setFvalue('');
        setSvalue('');
     }
     function divide(){
        setMessage(Fvalue/Svalue);
        setFvalue('');
        setSvalue('');
     }
     function percentage(){
        setMessage((Fvalue/Svalue)*100);
        setFvalue('');
        setSvalue('');
     }
     function allClear(){
        setFvalue('')
        setSvalue('')
        setMessage('');
       
      
    
    }
  return (
    <div><div>
    <div className='border-4 border-black h-[740px] w-[505px] mt-[25px] ml-[500px] rounded-[20px]'>
    <div className='-500 h-[100px] w-[500px] flex '>
        <div className=' h-[100px] w-[280px] p-[40px] flex '> <img className='h-[40px] w-[40px]' src="https://img.icons8.com/pastel-glyph/2x/calculator.png" alt="" srcset="" /> <p className='text-center font-bold text-4xl text-green-500'>  Calculator</p></div> 
        <input type="text" className=' h-[100px] w-[210px] border-2 border-black text-[30px] text-center mt-[10px]' name='' placeholder='Enter The Value' value={message} onChange={handleChange} />
    </div>

        <div className='flex h-[250px] w-[500px]'>
            <div className=' h-[250px] w-[500px]'>
                <div className=' ml-[10px] mt-[20px] w-[225px] h-[200px] text-[20px] '>
                <input type="text" className=' mt-[10px] ml-[50px] h-[100px] w-[100px] text-[50px] text-center rounded-full' name='' id='' value={Fvalue}/>
                    <button  className='border-2 border-black ml-[30px] rounded-[10px] text-xl font-bold bg-green-800 text-white  h-[50px] w-[150px]' onClick={addValue}>Get</button>
                    
                </div>
                </div> <div className=' h-[250px] w-[500px]'>
                <div className=' ml-[10px] mt-[20px] w-[225px] h-[200px] text-[20px] '>
                    
                    <input type="text" className=' mt-[10px] ml-[30px] h-[100px] w-[100px] text-[50px] text-center rounded-full' name='' id='' value={Svalue}/>
                    <button className='border-2 border-black rounded-[10px] text-xl font-bold bg-green-500 text-white  h-[50px] w-[150px]' onClick={addValue2}>Get</button>
                </div>
                </div>
        </div>
        <div className=' h-[360px] w-[500px] '>
            <button onClick={add}  className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-500 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>Add</button>
            <button onClick={subtract}  className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-900 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>Subtract</button>
            <button onClick={multiply}  className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-500 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>Multiply</button>
            <button onClick={divide} className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-900 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>Divide</button>
            <button onClick={percentage}  className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-500 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>Percentage</button >
            <button onClick={allClear}  className='border-2 border-black rounded-[10px] text-2xl font-bold bg-green-900 text-white mt-[10px] ml-[85px] h-[50px] w-[300px]'>All Clear</button>
        </div>
    </div>






</div>




    </div>
  )
}
