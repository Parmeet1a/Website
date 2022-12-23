import React from 'react'
import business from './business.jpg'

function FourthUi() {
  return (
    <div className='mt-[70px]'>

        <div className="first-box h-[500px] w-[75%] ml-[300px] rounded-3xl bg-violet-600 relative">


            <div className="min-container flex  justify-center items-center h-[100%]">

                <div className="centre h-[200px] w-[50%] ">

                    <h1 className='text-4xl font-bold text-white'>Join our team</h1>

                    <p className='my-6 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab asperiores voluptas provident? Illum, in sit!</p>
                    
                    <button className='border h-10 w-[200px] text-sky-800 font-bold bg-white rounded-md'>Explore open positions</button>
                </div>
            </div>


            <div className="second-box h-[350px] w-[350px] rounded-xl absolute top-20 left-[-150px]">
                <img className='h-[350px] w-[350px] rounded-3xl' src={business} alt="" srcset="" />
            </div>

           
        </div>

        
      
    </div>
  )
}

export default FourthUi
