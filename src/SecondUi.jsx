import React from 'react'

const SecondUi = () => {
    return (
        <div className= " flex h-[300px] mt-[180px]">

            <section className="main  min-h-full w-[100%]  ">
                <div className="main-container flex h-10">

                    <p className="text-xl ml-[20px]">Simple Centered</p>
                    <div className="absolute right-2 text-xl text-sky-400 font-bold">Get the code &rarr;</div>


                </div>

                <div className="cont border h-[300px] w-[97%] ml-6 bg-slate-200 rounded">
                    <div className="centre mt-[60px] ">
                    <div className="head "><h1 className=' flex justify-center text-4xl font-bold'>Ready to dive in ?</h1></div>
                    <div className="para "><p className=' text-4xl flex justify-center font-bold text-sky-400'>Start your free trial today.</p></div>
                    <div className="butt border-2 flex justify-center  border-green-200 mt-8 ">
                    <button className='border-2  w-[140px] mx-2 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white outline outline-offset-1 outline-cyan-500 rounded-md'>Get Started</button>
                    <button className='border-2  w-[140px] mx-2 h-12 bg-gradient-to-r from-pink-500 to-orange-500 text-white outline outline-offset-1 outline-cyan-500 rounded-md'>Learn More</button>
                    </div>

                    </div>

                </div>




        </section>
        </div>
    )
}

export default SecondUi