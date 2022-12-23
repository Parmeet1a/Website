import axios from 'axios';
import React,{useState,useEffect} from 'react'

function Dropdown() {


  const [profileList,setProfileList] = useState([]);
  const [accordion,setAccordion] = useState(false)


  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{

    console.log(response.data);
    setProfileList(response.data)
    })
   
  }, [])


  const handleAccordion = () =>{

    

   if( accordion === false ){

    setAccordion(true);

   }

   else{

   setAccordion(false)

   }


  }
  






  return (

    <div>

<div className="flex relative justify-center">
        <div className="navbar relative h-16 flex w-[97%] bg-black mt-4">
          <div className="flex items-center ">
            <svg
              className="h-8 w-8 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 47.5 47.5"
              viewBox="0 0 47.5 47.5"
            >
              <defs>
                <clipPath id="a">
                  <path d="M0 38h38V0H0v38Z" />
                </clipPath>
              </defs>
              <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                <path
                  fill="#ccd6dd"
                  d="M0 0a4 4 0 0 0-4-4h-28a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V0Z"
                  transform="translate(37 10)"
                />
                <path
                  fill="#99aab5"
                  d="m0 0-11.313-11.313c-.027-.028-.037-.063-.06-.091a3.987 3.987 0 0 1 1.384-1.384c.029.023.063.033.09.059L1.415-1.414A1 1 0 0 1 0 0"
                  transform="translate(12.95 19.364)"
                />
                <path
                  fill="#99aab5"
                  d="M0 0c-.021.028-.033.063-.06.09l-11.312 11.314a1 1 0 1 1-1.415-1.414L-1.474-1.324c.027-.027.062-.037.09-.06A3.97 3.97 0 0 1 0 0"
                  transform="translate(36.423 7.96)"
                />
                <path
                  fill="#99aab5"
                  d="M0 0h-28a4 4 0 0 1-4-4v-1.03l14.528-14.495a4.88 4.88 0 0 1 6.884 0L4-5.009V-4a4 4 0 0 1-4 4"
                  transform="translate(33 32)"
                />
                <path
                  fill="#e1e8ed"
                  d="M0 0h-28a3.992 3.992 0 0 1-3.595-2.275l14.766-14.767a4 4 0 0 1 5.657 0L3.595-2.275A3.991 3.991 0 0 1 0 0"
                  transform="translate(33 32)"
                />
              </g>
            </svg>

            <div className=" text-3xl text-white ml-4 font-bold                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ">
              {" "}
              Api Todo List
            </div>
          </div>

          <div className="absolute right-12 mt-4">
            <input
              placeholder="Search"
             
              
              className=" h-8 w-[200px] mx-2 font-bold p-2 outline-none"
            />
            <button
            
              className=" h-8 w-20 mx-2 rounded-lg bg-cyan-300 font-bold active:bg-cyan-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>



      <div className=" h-24 w-[100%]  mt-16 flex justify-center items-center">
        <div className=" w-[70%] h-20 shadow-lg flex justify-around items-center bg-slate-100 text-xl font-bold">
          <div className="id border w-[10%] h-8">ID</div>
          <div className="title border h-8 w-[25%]">Name</div>
          <div className="title border h-8 w-[25%]">Email Id</div>
          <div className="Username border h-8 w-[20%]">Username</div>
          <div className="Username border w-[3%] "></div>
          
        </div>
      </div>


{profileList.map((val)=>(

  
  <div className="  w-[100%]  mt-4 flex flex-col justify-center items-center">
        <div className=" w-[70%] h-20 shadow-lg flex justify-around items-center bg-slate-100 text-xl font-bold">
          <div className="border w-[10%] h-8">{val.id}</div>
          <div className="title border h-8 w-[25%]">{val.name}</div>
          <div className="title border h-8 w-[25%]">{val.email}</div>
          <div className="fav Username border h-8 w-[20%]">{val.username}</div>
          <div onClick={()=>{handleAccordion()}} className="">

          <svg className = 'h-8 w-8' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64"><path fill="#134563" d="m-218.7-308.6 2-2 11.7 11.8 11.7-11.8 2 2-13.7 13.7-13.7-13.7" transform="translate(237 335)"/></svg>
            
          </div>
          

        </div>

        {accordion === true

        ?<div className="h-32 w-[70%]  shadow-lg flex justify-around items-center bg-slate-100 text-xl font-bold"></div>
          
      : ''      
      }
  
        </div>
  

        


))}
    </div>
  )
}

export default Dropdown