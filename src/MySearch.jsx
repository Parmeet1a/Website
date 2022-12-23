import React,{useState,useEffect} from 'react'
import axios from 'axios'


function MySearch() {
    const[firstarray,setFirstarray]=useState([])
    const[input,setinput]=useState('')
   
   

    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((Response)=>{
            console.log(Response.data.products);
            setFirstarray(Response.data.products);

        })
        
        
      
    
      
    }, [])



    const handleClick = () =>{

        
        axios.get(`https://dummyjson.com/products/search?q=${input}`).then((Response)=>{
            console.log(Response.data.products);
            setFirstarray(Response.data.products);

        })
        

        

        
    }

    
    
    
  return (
    <div>
        <div>
            
            <div className='flex'>
            <div className='navbar border border-black h-[12vh] w-[160vh] flex justify-between list-none pt-[25px] text-[25px] pl-[25px] pr-[20px] font-bold'>
                <li>Home</li>
                <li>Catagories</li>
                <li>Brands</li>
                <li>About Us</li>
                
            </div>
            <div className='border-black border-2 h-[12vh] w-[45vh] flex '>
                <input className='border-2 border-black p-[5px] mt-[25px] ml-[5px] rounded-[10px] h-[40px]' type="text" placeholder="Search..."
                onChange={(e)=>{
                    setinput(e.target.value);

                //    let req = firstarray.filter((val)=>val.category.includes(input) || val.title.includes(input) || val.description.includes(input))
                //    setFirstarray(req)
                //     console.log(req);



                    
                }}



             
                    
                
                 />
               <button 

               onClick={()=>{

                handleClick()

            
               }}
               
               className=' h-[40px] w-[45px] mt-[25px] ml-[5px] '><img className='border border-black h-[40px] w-[45px]  rounded-[10px]' src="https://img.icons8.com/ios/2x/search.png" alt="" srcset="" />
               
               </button>
                </div>
            </div>

            <div className='border border-red-500 h-[35vh] w-[100vh] text-center text-[45px] italic font-bold pt-[50px] ml-[50vh] mt-[10px]'>
                <p>Get the Amazing products of major brands like Iphone, Samsung ,Oppo.... at Affordable prices </p>
            </div>

            <div className=' Container border border-black h-[850vh] w-[205vh] mt-[10px]'>

                <div className='flex grid grid-cols-3 gap-5 '>
                    {firstarray.map((item)=>(
                        
                        <div className=' h-[65vh] w-[50vh] ml-[20px] mt-[10px] rounded-[20px] shadow-md shadow-black'>

                        <div>
                            <img className='h-[250px] w-[388px] rounded-[10px]'
                            
                            src= {item.thumbnail} alt="" srcset="" />

                            <div className='border border-black h-[70px] text-center font-bold text-[20px] py-[10px] rounded-[10px] mt-[5px]'>{item.title}</div>
                            <div className='border border-black h-[110px] text-center font-bold text-[15px] p-[10px] rounded-[10px] mt-[5px]'>{item.description}</div>
                            <div className='border border-black h-[50px] text-center font-bold text-[20px] p-[10px] rounded-[10px] mt-[5px]'>{item.price}</div>
                            
                            
                            
                        </div>

                        </div>
                        
                    ))}
                </div>



            </div>
        </div>


    </div>
  )
}

export default MySearch
