import React from 'react'
import pic from './christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg'
import pic1 from './download (1).jpg'
import pic2 from './download (2).jpg'
import pic3 from './download.jpg'
import pic4 from './images (1).jpg'
import pic5 from './images (2).jpg'
import pic6 from './images (3).jpg'
import pic7 from './images (4).jpg'

function TenthUi() {


    let dataArray =[

        {img: (<img className='h-[150px] w-[150px] rounded-full' src={pic}/>),
        name: 'Jane Cooper',
        job: 'Lead Security Associate',
        status: ''},

        {img: (<img className='h-[150px] border-4 w-[150px] rounded-full'src={pic1}/>),
        name: 'Cody Fisher',
        job: 'Lead Security Associate',
        status: ''},

        {img: (<img className='h-[150px] border-4 w-[150px] rounded-full'src={pic2}/>),
        name: 'Esther Howard',
        job: 'Assurance Administrator',
        status: ''},

        {img: (<img className='h-[150px] border-4 w-[150px] rounded-full'src={pic3}/>),
        name: 'Jenny Wilson',
        job: 'Chief Accountability Analyst',
        status: ''},

        {img: (<img className='h-[150px] border-4 w-[150px] rounded-full'src={pic4}/>),
        name: 'Kristin Watson',
        job: 'Investor Data Orchestrator',
        status: ''},

        {img: (<img className='h-[150px] border-4 w-[150px] rounded-full'src={pic5}/>),
        name: 'Cameron Williamson',
        job: 'Product Infrastructure Executive',
        status: ''},

        {img: (<img className='h-[150px] border-4 w-[150px] rounded-full'src={pic6}/>),
        name: 'Courtney Wilson',
        job: 'Investor Factors Associate',
        status: ''},
        
        {img: (<img className='h-[150px] border-4 w-[150px] rounded-full'src={pic7}/>),
        name: 'Theresa Webb',
        job: 'Global Division Officer',
        status: ''}
        

    ]
  return (

    
    <div>

        <div className="nav-cont flex justify-center">
            <div className="head-cont w-[92%] flex mt-[50px]">
               <span className='text-lg font-medium'>Contact cards </span>  
                <div className=" text-sm  mx-6 mt-1 text-slate-700"><span className='border-2 bg-slate-200 rounded-lg p-1 font-medium'>PNG Preview</span></div>
            
                <div className="side-link absolute right-[170px] font-bold text-sky-400">Get the code &rarr;</div>
            </div>

            
        </div>

        

        <div className=" flex justify-center">
        <div className="grid-main-container w-[92%] min-h-[130vh] border-2 mt-6 bg-slate-100 ">
            <div className="grid-container grid grid-cols-4 gap-6 m-6 h-[400px] ">

            {dataArray.map((val)=>(
                <div className='border-2 rounded-lg bg-white'>

                    <div className="image-cont h-[150px] flex justify-center mt-[30px] bg-">
                        <div className="img h-[150px]w-[150px] rounded-full ">{val.img}</div>
                    </div>

                    <div className="name-cont  flex justify-center mt-8 ">{val.name}</div>
                    <div className="job-cont  flex justify-center my-2">{val.job}</div>
                    <div className="job-title  flex justify-center "><span className='border text-green-500 font-bold bg-green-100 text-center w-[60px] rounded-lg '>Admin</span></div>

                    <div className="btn border-2  h-[60px] mt-8 flex ">
                        <div className="msg w-[50%] border-1 h-[60px] flex justify-center "><svg className='w-[25px] h-[25px] mt-[13px]' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 47.5 47.5" viewBox="0 0 47.5 47.5"><defs><clipPath id="a"><path d="M0 38h38V0H0v38Z"/></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)"><path fill="#ccd6dd" d="M0 0a4 4 0 0 0-4-4h-28a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V0Z" transform="translate(37 10)"/><path fill="#99aab5" d="m0 0-11.313-11.313c-.027-.028-.037-.063-.06-.091a3.987 3.987 0 0 1 1.384-1.384c.029.023.063.033.09.059L1.415-1.414A1 1 0 0 1 0 0" transform="translate(12.95 19.364)"/><path fill="#99aab5" d="M0 0c-.021.028-.033.063-.06.09l-11.312 11.314a1 1 0 1 1-1.415-1.414L-1.474-1.324c.027-.027.062-.037.09-.06A3.97 3.97 0 0 1 0 0" transform="translate(36.423 7.96)"/><path fill="#99aab5" d="M0 0h-28a4 4 0 0 1-4-4v-1.03l14.528-14.495a4.88 4.88 0 0 1 6.884 0L4-5.009V-4a4 4 0 0 1-4 4" transform="translate(33 32)"/><path fill="#e1e8ed" d="M0 0h-28a3.992 3.992 0 0 1-3.595-2.275l14.766-14.767a4 4 0 0 1 5.657 0L3.595-2.275A3.991 3.991 0 0 1 0 0" transform="translate(33 32)"/></g></svg>
                        <span className='ml-2 mt-[12px] font-bold indent-2'>Email</span></div>
                        <div className="call w-[50%] border-left-2 h-[60px] flex justify-center "><svg className=' mt-[17px]' xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path fill-rule="evenodd" d="M14.73 12.996c-.463 1.407-2.277 2.109-3.573 1.992-1.77-.16-3.696-1.099-5.158-2.133C3.85 11.335 1.837 8.984.664 6.489-.165 4.726-.351 2.558.882.951c.456-.594.95-.911 1.69-.948C3.6-.047 3.744.541 4.097 1.457c.263.685.614 1.384.81 2.094.367 1.325-.916 1.38-1.078 2.463-.1.683.727 1.599 1.101 2.086a10.105 10.105 0 0 0 2.608 2.403c.57.359 1.488 1.006 2.14.649 1.004-.55.91-2.243 2.313-1.67.727.296 1.431.723 2.125 1.097 1.073.577 1.023 1.175.614 2.417-.306.928.306-.928 0 0"/>
                        </svg><span className=' mt-[12px] font-bold indent-2'>Call</span></div>
                    </div>
                </div>

))}
 
            </div>
        </div>
        </div>

       



       
    </div>
  )
}

export default TenthUi