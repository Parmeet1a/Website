import React from 'react'

function FilterPract() {
    let newArr =[
        {id:1, list:"Lrem ipsum dolor sit amet consectetur."},
        {id:2, list:"rem ipsum dolor sit amet consectetur."},
        {id:3, list:"Lo ipsum dolor sit amet consectetur."},
        {id:4, list:"Lopsum dolor sit amet consectetur."},
        {id:5, list:"Lorem idolor sit amet consectetur."},
        {id:6, list:"Lorem ipsum dolor sit amet consectetur."},
        {id:7, list:"Lorem ipsum r sit amet consectetur."},
        {id:8, list:"Lorem ipsum dolo consectetur."}
    ]












  return (
    <div className=' h-[195vh] w-[95%] text-slate-800 ml-[10px] mt-[10px]'>
       
        <div className='  grid grid-cols-4'>
           
            <div className='border-2 border-black h-[120vh] w-[350px]'>

                <div className=' h-[40vh]'>
                <h1 className='font-bold text-[25px] ml-[10px] mt-[10px]'>Hobby</h1>
                <p className='text-[20px] mt-[10px] ml-[10px]'>All the basic for starting a new business</p>
                <h1 className='font-bold text-[50px] mt-[25px] ml-[10px]'>$12 </h1><span className='text-[20px] ml-[100px] mt-[-40px] absolute'>/mo</span>
                <button className='h-[50px] w-[300px] text-white bg-black font-bold rounded-[10px] ml-[15px] mt-[15px]'>Buy Hobby</button>
                </div>
            
                <div className=' h-[40vh]'>
                    <h1 className='font-bold text-[22px] ml-[10px] mt-[10px]'>What's Included</h1>
                </div>
                {newArr.filter((val)=> val.id<3)
                .map((item)=>(
                   
                    <div className="lists list-none text-slate-500">
                    <li className='flex mt-[-130px]'><img className='h-[20px] w-[20px] mx-4 mt-1' src="https://img.icons8.com/emoji/48/null/check-mark-emoji.png " alt='' />{item.list}</li>
                </div>
                ))}
            </div>

            <div className='border-2 border-black h-[120vh] w-[350px]'>

            <div className='h-[40vh]'>
            <h1 className='font-bold text-[25px] ml-[10px] mt-[10px]'>Freelancer</h1>
            <p className='text-[20px] mt-[10px] ml-[10px]'>All the basic for starting a new business</p>
            <h1 className='font-bold text-[50px] mt-[25px] ml-[10px]'>$24</h1><span className='text-[20px] ml-[100px] mt-[-40px] absolute'>/mo</span>
            <button className='h-[50px] w-[300px] text-white bg-black font-bold rounded-[10px] ml-[15px] mt-[15px]'>Buy Freelancer</button>
            </div>

            <div className=' h-[60vh]'>
            <h1 className='font-bold text-[22px] ml-[10px] mt-[10px]'>What's Included</h1>
            </div>
            {newArr.filter((val)=> val.id<4)
                .map((item)=>(
                   
                    <div className="lists list-none text-slate-500">
                    <li className='flex mt-[-149px]'><img className='h-[20px] w-[20px] mx-4 mt-1' src="https://img.icons8.com/emoji/48/null/check-mark-emoji.png " alt='' />{item.list}</li>
                </div>
                ))}
            </div>

            <div className=' border-2 border-black h-[120vh] w-[350px]'> 

            <div className=' h-[40vh]'>
            <h1 className='font-bold text-[25px] ml-[10px] mt-[10px]'>Startup</h1>
            <p className='text-[20px] mt-[10px] ml-[10px]'>All the basic for starting a new business</p>
            <h1 className='font-bold text-[50px] mt-[25px] ml-[10px]'>$36</h1><span className='text-[20px] ml-[100px] mt-[-40px] absolute'>/mo</span>
            <button className='h-[50px] w-[300px] text-white bg-black font-bold rounded-[10px] ml-[15px] mt-[15px]'>Buy Startup</button>
            </div>

            <div className=' h-[60vh]'>
            <h1 className='font-bold text-[22px] ml-[10px] mt-[10px]'>What's Included</h1>
            </div>
            {newArr.filter((val)=> val.id<5)
                .map((item)=>(
                   
                    <div className="lists list-none text-slate-500">
                    <li className='flex mt-[-120px]'><img className='h-[20px] w-[20px] mx-4 mt-1' src="https://img.icons8.com/emoji/48/null/check-mark-emoji.png " alt='' />{item.list}</li>
                </div>
                ))}

            </div>
            <div className='border-2 border-black h-[120vh] w-[350px]'>

            <div className=' h-[40vh]'>
            <h1 className='font-bold text-[25px] ml-[10px] mt-[10px]'>Enterprise</h1>
            <p className='text-[20px] mt-[10px] ml-[10px]'>All the basic for starting a new business</p>
            <h1 className='font-bold text-[50px] mt-[25px] ml-[10px]'>$48</h1><span className='text-[20px] ml-[100px] mt-[-40px] absolute'>/mo</span>
            <button className='h-[50px] w-[300px] text-white bg-black font-bold rounded-[10px] ml-[15px] mt-[15px]'>Buy Enterprise</button>
            </div>

            <div className=' h-[70vh]'>
            <h1 className='font-bold text-[22px] ml-[10px] mt-[10px]'>What's Included</h1>
            </div>
            {newArr.filter((val)=> val.id<7)
                .map((item)=>(
                   
                    <div className="lists list-none text-slate-500">
                    <li className='flex mt-[-100px]'><img className='h-[20px] w-[20px] mx-4 mt-1' src="https://img.icons8.com/emoji/48/null/check-mark-emoji.png " alt='' />{item.list}</li>
                </div>
                ))}

            </div>

        </div>

    </div>
  )
}

export default FilterPract