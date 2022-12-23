import React,{useState} from 'react'
import './ApiProfile.css'





function ApiProfile() {


    const [toggle, setToggle] = useState(false)
    const [clicktoggle, setclickToggle] = useState('')

const toggler =()=>{

    // toggle?setToggle(true):setToggle(false);
    setclickToggle('active')
    console.log(clicktoggle);
}

const toggler2 =()=>{

    // toggle?setToggle(true):setToggle(false);
    setclickToggle('active2')
    console.log(clicktoggle);
}


    // const [btnstata,setBtnstate] = useState({

    //     activeObject : null ,
    //     activeId : [{id:1},{id:2}]
    // })


    



  return (

    
    <div>



        <div className="conatainer relative w-[800px] h-[500px] m-[20px]">

            <div className='bluebg'>

                <div className="Sign in relative w-[50%] h-[100%] flex border justify-center items-center flex-col">

                    <h1>Already Have an account ?</h1>
                    <button onClick={toggler2}>Sign in</button>

                </div>

                <div className="Sign up relative w-[50%] h-[100%] flex border justify-center items-center flex-col">

                    <h1>Already Have an account ?</h1>
                    <button onClick={toggler}>Sign in</button>
                </div>
            </div>

            <div className={`${clicktoggle} white-box border-2 h-[100%] w-[50%] absolute top-0 left-0 bg-[#fff] z-1000 flex justify-center items-center shadow-2xl transition duration-[50s] ease-in-out`}></div>
        </div>
    </div>
  )
}

export default ApiProfile