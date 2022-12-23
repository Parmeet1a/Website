import React from 'react'

function SeventhUi() {

    const listArray =[
       " Lorem ipsum dolor lorem huudn sit amet consectetur.",
       " Lorem ipsum dolor fj, sit amet consectetur.",
       " Lorem ipsum dolor sit amjjdet consectetur.",
       " Lorem ipsum dolor sit amet consectetur.",
       " Lorem ipsum dolor ls,mkkkk sit amet consectetur.",
       " Lorem ipsum dolor sit amet consectetur.",
       " Lorem ipsum dolor sit amet cons kkl ectetur.",
       " Lorem ipsum dolor sit amet consectetur.",
       " Lorem ipsum dolor sit amet con mdiej ow sectetur.",
       " Lorem ipsum dolor sit amet conjw owp iuefn sectetur.",
       

    ]

  
  return (
    <div className='flex justify-center'>

        <div className="main border w-[90%] min-h-[100vh]">

            <div className="head flex ">
                <div className="center flex items-center justify-between w-[100%]">
                <div className=" mt-12 ml-8">
                <h1 className='text-5xl font-bold  '>Everything you need for <span className='text-purple-600'>$99 a month</span></h1>
                <p className='text-xl text-slate-500 font-medium mt-8'>Included every feature we offer plus unlimited projects and unlimited users.</p>

                </div>

                <button className=' border-2 w-[200px] h-[50px] bg-sky-600 text-white font-bold mr-12 rounded-md p-2 mt-[30px]'>Get started today</button>
            </div>

            </div>


            <hr className='mt-[60px] w-[50%}'/>


            <div className="second-container flex">
                <div className="box1 w-[35%] h-[400px]">
                    <p className='text-purple-600 font-medium mt-12 ml-8 text-xl'>Everything you need </p>
                    <h1 className='text-3xl font-bold ml-8 my-4'>All-in-one-platform</h1>
                    <p className='text-slate-500 font-bold ml-8 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nam deleniti voluptates, fuga quidem impedit veniam quibusdam, repellendus expedita, quaerat inventore? Veritatis labore animi distinctio.</p>
                </div>
                <div className="box2 w-[65%] h-[100vh] ">

                    <div className="list-cont w-[100%] mt-[40px]  grid grid-cols-2 ">

                    {
                        listArray.map((val)=>(

                            <div className="flex my-[15px]" ><img className='h-[30px] w-[30px] mx-2' src="https://img.icons8.com/emoji/48/null/check-mark-emoji.png" alt=''/>{val}</div>


                        ))
                    }

               

                 

                

                        
                
                

                    </div>
                </div>

            </div>

        </div>

     
    </div>
  )
}

export default SeventhUi
