import axios from 'axios'
import React,{useState,useEffect} from 'react'

function MyApi() {


    const [myArray,SetMyArray] = useState([])

        useEffect(() => {


            axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{


                console.log(response.data);
                SetMyArray(response.data)


            })
         
        }, [])

   
    
        




  return (
    <div>

    {/* navbar */ }

    <div className='navbar border-2 border-black h-[70px] w-[180vh] flex justify-evenly list-none text-[30px] font-bold pt-[10px] text-red-400 bg-black ml-[10px]'>

        <li>Home </li>
        <li>About us</li>
        <li>Catagories</li>
        <li>More about us </li>

    </div>
   <div className=' flex grid grid-cols-4 border-black border h-[150vh] w-[200h] mt-[20px]'>{
        
        myArray.filter((val)=>val.userId < 2).map((val)=>(
            <div className='border border-red-500 h-[350px] w-[350px] mt-[10px] ml-[10px] text-center '>
                <img className='h-[80px] w-[300px] ml-[20px] mt-[20px]' src="https://img.freepik.com/free-vector/vintage-vector-wing_53876-32579.jpg?size=626&ext=jpg&ga=GA1.2.1013322983.1660705894" alt="" srcset="" />
               <div className=' mt-[10px] ml-[10px] text-center font-bold text-blue-500'> {val.body}</div>
            <div className=" mt-[10px] ml-[10px] text-center font-bold text-red-500 ">{val.title}</div>
            <div className='mt-[10px] ml-[10px] text-center font-bold text-green-500 '> Get more</div>

            </div>
        ))
    }</div> 


    </div>
  )
}

export default MyApi