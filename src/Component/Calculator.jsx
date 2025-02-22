import React, { useState } from 'react'

function Calculator() {

  const [calcInputOutput ,setcalcInputOutput] = useState ('');

  let calcDigits = [7,8,9,'x',4,5,6,'-',1,2,3,'+',0,'00','.','=']; 
  
  function Calculate(btn){

    if(btn == '='){
      let output = eval(calcInputOutput);

      setcalcInputOutput(output);
    }else{
      setcalcInputOutput(calcInputOutput+btn)
    }
    
    }
    function updateInputOutput(e){
      setcalcInputOutput(e.target.value)
    }
  return (
    <div className='grid grid-cols-1  mt-44 '>

      <input type='text' className='rounded-md border-2 border-solid border-black w-[400px] text-3xl m-auto h-[74px]' value={calcInputOutput} onChange={updateInputOutput} placeholder='0' readOnly></input>

          <div className="grid grid-cols-4 w-[400px] m-auto  gap-2 mt-2">
              
             {
              calcDigits.map(element => (
                <button className='bg-black p-5 text-white text-3xl rounded-md' onClick={() => {Calculate(element)}}> {element} </button>
              ))
            }

          </div>
    </div>
  )
}

export default Calculator
