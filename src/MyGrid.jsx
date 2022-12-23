import React from 'react'
import pic from './christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg'
import pic1 from './download (1).jpg'
import pic2 from './download (2).jpg'
import pic3 from './download.jpg'
import pic4 from './images (1).jpg'
import pic5 from './images (2).jpg'
import pic6 from './images (3).jpg'
import pic7 from './images (4).jpg'

function MyGrid() {
  let myArray = [

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
    status: ''} ]


  return (
    <div>
      <div className='  flex h-[50px] w-[95%] ml-[50px] mt-[50px] '>
        <span className=' py-[10px] px-[10px] h-[50px] w-[160px] font-bold text-xl'>Contact cards</span>
        <span className='border-2 border-slate-200 ml-[15px] mt-[10px]  h-[25px] w-[110px] pb-[5px] px-[10px] font-bold text-sm rounded-[10px] bg-slate-200'>PNG Preview</span>
        <div className='ml-[1100px] py-[10px] font-bold text-sky-700' >Get the code &rarr;</div>
      </div>
      
      <div className=' h-[120vh] w-[95%] mx-[50px]'>
       <div className='flex'> 
       <div className='grid grid-cols-4 gap-6'>
        
          {/* <div className='border-2 border-red-500 h-[250px] w-[330px] mt-[25px] ml-[25px] '></div> */}
       </div> </div>
       <div className=' flex mt-[25px] ml-[25px]  h-[115vh] w-[95%]  '>
        <div className='grid grid-cols-4 gap-5'>
        

       {myArray.map((val)=>(

     <div className='border-2 border-gray-500 w-[320px] h-[400px] rounded-[10px] ml-[10px] mt-[10px]'>
      <div className='h-[175px] w-[175px] ml-[50px] mt-[25px] rounded-full '>{val.img}</div>
      <div>
       <h1 className='text-center mt-[10px] font-bold text-xl'>John Bravo </h1>
       <h1 className='text-center mt-[10px]  text-xl'>Senior Developer </h1>
       <h1 className='text-center mt-[10px] ml-[90px] h-[30px] w-[90px] rounded-[10px] bg-green-300 text-green-900 text-xl'>Admin </h1>
      </div>
             <div className='flex'>
              <div className=' border-t-2 border-gray-500 flex h-[50px] w-[166px] mt-[20px]  '>
             <img className='h-[50px] w-[50px] ml-[25px] ' src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23222%22%20d%3D%22M53.42%2053.32H10.58a8.51%208.51%200%200%201-8.5-8.5V19.18a8.51%208.51%200%200%201%208.5-8.5h42.84a8.51%208.51%200%200%201%208.5%208.5v25.64a8.51%208.51%200%200%201-8.5%208.5ZM10.58%2013.68a5.5%205.5%200%200%200-5.5%205.5v25.64a5.5%205.5%200%200%200%205.5%205.5h42.84a5.5%205.5%200%200%200%205.5-5.5V19.18a5.5%205.5%200%200%200-5.5-5.5Z%22%2F%3E%3Cpath%20fill%3D%22%23222%22%20d%3D%22M32%2038.08a8.51%208.51%200%200%201-5.13-1.71L3.52%2018.71a1.5%201.5%200%201%201%201.81-2.39L28.68%2034a5.55%205.55%200%200%200%206.64%200l23.35-17.68a1.5%201.5%200%201%201%201.81%202.39L37.13%2036.37A8.51%208.51%200%200%201%2032%2038.08Z%22%2F%3E%3Cpath%20fill%3D%22%23222%22%20d%3D%22M4.17%2049.14a1.5%201.5%200%200%201-1-2.62l18.4-16.41a1.5%201.5%200%200%201%202%202.24L5.17%2048.76a1.46%201.46%200%200%201-1%20.38zm55.66%200a1.46%201.46%200%200%201-1-.38l-18.4-16.41a1.5%201.5%200%201%201%202-2.24l18.39%2016.41a1.5%201.5%200%200%201-1%202.62z%22%2F%3E%3C%2Fsvg%3E'></img><h1 className='h-[50px] w-[50px] mt-[10px] ml-[2px] text-xl'>Email</h1></div>
              
              <div className='border-t-2 border-l-2 border-gray-500 flex h-[60px] w-[150px] mt-[20px] '>
             <img className='h-[45px] w-[25px] ml-[25px] ' src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2015%2015%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M14.73%2012.996c-.463%201.407-2.277%202.109-3.573%201.992-1.77-.16-3.696-1.099-5.158-2.133C3.85%2011.335%201.837%208.984.664%206.489-.165%204.726-.351%202.558.882.951c.456-.594.95-.911%201.69-.948C3.6-.047%203.744.541%204.097%201.457c.263.685.614%201.384.81%202.094.367%201.325-.916%201.38-1.078%202.463-.1.683.727%201.599%201.101%202.086a10.105%2010.105%200%200%200%202.608%202.403c.57.359%201.488%201.006%202.14.649%201.004-.55.91-2.243%202.313-1.67.727.296%201.431.723%202.125%201.097%201.073.577%201.023%201.175.614%202.417-.306.928.306-.928%200%200%22%2F%3E%3C%2Fsvg%3E'></img><h1 className='h-[50px] w-[50px] mt-[10px] ml-[2px] text-xl'>Call</h1></div>
             
             </div>
        </div>))}
        </div> </div>
      </div>
 
    </div>
    
  )
}

export default MyGrid