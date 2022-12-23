import React,{useState} from 'react'

function Calculator3() {

    const[inpvalue,setInpvalue] = useState('');
    const[maininpvalue,setMaininpvalue] = useState('');



   function handleClick(e){

        let btnText = e.target.value;

        setInpvalue(inpvalue+ btnText);

        console.log(e.target.value);
    }


    function onAdd(){

        setInpvalue(inpvalue + '+')
        
    }
    function onSub(){

        setInpvalue(inpvalue + '-')
        
       
    }

    function onMult(){

        setInpvalue(inpvalue + '*')
        
       
    }
    function onDiv(){

        setInpvalue(inpvalue + '/')
        
       
    }


    function onEquals (){


        let checkValue =(maininpvalue + inpvalue);
        let newVal = eval((checkValue));
        setMaininpvalue(newVal);
        setInpvalue('');

     
        
       
        
    }


    function onAllClear(){


        setInpvalue('');
        setMaininpvalue('');
    }

    function onPer(){


        if(inpvalue>0){

        
        setMaininpvalue(eval(inpvalue/100));
        }

        else{

            setMaininpvalue(eval(maininpvalue/100));
        }
    }





    
  return (
    <div className='flex justify-center items-center'>

        <div className="main-cont w-[400px] h-[600px] mt-[40px]">

            <div className="inp-cont w-[400px] h-[150px] bg-gradient-to-l from-orange-500 to-pink-500">

                <input type="text" className='w-[200px] h-20 mt-2 mr-4 text-6xl text-white float-right bg-transparent border-none outline-none' value={maininpvalue} name="" id="" />
                <input type="text" className=' mt-2 text-2xl bg-transparent outline-none w-[200px] h-12 mr-4 float-right font-bold text-white ' value={inpvalue}  placeholder='Enter the text' name="" id="" />

            </div>

            <div className="btn-cont h-[450px] grid grid-cols-4">
                <button onClick={onAllClear} value='8' className="border-2 text-4xl flex justify-center items-center text-pink-600  bg-slate-200 hover:bg-slate-100 active:bg-slate-300 font-bold">AC</button>
                <button onClick={handleClick} value='' className="border-2 text-4xl flex justify-center items-center bg-slate-200 hover:bg-slate-100 active:bg-slate-300">+/-</button>
                <button onClick={onPer} value='' className="border-2 text-4xl flex justify-center items-center bg-slate-200 hover:bg-slate-100 active:bg-slate-300">%</button>
                <button onClick={onDiv} value='/' className="border-2 text-4xl flex justify-center items-center bg-slate-200 hover:bg-slate-100 active:bg-slate-300">/</button>
                <button onClick={handleClick} value='7' className="border-2 text-4xl flex justify-center items-center hover:bg-orange-100 active:bg-orange-300">7</button>
                <button onClick={handleClick} value='8' className="border-2 text-4xl flex justify-center items-center hover:bg-orange-100 active:bg-orange-300">8</button>
                <button onClick={handleClick} value='9' className="border-2 text-4xl flex justify-center items-center hover:bg-orange-100 active:bg-orange-300">9</button>
                <button onClick={onMult} value='*' className="border-2 text-4xl flex justify-center items-center bg-slate-200 hover:bg-slate-100 active:bg-slate-300">*</button>
                <button onClick={handleClick} value='4' className="border-2 text-4xl flex justify-center items-center hover:bg-orange-100 active:bg-orange-300">4</button>
                <button onClick={handleClick} value='5' className="border-2 text-4xl flex justify-center items-center hover:bg-orange-100 active:bg-orange-300">5</button>
                <button onClick={handleClick} value='6' className="border-2 text-4xl flex justify-center items-center hover:bg-orange-100 active:bg-orange-300">6</button>
                <button onClick={onSub} value='-' className="border-2 text-4xl flex justify-center items-center bg-slate-200 hover:bg-slate-100 active:bg-slate-300">-</button>
                <button onClick={handleClick} value='1' className="border-2 text-4xl flex justify-center items-center hover:bg-orange-100 active:bg-orange-300">1</button>
                <button onClick={handleClick} value='2' className="border-2 text-4xl flex justify-center items-center hover:bg-orange-100 active:bg-orange-300">2</button>
                <button onClick={handleClick} value='3' className="border-2 text-4xl flex justify-center items-center hover:bg-orange-100 active:bg-orange-300">3</button>
                <button onClick={onAdd} value='+' className="border-2 text-4xl flex justify-center items-center bg-slate-200 hover:bg-slate-100 active:bg-slate-300">+</button>
                <button onClick={handleClick} value='0' className="border-2 text-4xl flex justify-center items-center hover:bg-orange-100 active:bg-orange-300">0</button>
                <button onClick={handleClick} value='c' className="border-2 text-4xl flex justify-center items-center bg-slate-200 text-pink-400 font-bold hover:bg-slate-100 active:bg-slate-300">C</button>
                <button onClick={handleClick} value='.' className="border-2 text-4xl flex justify-center items-center bg-slate-200  hover:bg-slate-100 active:bg-slate-300">.</button>
                <button onClick={onEquals} value='8' className="border-2 text-4xl flex justify-center items-center bg-pink-500 text-white hover:bg-pink-400 active:bg-pink-900 ">=</button>

            </div>

        </div>
    </div>
  )
}

export default Calculator3