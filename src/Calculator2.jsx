import React,{useState} from 'react'

function Calculator2() {

    const[firstvalue,setFirstvalue] = useState(0);
    const[secondvalue,setSecondvalue] = useState(0);
    const[message,setMessage] = useState('');

   


    const handleChange = e =>{

        setMessage(e.target.value);
            console.log(message);
        

    }


    function obtainValue(){


        setFirstvalue(message);
        setMessage('');
        

    }


    function obtainValue2(){


        setSecondvalue(message);
        setMessage('');

    }


    function clickAdd(){

        let upval1= Number(firstvalue);
        let upval2= Number(secondvalue);

        setMessage(upval1+upval2);
        setFirstvalue('');
        setSecondvalue('');
        
    }


    function clickSub(){

        setMessage(firstvalue-secondvalue);
        setFirstvalue('');
        setSecondvalue('');
        
    }


    function clickMul(){

        setMessage(firstvalue*secondvalue);
        setFirstvalue('');
        setSecondvalue('');
    }



    function clickDiv(){

        setMessage(firstvalue/secondvalue);
        setFirstvalue('');
        setSecondvalue('');
    }



    function clickPer(){

        setMessage((firstvalue/secondvalue)*100);
        setFirstvalue('');
        setSecondvalue('');
    }



    function clickAC(){

        setMessage('');
        setFirstvalue('');
        setSecondvalue('');
    }



   

 

  


   




  return (
    <div className='h-[100vh] flex justify-center items-center'>

        <div className="cal-cont border-4  h-[600px] w-[400px]">

           <div className="flex items-center border-2 h-[100px]"><svg className='w-[25px] h-[25px] ml-8' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12.71,17.29a1,1,0,0,0-.16-.12.56.56,0,0,0-.17-.09.6.6,0,0,0-.19-.06.93.93,0,0,0-.57.06.9.9,0,0,0-.54.54A.84.84,0,0,0,11,18a1,1,0,0,0,.07.38,1.46,1.46,0,0,0,.22.33A1,1,0,0,0,12,19a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,13,18a1,1,0,0,0-.08-.38A1,1,0,0,0,12.71,17.29ZM8.55,13.17a.56.56,0,0,0-.17-.09A.6.6,0,0,0,8.19,13a.86.86,0,0,0-.39,0l-.18.06-.18.09-.15.12A1.05,1.05,0,0,0,7,14a1,1,0,0,0,.29.71,1.15,1.15,0,0,0,.33.21A1,1,0,0,0,9,14a1.05,1.05,0,0,0-.29-.71Zm.16,4.12a1,1,0,0,0-.33-.21A1,1,0,0,0,7.8,17l-.18.06a.76.76,0,0,0-.18.09,1.58,1.58,0,0,0-.15.12,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33A1,1,0,0,0,8,19a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,8.71,17.29Zm2.91-4.21a1,1,0,0,0-.33.21A1.05,1.05,0,0,0,11,14a1,1,0,0,0,1.38.92,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,13,14a1.05,1.05,0,0,0-.29-.71A1,1,0,0,0,11.62,13.08Zm5.09,4.21a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33A1,1,0,0,0,16,19a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,16.71,17.29ZM16,5H8A1,1,0,0,0,7,6v4a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V6A1,1,0,0,0,16,5ZM15,9H9V7h6Zm3-8H6A3,3,0,0,0,3,4V20a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V4A3,3,0,0,0,18,1Zm1,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1Zm-2.45-6.83a.56.56,0,0,0-.17-.09.6.6,0,0,0-.19-.06.86.86,0,0,0-.39,0l-.18.06-.18.09-.15.12A1.05,1.05,0,0,0,15,14a1,1,0,0,0,1.38.92,1.15,1.15,0,0,0,.33-.21A1,1,0,0,0,17,14a1.05,1.05,0,0,0-.29-.71Z"/></svg>
           <h1 className='text-3xl font-bold text-green-500'>Calculator</h1>
           
           <input type="text" className=' mt-[30px] ml-[10px] h-[50px] w-[150px] text-4xl text-center border-2 border-black' value={message} onChange={handleChange}  placeholder='Enter' name="" id="input1" />
           
           </div>

           

           <div className="flex justify-around mt-4"> 

        <div className="first-numb  w-[140px] h-[140px]">

            <div className="value w-[130px] h-[80px] text-4xl flex items-center justify-center " >{firstvalue}</div>

            <div className=" flex ">

            <button onClick={obtainValue} className="inc border-2 h-[40px] w-[130px]   flex justify-center items-center bg-green-500 hover:bg-green-600 active:bg-green-700 font-bold text-white">Get</button>

            </div>



            
        </div>


        <div className="first-numb  w-[140px] h-[140px]">

        <div className="value w-[130px] h-[80px] text-4xl flex items-center justify-center " >{secondvalue}</div>

            <div className=" flex">

            <button onClick={obtainValue2} className="inc border-2 h-[40px] w-[130px] flex justify-center items-center bg-green-500 hover:bg-green-600 active:bg-green-700 font-bold text-white">Get</button>

            </div>




            
        </div>



        </div>

        <div className=" flex justify-center mt-2">

        <div className="function-btn w-[210px] font-bold text-white ">

            <button  onClick={clickAdd} className='w-[200px]  my-1 h-[45px] border-2 bg-green-500 hover:bg-green-600 active:bg-green-700'>Add</button>
            <button onClick={clickSub} className='w-[200px]  my-1 h-[45px] border-2 bg-green-500 hover:bg-green-600 active:bg-green-700'>Subtract</button>
            <button onClick={clickMul} className='w-[200px]  my-1 h-[45px] border-2 bg-green-500 hover:bg-green-600 active:bg-green-700'>Multiply</button>
            <button onClick={clickDiv} className='w-[200px]  my-1 h-[45px] border-2 bg-green-500 hover:bg-green-600 active:bg-green-700'>Divide</button>
            <button  onClick={clickPer} forPer className='w-[200px]  my-1 h-[45px] border-2 bg-green-500 hover:bg-green-600 active:bg-green-700'>Percentage</button>
            <button onClick={clickAC} className='w-[200px]  my-1 h-[45px] border-2 bg-green-500 hover:bg-green-600 active:bg-green-700'>AC</button>
            
        </div>

        </div>

        </div>


      
    </div>
  )
}

export default Calculator2