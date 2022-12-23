import React,{useState,useEffect} from 'react'
import axios from 'axios'
import img from './images (2).jpg'

function MyProfile() {
  const [profile,setProfile]=useState([])
  const [secondprofile,setSecondprofile]=useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((Response)=>{
      console.log(Response.data);
      setProfile(Response.data);
    })

  }, [])
  


  return (
    <div>
      <div className='bg-black text-white  h-[350vh] w-[200vh] mx-[10px] my-[10px] '>


      <div className=' h-[350vh] w-[180vh] mx-[10px] my-[10px] flex shadow-white shadow-xl
      '>
         <div className='border border-blue-500 h-[250vh] w-[80vh] mt-[20px] ml-[25px] rounded-[20px] shadow-white shadow-xl'>
          <p className=' h-[80px] w-[300px] font-bold text-[45px] text-center ml-[130px]'>CONTACTS </p>
         
          {profile.map((data)=>(
            <div className='border border-yellow-500 h-[20vh] w-[50vh]  flex flex-col align items-center mt-[20px] ml-[80px] rounded-[75px] shadow-rose-3 00 shadow-lg'>

             <img className='h-[80px] w-[80px] rounded-[100%]  ' src={img} alt="" srcset="" />
              <div className='text-[25px] font-bold '>{data.name}</div>
              <div  className='text-[15px] font-bold '>{data.email}</div>
              <button

            onClick={()=>{
              
             const req = profile.filter((val)=>val.id === data.id)
             
              console.log(req)
            
            setSecondprofile(req);
            }}
              
             
              
              
              className='ml-[260px] mt-[50px] absolute '><img className='h-[30px] w-[50px]' src="https://img.icons8.com/ultraviolet/2x/chevron-right.png" alt="" srcset="" />
              </button>
              

            </div>
          ))}
         </div>


            {secondprofile.map((data)=><div>
        <div className='h-[70vh] w-[60vh] mt-[25vh] ml-[30px]  '>
         <div className='h-[40vh] w-[50vh] h-[20vh] w-[25vh] ml-[10px] mt-[-80px] absolute  '> 
         <img className='h-[150px] w-[160px] px-[5px] py-[5px] ml-[125px] rounded-[20px] shadow-cyan-500 shadow-xl ' src={img} alt="" srcset="" /> 
        
         <div className=' flex flex-row  justify-e h-[180px] w-[450px] '><div>
          <img className='h-[60px] w-[80px] ml-[70px]' src="https://img.icons8.com/fluency/2x/apple-mail.png" alt="" srcset="" />
          <p className='border border-blue-500 mt-[10px] h-[80px] w-[220px] ml-[5px] font-bold text-center rounded-[10px] shadow-pink-200 shadow-xl '>Email:<br></br>{data.email}</p>
         </div>
         <div>
          <img className='h-[55px] w-[55px] ml-[65px] font-bold  rounded-[10px] ' src="https://www.shutterstock.com/image-vector/vector-icon-handset-600w-1067402756.jpg" alt="" srcset="" />
          <p className=' border border-orange-500 mt-[15px] h-[80px] w-[220px] ml-[2px] font-bold text-center rounded-[10px] shadow-blue-200 shadow-xl '>Phone Number:<br></br>
          {data.phone}
          </p>
          </div>
          </div>


         <div><p className=' font-bold mt-[20px] border border-red-500 mt-[15px] h-[80px] w-[450px] ml-[px] font-bold text-center text-[20px] rounded-[10px] shadow-white shadow-xl ' >Name:<br></br>{data.name}</p></div>
         <div><p className=' font-bold mt-[20px] border border-rose-700 mt-[15px] h-[160px] w-[450px] ml-[px] font-bold text-center text-[20px] shadow-yellow-200 shadow-xl rounded-[10px] ' >Address: <br></br>{data.address.street}{data.address.suite},{data.address.city}<br></br>{data.address.zipcode}
        </p></div>
         
         
         
         
         </div>


        </div></div>)}
        </div>


      </div>
      
    </div>
  )
}

export default MyProfile
