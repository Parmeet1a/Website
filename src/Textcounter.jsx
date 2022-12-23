import React,{useState} from 'react'
import './Textcounterc.css'


function Textcounter() {

  const [inputtext,setInputtext] = useState('');
  const [outputtext,setOutputtext] = useState('');


  
  
  const handleChange = (e) =>{
    
  let val = e.target.value;

  setInputtext(val);

}


function uppercaseText(){

  let textVal = inputtext;
 let newVal = textVal.toUpperCase();
  setInputtext(newVal);
}


function lowercaseText(){

  let textVal = inputtext;
 let newVal = textVal.toLowerCase();
  setInputtext(newVal);
}


function countText(){


  let textVal = inputtext;
  const textArray = textVal.split(' ');
  let arrayLen = textArray.length;
  setOutputtext(`Total Words` + ' - ' + arrayLen);


}


function letterCounter(){

  let textVal = inputtext;
   
  let regVal = textVal.toLowerCase();

  let regVal2 = regVal.match(/[a-z]/g);

  let letterLen = regVal2.length;
  setOutputtext(`Total Characters` + ' - ' + letterLen);

  // console.log(regVal2);
  // console.log(letterLen);


}



function firstCapital(){


  let textVal = inputtext;
  const arr = textVal.split(' ');

  let element = '';

for (let i = 0; i < arr.length; i++) {

  let textVal = arr[i].charAt(0);
  
  let fWord = textVal.toUpperCase();
  let finalWord = arr[i].replace(textVal,fWord);

   element = element.concat('' + finalWord);

 

  //  element = element.concat(' ' + arr[i]) ;

 
  
  // console.log(element);
  setInputtext(element);
}

  // arr.forEach(element => {

  //   let reqWord = element.charAt(0);

  //   let fWord = reqWord.toUpperCase();

  //   let finalWord = element.replace(reqWord,fWord);

  //  finalWord = finalWord.concat()
    

  //   //  console.log(element);
  //   // console.log(fWord);
  //   console.log(finalWord);
    
  //   // setInputtext(finalWord)
  // });

}


function clearAll (){


  setInputtext('');
  setOutputtext('');
}








  return (

    <div>
   
    <section className=' filter border h-[100vh] bg-slate-100 flex justify-center items-center '>

        <div className=" first:border-2 w-[700px] h-[400px] absolute top-[-100px] bg-[#ff359b] blur-[150px] "></div>
        <div className=" border-2 w-[350px] h-[350px] absolute bottom-0 left-36 bg-[#00d2ff] blur-[150px] "></div>


        

        <div className=" border-2 w-[600px] h-[350px] right-[280px] absolute bottom-0 bg-[#fffd87] blur-[150px] "></div>


        <div className=" h-[80%] w-[80%]"> 

        <div className="h-[450px] w-[100%] flex items-center justify-center  ">
        
        <div className="shadow-2xl shadow-black  border-none outline-none rounded-lg h-[400px] w-[1100px] flex break-all flex-wrap  ">
        <input type="text"  placeholder='Enter your text' value={inputtext} onChange={handleChange} className='w-[100%] h-[90%] outline-none pl-4 text-4xl'/>
 
        <div className=" w-[100%] relative h-8 bg-transparent">
          <button onClick={()=>{clearAll()}} className='absolute w-20 ml-4 bg-pink-400 text-white font-bold hover:text-cyan-300 hover:font-bold active:bg-pink-700'>Clear All</button>
          <div className="h-8 w-[300px] absolute right-2 text-xl ">{outputtext}</div>
          </div>
        </div>

        </div>

        <div className="btn-main h-16 flex justify-center items-center mt-10">
          <div className="btn-sec  h-20 flex justify-center items-center w-[1200px]">

            <button  onClick={()=>{uppercaseText()}} className='h-12 w-[200px] mx-2 rounded-full bg-transparent shadow-2xl shadow-black cursor-pointer z-10 hover:bg-pink-200 active:bg-pink-500'>Uppercase</button>
            <button onClick={()=>(lowercaseText())} className=' h-12 w-[200px] mx-2 rounded-full bg-transparent  shadow-2xl shadow-black cursor-pointer z-10 hover:bg-pink-200 active:bg-pink-500  '>Lowercase</button>
            <button onClick={()=>{countText()}} className=' h-12 w-[200px] mx-2 rounded-full bg-transparent  shadow-2xl shadow-black cursor-pointer z-10 hover:bg-pink-200 active:bg-pink-500  '>Count Words</button>
            <button onClick={()=>{letterCounter()}} className=' h-12 w-[200px] mx-2 rounded-full bg-transparent  shadow-2xl shadow-black cursor-pointer z-10 hover:bg-pink-200 active:bg-pink-500 '> Count Characters</button>
            <button onClick={()=>{firstCapital()}}  className=' h-12 w-[200px] mx-2 rounded-full bg-transparent  shadow-2xl shadow-black cursor-pointer z-10 hover:bg-pink-200 active:bg-pink-500  '>First Letter Capital</button>

          </div>
        </div>
        
        </div>


   </section>

   </div>


        
    

    


    
  )
}

export default Textcounter