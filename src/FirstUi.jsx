import React from "react";

const FirstUi = ()=>{


    return <div className= " flex h-[300px] mt-[180px]" >
        <section className="main  min-h-full w-[100%]  ">
        <div className="main-container flex h-10">
            
            <p className="text-xl ml-[20px]">Simple justified on light brand</p>
            <div className="absolute right-2 text-xl text-sky-400 font-bold">Get the code &rarr;</div>


        </div>

        <div className="main-text flex  justify-center items-center h-[300px] px-2">

            <div className="text-container h-[280px] w-[99%] bg-slate-200 rounded-md">

             <div className="center mt-[80px] flex items-center"> 

             <div className="w-[500px] ml-[20px]" >

            <h1 className="text-4xl font-bold">Ready to dive in ?</h1>
            <p className="text-4xl font-bold text-sky-500">Start your free trial today.</p>

            </div> 

            <button className="border-2 absolute right-16 w-[140px] h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white outline outline-offset-1 outline-cyan-500 rounded-md ">Get Started</button>

            </div> 

            </div>
        </div>

       
        </section>

    </div>
}

export default FirstUi;






