import React from 'react'

function EigthUi() {

    let newArray = [

        {id:1 , list:"Lorem ipsum dolor sit amet consectetur." },
        {id:2 , list:"Lorem ipsum amet consectetur." },
        {id:3 , list:"Lorem ipsum dolor sit amet htre hsbs." },
        {id:4 , list:"Lorem ipsum dolorr." },
        {id:5 , list:"Lorem tetur." },
        {id:6 , list:"Lorem ipsum dolor hdgvs amet consectetur." },
        {id:7 , list:"Lorem  dolor sit amet ." }
    ]





    return (
        <div className='flex justify-center items-center border-2 border-green-200 min-h-[100vh]'>
            <div className="main-container border-2 h-[700px] w-[1400px] flex justify-around items-center">
                <div className="box1 border-2  h-[650px] w-[300px] rounded-lg">



                    <div className="head">
                        <h1 className='text-xl font-medium mt-8 ml-4'>Hobby</h1>
                        <p className='ml-4 mt-4 text-slate-600'>All the basics for starting a new business </p>
                    </div>

                    <div className="price">
                        <h1 className='my-8 ml-4'> <span className='text-4xl font-bold'>$12</span> <sub>/mo</sub></h1>
                    </div>

                    <div className="btn flex justify-center">
                        <button className='border w-[270px] h-8 text-white bg-black rounded-md font-medium'>Buy Hobby</button>
                    </div>
                    <hr className='mt-6' />

                    <div className="list-head">
                        <h1 className='font-bold ml-4 my-4'>What's included</h1>
                    </div>

                    {newArray.filter((val) => val.id <3)
                        .map((item) => (


                            <div className="lists list-none text-slate-500">
                                <li className='flex my-4'><img className='h-[20px] w-[20px] mx-4 mt-1' src="https://img.icons8.com/emoji/48/null/check-mark-emoji.png " alt='' />{item.list}</li>
                            </div>
                        ))}

                   
                </div>


                <div className="box2 border-2 h-[650px] w-[300px] rounded-lg">
                    <div className="head">
                        <h1 className='text-xl font-medium mt-8 ml-4'>Freelancer</h1>
                        <p className='ml-4 mt-4 text-slate-600'>All the basics for starting a new business </p>
                    </div>

                    <div className="price">
                        <h1 className='my-8 ml-4'> <span className='text-4xl font-bold'>$24</span> <sub>/mo</sub></h1>
                    </div>

                    <div className="btn flex justify-center">
                        <button className='border w-[270px] h-8 text-white bg-black rounded-md font-medium'>Buy Freelancer</button>
                    </div>
                    <hr className='mt-6' />

                    <div className="list-head">
                        <h1 className='font-bold ml-4 my-4'>What's included</h1>
                    </div>

                       {newArray.filter((val)=>val.id <4)
                            .map((item)=>(

                                <div className="lists list-none text-slate-500">
                                <li className='flex my-4'><img className='h-[20px] w-[20px] mx-4 mt-1' src="https://img.icons8.com/emoji/48/null/check-mark-emoji.png " alt='' />{item.list}</li>
                            </div>

                            ))}     
                   
                </div>



                <div className="box3 border-2 h-[650px] w-[300px] rounded-lg">

                    <div className="head">
                        <h1 className='text-xl font-medium mt-8 ml-4'>Startup</h1>
                        <p className='ml-4 mt-4 text-slate-600'>All the basics for starting a new business </p>
                    </div>

                    <div className="price">
                        <h1 className='my-8 ml-4'> <span className='text-4xl font-bold'>$32</span> <sub>/mo</sub></h1>
                    </div>

                    <div className="btn flex justify-center">
                        <button className='border w-[270px] h-8 text-white bg-black rounded-md font-medium'>Buy Startup</button>
                    </div>
                    <hr className='mt-6' />

                    <div className="list-head">
                        <h1 className='font-bold ml-4 my-4'>What's included</h1>
                    </div>

                    {newArray.filter((val)=>val.id <5)
                            .map((item)=>(

                                <div className="lists list-none text-slate-500">
                                <li className='flex my-4'><img className='h-[20px] w-[20px] mx-4 mt-1' src="https://img.icons8.com/emoji/48/null/check-mark-emoji.png " alt='' />{item.list}</li>
                            </div>

                            ))} 
                </div>




                <div className="box4 border-2 h-[650px] w-[300px] rounded-lg">

                    <div className="head">
                        <h1 className='text-xl font-medium mt-8 ml-4'>Enterprise</h1>
                        <p className='ml-4 mt-4 text-slate-600'>All the basics for starting a new business </p>
                    </div>

                    <div className="price">
                        <h1 className='my-8 ml-4'> <span className='text-4xl font-bold'>$48</span> <sub>/mo</sub></h1>
                    </div>

                    <div className="btn flex justify-center">
                        <button className='border w-[270px] h-8 text-white bg-black rounded-md font-medium'>Buy Enterprise</button>
                    </div>
                    <hr className='mt-6' />

                    <div className="list-head">
                        <h1 className='font-bold ml-4 my-4'>What's included</h1>
                    </div>

                    {newArray.filter((val)=>val.id <7)
                            .map((item)=>(

                                <div className="lists list-none text-slate-500">
                                <li className='flex my-4'><img className='h-[20px] w-[20px] mx-4 mt-1' src="https://img.icons8.com/emoji/48/null/check-mark-emoji.png " alt='' />{item.list}</li>
                            </div>

                            ))} 
                </div>

            </div>
        </div>
    )
}

export default EigthUi
