import React from 'react'

function EleventhUi() {


  let dataArray =[

    {name: 'Jane Cooper',
    job: 'Lead Security Associate',
    email: 'Janecooper@gmail.com',
    status: 'Member'},

    {
    name: 'Cody Fisher',
    job: 'Lead Security Associate',
    email: ' codyfisher@gmail.com',
    status: 'Admin'},

    {
    name: 'Esther Howard',
    job: 'Assurance Administrator',
    email: 'estherhoward@gmail.com',
    status: 'Owner'},

    {
    name: 'Jenny Wilson',
    job: 'Chief Accountability Analyst',
    email: 'jennywilson@gmail.com',
    status: 'Admin'},

    {
    name: 'Kristin Watson',
    job: 'Investor Data Orchestrator',
    email: 'kristinwatson@gmail.com',
    status: 'Member'},

    {
    name: 'Cameron Williamson',
    job: 'Product Infrastructure Executive',
    email: 'Janecooper@gmail.com',
    status: 'Member'},

    {
    name: 'Courtney Wilson',
    job: 'Investor Factors Associate',
    email: 'courtneywilson@gmail.com',
    status: 'Owner'},
    
    {
    name: 'Theresa Webb',
    job: 'Global Division Officer',
    email: 'theresawebbb@gmail.com',
    status: 'Admin'}
    

]
  return (
    <div className=' flex justify-center mt-[100px] '>
      <div className="main-container border-2 h-[100vh] w-[80%] rounded-xl bg-slate-100">
        <div className="cont flex ">
        <div className="head w-[80%]">
            <h1 className='text-3xl font-bold mt-6 ml-6'>Users</h1>
            <p className='ml-4 my-6 font-bold text-slate-400 indent-2'>A list of all the users in your account including their name,title,email and role.</p>
            
        </div>

        <div className="head ml-40 flex items-center ">
        <div className=""><button className='w-[130px] h-12 rounded-md bg-sky-400 text-white font-bold mr-8  border-2 '>Add User</button></div>

        </div>

        </div>

        <div className="content-cont  h-[460px] flex justify-center">

          <div className="main-cont border-2 h-[520px] w-[96%] mt-4 rounded-xl bg-white">
            <div className="heading flex justify-between text-lg w-[80%] mb-2 p-2 ">
              <h1 className='font-bold ml-4'>Name</h1>
              <h1 className='font-bold'>Title</h1>
              <h1 className='font-bold'>Email</h1>
              <h1 className='font-bold mr-6'>Role</h1>
            </div>

            <hr />

            {dataArray.map((val)=>(

            <div className="center relative border p-2">
            <div className="1st-line grid grid-cols-4 p-2 justify-between] ">

              <p className='font-bold '>{val.name}</p>
              
              <p className=' font-bold text-slate-400'>{val.job}</p>
             
              <p className=' font-bold text-slate-400'>{val.email}</p>
              <p className='font-bold text-slate-400'>{val.status}</p>
             

              <div className="user mt-1 text-lg text-violet-600 font-bold absolute right-12 bottom-[20px]"> <span className='mb-4'>Edit</span></div>
              
            </div>
           

            </div>

          ))}

           

          </div>

          



        </div>
      </div>
    </div>
  )
}

export default EleventhUi
