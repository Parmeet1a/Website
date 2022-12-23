import React,{useState} from 'react'
import './ApiGui2.css'




function Activeconcept() {

  const [appstate , changeState] = useState({

    activeObject:null,
    objects : [{id:1},{id:2},{id:3},{id:4},{id:5}]
})



function toggleActive(index){

  changeState({...appstate,activeObject:appstate.objects[index]})


}


function toggleStyles(index){

    let fvar = appstate.objects[index];
    let svar = appstate.activeObject;

      console.log(fvar);
      console.log(svar);


      if( appstate.objects[index] === appstate.activeObject)
      {
        
        return "active";
      }


      else{

        return " inactive";
      }


      
    
}










  return (
    <div className='flex justify-center items-center h-[100vh]'>

      {appstate.objects.map((val,index)=>(


        
    

       <div key={index} className={toggleStyles(index)} onClick={()=>{toggleActive(index)}}></div>

      ))}

    </div>
  )
}

export default Activeconcept