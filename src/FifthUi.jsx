import React from 'react'

function FifthUi() {
  return (
    <div>

    <div className="blue-container border-2 border-black h-[450px] bg-[rgba(25,13,51,1)]">

        <div className="margin mt-8">

        <div className="flex justify-center text-white">Pricing</div>
        <h1 className='flex justify-center text-white text-4xl font-bold mt-2'>The right price for you,whoever you are</h1>

        <div className="flex justify-center mt-6">
        <p className='flex justify-center text-center w-[40%] text-white'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi temporibus maiores velit eum.</p>
        </div>

        </div>


        <div className="box-cont relative w-[95%] h-[400px] ml-8 mr-12 mt-28 flex">
            <div className="card1 w-[30%] h-[350px] bg-white shadow-lg  ">

                <p className=' flex justify-center mt-8 text-2xl '> Hobby</p>
                <h1 className=' text-5xl ml-28 mt-4 relative indent-2'><span className='font-bold'>$79 </span><sup className='text-sm absolute top-1'>/month</sup></h1>

                <div className=" w-[350px] ml-6 mt-16">
                    <li className=''>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                </div>

                <div className="btn flex justify-center">

                    <button className=' h-8 w-[200px] text-sky-400 font-bold mt-6 shadow-lg'>Start your trial</button>
                </div>
            </div>

            <div className=" w-[40%] h-[400px] ">
            <div className="card2 border-2 border-sky-500 absolute h-[430px] w-[40%] top-[-40px] z-10 bg-white shadow-lg" >

               

            <p className=' flex justify-center mt-8 text-2xl '> Growth </p>
                <h1 className=' text-5xl ml-[170px] mt-4 relative indent-2'><span className='font-bold'>$149 </span><sup className='text-sm absolute top-1'>/month</sup></h1>

                <div className="center flex align-center justify-center mt-12">
                <div className="  ">
                    <li className=''>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </div>
                </div>

                <div className="btn flex justify-center ">

                    <button className=' h-10 w-[400px] text-white bg-sky-500 font-bold mt-6 shadow-lg'>Start your trial</button>
                </div>
            </div>
            </div>
            
            <div className="card3 w-[30%] h-[350px] bg-white shadow-lg">

            <p className=' flex justify-center mt-8 text-2xl '> Scale </p>
                <h1 className=' text-5xl ml-28 mt-4 relative indent-2'><span className='font-bold'>$349 </span><sup className='text-sm absolute top-1'>/month</sup></h1>

                <div className=" w-[350px] ml-6 mt-16">
                    <li className=''>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                </div>

                <div className="btn flex justify-center">

                    <button className=' h-8 w-[200px] text-sky-400 font-bold mt-6 shadow-lg'>Start your trial</button>
                </div>
                
            </div>
        </div>


    </div>

      
    </div>
  )
}

export default FifthUi
