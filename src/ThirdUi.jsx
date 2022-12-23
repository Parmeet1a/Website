import React from 'react'
import office from './office.jpg'

function ThirdUi() {
    return (

        <>

        <div className=" flex justify-center min-h-full mt-12">
        <div className=' w-[70%]'>

            <div className="main-navbar flex justify-between  ">

                <div className="logo  inline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"/></svg></div>
                <div className="navbar flex list-none  text-slate-600">
                    <li className='flex mx-4'>Solutions <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </li>
                    <li className=' mx-4'>Pricing</li>
                    <li className=' mx-4'>Docs</li>
                    <li className='flex mx-4'>More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>


                    </li>
                </div>

                <div className="btn">
                    <button className='border-2 mx-2 w-[100px] h-10 font-bold text-slate-600 rounded-md'>Sign in</button>
                    <button className='border w-[100px] h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white mx-2 rounded-md'>Sign up</button>
                </div>

            </div>

        </div>

        </div>


        <div className="center flex justify-center mt-2 ">

        <div className="section-container flex w-[70%] h-[580px] border ">

            <div className="first-col w-[60%] h-[580px] flex items-center">

                <div className="central-cont h-[400px] ml-4 ">
            <p className='text-5xl font-bold '>Data to enrich your <span className='text-violet-500'>online business</span></p>

            <div className="text my-8 flex">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quam expedita autem magni error corporis totam saepe ut ex quidem quas aut soluta, in, culpa vel voluptas sunt excepturi quo.
            </div>

            <div className="btn m">
                <button className='border-2 mx-2 w-[120px] h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Get Started</button>
                <button className='border-2 mx-2 w-[120px] h-10 font-bold text-slate-600'>Live Demo</button>
            </div>
            </div>

            </div>

            <div className="second-col w-[50%] h-[580px]">
                <img className='w-[100%] h-[580px]' src={office} alt="" />
            </div>
        </div>

        </div>

        </>

    
    )
}

export default ThirdUi
